#!/usr/bin/env python3
"""
Extrai bios e captions dos Instagrams da Alfa.

Sessão fica FORA do Git:
  ~/dev/github/.secrets/ig-playwright-profile/
  ~/dev/github/.secrets/alfa-instagram.json  (saída)

Uso:
  python3 scripts/fetch_instagram.py          # headless se já logado
  python3 scripts/fetch_instagram.py --headed # abre Chrome pra logar uma vez

Não imprime cookies nem tokens.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

from playwright.sync_api import TimeoutError as PwTimeout
from playwright.sync_api import sync_playwright

HANDLES = ("alfaa_producoes", "alfaa.studio", "alfaa_fotos")
SECRETS = Path.home() / "dev/github/.secrets"
PROFILE = SECRETS / "ig-playwright-profile"
OUT = SECRETS / "alfa-instagram.json"
# Cópia sanitizada (sem cookies) também no repo, só conteúdo público
REPO_OUT = Path(__file__).resolve().parents[1] / "src" / "data" / "instagram.json"


def clean_text(s: str | None) -> str:
    if not s:
        return ""
    s = re.sub(r"\s+", " ", s).strip()
    return s


def extract_profile(page, handle: str) -> dict:
    url = f"https://www.instagram.com/{handle}/"
    page.goto(url, wait_until="domcontentloaded", timeout=60000)
    time.sleep(2.5)

    # Login wall?
    if "accounts/login" in page.url or page.locator('input[name="username"]').count():
        raise RuntimeError(
            "Instagram pediu login. Rode de novo com --headed, faça login na janela "
            "e espere o perfil carregar; a sessão fica salva em .secrets."
        )

    title = clean_text(page.title())
    # og:description costuma trazer bio + contagens
    og_desc = page.locator('meta[property="og:description"]').get_attribute("content") or ""
    og_title = page.locator('meta[property="og:title"]').get_attribute("content") or title

    # Tenta bio no header (varia com a UI)
    bio = ""
    for sel in (
        "header section > div > span",
        "header h1",
        '[data-testid="user-bio"]',
        "header span._ap3a",
    ):
        loc = page.locator(sel)
        if loc.count():
            try:
                t = clean_text(loc.first.inner_text(timeout=1500))
                if 20 < len(t) < 500 and "followers" not in t.lower():
                    bio = t
                    break
            except PwTimeout:
                pass

    if not bio and og_desc:
        # "X Followers, Y Following, Z Posts - See Instagram photos..."
        # Às vezes a bio vem depois do hífen
        parts = og_desc.split(" - ", 1)
        if len(parts) == 2 and "See Instagram" not in parts[1]:
            bio = clean_text(parts[1])

    # Captions dos posts visíveis na grade (alt das imagens / aria)
    captions: list[str] = []
    alts = page.locator("article img[alt]")
    n = min(alts.count(), 12)
    for i in range(n):
        alt = clean_text(alts.nth(i).get_attribute("alt") or "")
        # Instagram coloca a caption no alt: "Photo by X on ... Caption text"
        if " on " in alt and ". " in alt:
            # tenta cortar o prefixo
            m = re.search(r"(?:Photo|Video) by .+? on [^.]+\.\s*(.*)$", alt)
            alt = clean_text(m.group(1) if m else alt)
        if alt and len(alt) > 8 and alt not in captions:
            captions.append(alt[:280])

    # Nome amigável do título: "NAME (@handle) • Instagram..."
    display = og_title.split("(@")[0].strip() or handle

    return {
        "handle": handle,
        "url": url,
        "display_name": display,
        "title": og_title,
        "og_description": clean_text(og_desc),
        "bio": bio,
        "captions": captions[:8],
        "fetched_at": datetime.now(timezone.utc).isoformat(),
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--headed", action="store_true", help="Abre Chrome visível para login")
    args = parser.parse_args()

    SECRETS.mkdir(parents=True, exist_ok=True)
    PROFILE.mkdir(parents=True, exist_ok=True)

    profiles: dict[str, dict] = {}
    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(PROFILE),
            channel="chrome",
            headless=not args.headed,
            viewport={"width": 1280, "height": 900},
            locale="pt-BR",
            args=["--disable-blink-features=AutomationControlled"],
        )
        page = ctx.pages[0] if ctx.pages else ctx.new_page()

        if args.headed:
            print("Abrindo Instagram… Se pedir login, entre na sua conta e pressione Enter aqui.")
            page.goto("https://www.instagram.com/", wait_until="domcontentloaded")
            try:
                input(">>> Depois de logado, Enter para continuar o scrape… ")
            except EOFError:
                print("Sem TTY — aguardando 45s para você logar…")
                time.sleep(45)

        for handle in HANDLES:
            print(f"→ @{handle}")
            try:
                profiles[handle] = extract_profile(page, handle)
                print(f"  ok: {profiles[handle]['display_name']!r} | bio={bool(profiles[handle]['bio'])} | captions={len(profiles[handle]['captions'])}")
            except Exception as e:
                print(f"  ERRO: {e}", file=sys.stderr)
                profiles[handle] = {
                    "handle": handle,
                    "url": f"https://www.instagram.com/{handle}/",
                    "display_name": handle,
                    "bio": "",
                    "captions": [],
                    "error": str(e),
                    "fetched_at": datetime.now(timezone.utc).isoformat(),
                }

        ctx.close()

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": "instagram_public_profiles",
        "profiles": profiles,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    # Cópia no repo (só conteúdo público — sem cookies)
    REPO_OUT.parent.mkdir(parents=True, exist_ok=True)
    REPO_OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Salvo: {OUT}")
    print(f"Salvo: {REPO_OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
