---
sidebar_position: 4
---

# Runtime-loaded Remotes

When remotes are **loaded at runtime** (e.g. from environment variables or a manifest), the build-time `remotes` config may be empty. mf-doctor still needs to know which participants are hosts so it can label them and reason about the graph.

## Marking hosts

**CLI:**

```bash
mf-doctor analyze . --host shell-ui --host admin-shell
```

**Config:** Add `hosts` to `mf-doctor.config.*`:

```ts
export default {
  hosts: ["shell-ui", "admin-shell"],
};
```

CLI and config hosts are merged.

## Effect on output

- In **pretty output:** the participant is labeled `HOST (runtime remotes)`; the dependency graph shows "remotes loaded at runtime (edges unknown)".
- In **JSON:** the participant has `hostOverride: true` and `runtimeRemotes: true`.

## Analyzer impact

:::warning Static analysis only
Analyzers that depend on host–remote edges (e.g. which remotes a host consumes) may be **less accurate** when remotes are runtime-loaded, because those edges are unknown at static analysis time. Version drift and shared-config checks across participants still run; orphan-expose and circular-dependency may not see the full picture.
:::

Use host override when your shell resolves remotes dynamically (e.g. from a config server or env) so mf-doctor still treats the shell as a host in reports and graphs.
