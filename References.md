1. Set up GA self-hosted runner: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners

2. Prisma Integration testing docs: https://www.prisma.io/blog/testing-series-3-aBUyF8nxAn

3. Install Github CLI
   `brew install gh`

4. Run `gh auth login`

5. Understand what the following does:

```sh
$ mv .git/refs/remotes/origin/HEAD /tmp
$ git gc
$ git prune
```
