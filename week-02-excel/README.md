# Week 2: Excel as a Real Analytical Tool

Format: Lesson and workshop. Length: about 75 minutes. Slides: slides/week-02-slides.pptx
Dataset: data/nps_units.csv. Read data/data-dictionary.md first.

## Goals

Members can build a pivot table to answer a specific question. They can write a formula that creates a new column instead of just reading an existing one. Most importantly, by the end of the session they can come up with their own question, not just answer one they were handed.

This week is intentionally lighter than a full Excel course. SQL and Python get more time later in the semester. Today is about being able to think with a spreadsheet, not mastering every Excel feature that exists.

## 0. What Excel is actually for (5 min)

Before opening the file, say this plainly: companies still use Excel for first pass analysis all the time. An analyst checks a claim in an afternoon with Excel, long before anyone builds it into SQL or a dashboard. It is usually the fastest way to get an answer when the data is under about 100,000 rows.

Today's dataset covers all 410 units the National Park Service manages. Most people only know the famous parks. By the end of today, your group will know something about this system that almost nobody else on campus knows.

Open the file together. Ask the room: skim the column names. Which one are you not sure about? Answer two or three out loud, then point to the data dictionary for the rest.

## 1. Core Excel moves (25 min)

Ask the question first. Show the formula second.

a) Sort and filter (5 min). Sort by Gross_Area_Acres. Look at the smallest units and the largest. The smallest is a fraction of an acre. The largest is over eight million. Ask the room what they think explains a gap that size.

b) A calculated column (10 min). Build this together:

Pct_Federal = Subtotal_Federal_Acres / Gross_Area_Acres

State it plainly: you just built a column that did not exist. That is most of what an analyst does all day. The raw columns rarely answer the real question by themselves.

c) Pivot table (10 min). Group by Designation. Which type of unit has the most land on average? Add Region as a second row field and compare across regions too.

## 2. The relationship worth arguing about (15 min)

Have groups compute the median Gross_Area_Acres for Alaska units and for everywhere else, using AVERAGEIF or a quick filter and manual check.

The Alaska median is close to 1.4 million acres. The median for the rest of the country is under 2,000 acres. That is roughly a 900 times difference.

Ask the room directly: does this mean Alaska's parks matter more, or does it mean a handful of enormous outliers are distorting anything we calculate using the whole dataset at once? Push for a real answer, not just a shrug. This is the same lesson as looking at mean versus median. A dataset with a few extreme values can make an average lie to you, and the only way to catch it is to check.

## 3. Open exploration (25 min)

Groups of three or four. The prompt: find one relationship in this dataset you did not expect, using at least one column you built yourself.

Do not hand out an approved list of questions. If a group is stuck, point them to docs/asking-better-analytical-questions.md instead of giving them a question directly.

Good signs a group is on track: they are building a new column, not just sorting an existing one. They can state their question as a full sentence. A group that finishes early should be pushed toward a second, harder question, ideally one that needs a second calculated column.

Last five minutes: two or three groups share what they found, sixty seconds each. This is a small preview of what week four looks like at full scale.

## 4. Wrap up (5 min)

Next week, this same dataset goes into Tableau. A finding that someone has to take your word for is not a finding yet. Bring whatever you built today. Your calculated columns carry forward.

## Materials in this folder

- data/nps_units.csv and data/data-dictionary.md
- slides/week-02-slides.pptx
