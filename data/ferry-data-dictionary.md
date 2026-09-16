# Data Dictionary: NYC Ferry Ridership

Source: NYC Open Data, "NYC Ferry Ridership." The data is provided by the New York City Economic Development Corporation (NYCEDC) and updates quarterly. Our files come from one export of the July 29, 2026 update, with the export file dated August 27, 2026. 

## Our files

| File | One row is | Rows | Size |
|---|---|---|---|
| nyc_ferry_daily.csv | One day at one landing, on one route, in one direction | 201,285 | 9.58 MiB |
| nyc_ferry_hourly.zip | One hour at one landing, on one route, in one direction | 2,977,929 | 12.76 MiB zipped, 172.45 MiB unzipped |

Both files cover July 1, 2017 through June 30, 2026. The hourly zip holds the export exactly as downloaded, renamed nyc_ferry_hourly.csv. The daily file is built from it by build_nyc_ferry_files.py, and its totals match the hourly file exactly: 52,351,104 boardings from 2,977,929 hourly rows.

NYC Ferry is New York City's public ferry network. Service began on May 1, 2017. The data counts how many people boarded at each landing, on each route and direction. In the park data, one row is one park unit. Here, one row is a slice of time at one landing.

## Reading one row

A daily row, exactly as written:

| Date | Route | Direction | Stop | TypeDay | Boardings | Hourly_Rows | Missing_Boardings_Rows |
|---|---|---|---|---|---|---|---|
| 2017-07-01 | ER | NB | Dumbo/BBP Pier 1 | Weekend | 1102 | 17 | 0 |

This row says that on Saturday, July 1, 2017, 1,102 boardings were recorded at Dumbo/BBP Pier 1 on northbound East River route boats. The total adds up 17 hourly rows, and none of them had an empty Boardings value.

An hourly row, exactly as written:

| Date | Hour | Route | Direction | Stop | Boardings | TypeDay |
|---|---|---|---|---|---|---|
| 06/30/2026 | 21 | RS | SB | Stuyvesant Cove | 7 | Weekday |

This row says that between 9:00 and 10:00 pm on Tuesday, June 30, 2026, 7 boardings were recorded at Stuyvesant Cove on southbound RS route boats.

## The daily file

### How it was built

1. Read every value of the export as text, so nothing changes on the way in.
2. Remove the comma from Boardings values like "1,682" and turn Boardings into numbers. Empty cells stay empty.
3. Rewrite Date as year-month-day, such as 2017-07-01. The export writes month/day/year, which a computer set to a day/month/year region can misread.
4. Add up Boardings for each date, route, direction, landing, and day type. Hour is the only column that goes away.
5. Count how many hourly rows went into each total, and how many of those had an empty Boardings value.
6. Leave a total empty when every hourly value behind it is empty, so it never reads as 0.
7. Sort from oldest date to newest, then by route, direction, and landing.
8. Check that the daily totals match the hourly file before writing the file.

### Columns

| Column | Type | Meaning |
|---|---|---|
| Date | Date | The day riders boarded, written year-month-day. |
| Route | Text | A two-letter route code. 10 codes appear. See the route code table. |
| Direction | Text | NB for northbound or SB for southbound. The text values "(blank)" and "Assist" also appear. See the data quality section. |
| Stop | Text | The ferry landing where riders boarded. 29 different values appear, one of which is the text "(blank)". See the landing names section. |
| TypeDay | Text | Weekday or Weekend, copied from the export. Weekend also covers holidays. The first year of data mislabels most weekends. See the data quality section. |
| Boardings | Whole number | Total boardings for that day, landing, route, and direction. Empty in 4 rows. |
| Hourly_Rows | Whole number | How many hourly rows were added up to make the total. |
| Missing_Boardings_Rows | Whole number | How many of those hourly rows had an empty Boardings value. Above 0 in 50 rows. |

## The hourly file

### How the CSV is written

- The header row is Date, Hour, Route, Direction, Stop, Boardings, TypeDay, in that order.
- Every value is wrapped in double quotes, including numbers.
- Dates are written month/day/year, such as 06/30/2026. Check a few dates after opening the file.
- Numbers of 1,000 or more are written with a comma, such as "1,682". Five Boardings values are written this way.
- Rows run from the newest date to the oldest.

### Columns

| Column | Type | Meaning |
|---|---|---|
| Date | Date | The day riders boarded. |
| Hour | Whole number | The hour riders boarded, in 24-hour time. A value of 6 covers all boardings from 6:00 to 7:00 am. Values are 0 and 5 through 23. Empty in 56 rows. |
| Route | Text | Same as the daily file. |
| Direction | Text | Same as the daily file. |
| Stop | Text | Same as the daily file. |
| Boardings | Whole number | The number of people who boarded in that hour, at that landing, on that route and direction. The source says this count includes off-duty NYC Ferry crew, free children, and transfers. A rider who transfers is counted at each boarding. Empty in 82 rows. |
| TypeDay | Text | Weekday or Weekend. |

## Route codes

The files store route codes with no route names. The names below come from the published history of NYC Ferry routes. For AS, SV, LE, SG, and RS, the first date in the file matches a published start or merge date exactly. For RR, it falls in the published start month. These matches support the names. Confirm the names against the official data dictionary attached to the dataset page before putting a route name in a chart title.

| Code | Daily rows | Hourly rows | First date | Last date | Route name | Notes |
|---|---|---|---|---|---|---|
| SB | 45,433 | 653,332 | 2017-07-01 | 2026-06-30 | South Brooklyn | |
| ER | 44,562 | 686,614 | 2017-07-01 | 2026-06-30 | East River | Began in 2011 under a different operator. |
| AS | 41,545 | 621,616 | 2017-08-29 | 2026-06-30 | Astoria | First date matches the published start date. |
| SV | 28,366 | 423,145 | 2018-08-15 | 2026-02-14 | Soundview | First date matches the published start date. Rows continue two months past the December 8, 2025 merge. |
| RW | 18,517 | 272,605 | 2017-07-01 | 2025-12-07 | Rockaway | Last date is the day before the published merge. |
| SG | 11,664 | 172,013 | 2021-08-23 | 2026-06-30 | St. George | First date matches the published start date. |
| LE | 6,280 | 92,459 | 2018-08-29 | 2020-05-17 | Lower East Side | Dates match the published start and May 2020 end. |
| RS | 3,008 | 41,582 | 2025-12-08 | 2026-06-30 | Rockaway-Soundview | First date matches the published merge date. |
| GI | 1,590 | 13,616 | 2018-06-30 | 2026-06-28 | Governors Island | Route history dates the separate shuttle to 2019. The code appears a year earlier. |
| RR | 320 | 947 | 2022-07-23 | 2025-09-01 | Rockaway Rocket | Summer service. Route history dates its start to July 2022. |

## Landing names

The files have 29 Stop values. One is "(blank)". The other 28 are landing names, and two landings appear under more than one name.

- Dumbo. "Dumbo/BBP Pier 1" is the name from July 1, 2017 through September 10, 2021. "Dumbo/Fulton Ferry" starts on September 11, 2021. Route history records the Dumbo landing moving from Brooklyn Bridge Park Pier 1 to Fulton Ferry in 2021. From October 2025 on, the name switches between "Dumbo/Fulton Ferry" and "Dumbo": "Dumbo" covers October 2025 and February 13, 2026 onward. A chart of any one Dumbo name alone shows drops to zero that did not happen. After the 2021 move, 13 more rows carry the Pier 1 name, all with 0 boardings.
- Governors Island. "Governors Island" is the name through August 26, 2018. "Gov. Island/Yankee Pier" starts on June 30, 2018, and both names appear on 2 dates in 2018. After 2018, 7 more rows carry the old name, all at hour 0 with 0 boardings.
- Start dates. Several landings first appear on their published opening dates, such as Astoria on August 29, 2017, the day the Astoria route began, and Brooklyn Navy Yard on May 20, 2019.
- Styles. Names mix styles, such as "East 34th Street" beside "East 90th St", and "Battery Park City/Vesey St." with a closing period.
- Abbreviations. BAT in "Sunset Park/BAT" refers to the Brooklyn Army Terminal. BBP refers to Brooklyn Bridge Park.

## Data quality issues found

1. Weekends labeled Weekday. Between July 1, 2017 and June 30, 2018, 99 of the 105 weekend dates carry the Weekday label. After June 30, 2018, no weekend date does. TypeDay cannot be trusted for the first year. Build a day-of-week column from Date to see this.

2. Holidays labeled Weekend. 83 dates that fall Monday through Friday carry the Weekend label, such as Thanksgiving and Memorial Day. The rule shifts over time. June 19 falls on a weekday from 2023 through 2026, and it carries the Weekend label in 2023 and 2026 and the Weekday label in 2024 and 2025.

3. Assist rows. Direction is "Assist" in 5 hourly rows, all on route ER, at hour 0, with Stop "(blank)", between March 8 and June 18, 2026. Together they hold 4,354 boardings, including the largest Boardings value in the dataset, 1,682. These boardings cannot be placed at a landing. The source does not explain "Assist."

4. "(blank)" stored as text. Direction is "(blank)" in 212 hourly rows, all with 0 boardings. Stop is "(blank)" in the 5 Assist rows. A check for empty cells misses all of these, since the cell holds text.

5. Numbers written with commas. In the hourly file, 5 Boardings values are written with a comma: the two largest Assist values and three landing rows from 2017 to 2019. Test how Tableau reads them. The daily file has no commas in numbers.

6. SB has two meanings. In Route, SB is a route code. In Direction, SB means southbound. A filter set to SB returns different rows depending on which column it is applied to.

7. Empty values. In the hourly file, Hour is empty in 56 rows, all with 0 boardings, and Boardings is empty in 82 rows. In the daily file, 50 rows include at least one hourly row with an empty Boardings value, and 4 rows have an empty total. Decide how to handle them before summing or averaging, and write the decision down.

8. Hour 0 and hour 23. Hours 1 through 4 never appear. Hour 0 has 228 hourly rows. It holds every Assist row, 164 of the "(blank)" Direction rows, most of the stray landing-name rows, and some 2018 rows with boardings. Hour 23 has 5 rows, all with 0 boardings. The source does not explain either hour.

9. Days with no service. 14 dates have no rows: February 1, 2021, and January 29 through February 10, 2026. On January 28, 2026, all 1,026 hourly rows show 0 boardings. Route history records a multi-week shutdown after a winter storm in late January 2026. Those zeros most likely mark a day without service, which is a different situation from a day when boats ran and nobody boarded.

10. Routes change over time. A route code can cover a different set of landings in different years. Any route comparison that spans a change in the route code table needs a note about it.

11. The data starts late. The files start on July 1, 2017, 61 days after service began.