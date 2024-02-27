#!/bin/bash

# Ensure the .env file exists
if [ -f ./.env ]; then
    source ./.env
else
    echo "Error: .env file not found."
    exit 1
fi

# Unset variables to ensure they are not carried over from the environment
unset API_SECRET
unset TEST_POSTGRES_DB
unset TEST_DATABASE_URL

unset POSTGRES_USER
unset POSTGRES_PASSWORD

unset POSTGRES_DB
unset POSTGRES_PORT

unset POSTGRES_HOST
unset DATABASE_URL

# Export specific variables
source ./.env

# Create DATABASE_URL and TEST_DATABASE_URL
export DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
export TEST_DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${TEST_POSTGRES_DB}

# Optionally, print the exported variables for verification
echo "DATABASE_URL: $DATABASE_URL"
echo "TEST_DATABASE_URL: $TEST_DATABASE_URL"
