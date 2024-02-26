#!/bin/bash

# Load .env file
source .env

# GitHub repository owner and name
REPO_OWNER="reubenthomasjohn"
REPO_NAME="One2N-SRE-Bootcamp"

# GitHub token with write access to secrets
GH_TOKEN=$GITHUB_TOKEN

gh secret set -f .env
