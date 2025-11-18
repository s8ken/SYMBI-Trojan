## Goals
- Stop edits and pushes from landing in the wrong repository.
- Identify and migrate Trojan-related material from `SYMBI-SYMPHONY` to `SYMBI-Trojan`.
- Add guardrails so future commits/pushes only occur in the intended repo.

## Read-Only Audit
- Verify active repo roots: run `git rev-parse --show-toplevel` in both repos to confirm CWD.
- Inspect Git remotes: `git remote -v` in `C:\Users\Stephen\Documents\trae_projects\SYMBI-SYMPHONY` and `SYMBI-Trojan`.
- Search for Trojan-related directories/files in `SYMBI-SYMPHONY`.
- Check for symlinks/worktrees that could cross-link repos: `git worktree list`, scan for junctions.

## Migration Plan
- Choose method based on how much history to preserve:
  - Full history per path: use `git filter-repo` to extract Trojan paths from `SYMBI-SYMPHONY` into `SYMBI-Trojan`.
  - Simpler import: use `git subtree add` to bring Trojan paths into `SYMBI-Trojan`.
- After import, remove those paths from `SYMBI-SYMPHONY` with a single cleanup commit.
- Verify builds/tests (if present) remain green in both repos.

## Safeguards
- Add `pre-commit` and `pre-push` hooks to each repo:
  - `SYMBI-SYMPHONY`: block commits unless repo root basename is `SYMBI-SYMPHONY`; block pushes unless remote URL contains `symbi-symphony`.
  - `SYMBI-Trojan`: ensure the same checks for `symbi-trojan`.
- Update any local scripts/tooling to resolve paths via `git rev-parse --show-toplevel` instead of hardcoded absolute directories.
- Recommend distinct terminal naming and verifying `pwd` before repo-affecting commands; optionally enforce branch protection policies on remotes.

## Execution Steps
1. Audit `SYMBI-SYMPHONY`: identify Trojan paths and confirm remotes and repo root.
2. Audit `SYMBI-Trojan`: confirm remotes and repo root.
3. Migrate Trojan material with `filter-repo` or `subtree`, preserving desired history.
4. Remove Trojan paths from `SYMBI-SYMPHONY` and verify integrity.
5. Implement guard hooks in both repos and test with trial commits/pushes.
6. Provide a short runbook/checklist for future operations.

## Deliverables
- Clean `SYMBI-SYMPHONY` without Trojan content.
- `SYMBI-Trojan` containing Trojan material with preserved history.
- Guard hooks in both repos preventing cross-repo commits/pushes.

## Assumptions
- `SYMBI-SYMPHONY` lives at `C:\Users\Stephen\Documents\trae_projects\SYMBI-SYMPHONY` and is accessible.
- You want history preserved for migrated paths; if not, we will perform a simple copy and clean-up.