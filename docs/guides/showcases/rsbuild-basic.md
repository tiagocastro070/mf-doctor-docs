---
sidebar_position: 2
---

# rsbuild-basic

The **rsbuild-basic** example is an Rsbuild + Module Federation workspace with 4 participants: a host (shell) and three remotes (remote-a, remote-b, remote-c). It intentionally includes version drift, a circular dependency, and missing shared config to demonstrate mf-doctor's analyzers.

**Command:**

```bash
npx mf-doctor analyze examples/rsbuild-basic
```

**Output (excerpt):**

```
┌────────────────────────────────────────────────┐
│        mf-doctor · Module Federation Analyzer      │
└────────────────────────────────────────────────┘

📦 WORKSPACE
  Path: /path/to/mf-doctor/examples/rsbuild-basic
  Stats: 4 participants · 4 dependencies

──────────────────────────────────────────────────

🔧 PARTICIPANTS

  ● @rsbuild-basic/shell · HOST [rsbuild]
    name: shell · exposes: · consumes: remoteA, remoteB · shared: 2

  ● @rsbuild-basic/remote-a · REMOTE [rsbuild]
    name: remoteA · exposes: ./Button · consumes: · shared: 2

  ● @rsbuild-basic/remote-b · REMOTE [rsbuild]
    name: remoteB · exposes: ./Card, ./Button · consumes: remoteC · shared: 2

  ● @rsbuild-basic/remote-c · REMOTE [rsbuild]
    name: remoteC · exposes: ./Widget · consumes: shell · shared: 2

──────────────────────────────────────────────────

🔗 DEPENDENCY GRAPH

  ◆ @rsbuild-basic/shell
    ├── @rsbuild-basic/remote-a as remoteA
    └── @rsbuild-basic/remote-b as remoteB

  ◆ @rsbuild-basic/remote-b
    └── @rsbuild-basic/remote-c as remoteC

  ◆ @rsbuild-basic/remote-c
    └── @rsbuild-basic/shell as shell

──────────────────────────────────────────────────

📊 SHARED DEPENDENCIES

  react
    ┌────────────────────────┬──────────┬──────────┬───────┐
    │ Participant            │ Version  │ singleton│ eager │
    ├────────────────────────┼──────────┼──────────┼───────┤
    │ @rsbuild-basic/shell    │ ^18.3.1  │ true     │ -     │
    │ @rsbuild-basic/remote-a│ 18.2.0   │ true     │ -     │
    │ @rsbuild-basic/remote-b│ ^18.3.1  │ true     │ -     │
    │ @rsbuild-basic/remote-c│ ^18.3.1  │ true     │ -     │
    └────────────────────────┴──────────┴──────────┴───────┘

  react-dom
    ┌────────────────────────┬──────────┬──────────┬───────┐
    │ Participant            │ Version  │ singleton│ eager │
    ├────────────────────────┼──────────┼──────────┼───────┤
    │ @rsbuild-basic/shell    │ ^18.3.1  │ true     │ -     │
    │ @rsbuild-basic/remote-a│ 18.2.0   │ true     │ -     │
    │ @rsbuild-basic/remote-b│ ^18.3.1  │ true     │ -     │
    │ @rsbuild-basic/remote-c│ ^18.3.1  │ true     │ -     │
    └────────────────────────┴──────────┴──────────┴───────┘

──────────────────────────────────────────────────

🔍 ANALYSIS RESULTS

  ● 2 HIGH  ·  ◐ 1 MED  ·  ○ 0 LOW  ·  ⊘ 1 ignored

  React Version Drift
    ● HIGH
    │ Different React versions across participants. shell, remote-b, remote-c use ^18.3.1; remote-a uses 18.2.0.
    │ Affects: @rsbuild-basic/shell, @rsbuild-basic/remote-a, @rsbuild-basic/remote-b, @rsbuild-basic/remote-c
    ╰ Fix:
      → Align all participants to the same React version
      → Ensure shared config uses consistent requiredVersion

  Circular Dependency
    ● HIGH
    │ Circular dependency detected: shell → remote-b → remote-c → shell
    │ Affects: @rsbuild-basic/shell, @rsbuild-basic/remote-b, @rsbuild-basic/remote-c
    ╰ Fix:
      → Refactor to remove the cycle (e.g. extract shared code into a separate remote)

  Missing Shared
    ◐ MED
    │ date-fns is used by 3/4 participants but not in any shared config.
    │ Affects: @rsbuild-basic/shell, @rsbuild-basic/remote-a, @rsbuild-basic/remote-b
    ╰ Fix:
      → Add date-fns to shared config in all participants that use it

──────────────────────────────────────────────────

🛠  ACTION ITEMS BY PROJECT

  @rsbuild-basic/shell
    → Align React version with remote-a (18.2.0) or upgrade remote-a to ^18.3.1
    → Add date-fns to shared config

  @rsbuild-basic/remote-a
    → Upgrade React to ^18.3.1 to match shell/remote-b/remote-c
    → Add date-fns to shared config

  @rsbuild-basic/remote-b
    → Add date-fns to shared config
    → Consider refactoring to break cycle: remote-c → shell

  @rsbuild-basic/remote-c
    → Consider refactoring to break cycle: remote-c → shell

──────────────────────────────────────────────────

Completed in 42ms
```

## What this demonstrates

- **Discovery**: 4 participants (1 host, 3 remotes) with exposes and consumes
- **Dependency graph**: Host → remotes, plus remote-b → remote-c and remote-c → shell (circular)
- **Shared dependencies matrix**: Version drift visible (remote-a uses 18.2.0; others use ^18.3.1)
- **React version drift**: HIGH finding when versions differ
- **Circular dependency**: HIGH finding for shell → remote-b → remote-c → shell
- **Missing shared**: MEDIUM finding for date-fns used by 3/4 participants but not shared
- **Ignored findings**: The example uses `.mf-doctor-ignore.json` to ignore `shared-config-mismatch` for remote-a (1 ignored)
