# Tableau Cheat Sheet (Beginner to Intermediate)

## Vocabulary

| Term | What it means |
|---|---|
| Worksheet | One single chart. A workbook holds many. |
| Dashboard | Several worksheets combined onto one screen, often with a shared filter. This is what you present. |
| Story | A sequence of dashboards set up to walk through in order. Useful for a narrative, but less common than a plain dashboard. |
| Dimension | A qualitative field, like a category or a name. Shows up blue in the Data pane. |
| Measure | A quantitative field, something you can sum, average, or count. Shows up green in the Data pane. |
| Shelf | A drop target that builds structure. Rows, Columns, Filters, and Pages are all shelves. |
| Marks card | Controls how each data point looks. Color, size, label, detail, and tooltip all live here. |
| Pill | A field once it is sitting on a shelf or card, named for its rounded shape. |

## Building your first chart

1. Connect, then Text File, and pick your file.
2. Drag a dimension to Columns and a measure to Rows. Tableau picks a default chart type based on what you dropped.
3. Change the chart type from the dropdown at the top of the Marks card, if the default is not what you want.
4. Drag a field onto Color on the Marks card to split the chart by category or shade it by a number.
5. Not sure what chart fits your data? Select your fields in the Data pane, then check Show Me in the top right corner. It grays out any chart type that does not fit your selection.

## Common builds

| You want | Do this |
|---|---|
| A bar chart, one value per category | Dimension to Columns, Measure to Rows |
| A line chart over time | Date field to Columns, Measure to Rows. Right click the date pill to choose the time granularity, like Month or Year |
| A scatter plot comparing two measures | One measure to Columns, a different measure to Rows. One dot appears per row of your data |
| Splitting a chart by category | Drag the category field onto Color |
| Sizing dots or bars by a number | Drag a measure onto Size |
| Changing what shows on hover | Drag a field onto Tooltip |

## Calculated fields

For a column that does not exist yet. Same idea as an Excel formula.

Right click in the Data pane, then Create, then Calculated Field.

```
Pct Federal = [Subtotal_Federal_Acres] / [Gross_Area_Acres]
```

The result becomes a new field you can drag onto any shelf, just like any other measure.

## Filters

A worksheet filter affects only one chart. Drag a field to the Filters shelf.

A dashboard filter affects every chart on the dashboard at once. Right click a field's pill on a sheet and choose Show Filter. Then on the dashboard, click the filter's dropdown arrow, choose Apply to Worksheets, then All Using This Data Source.

## Building a dashboard

Go to Dashboard, then New Dashboard. Drag worksheets from the panel on the left onto the blank canvas. Resize by dragging the edges. Add a filter, using the steps above, so viewers can slice everything at once instead of hunting through separate sheets.

Before you call it done, ask if the main point reads in a couple seconds. If someone has to hunt for it, simplify. Fewer charts, bigger text on the number that matters most, or a title that states the finding instead of the chart type.

## Publishing, Tableau Public

Go to Server, then Save to Tableau Public. This requires a free account. The workbook becomes visible to anyone with the link, and it is searchable in the public gallery. Do not publish anything built on data you want to keep private.

## Things that trip people up

- A field can show up as a measure when it should really be a dimension, like a code that is actually a category. Right click the pill and choose Convert to Dimension.

- Aggregation defaults to Sum. For something like a rate or a median, right click the pill on the shelf, then change it from Measure (Sum) to the aggregation you actually want.

- A chart that looks broken after adding a field usually means a mark type mismatch. Check the dropdown at the top of the Marks card.

- A filter applied on one sheet does not affect the others unless you explicitly extend it at the dashboard level, using the Filters steps above.

## * Where to see what good looks like 

The Tableau Public Gallery at public.tableau.com/app. Browse by topic, sorted by what is currently featured.

Makeover Monday at makeovermonday.co.uk. A weekly project where people rebuild the same chart to make it better. Seeing five different takes on one dataset makes the gap between good and busy concrete fast.
