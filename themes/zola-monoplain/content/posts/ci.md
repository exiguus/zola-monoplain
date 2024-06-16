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

Use _github-pages-deploy-action_ to build and deploy the website to Github Pages.

Use _taiki-e/install-action_ to install Zola.

Use _pnpm/action-setup_ to install pnpm.

Use _actions/cache_ to cache the pnpm store.

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

### Preview Github Pages deployment

Use _pr-preview-action_ to build and deploy the website to Github Pages.
Test the website with _lighthouse-ci-action_.

```yml
# .github/workflows/preview.yml
name: Preview
concurrency: preview-${{ github.ref }}
on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - closed
jobs:
  deploy-preview:
    name: Deploy PR
    runs-on: ubuntu-latest

    outputs:
      preview_url: ${{ steps.deploy.outputs.deployment-url }}

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
        if: github.event.action != 'closed'

      - name: Deploy
        id: deploy
        uses: rossjrw/pr-preview-action@v1
        with:
          source-dir: ./themes/zola-monoplain/public
          preview-branch: gh-pages
          umbrella-dir: pr-preview
          action: auto

      - name: Info
        run: |
          echo "Preview URL: ${{ steps.deploy.outputs.deployment-url }}"

  lighthouse:
    name: Test PR
    needs: deploy-preview
    if: always()
    timeout-minutes: 5
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Audit URLs and validate Budget
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: ${{ needs.deploy-preview.outputs.preview_url }}
          budgetPath: ./budget.json
          uploadArtifacts: true
          runs: 3
```

See: <https://github.com/marketplace/actions/deploy-pr-preview>

### Checks

Use _check-format_ to check the format of the code.

Use _analyze-typescript_ to analyze the TypeScript code.

```yml
name: Continuous Integration

on:
  pull_request:
  push:
    branches:
      - main

permissions:
  contents: read

jobs:
  check-format:
    name: Check Format
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        id: checkout
        uses: actions/checkout@v4

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

      - name: format
        run: pnpm format:check

  analyze-typescript:
    name: Analyze TypeScript
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        id: checkout
        uses: actions/checkout@v4

      - name: FTA Action
        id: fta-action
        uses: exiguus/fta-github-action@v0.1.1
        with:
          project_path: ./
          config_path: fta.config.json

      - name: Print Output Summary
        id: output-summary
        run: echo -e "\nSummary:\n${{ steps.fta-action.outputs.summary }}"

      - name: Print Output Details
        id: output-details
        run: echo -e "\nDetails:\n${{ steps.fta-action.outputs.details }}"

      - name: Upload Output Summary
        id: upload-output
        uses: actions/upload-artifact@v4
        with:
          name: output
          path: output.json
```

### Lighthouse

Use _lighthouse-action_ to check the performance of the website.

```yml
name: Lighthouse
on:
  workflow_run:
    workflows: ["Deploy"]
    types:
      - completed

jobs:
  test_run:
    name: Test run
    timeout-minutes: 15
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Audit URLs and validate Budget
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: https://exiguus.github.io/zola-monoplain/
          budgetPath: ./budget.json
          uploadArtifacts: true
          runs: 3
```
