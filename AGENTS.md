<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Memory Protocol

At the start of each new task/session, read these files first:

1. `README.md`
2. `ARCHITECTURE.md`
3. `CHANGELOG.md`
4. `CONTEXT.md`

If there is a conflict:

- User instruction in current chat wins.
- Then this `AGENTS.md`.
- Then `README.md` / `ARCHITECTURE.md` / `CHANGELOG.md` / `CONTEXT.md`.

## Multi-Agent Coordination Protocol

GitHub-backed work uses one Issue → one registered worktree → one branch → one PR → CTO review.

- Start or resume a lane with `./scripts/worktree-bootstrap.sh <issue-number> <slug>`.
- Always verify all changes with `./scripts/check.sh` before finishing work.
- Complete a lane with `./scripts/worktree-finish.sh`.
- Agents must never merge their own PRs; all merges require independent CTO review.
