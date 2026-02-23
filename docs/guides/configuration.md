---
sidebar_position: 1
---

# Configuration

mf-doctor can be configured via an optional `mf-doctor.config.*` file in the workspace root. Supported extensions: `.ts`, `.mts`, `.js`, `.mjs`, `.cjs`.

## Options

- **severityThreshold** — Exit with non-zero when findings meet or exceed this severity. Default: `HIGH`. Use `MEDIUM` or `LOW` for stricter CI.
- **checks** — Enable or disable individual [analyzers](/docs/reference/analyzers). Omitted analyzers are enabled by default.
- **ignore** — Glob patterns to exclude packages from participant discovery (e.g. `["apps/legacy/**"]`).
- **hosts** — Participant names to mark as hosts when remotes are loaded at runtime. Merged with CLI `--host`.

## Example (monorepo)

```ts
// mf-doctor.config.ts
export default {
  severityThreshold: "MEDIUM",
  checks: {
    "react-version-drift": { enabled: true },
    "shared-config-mismatch": { enabled: true },
  },
  ignore: ["apps/legacy/**"],
};
```

## Example (polyrepo / runtime remotes)

When shell and remotes live in different repos or remotes are loaded at runtime (e.g. from env or a manifest), mark hosts explicitly:

```ts
// mf-doctor.config.ts
export default {
  hosts: ["shell-ui", "admin-shell"],
  severityThreshold: "HIGH",
};
```

CLI and config hosts are merged. Use `--no-config` to ignore the config file (e.g. for one-off overrides).

## Reference

See [Config file schema](/docs/reference/config-file) for the full schema.
