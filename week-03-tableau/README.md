# Week 3: From Spreadsheet to Dashboard, Tableau

Format: Lesson and workshop. Length: about 75 minutes. Slides: slides/week-03-slides.pptx
Dataset: data/nps_units.csv, the same file as week 2.

## Setup

Tableau Public is free and works on both Mac and Windows. Install it before the session at public.tableau.com.

One trade off worth knowing: Tableau Public saves your workbook to Tableau's own public servers, visible to anyone with the link. That is fine for this dataset, since it is already public government data. Mention it to the room anyway, so nobody publishes something later in the semester that they meant to keep private.

## Goals

Members can connect a data source, build a small set of linked visuals, and use a filter. They can explain why a dashboard is a different kind of deliverable than a spreadsheet finding, not just a nicer looking version of one.

## 1. What analysts actually build dashboards for (10 min)

Two different jobs. Mixing them up is the most common mistake people make.

Executive dashboards get looked at for seconds, not minutes. High level numbers, a clear trend, an obvious sense of whether something is good or bad. Built to be glanced at during a meeting.

Analyst dashboards get worked in actively. Filtered, drilled into, compared against each other. Built for someone hunting down the specific reason a number moved.

Know which one you are building before you open Tableau.

What tends to separate a genuinely good dashboard from a busy one:

- The main point is readable in five seconds. If someone has to study it, fix the format, do not blame the audience.
- Five to nine key numbers on screen. More than that and nothing stands out.
- Every number has something to compare against, a target, a prior period, another category.
- The most important number is the biggest and sits top left, since that is where eyes land first.
- No 3D charts, and no chart chosen because it looks impressive. The simplest chart that makes the point wins.

Worth looking at before you build anything: the Tableau Public gallery at public.tableau.com/app, and a project called Makeover Monday at makeovermonday.co.uk, where people rebuild the same chart every week to make it better. Seeing five different takes on one dataset makes the difference between good and busy obvious in a way a slide cannot.

## 2. Tableau orientation (15 min)

Live demo, do not lecture from slides for this part.

1. Connect, then Text File, then nps_units.csv.
2. Point out the Data pane on the left. Dimensions on top, in blue. Measures below, in green.
3. Build one chart live. Drag Designation to Columns, Gross_Area_Acres to Rows. Right click the measure and switch the aggregation to Average.
4. New sheet. Drag Region to Columns, average Gross_Area_Acres to Rows. Color by Region. Point at the Alaska bar and let the room react.

## 3. Guided build (25 min)

Groups rebuild both charts, then combine them onto a new Dashboard, not a new worksheet. Add a filter on Designation and apply it to every sheet on the dashboard at once, using the dashboard's filter menu.

If a group built a calculated column last week, rebuild it here as a Tableau calculated field. Right click in the Data pane, then Create, then Calculated Field.

```
Pct_Federal = [Subtotal_Federal_Acres] / [Gross_Area_Acres]
```

Every chart needs a title that states the finding, not the chart type. "Alaska Units Dwarf Everything Else," not "Bar Chart of Acreage."

## 4. Dashboards for a real audience (15 min)

Put two or three dashboards on the projector. Ask the whole room, not just the group that built it: what would you understand from this in five seconds, cold?

This is critique, not grading. The point is that members start judging dashboards the way a real audience will.

Fixes that come up almost every time: unlabeled axes, a color scheme with no clear meaning, too many charts fighting for attention, a title that names the chart type instead of the finding.

## 5. Wrap up (5 min)

Week 4 belongs to the members. Same dataset, their own question, Excel and Tableau together, no script to follow.

## Materials in this folder

- data/nps_units.csv, the same file as week 2
- slides/week-03-slides.pptx
