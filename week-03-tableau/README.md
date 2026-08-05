# Week 3: From Spreadsheet to Dashboard — Tableau

**Format:** Lesson + workshop · **Length:** ~75 minutes · **Slides:** `slides/week-03-slides.pptx`
**Dataset:** `data/recent-grads.csv` — same file as Week 2, on purpose.

## Setup
[Tableau Public](https://public.tableau.com/) is free and works on both Mac and Windows — install it before the session, not during. No license, no account approval wait, so this should be a non-issue if sent out a few days ahead.

One real trade-off worth knowing: Tableau Public saves workbooks to Tableau's public servers, visible to anyone. Fine for this dataset (it's already public data). Worth a one-line mention to the room so nobody publishes something they'd rather keep private later in the semester.

## Goals
Members can connect a data source, build a small set of linked visuals, and use a filter — and can explain why a dashboard is a different deliverable than a spreadsheet finding, not just a prettier version of one.

---

## 0. Reconnect to last week (5 min)
Ask 2–3 people to state last week's finding in one sentence. Then: a spreadsheet finding requires someone to trust you. A dashboard lets them check it themselves in about ten seconds.

## 1. What analysts actually build dashboards for (10 min)

Two different jobs, and mixing them up is the most common mistake:

- **Executive dashboards** get looked at for seconds, not minutes. High-level KPIs, a clear trend, an obvious "is this good or bad." Built to be consumed passively — someone glances at it during a meeting, not explored.
- **Analyst dashboards** get worked in actively — filtered, drilled into, cross-referenced. Built for someone hunting for the specific reason a number moved.

A dashboard trying to be both usually fails at both. Know which one you're building before you open Tableau.

What tends to separate a genuinely good dashboard from a busy one:
- The main point is readable in five seconds. If someone has to study it, the format is wrong, not the audience.
- 5–9 key numbers on screen, not 20. More than that and nothing stands out.
- Every number has something to compare against — a target, a prior period, another category. "3.2%" means nothing alone.
- Most important number biggest and top-left — that's where eyes land first.
- No 3D charts, no chart type chosen because it looks impressive. The simplest chart that makes the point wins.

**Worth looking at before you build:** [Tableau Public's gallery](https://public.tableau.com/app) and the [Makeover Monday](https://makeovermonday.co.uk/) project — a weekly community exercise where people rebuild the same chart well. Skimming a few makes the difference between a good and busy dashboard concrete in a way a slide can't.

## 2. Tableau orientation (15 min)
Live-demo, don't lecture from slides:
1. **Connect → Text File →** `recent-grads.csv`.
2. Point out the **Data pane** (left: Dimensions on top, Measures below), and the blank **View** in the center.
3. Build one chart live: drag `Major_category` to Columns, `Median` to Rows. Right-click `Median` → change aggregation to Average.
4. Drag `ShareWomen` to Columns and `Median` to Rows on a new sheet — a scatter, one dot per major. Drag `Major_category` onto **Color** on the Marks card.

## 3. Guided build (25 min)
Groups rebuild both charts, then combine them onto a **Dashboard** (new dashboard, not worksheet — drag both sheets onto it). Add a filter: right-click `Major_category` in one sheet → **Show Filter**, then use the dashboard's filter menu to apply it to all sheets at once.

If a group brought their Week 2 engineered column, have them rebuild it as a **calculated field**: right-click in the Data pane → **Create → Calculated Field**.
```
[Non_college_jobs] + [Low_wage_jobs] / [Employed]
```
Every chart needs a title that states the finding, not the chart type — "Engineering Out-Earns Everything Else," not "Bar Chart of Salary."

## 4. Dashboards for a real audience (15 min)
Put 2–3 dashboards on the projector. Ask the room, not just the presenting group: what would you understand from this in five seconds? This is critique, not grading — the point is that members start evaluating dashboards the way a real audience will.

Fixes that come up almost every time: unlabeled axes, a color scheme with no clear meaning, too many charts competing for attention, a title that names the chart type instead of the finding.

## 5. Wrap-up (5 min)
Week 4 is theirs: same dataset, their own question, Excel and Tableau together, no script.

## Materials in this folder
- `data/recent-grads.csv`
- `resources/tableau-cheatsheet.md` — reference for the whole semester
- `slides/week-03-slides.pptx`
