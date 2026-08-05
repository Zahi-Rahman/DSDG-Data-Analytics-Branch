# GitHub Cheat Sheet

You don't need to understand git deeply to start using it!

## One-time setup
```bash
git clone <repo-url>       # copy the repo to your computer - do this once per repo
```

## Every single session, in this order
```bash
git pull                   # get the latest files before you start working

# ... work: edit/create files ...

git add <filename>          # or: git add .  (stages ALL changed files but use with care)
git commit -m "short description of what you changed"
git push                   # send your saved work up to GitHub
```

## If something goes wrong

**"Merge conflict"** - this means you and someone else edited the same lines of the same file. Open the file; git will have marked the conflicting sections with `<<<<<<<`, `=======`, and `>>>>>>>`. Decide what the file should actually say, delete the markers, then `git add`, `git commit`, `git push` as usual.

**"Your branch is behind"** - run `git pull` before you push. Almost always fixes it.



## Terms
- **Repo (repository):** a project folder git is tracking.
- **Commit:** a saved snapshot of your work, with a note describing it.
- **Branch:** a separate line of work  (you won't need to create your own until later in the semester).
- **Pull request (PR):** a request to merge one branch's changes into another