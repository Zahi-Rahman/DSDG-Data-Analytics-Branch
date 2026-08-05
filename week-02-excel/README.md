# Week 2: Excel as a Real Analytical Tool

**Format:** Lesson + workshop · **Length:** ~75 minutes · **Slides:** `slides/week-02-slides.pptx`
**Dataset:** `data/recent-grads.csv` — read `data/data-dictionary.md` first.

## Goals
Members can build a pivot table to answer a specific question, write a formula that creates a new column rather than reading an existing one, and generate their own question instead of only answering a given one.

Not a goal this week: Excel mastery. SQL and Python get more time later in the semester — today is "enough to think with a spreadsheet."

---

## 0. What Excel is actually for (5 min)
Before opening the file: Excel isn't a formatting tool, it's how most companies still do first-pass analysis. Analysts use it to check a claim in an afternoon, before anything gets built in SQL or a BI tool. It's often the fastest way to answer a question with under ~100K rows.

Callback to last week: today's dataset makes that conversation real — 173 majors, real employment and salary outcomes, from an actual national survey. By the end you'll have an opinion, backed by a number, about something in here.

Open the file together. Ask: "skim the headers — what's one column you're not sure about?" Answer 2–3 out loud, then point to `data-dictionary.md` for the rest.

---

## 1. Core Excel moves (25 min)

Pose the question before the formula.

**a) Sort & filter (5 min)** — Which majors have the highest unemployment rate? Sort descending. Then check `Sample_size` for those rows — same ranking, less trust?

**b) A calculated column (10 min)** — Total and employed graduates don't show how many end up outside their field. Build together:
```
Underemployment_rate = (Non_college_jobs + Low_wage_jobs) / Employed
```
That's feature engineering — a column that didn't exist. Most of an analyst's job is exactly this; raw columns rarely answer the real question alone.

**c) Pivot table (10 min)** — Group by `Major_category`. Which category has the best median salary? Best employment rate? Add `Unemployment_rate` as a second value field to compare two things at once.

---

## 2. The relationship worth arguing about (15 min)

Compute the correlation between `ShareWomen` and `Median` salary with `=CORREL(range1, range2)`.

It's a real, meaningfully negative correlation. Let the room sit with it, then ask: name three explanations for this pattern that aren't just "discrimination" or "coincidence." Push for at least: industry differences between majors, historical enrollment patterns, and the fact that correlation alone can't separate any of these. The point isn't a conclusion — it's the habit of asking what else could explain a pattern before repeating a correlation as a cause.

---

## 3. Open exploration (25 min)

Groups of 3–4. Prompt: find one relationship you didn't expect, using at least one column you built yourself. No approved question list. If a group is stuck, point them to `docs/asking-better-analytical-questions.md` rather than giving them a question.

Good sign: a group is building a column, not just sorting existing ones. Early finishers get pushed toward a second, harder question.

Last 5 minutes: 2–3 groups share what they found, 60 seconds each — a preview of what week 4 looks like at full scale.

---

## 4. Wrap-up (5 min)
Next week: same data, into Tableau — because a finding someone has to take your word for isn't a finding yet.

## Materials in this folder
- `data/recent-grads.csv`, `data/data-dictionary.md`
- `scripts/fetch_dataset.py` — reproducible source, rerun each semester
- `starter/week-02-starter.xlsx`
- `resources/excel-cheatsheet.md` — reference for the whole semester
- `slides/week-02-slides.pptx`
