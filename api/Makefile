# Makefile

# Variables
SRC_DIR = src
BUILD_DIR = dist
TEST_DIR = tests

# Targets
build:
	tsc -b

test:
	npm run test:int

lint:
	npx eslint $(SRC_DIR)/**/*.ts

run-prod-up:
	docker-compose -f docker-compose.app.yml up

run-prod-down:
	docker-compose -f docker-compose.app.yml down

.PHONY: build test lint run-prod-up run-prod-down