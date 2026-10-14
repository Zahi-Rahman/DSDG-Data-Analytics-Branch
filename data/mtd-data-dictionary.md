# Data Dictionary: mtd_transit.db

## Where this data came from

Downloaded from MTD's static GTFS feed at mtd.dev/gtfs.zip, on the Champaign-Urbana Mass Transit District's developer portal. The feed covers service from May 17, 2026 through December 19, 2026, which includes the semester this curriculum runs in.

The raw download is a zip file of eight text files. GTFS names its files with a .txt extension, and the contents are comma-separated. All eight files sit unedited in data/mtd-gtfs-raw/. Seven are loaded into mtd_transit.db. The table below lists each file.

## The eight raw files

| File | Data rows | Loaded into mtd_transit.db | Comments |
|---|---|---|---|
| agency.txt | 1 | Yes | One row, MTD's agency record |
| routes.txt | 90 | Yes | Core table |
| trips.txt | 8,222 | Yes | Core table |
| stops.txt | 1,936 | Yes | Core table |
| stop_times.txt | 321,337 | Yes | Core table, the largest one |
| calendar.txt | 514 | Yes | Core table |
| calendar_dates.txt | 17,281 | Yes | Core table |
| shapes.txt | 62,713 | No | Latitude and longitude points that trace each route on a map. Kept in the raw folder for future mapping work. This month's queries do not use it. |

Row counts exclude each file's header line.

## The seven tables in mtd_transit.db

**agency** (1 row). MTD's record: name, URL, timezone, contact info.

**routes** (90 rows). One row per route variant, such as TEAL and TEAL EVENING. route_id is the primary key. route_short_name is MTD's route number. One color can carry two numbers. TEAL is 12. TEAL EVENING, TEAL SATURDAY, and the five other Teal variants are 120. route_long_name is the route's name, such as Teal or Green Express. One route_long_name includes its number, 17 CHERRY. route_color is a hex code, and every variant of one color shares it. The feed has 20 colors.

**stops** (1,936 rows). stop_id, stop_name, stop_lat, stop_lon, plus fields for accessibility and grouping. Five rows are parent stations, with location_type 1: Illinois Terminal, Illini Union, Lincoln Square, Transit Plaza, and Round Barn Road. A parent station groups the boarding points at one site. Fifteen boarding points name their station in parent_station. The other 1,931 rows have location_type 0. Buses stop at boarding points, so the five parent stations have no rows in stop_times. The 1,936 stops share 1,925 distinct names, so one stop_name can cover more than one stop.

**calendar** (514 rows). One row per service pattern: which days of the week it runs, and the date range it's valid for. Primary key is service_id.

**calendar_dates** (17,281 rows). Specific date exceptions to a service pattern. exception_type 1 means service was added on that date. All 17,281 rows have exception_type 1. Foreign key back to calendar.service_id. The table has no primary key. Each pair of service_id and date appears once.

**trips** (8,222 rows). One row per scheduled trip: which route it belongs to, which service pattern determines when it runs, its headsign (the destination text riders see on the bus), and direction.

**stop_times** (321,337 rows). One row per stop, per trip: arrival time, departure time, and the stop's position in that trip's sequence. This is the largest table, and most multi-table queries pass through it. The table has no primary key. Each pair of trip_id and stop_sequence appears once.


## Data Troubles

**Trip IDs are ugly.** `[@7.0.41202550@][4][1248701836140]/1__GN2_NONUI_SA_merged_5074` is a real trip_id. 7,903 of the 8,222 trip_ids (96%) start with a bracketed code like this one. No exercise asks anyone to type one.

**Some arrival times pass midnight.** 13,953 stop_times rows have an arrival_time at or past 24:00:00, and the latest is 29:09:00. GTFS keeps counting hours past 24 for a trip that runs after midnight, so 25:00:00 means 1:00 a.m. on the next calendar day.

**Every weekday flag is 0.** All 514 service_ids have every day-of-week flag set to 0 in calendar.txt. The whole system runs from the dates listed in calendar_dates. Service follows the **academic calendar**. A Tuesday in July runs 1,402 trips. A Tuesday in September runs 1,933. Tuesday, November 24, in Thanksgiving week, runs 1,498.

## Initial Run

```sql
SELECT COUNT(*) AS services_with_zero_weekdays
FROM calendar
WHERE monday=0 AND tuesday=0 AND wednesday=0 AND thursday=0
  AND friday=0 AND saturday=0 AND sunday=0;
```

This returns 514, every service_id in the table. The weekday columns exist, and every value in them is 0. All scheduling happens through calendar_dates. Run this check before filtering on a weekday column. A filter such as WHERE monday = 1 returns zero rows.
