TODO:

1. Makefile to build and run the API locally
2. Postman collections
3. Support API versioning
4. Emit meaningful logs
5. /health checkpoint
6. Unit tests

# finish this

(Good to have) You can even include checks to see if the DB is already running and DB migrations are already applied.

Notes:

1. Pass in env var in local
   `DATABASE_URL="postgresql://feudalmagicite123:0WEi3AQBqxgl@ep-orange-mouse-a5gp43l1.us-east-2.aws.neon.tech/test?sslmode=require" node dist/index.js
`

# Setup Instructions:

1. Paste these commands into your terminal to install Docker. This is for supported Linux distros only.

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

2. To verify that the install script worked, run:

```sh
make shellcheck
```

3. For other OS, please refer to the official Docker docs at https://docs.docker.com/engine/install/

4. If you are on a Mac, there is a famous bash script `/api/scripts/wait-for-it.sh`, that I use. You'll need to install and alias a command that is used within the wait-for-it.sh script.

```sh
brew install coreutils && alias timeout=gtimeout
```

Testing
