---
sidebar_position: 5
---

# CI

mf-doctor is designed for CI: it exits with code **0** when no findings meet or exceed your severity threshold (after applying ignores), and **1** otherwise.

## Basic usage

```bash
mf-doctor analyze . --format json --fail-on MEDIUM
```

- **--format json** — Machine-readable output for piping to `jq` or other tools.
- **--fail-on** — Fail the step when any finding has this severity or higher (`LOW`, `MEDIUM`, `HIGH`). Default is `HIGH` (or your [config](/docs/reference/config-file) `severityThreshold`).

## Example: GitHub Actions

```yaml
- name: Analyze Module Federation
  run: |
    npm ci
    npx mf-doctor analyze . --format json --fail-on MEDIUM
```

To parse findings (e.g. for a summary or annotations):

```yaml
- name: Analyze Module Federation
  id: mf-doctor
  run: |
    npx mf-doctor analyze . --format json --fail-on MEDIUM > mf-doctor-result.json
    echo "exit_code=$?" >> $GITHUB_OUTPUT
```

Then use `mf-doctor-result.json` in a later step (e.g. with `jq`). Exit code is in `steps.mf-doctor.outputs.exit_code`.

## Disable interactive mode

In CI, disable interactive fix prompts so the run is non-interactive:

```bash
mf-doctor analyze . --format json --fail-on MEDIUM --no-interactive
```

## Piping to jq

```bash
mf-doctor analyze . --format json --fail-on MEDIUM | jq '.results[] | select(.findings | length > 0)'
```

This prints only analyzer results that have findings.
