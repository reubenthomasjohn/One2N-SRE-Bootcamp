# Tech stack:

api - Node.js + Express + Prisma ORM \
db - Postgres running in a Docker container

# Steps to run:

Firstly, a `.env` file needs to be created in the `api/` directory. The env vars that should go inside the file are listed in the `sample.env` file in the `api/` directory. The `.env` file is gitignored. But still, double-check.

To run CI on the self-hosted runner, these env vars should be set as repo secrets in Github. There is a bash script `scripts/add-secrets-ga.sh` that will set these secrets.

The following commands clones the repo, cd into the api directory,
lints the code, builds and runs the api and db using docker compose.

The prod-up make target spins up the api and db containers, applies migrations, and seeds the db.

Note: Integration tests are broken right now (due to env vars issues)... will be fixed. However, one sample test is in `src/tests`.

1. `git clone https://github.com/reubenthomasjohn/One2N-SRE-Bootcamp.git`
2. `cd api/`
3. `make lint`
4. `make build`
5. `make prod-up`
