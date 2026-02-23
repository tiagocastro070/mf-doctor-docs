---
sidebar_position: 5
---

# JSON output for CI

Use `--format json` for machine-readable output in CI pipelines.

**Command:**

```bash
npx mf-doctor analyze examples/rsbuild-basic --format json
```

**Output (structure):**

```json
{
  "graph": {
    "workspaceRoot": "/path/to/mf-doctor/examples/rsbuild-basic",
    "participants": [
      {
        "name": "@rsbuild-basic/shell",
        "bundler": "rsbuild",
        "federationConfig": {
          "name": "shell",
          "remotes": { "remoteA": "...", "remoteB": "..." },
          "exposes": {},
          "shared": { "react": {...}, "react-dom": {...} }
        }
      }
    ],
    "edges": [
      { "from": "@rsbuild-basic/shell", "to": "@rsbuild-basic/remote-a", "remoteKey": "remoteA" },
      { "from": "@rsbuild-basic/shell", "to": "@rsbuild-basic/remote-b", "remoteKey": "remoteB" },
      { "from": "@rsbuild-basic/remote-b", "to": "@rsbuild-basic/remote-c", "remoteKey": "remoteC" },
      { "from": "@rsbuild-basic/remote-c", "to": "@rsbuild-basic/shell", "remoteKey": "shell" }
    ]
  },
  "results": [
    {
      "analyzerId": "react-version-drift",
      "findings": [
        {
          "id": "react-version-drift",
          "severity": "HIGH",
          "message": "Different React versions across participants...",
          "participants": ["@rsbuild-basic/shell", "@rsbuild-basic/remote-a", "..."]
        }
      ]
    }
  ],
  "totalFindings": 3,
  "findingsBySeverity": { "LOW": 0, "MEDIUM": 1, "HIGH": 2 },
  "totalDurationMs": 42,
  "ignoredCount": 1
}
```

## What this demonstrates

- **CI integration**: Pipe to `jq` or parse in scripts
- **Fail on severity**: Use `--fail-on MEDIUM` to exit non-zero when findings meet the threshold

```bash
npx mf-doctor analyze examples/rsbuild-basic --format json --fail-on MEDIUM
# Exit code: 1 (findings at or above MEDIUM)
```

See [CI integration](/docs/guides/ci) for more details.
