---
sidebar_position: 2
---

# Analyzers

mf-doctor runs the following analyzers by default. You can enable/disable them in [mf-doctor.config](/docs/reference/config-file) or run a subset via `--analyzers`.

| ID | Name | Typical severity |
|----|------|------------------|
| `react-version-drift` | React Version Drift | HIGH |
| `shared-config-mismatch` | Shared Config Mismatch | HIGH / MEDIUM / LOW |
| `shared-dependency-candidate` | Shared Dependency Candidate | MEDIUM |
| `missing-shared` | Missing Shared | MEDIUM |
| `duplicate-expose-name` | Duplicate Expose Name | MEDIUM |
| `orphan-expose` | Orphan Expose | LOW |
| `circular-dependency` | Circular Dependency | HIGH |

---

## react-version-drift

Detects when different participants use different versions of React or react-dom.

- **Why it matters:** Multiple React versions cause duplicate bundles, "Invalid hook call" errors, and subtle runtime bugs.
- **Severity:** HIGH
- **Suggestions:** Align all participants to the same React version; ensure shared config uses consistent `requiredVersion`; consider workspace-level dependency constraints.

---

## shared-config-mismatch

Detects inconsistent shared configuration across participants for the same package (singleton, eager, requiredVersion).

- **Why it matters:** Different `singleton`/`eager`/`requiredVersion` lead to unpredictable resolution and multiple instances of singleton libraries.
- **Severity:** HIGH for incompatible `requiredVersion` ranges; MEDIUM for compatible but different ranges or eager mismatch; LOW when shared by some but not all (with singleton elsewhere).
- **Suggestions:** Set consistent `singleton`, `eager`, and `requiredVersion` for shared packages across all participants.

---

## shared-dependency-candidate

Identifies dependencies used by both host and remotes that are not in the host's shared config.

- **Why it matters:** Adding them to shared can reduce duplicate bundles and version drift.
- **Severity:** MEDIUM
- **Suggestions:** Add the dependency to the host's (and remotes') shared config; consider `singleton: true` for stateful libraries.

---

## missing-shared

Detects dependencies used by multiple participants but not configured in any shared config.

- **Why it matters:** Each participant bundles its own copy, increasing size and risk of version mismatch.
- **Severity:** MEDIUM
- **Suggestions:** Add the dependency to shared config in all participants that use it; use consistent `requiredVersion`.

---

## duplicate-expose-name

Detects the same expose key used in multiple remotes.

- **Why it matters:** At runtime, resolution is ambiguous; the wrong module may load.
- **Severity:** MEDIUM
- **Suggestions:** Use unique expose keys per remote or ensure only one remote is loaded per context.

---

## orphan-expose

Detects remotes that have exposes but are not consumed by any host.

- **Why it matters:** Dead code or misconfiguration; a remote name may not match what hosts expect.
- **Severity:** LOW
- **Suggestions:** Add the remote to a host's remotes config, or remove unused exposes.

---

## circular-dependency

Detects cycles in the federation topology (e.g. Host → RemoteA → RemoteB → Host).

- **Why it matters:** Can cause initialization order issues, loading loops, and architectural confusion.
- **Severity:** HIGH
- **Suggestions:** Refactor to remove the cycle (e.g. extract shared code into a separate remote); review dependency direction.
