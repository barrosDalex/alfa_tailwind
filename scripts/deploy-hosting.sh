#!/usr/bin/env bash
# Deploy helper — secrets stay outside the repo.
set -euo pipefail
SECRETS="${HOME}/dev/github/.secrets/alfa-firebase.env"
if [[ -f "$SECRETS" ]]; then
  # shellcheck disable=SC1090
  set -a; source "$SECRETS"; set +a
fi
: "${FIREBASE_PROJECT_ID:=alfa-landing-lab}"
npm run build
firebase deploy --project "$FIREBASE_PROJECT_ID" --only hosting:tailwind
