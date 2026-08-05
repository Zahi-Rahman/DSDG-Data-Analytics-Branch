# Tableau Cheat Sheet — Beginner to Intermediate

A working reference, not a tutorial. Keep this open while you work.

## The vocabulary, once

| Term | What it means |
|---|---|
| **Worksheet** | One single chart. A workbook has many. |
| **Dashboard** | Several worksheets combined onto one screen, often with shared filters. This is what you present. |
| **Story** | A sequence of dashboards/worksheets set up to walk through in order — useful for a narrative, less common than a plain dashboard. |
| **Dimension** | A qualitative field (category, name, date) — shows up blue in the Data pane. |
| **Measure** | A quantitative field (something you can sum, average, count) — shows up green in the Data pane. |
| **Shelf** | A drop target that builds structure — Rows, Columns, Filters, Pages. |
| **Marks card** | Controls how each data point looks — color, size, label, detail, tooltip. |
| **Pill** | A field once it's sitting on a shelf or card (named for the little pill shape). |

## Building your first chart

1. **Connect → Text File** (or Excel), pick your file.
2. Drag a **dimension** to Columns, a **measure** to Rows — Tableau picks a default chart type based on what you dropped.
3. Change the chart type from the **Marks card** dropdown (top of that card) if the default isn't what you want.
4. Drag a field onto **Color** on the Marks card to split the chart by category or shade it by a number.
5. Not sure what chart fits your data? Select your fields in the Data pane, then check **Show Me** (top right) — it grays out chart types that don't fit your selection.

## Common builds

| You want | Do this |
|---|---|
| Bar chart, one value per category | Dimension → Columns, Measure → Rows |
| Line chart over time | Date field → Columns, Measure → Rows, then right-click the date pill → choose the time granularity (Month, Quarter, Year) |
| Scatter plot (compare two measures) | Measure → Columns, a different Measure → Rows — one dot per row of your data |
| Split a chart by category | Drag the category field onto **Color** |
| Size dots/bars by a number | Drag a measure onto **Size** |
| Change what shows on hover | Drag a field onto **Tooltip** |

## Calculated fields

For a column that doesn't exist yet — same idea as an Excel formula.

Right-click in the Data pane → **Create → Calculated Field**.
```
Underemployment Rate = ([Non_college_jobs] + [Low_wage_jobs]) / [Employed]
```
The result becomes a new field you can drag onto any shelf like any other measure.

## Filters

- **Worksheet filter**: drag a field to the **Filters** shelf — affects only that one chart.
- **Dashboard filter**: right-click a field's pill on a sheet → **Show Filter**, then on the dashboard, click the filter's dropdown arrow → **Apply to Worksheets → All Using This Data Source**. Now one filter controls every chart on the dashboard at once.

## Building a dashboard

**Dashboard → New Dashboard.** Drag worksheets from the left panel onto the blank canvas. Resize by dragging edges. Add a filter (above) so viewers can slice everything at once instead of hunting through separate sheets.

Before you call it done, ask: does the main point read in five seconds? If someone has to hunt for it, simplify — fewer charts, bigger text on the number that matters most, or a title that states the finding instead of the chart type.

## Publishing (Tableau Public)

**Server → Save to Tableau Public.** Requires a free Tableau Public account. The workbook becomes visible to anyone with the link (and searchable in the public gallery) — don't publish anything with data you don't want public.

## Things that trip people up

- A field showing up as a **measure** when it should be a **dimension** (like a code that's actually a category, e.g. a ZIP code) — right-click the pill → **Convert to Dimension**.
- Aggregation defaults to **Sum**. For something like a rate or a median, right-click the pill on the shelf → **Measure (Sum)** → change it.
- A chart that looks broken after adding a field usually means a mark type mismatch — check the Marks card dropdown.
- Filters applied on one sheet don't affect others unless you explicitly extend them at the dashboard level (see Filters above).

## Where to see what "good" looks like

- [Tableau Public Gallery](https://public.tableau.com/app) — browse by topic, sorted by what's currently featured.
- [Makeover Monday](https://makeovermonday.co.uk/) — a weekly project where people rebuild the same chart better. Seeing five different takes on one dataset makes "good vs. busy" concrete fast.
