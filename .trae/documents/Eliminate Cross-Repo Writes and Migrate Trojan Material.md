## Diagnosis

* Edits landed in the wrong repo due to active working directory being Symbi Symphony during prior sessions (not a push/remote issue).

* In `SYMBI-Trojan`, no `remote.origin` is configured (`.git/config:1-7`), indicating misplacement happened at file creation time, not during push.

* Likely contributors: similar repo names, multiple terminals, scripts with hardcoded absolute paths, or Git worktrees/symlinks linking directories.

## Audit

* Confirm each repo’s top-level path and active working directory before actions.

* Inspect Git remotes for both repos to ensure `origin.url` points to the correct targets.

* Identify all Trojan-related paths currently present in Symbi Symphony.

* Check for worktrees/symlinks: ensure directories are not linked across repos.

## Migration

* Move Trojan material into `SYMBI-Trojan` while preserving history using one of:

  * `git filter-repo` to extract specific paths from Symbi Symphony into `SYMBI-Trojan`.

  * `git subtree` to import paths from Symbi Symphony into `SYMBI-Trojan`.

* Remove Trojan paths from Symbi Symphony after migration.

## Safeguards

* Add `pre-commit` hook to assert repo slug and block commits from unintended directories.

* Add `pre-push` hook to validate `remote.origin.url`; allow only expected repo, block pushes to others.

* Update any scripts to compute paths relative to `git rev-parse --show-toplevel` instead of hardcoded absolute directories.

* Use distinct terminal names and verify CWD (`pwd`) before running any repo-affecting commands.

* Optional: set protected branches and branch policies in remote hosting to prevent accidental pushes.

## Execution Steps

1. Locate Symbi Symphony repo path and list Trojan paths.
2. Audit remotes and CWD for both repos (`git remote -v`, `git rev-parse --show-toplevel`).
3. Execute migration with chosen method (filter-repo or subtree) and verify resulting history.
4. Clean Symbi Symphony by removing Trojan paths.
5. Implement and test hooks in both repos; run trial commits/pushes to validate blocking and allow rules.

## Deliverables

* `SYMBI-Trojan` populated with Trojan material, history preserved.

* Symbi Symphony cleaned of Trojan content.

* Guard hooks in both repos, plus a short runbook/checklist for future operations.

## Notes & Assumptions

* Windows environment and repos under `c:\Users\Stephen\Documents\trae_projects\...`.

* If you share the Symbi Symphony path and the specific Trojan directories, I’ll proceed with the audit, migration, and safeguards in one pass.

