TODO:

1. Makefile to build and run the API locally
2. Postman collections
3. Support API versioning
4. Emit meaningful logs
5. /health checkpoint
6. Unit tests

# finish this

7. Docker compose creates a new db container. Is the mount same? How can I pass the
   url into the rest api app? How can I run migrations?

   (Good to have) You can even include checks to see if the DB is already running and DB migrations are already applied.

Notes:

1. Pass in env var in local
   `DATABASE_URL="postgresql://feudalmagicite123:0WEi3AQBqxgl@ep-orange-mouse-a5gp43l1.us-east-2.aws.neon.tech/test?sslmode=require" node dist/index.js
`
