---
sidebar_position: 3
---

# Requirements

- **Node.js** 18 or above

Your workspace must:

- Have a root `package.json` with a `workspaces` field (array or `{ packages: [] }`) for monorepo discovery
- Contain at least one package that has a bundler config (rsbuild, webpack, or rspack) with Module Federation plugin usage

For polyrepo setups (shell and remotes in separate repos), use a [.code-workspace file](/docs/guides/polyrepo) and the `--workspace` option.
