---
sidebar_position: 1
---

# CLI Reference

mf-doctor provides two commands: `analyze` and `graph`.

## analyze

Analyze a Module Federation workspace and report findings.

```bash
mf-doctor analyze [path]
```

- **path** — Path to workspace root (default: `.`).

### Options

| Option                          | Description                                                        |
| ------------------------------- | ------------------------------------------------------------------ |
| `-f, --format <pretty\|json>`   | Output style (default: `pretty`)                                   |
| `-a, --analyzers <ids>`         | Comma-separated analyzer IDs to run (default: all)                 |
| `-w, --workspace <file>`        | Path to `.code-workspace` for polyrepo discovery                   |
| `--fail-on <LOW\|MEDIUM\|HIGH>` | Exit non-zero when findings meet/exceed severity (default: `HIGH`) |
| `--host <name>`                 | Mark participant as host (runtime-loaded remotes). Repeatable.     |
| `--no-config`                   | Ignore `mf-doctor.config.*`                                            |
| `--no-ignore`                   | Ignore `.mf-doctor-ignore.json`                                        |
| `--no-interactive`              | Disable interactive fix prompts (useful for CI)                    |

### Analyzer IDs

`react-version-drift`, `shared-config-mismatch`, `shared-dependency-candidate`, `missing-shared`, `duplicate-expose-name`, `orphan-expose`, `circular-dependency`

### Examples

```bash
# Run all analyzers (default)
mf-doctor analyze .

# Run only specific analyzers
mf-doctor analyze . -a react-version-drift,shared-config-mismatch

# JSON output for CI
mf-doctor analyze . --format json --fail-on MEDIUM

# Polyrepo with workspace file
mf-doctor analyze . --workspace ./my-federation.code-workspace

# Mark hosts with runtime-loaded remotes
mf-doctor analyze . --host shell-ui --host admin-shell
```

## graph

Visualize the Module Federation dependency topology.

```bash
mf-doctor graph [path]
```

### Options

| Option                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `-f, --format <ascii\|mermaid>` | Output format (default: `ascii`)                 |
| `-o, --output <file>`           | Output file path (required for mermaid)          |
| `-w, --workspace <file>`        | Path to `.code-workspace` for polyrepo discovery |
| `--host <name>`                 | Mark participant as host. Repeatable.            |

### Examples

```bash
# Print ASCII graph to terminal
mf-doctor graph .

# Save Mermaid diagram
mf-doctor graph . -f mermaid -o docs/federation-graph.mmd
```

![Example topology diagram generated from the Mermaid file](/img/mf-doctor-topology.svg)

_Example image generated from the Mermaid file._
