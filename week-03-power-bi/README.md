# Week 3: From Spreadsheet to Dashboard — Power BI

**Format:** Lesson + workshop · **Length:** ~75 minutes · **Slides:** `slides/week-03-slides.pptx`
**Dataset:** `data/recent-grads.csv` — same dataset as Week 2, on purpose (see below).

## Before the session — a logistics note, not optional
**Power BI Desktop is Windows-only.** Confirm this with members *before* the week, not when they open their laptops:
- Windows: install [Power BI Desktop](https://powerbi.microsoft.com/desktop/) — free.
- Mac: no native Power BI Desktop. Options, in order of preference: (1) pair Mac members with a Windows-laptop partner for this session, or (2) use the browser-based Power BI service, which is more limited but functional, or (3) if this becomes a recurring friction point across the semester, consider Tableau Public as a cross-platform alternative for future dashboard weeks — flag this to your Branch Lead rather than deciding it solo mid-session.

See `resources/power-bi-setup-notes.md` for the full breakdown.

## Session goals
Members should leave able to connect a data source, build 3–4 linked visuals, and use a filter/slicer — and should understand *why* a dashboard is a different deliverable than a spreadsheet finding, not just a prettier version of one.

---

## 0. Reconnect to last week (5 min)
Ask 2–3 people to state, in one sentence, the finding they landed on last week. Then reframe: *"That sentence is true, but if you handed someone a spreadsheet and said 'trust me,' they'd have to redo your work to believe you. A dashboard lets someone check your claim themselves, in about ten seconds. That's the whole point of today."*

---

## 1. Power BI orientation (15 min)
Live-demo, don't lecture from slides for this part:
1. **Get Data → import `recent-grads.csv`.**
2. Point out the three panes: **Report** (what you're building), **Data** (the table, same columns as last week), **Model** (relationships — only one table today, so skip this for now, but name it so it's not a mystery later when we join multiple tables).
3. Build one visual live, narrating every click: a bar chart of average `Median` salary by `Major_category`.
4. Add a second visual: a scatter plot of `ShareWomen` (x-axis) vs `Median` (y-axis), one dot per major. **Click a point** to show the built-in filtering/highlighting behavior across visuals — this single interaction is usually the "oh, I get it" moment for why BI tools exist.

---

## 2. Guided build (25 min)
Groups rebuild the two visuals above themselves, then add a third of their choice. Push them toward reusing **their own engineered column from last week** (Underemployment_rate) if they saved it — re-derive it in Power BI with a calculated column (`Underemployment_rate = DIVIDE([Non_college_jobs] + [Low_wage_jobs], [Employed])`) if they didn't bring last week's file. Add a **slicer** on `Major_category` so the whole dashboard can be filtered to one category at a time.

**Design note to give the room explicitly:** *"A chart that only you can interpret isn't a finding yet — it's a draft. Titles, labeled axes, and a one-line takeaway written near the chart are not decoration, they're the difference between a chart and a dashboard."*

---

## 3. Dashboards for a real audience (20 min)
Reconvene as one group. Put 2–3 dashboards on the projector. For each, ask the room (not just the presenting group): *"If you had never seen this dataset, what would you understand from this screen in the first five seconds?"* This is a critique exercise, not a grading one — the point is that members start evaluating dashboards the way an actual audience will, not the way the person who built it does.

Common fixes that come up almost every time, worth naming preemptively: unlabeled axes, a color scheme with no clear meaning, too many visuals competing for attention, a title that describes the chart type instead of the finding (*"Bar Chart of Salary"* vs. *"Engineering Majors Out-Earn Everything Else"*).

---

## 4. Wrap-up (5 min)
Preview: *"Week 4 is yours — same dataset, but this time you're choosing your own question from scratch, building the analysis in Excel and the dashboard in Power BI, and presenting it to the rest of the branch. Everything the last two weeks taught you, you'll now use without a script."*

## Materials in this folder
- `data/recent-grads.csv` — identical file to Week 2's, so groups can carry forward their Week 2 thinking
- `resources/power-bi-setup-notes.md`
- `slides/week-03-slides.pptx`
