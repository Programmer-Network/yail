# Luigui

[![lint-and-test-pr](https://github.com/Programmer-Network/luigui/actions/workflows/lint-and-test.yaml/badge.svg)](https://github.com/Programmer-Network/luigui/actions/workflows/lint-and-test.yaml)
[![pages-build-deployment](https://github.com/Programmer-Network/luigui/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Programmer-Network/luigui/actions/workflows/pages/pages-build-deployment)
[![deploy-storybook](https://github.com/Programmer-Network/luigui/actions/workflows/deploy-storybook.yaml/badge.svg)](https://github.com/Programmer-Network/luigui/actions/workflows/deploy-storybook.yaml)

## 🎨Luigui's [Storybook](https://luigui.programmer.network)

For an in-depth look at what _Luigui_ offers, the Storybook is a good starting
point. It documents the current set of UI components and their usage patterns.
You can visit our [🖌️Storybook](https://luigui.programmer.network) to review the
implemented features and components.

<p align="center">
  <img src="./assets/images/logo.png" width="250">
</p>

**Luigui**, pronounced "lui-gooey" and inspired by the Super Mario character
Luigi, is an official React UI component library used by
[Programmer Network 💻🤓](https://programmer.network).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/): Use [nvm](https://github.com/nvm-sh/nvm) to
  switch to the version specified in the [.nvmrc](./.nvmrc) file. To ensure
  you're using the correct version of Node.js for this project, run `nvm use` in
  the project directory.
- [pnpm](https://pnpm.io/): Install pnpm globally with `npm install -g pnpm`.

## Getting Started

To view components in Storybook, which is an open-source tool for developing UI
components in isolation, run the following command:

```bash
pnpm storybook
```

Storybook will start at `http://localhost:6006`, where you can view and interact
with the components.

## Building the Library

When you're ready to build a production version of the library, run:

```bash
pnpm build
```

This command generates the `dist` folder containing the production build of
Luigui.
