# AGENTS.md

- [Architecture](#architecture)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## Architecture

This is a **vanilla JavaScript npm package**. No build step, no bundler, no server.

### Dependencies

- When updating dependencies, use `npm` commands (e.g. `uninstall`/`install`); do not hand-edit lockfile entries.

## Commits

- **Format:** `.gitmessage` (fallback: `~/.gitmessage`)

## Pull Requests

- **Title:** `.gitmessage` (fallback: `~/.gitmessage`)
- **Description:** `.github/PULL_REQUEST_TEMPLATE.md`
  - Be concise: plain language, simple sentences, present lists as bullets not prose.
  - When summarizing changeset, say what changed and (only if it matters) why, never how.
  - If listing a file change, then only describe change at a high level.
  - When updating, first re-read the current description, because it may have been edited.
