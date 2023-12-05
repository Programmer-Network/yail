# Yail

[![lint-and-test-pr](https://github.com/Programmer-Network/yail/actions/workflows/lint-and-test.yaml/badge.svg)](https://github.com/Programmer-Network/yail/actions/workflows/lint-and-test.yaml)
[![pages-build-deployment](https://github.com/Programmer-Network/yail/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Programmer-Network/yail/actions/workflows/pages/pages-build-deployment)
[![deploy-storybook](https://github.com/Programmer-Network/yail/actions/workflows/deploy-storybook.yaml/badge.svg)](https://github.com/Programmer-Network/yail/actions/workflows/deploy-storybook.yaml)

<p align="center">
  <img src="./assets/images/yail-logo.png">
</p>

## 🎨Yail's [Storybook](https://yail.programmer.network)

_Yail_ is the official UI library of
[Programmer Network](https://programmer.network), crafted for developers who
prioritize simplicity and efficiency. Embracing a minimalist approach, _Yail_ is
now open-sourced to share its straightforward and effective design ethos with
the broader community. Here’s what makes _Yail_ stand out:

- **Minimalistic Design**: _Yail_ focuses on the essentials to deliver a
  user-friendly experience free from unnecessary complexity.
- **Tailored with Tailwind-CSS**: Integrating Tailwind-CSS, _Yail_ offers
  intuitive styling options, enabling you to create visually appealing web
  projects effortlessly.
- **Ease of Maintenance**: We prioritize hassle-free maintenance, making _Yail_
  as easy to manage as it is to implement.

Originally developed for [Programmer Network](https://programmer.network), we
decided to open source _Yail_ due to the growing interest from the community.
Whether you're working on small-scale projects or large applications, _Yail_
provides the tools for building elegant, responsive, and accessible UIs with
minimal overhead.

For an in-depth look at what _Yail_ offers, the Storybook is a good starting
point. It documents the current set of UI components and their usage patterns.
You can visit our [🖌️Storybook](https://yail.programmer.network) to review the
implemented features and components.

Yail is _yet another interface library_ used by
[Programmer Network 💻🤓](https://programmer.network).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/): Use [nvm](https://github.com/nvm-sh/nvm) to
  switch to the version specified in the [.nvmrc](./.nvmrc) file. To ensure
  you're using the correct version of Node.js for this project, run `nvm use` in
  the project directory.
- [pnpm](https://pnpm.io/): Install pnpm globally with `npm install -g pnpm`.


## Getting Started

### Usage

#### Installation

To integrate Yail into your project, install it using your preferred package manager. For example, with `pnpm`, you can add it as follows:

```bash
pnpm add @programmer_network/yail
```

#### Incorporating Components into Your Project

After installation, you can start using Yail components in your React project. Here's how you can import a component:

```jsx
import { Button } from "@programmer_network/yail";
```

#### Exploring Components with Storybook

Yail provides a comprehensive component showcase through Storybook. To explore these components, start the Storybook server:

```bash
pnpm storybook
```

## Contributing to Yail

We welcome contributions to Yail! Here's how you can set up the project locally for development.

### Setting Up the Development Environment

**Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/Programmer-Network/yail.git
cd yail
```

**Install Dependencies**

Use `pnpm` to install all necessary dependencies:

```bash
pnpm install
```

**Running the Development Server**

To start the development server, run:

```bash
pnpm dev
```

This command will launch Vite's development server. You can then make changes to the library, and Vite will automatically reload these changes.

View your changes inside storybook:

```bash
pnpm storybook
```

### Running Tests

Yail uses Vitest for testing. To run tests, use the following commands:

**Run all tests:**

```bash
pnpm test
```

**Run tests in watch mode:**

```bash
pnpm test:watch
```

### Linting and Code Formatting

To ensure code consistency, we use ESLint and Prettier. Run these before committing your changes:

**To lint your code:**

```bash
pnpm lint:fix
```

**To format your code:**

```bash
pnpm format
```

### Creating a Pull Request

Once you've made your changes:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push them to your fork.
4. Open a pull request against the `main` branch of the `Programmer-Network/yail` repository.

Please provide a clear description of the changes in your pull request.

Thank you for contributing to Yail!