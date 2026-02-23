---
sidebar_position: 2
---

# Quick Start

From your Module Federation workspace root (monorepo with `workspaces` in `package.json`):

```bash
npx mf-doctor analyze .
```

To analyze another path:

```bash
npx mf-doctor analyze path/to/workspace
```

mf-doctor will:

1. Discover all federation participants (packages with rsbuild, webpack, or rspack config)
2. Extract Module Federation config from each
3. Run all [analyzers](/docs/reference/analyzers) and print findings

For JSON output (e.g. for CI):

```bash
npx mf-doctor analyze . --format json
```

:::tip First run
Ensure your workspace has a root `package.json` with a `workspaces` field and at least one package with a bundler config (rsbuild, webpack, or rspack). See [Requirements](/docs/getting-started/requirements).
:::

See [CLI Reference](/docs/reference/cli) for all options.
