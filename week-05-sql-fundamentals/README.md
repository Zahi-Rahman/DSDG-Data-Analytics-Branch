# Week 5: SQL Fundamentals, Querying Like an Analyst

Format: Lesson and hands-on. Length: about 75 minutes. Slides: to be added.
Dataset: ../data/mtd_transit.db. Read ../data/mtd-data-dictionary.md first. Tool: DB Browser for SQLite, free, at sqlitebrowser.org. Install before the session.

## Goals

Members can write a SELECT statement that filters, sorts, and limits rows. They can use an aggregate function with GROUP BY to summarize data instead of reading it row by row. They understand why SQL exists as a separate skill from Excel, not a harder version of the same thing.

This week works entirely inside single tables, mostly stops and trips. That is deliberate. Multi-table JOINs are the entire subject of week 6, and trying to teach both at once teaches neither well.

## 0. Reconnect and reframe (10 min)

Callback: the last two months, everything happened inside one flat file, because Excel and Tableau both expect that. Say plainly: most real company data does not live in one flat file. It lives in a database with many linked tables, and SQL is the language for getting data out of that structure. Excel and Tableau are what you do after SQL, not instead of it.

Tell the actual story of this month's data, briefly: this is the real, current GTFS feed for MTD, the bus system most of you already ride for free with your i-Card, downloaded straight from their developer site. Eight files came in the download. Seven are loaded into today's database. The eighth, shapes.txt, is map-drawing geometry, real and kept in the repo, just not relevant to the querying skills this month teaches. Nothing was hidden, some of it just was not useful for this particular lesson.

Open DB Browser for SQLite together. Point out the Browse Data tab, where you can click through tables like a spreadsheet, and the Execute SQL tab, where the actual querying happens. Open the stops and trips tables on Browse Data first, no query yet. Members will live in Execute SQL for the rest of the semester.

## 1. SELECT, WHERE, ORDER BY (25 min)

Live demo, one clause at a time, building up a single query rather than presenting the final version first.

```sql
SELECT stop_name, stop_lat, stop_lon FROM stops;
```

Run it. All 1,936 stops. Add sorting to find the edges of the system:

```sql
SELECT stop_name, stop_lat FROM stops
ORDER BY stop_lat DESC
LIMIT 5;
```

The northernmost stops. Flip it for southernmost, then do the same with stop_lon for the easternmost and westernmost. Ask the room what part of Champaign-Urbana they'd guess each one is in before running it.

Add a real filter, using a field almost every stop shares the same value for:

```sql
SELECT stop_name FROM stops
WHERE wheelchair_boarding = 0;
```

This returns exactly 6 stops out of 1,936. Say directly: a WHERE clause that returns almost nothing is not a broken query, it just found a small, real exception. That is often exactly the point of writing one.

Now text matching, using trip_headsign:

```sql
SELECT DISTINCT trip_headsign FROM trips
WHERE trip_headsign LIKE '%Illini%'
ORDER BY trip_headsign;
```

Have groups try their own LIKE search for a place they recognize.

## 2. Aggregate functions and GROUP BY (25 min)

Pose the question before the syntax, same as every other week. How many trips run in each direction.

```sql
SELECT direction_id, COUNT(*) FROM trips
GROUP BY direction_id;
```

Roughly even, about 4,100 each. Now group by something less balanced:

```sql
SELECT route_id, COUNT(*) AS trip_count
FROM trips
GROUP BY route_id
ORDER BY trip_count DESC
LIMIT 10;
```

Let the room sit with the discomfort of route_id being a long, not-quite-readable string instead of a name. Ask directly: this would be so much more useful with the actual route color and short name attached. What would that even take. Do not answer yet. Let it stay an open problem into week 6.

Add HAVING to filter on the aggregate itself, not the raw rows:

```sql
SELECT route_id, COUNT(*) AS trip_count
FROM trips
GROUP BY route_id
HAVING COUNT(*) > 300;
```

State the rule plainly: WHERE filters rows before grouping. HAVING filters groups after aggregating. Filtering on a COUNT always needs HAVING.

## 3. Practice (10 min)

Groups write three queries on their own, using only what has been covered today: one with WHERE and ORDER BY together on stops, one with an aggregate function and no grouping on trips, one with GROUP BY and HAVING together. No new syntax, just fluency with what already exists.

## 4. Wrap up (5 min)

Name the itch directly: querying felt useful today, but incomplete, because route_id is not a name anyone can read at a glance, and trips has no way to say which stops a trip actually visits or when. That gap is exactly what a JOIN closes. Next week, trips connects to routes for real names and to stop_times for the full stop-by-stop schedule of an actual bus ride.

## Materials in this folder

../data/mtd_transit.db and ../data/mtd-data-dictionary.md.
../data/mtd-gtfs-raw/, the original eight downloaded files, unedited.
sql-cheatsheet.md, carried over from the original build, reference for the rest of the semester.
