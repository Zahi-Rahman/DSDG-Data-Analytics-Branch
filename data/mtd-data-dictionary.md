# Data Dictionary: mtd_transit.db

## Where this data came from

Downloaded directly from MTD's official GTFS static feed at mtd.dev/gtfs.zip, the Champaign-Urbana Mass Transit District's own developer portal. The feed covers service from May 17, 2026 through December 19, 2026, so this is live data for the actual semester this curriculum runs in.

The raw download is a zip file containing eight text files, all comma-delimited despite the .txt extension. Every one of those eight files sits unedited in data/mtd-gtfs-raw/, including the one not loaded into the database. What follows explains exactly what got used and what didn't, and why.

## The eight raw files

| File | Rows | Loaded into mtd_transit.db | Comments |
|---|---|---|---|
| agency.txt | 1 | Yes | One row, MTD's own agency record |
| routes.txt | 90 | Yes | Core table |
| trips.txt | 8,222 | Yes | Core table |
| stops.txt | 1,936 | Yes | Core table |
| stop_times.txt | 321,337 | Yes | Core table, the largest one |
| calendar.txt | 514 | Yes | Core table |
| calendar_dates.txt | 17,281 | Yes | Core table |
| shapes.txt | 62,714 | No | Geometry points for drawing routes on a map. Real, kept in the raw folder, just not relevant to SELECT, WHERE, JOIN, and GROUP BY, which is what this month teaches. Useful in future mapping applications.  |

## The seven tables in mtd_transit.db

**agency** (1 row). MTD's own record: name, URL, timezone, contact info.

**routes** (90 rows). One row per route variant. route_id is the primary key, route_short_name groups related variants (for example, every "Teal" schedule variant shares short_name 120), route_long_name is the human-readable color name.

**stops** (1,936 rows). stop_id, stop_name, stop_lat, stop_lon, and a handful of accessibility and grouping fields. A small number of stops (5) are parent stations with child stops linked through parent_station. Most are not.

**calendar** (514 rows). One row per service pattern: which days of the week it runs, and the date range it's valid for. Primary key is service_id.

**calendar_dates** (17,281 rows). Specific date exceptions to a service pattern. exception_type 1 means service was added on that date. Foreign key back to calendar.service_id.

**trips** (8,222 rows). One row per scheduled trip: which route it belongs to, which service pattern determines when it runs, its headsign (the destination text riders see on the bus), and direction.

**stop_times** (321,337 rows). One row per stop, per trip: arrival time, departure time, and the stop's position in that trip's sequence. This is the largest table by far, and the one most queries will eventually touch.


## Data Troubles

**Trip IDs are ugly.** Something like `[@7.0.41202550@][4][1248701836140]/1__GN2_NONUI_SA_merged_5074` is a real trip_id, an artifact of the scheduling software MTD's feed was exported from. 96% of trips look like this. 

**Some arrival times pass midnight.** A trip that starts before midnight and keeps running uses times like 25:00:00 or higher rather than rolling over to a new date, a GTFS convention.

**Nobody's service runs on a simple weekly pattern here.** Every single one of the 514 service_ids has every day-of-week flag set to zero in calendar.txt. The entire system runs off specific dates listed in calendar_dates instead. This tracks with how a university town's transit schedule actually works, tied to the **academic calendar** rather than a plain Monday-through-Friday pattern.

## Initial Run

```sql
SELECT COUNT(*) AS services_with_zero_weekdays
FROM calendar
WHERE monday=0 AND tuesday=0 AND wednesday=0 AND thursday=0
  AND friday=0 AND saturday=0 AND sunday=0;
```

This returns 514, every service_id in the table. calendar.txt's weekly pattern is present in the file but functionally unused. All real scheduling happens through calendar_dates. Run this before writing a single query that filters on day of week, or the query will silently return nothing useful.
