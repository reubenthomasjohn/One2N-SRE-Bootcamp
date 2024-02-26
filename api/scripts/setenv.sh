#!/bin/bash

pwd

unset API_SECRET
unset TEST_POSTGRES_DB
unset TEST_DATABASE_URL

unset POSTGRES_USER
unset POSTGRES_PASSWORD

unset POSTGRES_DB
unset POSTGRES_PORT

unset POSTGRES_HOST
unset DATABASE_URL

# Read and export specific variables from .env
export API_SECRET=$(grep "^API_SECRET=" ./.env | cut -d '=' -f2)
export TEST_POSTGRES_DB=$(grep "^TEST_POSTGRES_DB=" ./.env | cut -d '=' -f2)

export POSTGRES_USER=$(grep "^POSTGRES_USER=" ./.env | cut -d '=' -f2)
export POSTGRES_PASSWORD=$(grep "^POSTGRES_PASSWORD=" ./.env | cut -d '=' -f2)

export POSTGRES_DB=$(grep "^POSTGRES_DB=" ./.env | cut -d '=' -f2)
export POSTGRES_PORT=$(grep "^POSTGRES_PORT=" ./.env | cut -d '=' -f2)

export POSTGRES_HOST=$(grep "^POSTGRES_HOST=" ./.env | cut -d '=' -f2)
export DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
export TEST_DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${TEST_POSTGRES_DB}

# Print the exported variables for verification
echo "TEST_DATABASE_URL: $TEST_DATABASE_URL"
echo "POSTGRES_HOST: $POSTGRES_HOST"
echo "DATABASE_URL: $DATABASE_URL"
