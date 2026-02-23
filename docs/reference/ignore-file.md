---
sidebar_position: 4
---

# Ignore File Schema

Optional ignore file: `.mf-doctor-ignore.json` in the workspace root. Use it to suppress specific findings (e.g. known tech debt with a reason).

## Structure

| Field | Type | Description |
|-------|------|-------------|
| `ignoreFindings` | `IgnoreEntry[]` | List of findings to ignore |

### IgnoreEntry

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Analyzer ID (e.g. `react-version-drift`) |
| `participants` | `string[]` (optional) | Only ignore for these participant names; omit to ignore for all |
| `reason` | `string` (optional) | Why this is ignored (for team context) |

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

Use `--no-ignore` to ignore this file (e.g. in CI when you want to see all findings). See [Ignoring findings guide](/docs/guides/ignoring-findings).
