#!/usr/bin/env bash
# Run ON the VPS after docker compose is up (WHM mode).
set -euo pipefail

API_PORT="${API_HOST_PORT:-14000}"
WEB_PORT="${WEB_HOST_PORT:-13000}"
ADMIN_PORT="${ADMIN_HOST_PORT:-13001}"

echo "== MEGA JS deploy smoke check =="

curl -fsS "http://127.0.0.1:${API_PORT}/api/health" | tee /tmp/megajs-health.json
echo
code_web=$(curl -fsS -o /dev/null -w "%{http_code}" "http://127.0.0.1:${WEB_PORT}/fa" || true)
code_admin=$(curl -fsS -o /dev/null -w "%{http_code}" "http://127.0.0.1:${ADMIN_PORT}/" || true)
echo "web /fa → HTTP ${code_web}"
echo "admin /  → HTTP ${code_admin}"

if [[ "${code_web}" =~ ^(200|301|302|307|308)$ ]] && [[ "${code_admin}" =~ ^(200|301|302|307|308)$ ]]; then
  echo "OK: localhost stack healthy. Next: attach WHM Apache proxy (docker/whm/)."
  exit 0
fi

echo "FAIL: web/admin not healthy on localhost" >&2
docker compose -f docker-compose.prod.yml --env-file .env.production ps || true
exit 1
