#!/usr/bin/env bash
# scripts/run-integration.sh

DIR="$(cd "$(dirname "$0")" && pwd)"

source $DIR/setenv.sh

source ./.env

# Create DATABASE_URL and TEST_DATABASE_URL
export DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
export TEST_DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${TEST_POSTGRES_DB}

docker-compose -f docker-compose.test.yml up -d

echo '🟡 - Waiting for database to be ready...'
$DIR/wait-for-it.sh "${TEST_DATABASE_URL}" -- echo '🟢 - Database is ready!'

tsc -b
npx prisma migrate dev --name init

if [ "$#" -eq "0" ]; then
    vitest -c ./vitest.config.integration.ts
else
    vitest -c ./vitest.config.integration.ts --ui
fi
