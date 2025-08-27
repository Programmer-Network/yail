# Building Yail

This document provides instructions on how to build the Yail library from the source.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/): Use [nvm](https://github.com/nvm-sh/nvm) to
  switch to the version specified in the [.nvmrc](./.nvmrc) file. To ensure
  you're using the correct version of Node.js for this project, run `nvm use` in
  the project directory.
- [pnpm](https://pnpm.io/): Install pnpm globally with `npm install -g pnpm`.

## Setting Up the Development Environment

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Programmer-Network/yail.git
cd yail
```

### Install Dependencies

Use `pnpm` to install all necessary dependencies:

```bash
pnpm install
```

## Building for Production

To build the library for production, run the following command:

```bash
pnpm build
```

This will create a `dist` folder with the compiled code.
