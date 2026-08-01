# Week 1: What This Branch Is, What This Field Is, and Your First Commit

**Format:** Lesson + hands-on · **Length:** ~75 minutes · **Slides:** `slides/week-01-slides.pptx`

## Session goals
By the end, members should be able to: (1) explain the difference between data analytics, data science, and the other data-adjacent roles in one sentence each, (2) name where this branch leads if they want to go further, and (3) clone a repo, make a commit, and push it — the one hands-on skill that unlocks every week after this.

---

## 0. Welcome (5 min)
Quick intros if the group is small enough (name, major, year, one dataset/topic they'd love to analyze if they could). If the group is large, skip individual intros and instead ask for a show of hands: who's used Excel seriously, who's touched SQL, who's written any code at all. **Don't skip this poll** — it tells you in real time whether this room needs the slower or faster version of the GitHub section later.

Frame the semester in one breath: *"This branch is not about memorizing tools. It's about learning to ask a good question of a messy dataset and defend your answer — SQL, Python, and Excel are just how you'll practice that. We'll build toward a capstone you present to the whole club at the end of the semester."*

---

## 1. Data Analytics vs. Data Science vs. everything else (15 min)

Don't lecture straight through this — ask the room to guess first. Write four role names on the board (Data Analyst, Data Scientist, Data Engineer, Consultant) and ask people to guess what each does before you explain. It sticks better than being told.

**The rough distinction** (say explicitly that real job titles are messier than this and overlap a lot):
- **Data Analyst** — takes data that mostly already exists, answers a specific business question with it, communicates findings. Backward-looking: *what happened, and why?*
- **Data Scientist** — often builds predictive models, works with messier/larger data, more comfortable in code full-time. Forward-looking: *what's likely to happen next?*
- **Data Engineer** — builds and maintains the pipelines and infrastructure that get data into a usable state in the first place. The analyst and scientist's work depends on this being done well.
- **Consultant** (tie directly to our own branch structure here) — takes analysis like what we're about to learn and packages it for a client alongside a business recommendation, often with people from several disciplines (which is exactly what our AI/ML, Product Design, and Consulting branches do together).

**The honest through-line:** all four need the same foundation — SQL, some statistics, and the ability to explain a finding to someone who wasn't in the room when you found it. That foundation is this branch. Where you go from here (Analyst-track roles, a Data Scientist-focused path, or an application to our Consulting branch) is a later decision, not one you need to make in week 1.

---

## 2. Career paths and outcomes (15 min)

Keep this grounded in real numbers, not vibes — pull current stats if you have them (ask your Branch Lead for the latest figures each semester; hiring data shifts). As of this curriculum being written: SQL and Excel show up in the large majority of entry-level analyst postings, Python is a fast-growing differentiator rather than a strict requirement, and communicating a finding clearly is named almost as often as any technical tool.

**Say this part explicitly:** *"Every project you do in this branch — starting with next week — uses real data, not textbook data, because that's what gets you hired. A polished analysis of a real, slightly messy dataset is a stronger portfolio piece than a perfect analysis of a toy one."*

**Connect it to our own pipeline:** this branch's curriculum is deliberately built as an on-ramp — if the Consulting branch interests you, doing well here (and specifically, building a strong capstone at the end of the semester) is the most direct path there.

*(Optional hook for next week, if time allows: mention that Week 2's dataset is literally about what happens to people after they pick a major — real earnings and employment data across 173 majors, including some surprising, debatable patterns. Don't give away the findings — just tease that there's something in there worth arguing about.)*

---

## 3. GitHub quickstart (30 min) — hands-on

**Framing before you start:** *"You do not need to understand git deeply today. You need five commands you'll use almost every week, so the goal today is muscle memory, not mastery — we'll build on this all semester."*

### Setup (5 min)
Everyone needs: a free GitHub account (github.com/join) and git installed (pre-installed on Mac/Linux; Windows users need [Git for Windows](https://gitforwindows.org)). Do this check *before* the session via a reminder message, not during — installs eat time unpredictably.

### The five commands (10 min)
Walk through `resources/github-quickstart-cheatsheet.md` on screen. Explain each in one sentence before showing it:
1. `git clone <url>` — copy a repo to your computer, once.
2. `git pull` — get the latest version before you start working, every time.
3. `git add <file>` — mark a file as ready to save.
4. `git commit -m "message"` — actually save it, with a note on what changed.
5. `git push` — send your saved changes back up to GitHub.

### Hands-on: everyone's first commit (15 min)
1. Everyone clones this repo.
2. Everyone opens `resources/welcome-wall.md` and adds one line: their name + one dataset or topic they'd love to analyze.
3. `git add`, `git commit -m "Add <name> to welcome wall"`, `git push`.
4. Pull up the repo's commit history on GitHub together and point out: *"Every single one of those lines up there is a real commit one of you just made. This is the exact workflow you'll use to turn in every project this semester."*

**If someone gets a merge conflict** (likely, with everyone editing the same file at once) — good, don't route around it. Walk one group through resolving it live; it's a real skill and better learned now, low-stakes, than mid-project in week 10.

---

## 4. Wrap-up (5 min)
Recap in one sentence each: *the field, the path, the five commands.* Preview week 2: real Excel work, on a dataset about what actually happens to people after they pick a major — including at least one relationship in the data most people find genuinely surprising.

## Materials in this folder
- `slides/week-01-slides.pptx` — companion deck
- `resources/github-quickstart-cheatsheet.md` — the five-command reference, keep this linked all semester
- `resources/welcome-wall.md` — the hands-on commit target for section 3
