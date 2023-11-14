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
Yail.
