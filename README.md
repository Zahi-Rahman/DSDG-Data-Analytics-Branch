# DSDG Data Analytics — Curriculum Repo

Materials for the Data Science Development Group's Data Analytics branch. Every branch meeting has a folder here: the workshop script, slides, and any data or starter files members need. Officers should be able to run a session almost entirely from the folder alone.

## Why this repo exists

Two things, on purpose:

1. **It's the record.** Every dataset, script, and deck lives in one versioned place instead of scattered across Drive folders and group chats — future officers can see exactly what ran and improve it, not rebuild it from memory.
2. **It's the first rep.** Using git and GitHub to submit and track work starts week 1, on purpose — by the time this matters for an internship or the Consulting branch application, it's already a habit, not a new skill to cram.

## How the semester is organized

Content builds in a spiral, not a checklist: SQL, Python, and Excel/Power BI get taught in dedicated blocks, but every project after the block that introduces a skill keeps using it alongside whatever's new — nothing gets taught once and dropped. Full rationale is in `docs/curriculum-philosophy.md`.

**Month 1 (this repo, so far): Foundations**
| Week | Focus |
|---|---|
| 1 | What Data Analytics & Data Science actually are, career paths, GitHub quickstart |
| 2 | Excel as a real analytical tool |
| 3 | Power BI — from spreadsheet to dashboard |
| 4 | Mini-project + share-out (first cycle deliverable) |

**Later in the semester:** SQL, Python, applied statistics, and a semester-long capstone — each following the same 3-weeks-build / 1-week-review cadence, added to this repo as they're finalized.

## Repo structure

```
week-0X-topic/
├── README.md        ← the workshop script / lesson plan — start here
├── slides/           ← the deck used in-session
├── data/             ← any dataset(s) used that week + a data dictionary
├── starter/          ← starter files for members (if any)
└── scripts/          ← any code used to source or prep the data
```

## For officers running a session

See `docs/facilitator-guide.md` before your first week leading a session — it covers pacing, how to handle groups that finish early or fall behind, and how to run the week-4 review format.

## For members

Clone this repo once, then `git pull` at the start of each session to get that week's materials. If you're new to git, `week-01-fundamentals-and-github/resources/github-quickstart-cheatsheet.md` has everything you need for week one — you'll get more practice with it most weeks after that.
