# GitHub Quickstart — the 5 commands you need this semester

You don't need to understand git deeply to use it well. These five commands cover almost every week of this branch.

## One-time setup
```bash
git clone <repo-url>       # copy the repo to your computer — do this once per repo
```

## Every single session, in this order
```bash
git pull                   # get the latest files before you start working
# ... do your work: edit files, add your analysis, etc ...
git add <filename>          # or: git add .  (stages ALL changed files — use with care)
git commit -m "short description of what you changed"
git push                   # send your saved work up to GitHub
```

## If something goes wrong

**"Merge conflict"** — this means you and someone else edited the same lines of the same file. It's normal, not a mistake. Open the file; git will have marked the conflicting sections with `<<<<<<<`, `=======`, and `>>>>>>>`. Decide what the file should actually say, delete the markers, then `git add`, `git commit`, `git push` as usual.

**"Your branch is behind"** — run `git pull` before you push. Almost always fixes it.

**Genuinely stuck?** Ask an officer before you spend more than 5 minutes on a git error alone — nearly every one has been seen before.

## Words you'll hear that you don't need to fully understand yet
- **Repo (repository):** a project folder git is tracking.
- **Commit:** a saved snapshot of your work, with a note describing it.
- **Branch:** a separate line of work — you won't need to create your own until later in the semester.
- **Pull request (PR):** a request to merge one branch's changes into another — also a later-semester topic.

Full git practice continues most weeks this semester — this page is meant to get you moving today, not to be memorized.
