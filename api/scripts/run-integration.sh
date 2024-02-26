#!/usr/bin/env bash
# scripts/run-integration.sh

container_name=test-db

DIR="$(cd "$(dirname "$0")" && pwd)"
echo $DIR
source $DIR/setenv.sh

# Check if the test-db container is already running
if [ "$(docker container inspect -f '{{.State.Status}}' $container_name)" = "running" ]; then
    echo '🟢 - Database container (test-db) is already running.'
    docker-compose -f docker-compose.test.yml down
    docker-compose -f docker-compose.test.yml up -d
else
    # If not running, bring up the containers
    docker-compose -f docker-compose.test.yml up -d

    echo '🟡 - Waiting for database to be ready...'
    echo "Waiting for ${TEST_DATABASE_URL}"
    $DIR/wait-for-it.sh "${TEST_DATABASE_URL}" -- echo '🟢 - Database is ready!'
fi

# Apply migrations using Prisma
npx prisma migrate dev --name init

# Run vitest
if [ "$#" -eq "0" ]; then
    vitest -c ./vitest.config.integration.ts
else
    vitest -c ./vitest.config.integration.ts --ui
fi
