---
sidebar_position: 1
---

# Showcases

See mf-doctor in action. These examples use the sample workspaces in the mf-doctor repo (`mf-doctor/examples/`). From the mf-doctor repo root, run:

```bash
npx mf-doctor analyze examples/rsbuild-basic
# or
npx mf-doctor analyze examples/webpack-basic
```

If you've installed mf-doctor as a dev dependency, point to your own workspace path instead.

## Showcase pages

- [rsbuild-basic](/docs/guides/showcases/rsbuild-basic) — Rsbuild + Module Federation with 4 participants, version drift, circular dependency, and missing shared
- [webpack-basic](/docs/guides/showcases/webpack-basic) — Webpack + Module Federation with version drift across different `requiredVersion` formats
- [mf-doctor graph](/docs/guides/showcases/graph) — Visualize topology as ASCII art or Mermaid diagram
- [JSON output for CI](/docs/guides/showcases/json-ci) — Machine-readable output for CI pipelines
