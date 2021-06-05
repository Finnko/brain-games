install:
	npm ci

lint:
	npx eslint .

game-install:
	npm link

publish:
	npm publish --dry-run

