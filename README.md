# Luigui

<p align="center">
  <img src="./assets/images/logo.png" width="150">
</p>

**Luigui**, pronounced "lui-gooey" and inspired by the Super Mario character Luigi, is an official React library used by Programmer Network.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/): Use [nvm](https://github.com/nvm-sh/nvm) to switch to the version specified in the [.nvmrc](./.nvmrc) file. To ensure you're using the correct version of Node.js for this project, run `nvm use` in the project directory.
- [pnpm](https://pnpm.io/): Install pnpm globally with `npm install -g pnpm`.

## Getting Started

To view components in Storybook, which is an open-source tool for developing UI components in isolation, run the following command:

```bash
pnpm storybook
```

Storybook will start at `http://localhost:6006`, where you can view and interact with the components.

## Building the Library

When you're ready to build a production version of the library, run:

```bash
pnpm build
```

This command generates the `dist` folder containing the production build of Luigui.
