# Week 2: Excel as a Real Analytical Tool

**Format:** Lesson + workshop · **Length:** ~75 minutes · **Slides:** `slides/week-02-slides.pptx`
**Dataset:** `data/recent-grads.csv` — read `data/data-dictionary.md` before the session, not during it.

## Session goals
Members should leave able to: build a pivot table to answer a specific question, write a formula that engineers a *new* column rather than just reading an existing one, and — the actual point of the week — generate their own analytical question instead of only answering a given one.

**Explicitly not a goal this week:** Excel mastery. This is intentionally lighter than a full Excel bootcamp — SQL and Python get more runway later in the semester. Today's version of Excel is "enough to think with a spreadsheet," not "every function that exists."

---

## 0. Reframe from last week (5 min)
Callback: *"Last week we talked about career paths in the abstract. Today's dataset is that conversation made literal — 173 real college majors, real employment and salary outcomes, from an actual national survey. By the end of today you'll have an opinion, backed by numbers, about something in here that's genuinely debatable."*

Open the file together. Don't explain every column yet — first ask: *"Skim the headers. What's one column whose exact meaning you're not sure of?"* Answer 2–3 out loud, then point to `data-dictionary.md` as the reference for the rest. (Reading a data dictionary before trusting a column is the actual lesson here — say that explicitly.)

---

## 1. Core Excel moves (25 min) — taught in service of a question, not as a feature tour

Don't teach a formula before posing the question it answers. Suggested order:

**a) Sort & filter (5 min)** — *"Which majors have the highest unemployment rate?"* Sort descending on `Unemployment_rate`. Immediately follow with: *"Now look at their Sample_size. Do you still trust this ranking?"* — this is the data-quality lesson from the dictionary, made concrete on-screen.

**b) A calculated column (10 min)** — *"Total graduates and employed graduates don't tell you what you actually want to know: how many end up in a job outside their field."* Build together:
```
Underemployment_rate = (Non_college_jobs + Low_wage_jobs) / Employed
```
This is feature engineering, plainly stated as such: *"You just built a column that didn't exist. That's most of what an analyst actually does — raw columns rarely answer the real question by themselves."*

**c) Pivot table (10 min)** — *"Group everything by Major_category. Which category has the best median salary? The best employment rate?"* Build a pivot table with `Major_category` as rows, `Median` and `Employed`/`Total` as values (averaged). Show how to add `Unemployment_rate` as a second value field to compare two things at once.

---

## 2. The relationship worth arguing about (15 min)

Have groups compute the correlation between `ShareWomen` (the share of graduates who are women) and `Median` salary, using `=CORREL(range1, range2)`.

**It's a real, meaningfully negative correlation.** Don't soften this or rush past it — let the room sit with it for a minute, then ask directly: *"What are three different explanations for this pattern that don't all boil down to 'discrimination' or 'coincidence'?"* Push for at least: differences in which *industries* different majors feed into, historical enrollment patterns by major, and the fact that correlation alone can't separate any of these from each other. **The goal of this segment is not to reach a conclusion.** It's to practice the instinct of asking "what else could explain this" before repeating a correlation as if it were a cause — that instinct is the actual skill.

---

## 3. Open exploration (25 min) — the heart of the session

Groups of 3–4. Prompt: **"Find one relationship in this dataset you didn't expect, using at least one column you had to build yourself."** Deliberately do not hand out a list of approved questions — if a group is stuck, point them to `docs/asking-better-analytical-questions.md` rather than giving them a question directly.

Float the room. Good signs a group is on track: they're building a new column, not just sorting existing ones; they can state their question as a sentence, not just "we're looking at X and Y." A group that finishes early should be pushed toward a second, harder question — ideally one requiring a second calculated column, not just a second chart.

**Last 5 minutes:** 2–3 groups briefly (60 seconds each) share what they found — not a full presentation, just a preview of the kind of share-out that becomes the whole point of week 4.

---

## 4. Wrap-up (5 min)
Name what happened today without saying "we learned pivot tables": *"You each found a real, specific claim in messy national data and you can defend it with a number. Next week we take this same data into Power BI and make that claim something you could show a room, not just a spreadsheet."*

## Materials in this folder
- `data/recent-grads.csv`, `data/data-dictionary.md`
- `scripts/fetch_dataset.py` — reproducible source of the dataset, rerun each semester to refresh
- `starter/week-02-starter.xlsx` — data pre-loaded, ready to work in
- `slides/week-02-slides.pptx`
