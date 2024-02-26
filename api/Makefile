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

test-down:
	docker-compose -f docker-compose.test.yml down

prod-up:
	docker-compose -f docker-compose.app.yml up

prod-down:
	docker-compose -f docker-compose.app.yml down

.PHONY: build test lint test-down prod-up prod-down