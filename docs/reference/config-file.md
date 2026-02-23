---
sidebar_position: 3
---

# Config File Schema

Optional config file: `mf-doctor.config.ts`, `mf-doctor.config.mts`, `mf-doctor.config.js`, `mf-doctor.config.mjs`, or `mf-doctor.config.cjs` in the workspace root.

## Options

| Option | Type | Description |
|--------|------|-------------|
| `severityThreshold` | `"LOW" \| "MEDIUM" \| "HIGH"` | Exit non-zero when findings meet or exceed this severity (default: `HIGH`) |
| `checks` | `Record<string, { enabled?: boolean }>` | Per-analyzer config; `enabled: false` disables an analyzer |
| `ignore` | `string[]` | Glob patterns to exclude from participant discovery (e.g. `["apps/legacy/**"]`) |
| `hosts` | `string[]` | Participant names to mark as hosts (runtime-loaded remotes) |

## Example

```ts
export default {
  severityThreshold: "MEDIUM",
  checks: {
    "react-version-drift": { enabled: true },
    "shared-config-mismatch": { enabled: true },
  },
  ignore: ["apps/legacy/**"],
  hosts: ["shell-ui"],
};
```

CLI options (e.g. `--host`, `--no-config`) override or extend config. See [Configuration guide](/docs/guides/configuration) for full usage.
