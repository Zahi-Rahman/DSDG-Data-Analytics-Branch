# Data Dictionary — `recent-grads.csv`

**Source:** FiveThirtyEight, [`college-majors`](https://github.com/fivethirtyeight/data/tree/master/college-majors) repo, originally built from American Community Survey data for the story *"The Economic Guide to Picking a Major."*
**Grain:** one row per undergraduate major (173 majors total).

Reading a data dictionary before opening the file is a habit, not a formality — professional analysts always check what a column actually measures before trusting it.

| Column | Meaning |
|---|---|
| `Rank` | Major's rank by median salary (1 = highest) — already computed, not something to reverse-engineer |
| `Major_code`, `Major` | Federal major code and full major name |
| `Major_category` | Broader grouping (e.g., Engineering, Business, Arts) — 16 categories total |
| `Total`, `Men`, `Women` | Total graduates and the gender breakdown |
| `ShareWomen` | Women as a share of total graduates (0–1) |
| `Sample_size` | How many survey respondents this row is based on — **small values mean less reliable stats. Ranges from 2 to 4,212 in this file.** |
| `Employed`, `Unemployed`, `Unemployment_rate` | Employment status among people in the labor force |
| `Full_time`, `Part_time`, `Full_time_year_round` | Employment type breakdown |
| `College_jobs` | Employed in a job that typically requires a college degree |
| `Non_college_jobs` | Employed in a job that typically doesn't require one |
| `Low_wage_jobs` | Employed in a job below a low-wage threshold |
| `Median`, `P25th`, `P75th` | Median, 25th-percentile, and 75th-percentile salary in USD |

## A flag worth building into your analysis, not skipping past

32 of the 173 majors have a `Sample_size` under 30 — standard statistics practice treats that as too small to trust a summary statistic like a median. One row is even based on a sample of 2 graduates. A major's salary figure and its reliability are two different questions, and a good analysis answers both. This is exactly the kind of thing a toy/cleaned classroom dataset wouldn't force you to notice — real data makes you decide how much to trust it.
