# Week 1: What This Branch Is, What This Field Is, and Your First Commit

**Format:** Lesson + hands-on · **Length:** ~75 minutes · **Slides:** `slides/week-01-slides.pptx`

## Goals
Members can explain the difference between data analytics, data science, and the other data-adjacent roles. They know where this branch leads if they want to go further. They can clone a repo, commit, and push.

---

## 0. Welcome (5 min)
Quick intros if the group's small: name, major, year, one dataset they'd love to dig into if they could. If it's large, skip intros — instead poll by show of hands: who's used Excel seriously, who's touched SQL, who's coded at all. Tells you whether the GitHub section later needs to move slow or fast.

One-line framing for the semester: this branch is about asking a good question of a messy dataset and defending the answer. Tools are just how you practice that. Builds toward a capstone presented to the whole club at semester's end.

---

## 1. Data Analytics vs. Data Science vs. everything else (15 min)

Ask the room to guess before you explain. Write four role names on the board — Data Analyst, Data Scientist, Data Engineer, Consultant — and get guesses first.

**The rough split** (real job titles overlap more than this):
- **Data Analyst** — answers a specific question with data that mostly already exists. Backward-looking: what happened, and why?
- **Data Scientist** — builds predictive models on messier, larger data, more code-heavy. Forward-looking: what's likely next?
- **Data Engineer** — builds the pipelines that get data usable in the first place.
- **Consultant** — packages analysis into a business recommendation for a client, often with people from several disciplines — tie this to our own branch structure.

All four need the same foundation: SQL, some statistics, and the ability to explain a finding to someone who wasn't in the room. That foundation is this branch. Which direction from here — Analyst-track, Data Science, or an application to Consulting — is a later decision.

---

## 2. Career paths and outcomes (15 min)

Use current numbers, not vibes — ask your Branch Lead for the latest each semester. As of this curriculum: SQL and Excel show up in most entry-level analyst postings, Python is a fast-growing differentiator, and communication is named almost as often as any technical tool.

Every project this semester uses real data, not textbook data, because that's what gets people hired. Connect it to the pipeline: doing well here, especially a strong capstone, is the most direct path to the Consulting branch.

Optional hook for next week: Week 2's dataset is about what actually happens to people after they pick a major — real earnings data across 173 majors, with at least one pattern worth arguing about. Don't give it away.

---

## 3. GitHub quickstart (30 min) — hands-on

Framing: nobody needs to understand git deeply today. Five commands, used almost every week — the goal is muscle memory.

### Setup (5 min)
Everyone needs a free GitHub account and git installed (built into Mac/Linux; Windows needs [Git for Windows](https://gitforwindows.org)). Send this as a reminder before the session, not during — installs eat time unpredictably.

### The five commands (10 min)
Walk through `resources/github-quickstart-cheatsheet.md`:
1. `git clone <url>` — copy a repo, once.
2. `git pull` — get the latest, every session.
3. `git add <file>` — mark a file as ready to save.
4. `git commit -m "message"` — save it with a note.
5. `git push` — send it to GitHub.

### Hands-on: first commit (15 min)
1. Everyone clones this repo.
2. Opens `resources/welcome-wall.md`, adds one line: name + a topic they'd love to analyze.
3. `git add` → `git commit -m "..."` → `git push`.
4. Pull up the commit history together on GitHub.

If someone hits a merge conflict — likely, with everyone editing one file — walk one group through resolving it live. Better learned now than mid-project in week 10.

---

## 4. Wrap-up (5 min)
Recap in one line each: the field, the path, the five commands. Preview week 2: real Excel work on a dataset about what happens after people pick a major.

## Materials in this folder
- `slides/week-01-slides.pptx`
- `resources/github-quickstart-cheatsheet.md`
- `resources/welcome-wall.md`
