+++
title = "Continous Integration"
description = "Continous Integration by Example"
date = 2024-06-15
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "CI", "Continous Integration", "Deployment", "Build", "Github Actions"]
+++

## Introduction

The theme use Github Actions for _Continous Integration_ and _Continous Deployment_. The Github Actions are defined in the `.github/workflows` directory. The Github Actions are used to validate, format, build and deploy the website.

## Github Actions

### Simple Github Pages deployment

Use `zola-deploy-action` to build and deploy the website to Github Pages.

```yml
# .github/workflows/github-pages.yml
name: Github Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build and deploy
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: build_and_deploy
        uses: shalzz/zola-deploy-action@v0.18.0
        env:
          # Target branch
          PAGES_BRANCH: gh-pages
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
´          BUILD_DIR: themes/zola-monoplain
```

See <https://www.getzola.org/documentation/deployment/github-pages/>

### Advance Github Pages deployment

Use `github-pages-deploy-action` to build and deploy the website to Github Pages.

Use `taiki-e/install-action` to install Zola.

Use `pnpm/action-setup` to install pnpm.

Use `actions/cache` to cache the pnpm store.

```yml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches:
      - main

jobs:
  deploy-github-pages:
    name: Deploy Github Pages
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        id: checkout
        uses: actions/checkout@v4

      - uses: taiki-e/install-action@v2
        with:
          tool: zola@0.18.0

      - name: Setup Node.js
        id: setup-node
        uses: actions/setup-node@v4
        with:
          node-version-file: package.json

      - uses: pnpm/action-setup@v4
        name: Install pnpm
        with:
          run_install: false

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - uses: actions/cache@v4
        name: Setup pnpm cache
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: ./themes/zola-monoplain/public
          branch: gh-pages
          clean-exclude: pr-preview
          force: false
```
