# Tech stack:

api - Node.js + Express + Prisma ORM \
db - Postgres running in a Docker container

# Steps to run:

The following commands clones the repo, cd into the api directory,
lints the code, builds and runs the api and db using docker compose

Note: Integration tests are broken right now (due to env vars issues)... will be fixed. However, one sample test is in `src/tests`.

1. `git clone https://github.com/reubenthomasjohn/One2N-SRE-Bootcamp.git`
2. `cd api/`
3. `make lint`
4. `make build`
5. `make prod run`
