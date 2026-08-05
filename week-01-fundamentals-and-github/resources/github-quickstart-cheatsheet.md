# GitHub Quickstart: the 5 commands you need this semester

You do not need to understand git deeply to use it well. These five commands cover almost every week of this branch.

## One time setup

git clone (repo url). Copies the repo to your computer. Do this once per repo.

## Every session, in this order

git pull, to get the latest files before you start working.

Do your work: edit files, add your analysis, and so on.

git add (filename), or git add . to stage every changed file at once. Use that second form with care.

git commit -m "a short description of what you changed"

git push, to send your saved work up to GitHub.

## If something goes wrong

Merge conflict: this means you and someone else edited the same lines of the same file. It is normal, not a mistake. Open the file. Git marks the conflicting sections with `<<<<<<<`, `=======`, and `>>>>>>>`. Decide what the file should actually say, delete the markers, then add, commit, and push as usual.

"Your branch is behind": run git pull before you push. This fixes it almost every time.

Genuinely stuck? Ask an officer before spending more than 5 minutes alone on a git error. Nearly every one has been seen before.

## Words you will hear that you do not need to fully understand yet

Repo, short for repository: a project folder that git is tracking.

Commit: a saved snapshot of your work, with a note describing it.

Branch: a separate line of work. You will not need to create your own until later in the semester.

Pull request, or PR: a request to merge one branch's changes into another. Also a later semester topic.

Full git practice continues most weeks this semester. This page is meant to get you moving today, not to be memorized.
