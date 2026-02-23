---
sidebar_position: 2
---

# Ignoring Findings

Use `.mf-doctor-ignore.json` in the workspace root to suppress specific findings. This is useful for known tech debt or temporary drift while you track fixes elsewhere.

## When to use

- A finding is intentional or accepted for a limited time (e.g. "Aligned in next sprint").
- You want CI to pass while you fix issues in a separate ticket.
- You need to ignore a finding only for certain participants.

## Format

Add entries under `ignoreFindings`. Each entry can include:

- **id** — Analyzer ID (e.g. `react-version-drift`).
- **participants** (optional) — Only ignore for these participant names. Omit to ignore for all participants affected by that finding.
- **reason** (optional) — Short explanation for your team (e.g. ticket ID or timeline).

## Example

```json
{
  "ignoreFindings": [
    {
      "id": "react-version-drift",
      "participants": ["remote-b"],
      "reason": "Aligned in next sprint"
    },
    {
      "id": "shared-config-mismatch",
      "participants": ["@rsbuild-basic/remote-a"],
      "reason": "Temporary drift during migration - tracked in JIRA-1234"
    }
  ]
}
```

## CLI

Use `--no-ignore` to ignore this file (e.g. in CI when you want to see all findings):

```bash
mf-doctor analyze . --no-ignore
```

See [Ignore file schema](/docs/reference/ignore-file) for the full schema.
