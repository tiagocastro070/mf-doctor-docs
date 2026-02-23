---
sidebar_position: 3
---

# Polyrepo / Multi-root Workspaces

When shell and remotes live in **separate repos**, use a VS Code / Cursor `.code-workspace` file so mf-doctor can discover all federation participants.

## Usage

```bash
mf-doctor analyze --workspace ./my-federation.code-workspace
```

mf-doctor reads the `folders` array from the workspace file and scans each folder for bundler configs. Nested `workspaces` in a folder's `package.json` are also discovered.

## Workspace file example

```json
{
  "folders": [
    { "path": "/Users/dev/gitlab/org/shell-app" },
    { "path": "/Users/dev/gitlab/org/team-a/remote-dashboard" },
    { "path": "/Users/dev/gitlab/org/team-b/remote-checkout" }
  ]
}
```

Each `path` can be absolute or relative to the workspace file. mf-doctor will:

1. Check each folder for a bundler config (rsbuild, webpack, rspack).
2. If the folder has a `package.json` with `workspaces`, resolve those packages and look for bundler configs there too.
3. Build the project graph and run analyzers across all discovered participants.

## Graph command

You can also visualize the topology for a polyrepo setup:

```bash
mf-doctor graph . --workspace ./my-federation.code-workspace -f mermaid -o federation-graph.mmd
```

## Optional: pull before analyze

Use `--pull` to run `git pull` in each folder before analyzing (useful in CI or before a local report):

```bash
mf-doctor analyze . --workspace ./my-federation.code-workspace --pull
```

Progress is printed per repository.
