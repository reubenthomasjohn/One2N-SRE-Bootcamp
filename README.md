TODO:

1. Makefile to build and run the API locally - Done
2. Postman collections
3. Support API versioning
4. Emit meaningful logs
5. /health checkpoint
   -> Important: Learn to do well
6. Unit tests - Done partially

Notes:

1. Set up GA self-hosted runner: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners

```sh
mkdir actions-runner && cd actions-runner
curl -o actions-runner-osx-arm64-2.313.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.313.0/actions-runner-osx-arm64-2.313.0.tar.gz
echo "97258c75cf500f701f8549289c85d885a9497f7886c102bf4857eed8764a9143  actions-runner-osx-arm64-2.313.0.tar.gz" | shasum -a 256 -c
tar xzf ./actions-runner-osx-arm64-2.313.0.tar.gz

./config.sh --url https://github.com/reubenthomasjohn/One2N-SRE-Bootcamp --token ARIX7NVUSZYM5NMNZNKAN2LF3RSF6
./run.sh
```

2. Prisma Integration testing docs: https://www.prisma.io/blog/testing-series-3-aBUyF8nxAn

3. Install Github CLI
   `brew install gh`

4. Run `gh auth login`
