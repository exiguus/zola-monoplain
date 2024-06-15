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

### Simple Github Action for Github Pages

```yml
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
