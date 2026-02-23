---
sidebar_position: 3
---

# webpack-basic

The **webpack-basic** example uses Webpack + Module Federation with 3 participants. It demonstrates version drift across different `requiredVersion` formats.

**Command:**

```bash
npx mf-doctor analyze examples/webpack-basic
```

**Output (excerpt):**

```
┌────────────────────────────────────────────────┐
│        mf-doctor · Module Federation Analyzer      │
└────────────────────────────────────────────────┘

📦 WORKSPACE
  Path: /path/to/mf-doctor/examples/webpack-basic
  Stats: 3 participants · 2 dependencies

──────────────────────────────────────────────────

🔧 PARTICIPANTS

  ● @webpack-basic/shell · HOST [webpack]
    name: shell · exposes: · consumes: remoteA, remoteB · shared: 2

  ● @webpack-basic/remote-a · REMOTE [webpack]
    name: remoteA · exposes: ./Button · consumes: · shared: 2

  ● @webpack-basic/remote-b · REMOTE [webpack]
    name: remoteB · exposes: ./Card, ./Button · consumes: · shared: 2

──────────────────────────────────────────────────

🔗 DEPENDENCY GRAPH

  ◆ @webpack-basic/shell
    ├── @webpack-basic/remote-a as remoteA
    └── @webpack-basic/remote-b as remoteB

──────────────────────────────────────────────────

📊 SHARED DEPENDENCIES

  react
    ┌────────────────────────┬──────────┬──────────┬───────┐
    │ Participant            │ Version  │ singleton│ eager │
    ├────────────────────────┼──────────┼──────────┼───────┤
    │ @webpack-basic/shell    │ ^18.2.0  │ true     │ -     │
    │ @webpack-basic/remote-a │ 18.2.0   │ true     │ -     │
    │ @webpack-basic/remote-b │ ^18.2.3  │ true     │ -     │
    └────────────────────────┴──────────┴──────────┴───────┘

──────────────────────────────────────────────────

🔍 ANALYSIS RESULTS

  ● 0 HIGH  ·  ◐ 1 MED  ·  ○ 0 LOW

  Shared Config Mismatch
    ◐ MED
    │ react has different requiredVersion across participants: shell (^18.2.0), remoteA (18.2.0), remoteB (^18.2.3)
    │ Affects: @webpack-basic/shell, @webpack-basic/remote-a, @webpack-basic/remote-b
    ╰ Fix:
      → Set consistent requiredVersion for react across all participants

──────────────────────────────────────────────────

Completed in 38ms
```

## What this demonstrates

- **Webpack support**: mf-doctor extracts config from Webpack's `ModuleFederationPlugin`
- **Version drift**: Different `requiredVersion` formats (exact `18.2.0` vs ranges `^18.2.0`, `^18.2.3`) trigger shared-config-mismatch
