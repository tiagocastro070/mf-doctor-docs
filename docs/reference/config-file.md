---
sidebar_position: 3
---

# Config File Schema

Optional config file: `mf-doctor.config.ts`, `mf-doctor.config.mts`, `mf-doctor.config.js`, `mf-doctor.config.mjs`, or `mf-doctor.config.cjs` in the workspace root.

## Options

| Option | Type | Description |
|--------|------|-------------|
| `severityThreshold` | `"LOW" \| "MEDIUM" \| "HIGH"` | Exit non-zero when findings meet or exceed this severity (default: `HIGH`) |
| `checks` | `Record<string, { enabled?: boolean; allowWithRuntimeRemotes?: boolean }>` | Per-analyzer config; `enabled: false` disables an analyzer; for `orphan-expose`, `allowWithRuntimeRemotes: true` runs it even when hosts load remotes at runtime |
| `ignore` | `string[]` | Glob patterns to exclude from participant discovery (e.g. `["apps/legacy/**"]`) |
| `hosts` | `string[]` | Participant names to mark as hosts (runtime-loaded remotes) |

## Example

```ts
export default {
  severityThreshold: "MEDIUM",
  checks: {
    "react-version-drift": { enabled: true },
    "shared-config-mismatch": { enabled: true },
    "orphan-expose": { allowWithRuntimeRemotes: true }, // run even when hosts load remotes at runtime
  },
  ignore: ["apps/legacy/**"],
  hosts: ["shell-ui"],
};
```

CLI options (e.g. `--host`, `--no-config`) override or extend config. See [Configuration guide](/docs/guides/configuration) for full usage.
