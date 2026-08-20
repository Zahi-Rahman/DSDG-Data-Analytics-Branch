# Excel Cheat Sheet, Beginner to Intermediate

## What analysts actually use Excel for

| Real use case | Why Excel and not something heavier |
|---|---|
| Checking if a number looks right | Faster to eyeball 500 rows in Excel than write a query |
| First look at a new dataset | Sort, filter, and a pivot table show you the shape of the data in minutes |
| A one off analysis for a non-technical stakeholder | They can open the file themselves. No BI license, no code |
| Cleaning data before it goes into SQL or Python | Fixing obvious errors by hand is often faster at under about 50,000 rows |
| A quick model, like a budget or a projection | Formulas that recalculate live are the whole point |

Past a few hundred thousand rows, or once a report needs to update automatically and get shared with a team, that is the signal to move to SQL or a real BI tool. Knowing where that line sits is part of the skill.

## Formulas you will actually use

| Formula | What it does | Example |
|---|---|---|
| SUM, AVERAGE, COUNT, COUNTA | Basic aggregation | `=AVERAGE(B2:B100)` |
| COUNTIF, SUMIF | Aggregate with one condition | `=SUMIF(A:A,"Engineering",B:B)` |
| COUNTIFS, SUMIFS | Aggregate with multiple conditions | `=SUMIFS(C:C,A:A,"Engineering",B:B,">50000")` |
| IF | Branching logic | `=IF(B2>50000,"High","Low")` |
| IFS | Multiple branches without nesting IFs | `=IFS(B2>75000,"High",B2>40000,"Mid",TRUE,"Low")` |
| IFERROR | Catch errors cleanly | `=IFERROR(A2/B2,"n/a")` |
| VLOOKUP | Look up a value in a table. Works in every version of Excel. Set the last argument to FALSE for an exact match | `=VLOOKUP(A2,Sheet2!A:C,3,FALSE)` |
| INDEX and MATCH | Does the same job as VLOOKUP. More flexible, and does not break if a column moves | `=INDEX(C:C,MATCH(A2,A:A,0))` |
| XLOOKUP | A newer, cleaner lookup. Check that your Excel version supports it before relying on it in a shared file | `=XLOOKUP(A2,A:A,C:C)` |
| CONCATENATE or the `&` symbol | Join text together | `=A2&" - "&B2` |
| LEFT, RIGHT, MID, TRIM | Pull apart or clean up messy text | `=TRIM(LEFT(A2,5))` |
| TEXT | Format a number as text | `=TEXT(A2,"0.0%")` |

## Pivot tables

The fastest way to answer how something breaks down by category.

1. Select your data, then Insert, then PivotTable.
2. Drag a category field to Rows.
3. Drag a number field to Values. It defaults to Sum. Click to change it to Average, Count, or something else.
4. Drag a second category to Columns to cross tab two variables at once.
5. Drag a field to Filters so anyone reading it can slice the whole table interactively.

If you change the source data, right click the pivot table and choose Refresh. It does not update automatically.

## Cleaning data

| Task | How |
|---|---|
| Remove exact duplicate rows | Select the data, then Data, then Remove Duplicates |
| Split one column into several, for example "First Last" into two columns | Data, then Text to Columns |
| Find inconsistent entries, like typos or extra spaces | Data, then Filter, then check the dropdown list for near duplicates |
| Flag values worth a second look | Conditional Formatting. Color anything above or below a threshold instead of scanning by eye |
| Restrict what can be typed into a cell | Data, then Data Validation |

## Reference basics that trip people up

`$A$1` locks a reference so it does not shift when you copy a formula across cells. `$A1` locks only the column. `A$1` locks only the row.

A formula returning `#REF!` means it points at a cell that got deleted.

`#N/A` from a lookup usually means the lookup value does not exist in the source range exactly as typed. Check for extra spaces or a text versus number mismatch.

A circular reference warning means a formula refers to its own cell, directly or through a chain. Excel will point you to it. Do not ignore it.

## Keyboard shortcuts worth learning

| Shortcut, Windows then Mac | What it does |
|---|---|
| Ctrl+Shift+L --- Cmd+Shift+L | Toggle filters on the header row |
| Ctrl+Arrow key --- Cmd+Arrow key | Jump to the edge of a data block |
| Ctrl+Shift+Arrow --- Cmd+Shift+Arrow | Select to the edge of a data block |
| Ctrl+1 --- Cmd+1 | Open Format Cells |
| F4 (Windows only) | Toggle the dollar sign locks while editing a formula |
| Alt+= --- Cmd+Shift+T | Auto sum the selected range |
| Ctrl+; --- Cmd+; | Insert today's date |

## Using AI with spreadsheets

| Approach | What it looks like | Why it's useful |
|---|---|---|
| Built-in AI extensions | Copilot or Claude in Excel | Works directly inside the file |
| AI as an external tool | Paste a formula/dataset/question into a chatbot | Good for generating explanations |

## How to use AI as an external tool

| Task | How AI helps |
|---|---|
| Formula debugging | Paste a formula and get a working version and an explanation of how it works | 
| Data cleaning | Paste messy data and get the cleaned version | 
| Structuring a pivot table | Get guidance on what goes in the rows, columns, and values | 
