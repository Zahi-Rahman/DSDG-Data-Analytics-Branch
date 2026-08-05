# Excel Cheat Sheet — Beginner to Intermediate

A working reference, not a tutorial. Keep this open while you work.

## What analysts actually use Excel for

Not formatting spreadsheets — checking a claim fast, before anything gets built in SQL or a BI tool.

| Real use case | Why Excel and not something heavier |
|---|---|
| "Does this number look right?" gut-check | Faster to eyeball 500 rows in Excel than write a query |
| First look at a new dataset | Sort, filter, and a pivot table tell you the shape of the data in minutes |
| A one-off analysis for a non-technical stakeholder | They can open it themselves — no BI license, no code |
| Cleaning data before it goes into SQL or Python | Fixing obvious errors is often faster by hand at under ~50K rows |
| A quick model (budget, projection, what-if) | Formulas that recalculate live are the whole point |

Past a few hundred thousand rows, or once a report needs to update automatically and get shared with a team, that's the signal to move to SQL or a real BI tool. Knowing that line is part of the skill.

## Formulas you'll actually use

| Formula | What it does | Example |
|---|---|---|
| `SUM`, `AVERAGE`, `COUNT`, `COUNTA` | Basic aggregation | `=AVERAGE(B2:B100)` |
| `COUNTIF`, `SUMIF` | Aggregate with one condition | `=SUMIF(A:A,"Engineering",B:B)` |
| `COUNTIFS`, `SUMIFS` | Aggregate with multiple conditions | `=SUMIFS(C:C,A:A,"Engineering",B:B,">50000")` |
| `IF` | Branching logic | `=IF(B2>50000,"High","Low")` |
| `IFS` | Multiple branches without nesting IFs | `=IFS(B2>75000,"High",B2>40000,"Mid",TRUE,"Low")` |
| `IFERROR` | Catch errors cleanly | `=IFERROR(A2/B2,"n/a")` |
| `VLOOKUP` | Look up a value in a table (works everywhere) | `=VLOOKUP(A2,Sheet2!A:C,3,FALSE)` — the `FALSE` matters, it forces an exact match |
| `INDEX` / `MATCH` | Same job as VLOOKUP, more flexible, doesn't break if columns move | `=INDEX(C:C,MATCH(A2,A:A,0))` |
| `XLOOKUP` | Newer, cleaner lookup — **check your Excel version supports it before relying on it in shared files** | `=XLOOKUP(A2,A:A,C:C)` |
| `CONCATENATE` / `&` | Join text | `=A2&" - "&B2` |
| `LEFT`, `RIGHT`, `MID`, `TRIM` | Pull apart or clean messy text | `=TRIM(LEFT(A2,5))` |
| `TEXT` | Format a number as text | `=TEXT(A2,"0.0%")` |

## Pivot tables

The fastest way to answer "how does X break down by Y."

1. Select your data → **Insert → PivotTable**.
2. Drag a category field to **Rows**.
3. Drag a number field to **Values** (defaults to Sum — click to change to Average, Count, etc.).
4. Drag a second category to **Columns** to cross-tab two variables at once.
5. Drag a field to **Filters** to let anyone reading it slice the whole table interactively.

If you change the source data, right-click the pivot table → **Refresh** — it doesn't update automatically.

## Cleaning data

| Task | How |
|---|---|
| Remove exact duplicate rows | Select data → **Data → Remove Duplicates** |
| Split one column into several (e.g., "First Last" → two columns) | **Data → Text to Columns** |
| Find inconsistent entries (typos, extra spaces) | **Data → Filter**, then check the dropdown list for near-duplicates |
| Flag values worth a second look | **Conditional Formatting** — color anything above/below a threshold instead of scanning by eye |
| Restrict what can be typed into a cell | **Data → Data Validation** |

## Reference basics that trip people up

- `$A$1` locks a reference so it doesn't shift when you copy a formula across cells. `$A1` locks only the column, `A$1` locks only the row.
- A formula returning `#REF!` means it points at a cell that got deleted.
- `#N/A` from a lookup usually means the lookup value doesn't exist in the source range exactly as typed — check for extra spaces or a text-vs-number mismatch.
- A circular reference warning means a formula refers to its own cell, directly or through a chain — Excel will point you to it, don't ignore it.

## Keyboard shortcuts worth learning

| Shortcut (Windows / Mac) | Does |
|---|---|
| `Ctrl+Shift+L` / `Cmd+Shift+L` | Toggle filters on the header row |
| `Ctrl+Arrow key` / `Cmd+Arrow key` | Jump to the edge of a data block |
| `Ctrl+Shift+Arrow` / `Cmd+Shift+Arrow` | Select to the edge of a data block |
| `Ctrl+1` / `Cmd+1` | Open Format Cells |
| `F4` (Windows) | Toggle `$` locks while editing a formula |
| `Alt+=` / `Cmd+Shift+T` | Auto-sum the selected range |
| `Ctrl+;` / `Cmd+;` | Insert today's date |
