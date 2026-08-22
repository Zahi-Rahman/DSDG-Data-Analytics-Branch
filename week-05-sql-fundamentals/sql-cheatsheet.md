# SQL Cheat Sheet

 Written for SQLite, the version everyone in this branch uses through DB Browser for SQLite.

## What SQL is actually for

SQL is used to extract data from wherever it originally is, usually a database with many linked tables, before anything else can happen to it. In a real analyst's workflow, SQL almost always runs first: pull exactly the rows and columns needed, then works with the result in Python or a BI tool.

| Real use case | Why SQL and not Excel |
|---|---|
| Pulling data out of a company database | Excel cannot connect directly to most production databases. SQL is the language those databases speak |
| Combining facts stored in different tables | A JOIN reconnects related data instead of demanding one giant pre-flattened file |
| Filtering millions of rows down to thousands | A database engine filters before it ever sends you the data. Excel has to load everything first |
| Getting the exact same result every time | A saved query is reusable and exact. A manual Excel filter is easy to redo slightly differently by accident |

## Query structure, in the order SQL actually runs it

Written top to bottom, but the engine evaluates roughly bottom to top: FROM and JOIN first, then WHERE, then GROUP BY, then HAVING, then SELECT, then ORDER BY. Knowing this order explains a lot of confusing errors before they happen.

```sql
SELECT   column_a, column_b, aggregate_function(column_c)
FROM     table_one
JOIN     table_two ON table_one.id = table_two.id
WHERE    condition
GROUP BY column_a, column_b
HAVING   condition_on_the_aggregate
ORDER BY column_a
LIMIT    10;
```
Combine T1 and T2 on T1.id = T2.id if condition a satisfied, group by column a and column b, and if condition b satisfied, select column a, b, and a manipulated column c. Order the output by column a, and show the first 10 entries.

1. FROM & JOIN: 
- Gather the data: First, the database looks at table_one and combines it with table_two by matching up the rows where their id columns are identical. Think of this as creating one giant, temporary master spreadsheet.

2. WHERE: 
 - Filter the raw rows: Next, it looks at your WHERE condition. It goes through that giant spreadsheet row by row and throws away any rows that do not meet this first condition.
 3. GROUP BY: 
 
 - Create the buckets: Now, it takes the remaining rows and groups them into "buckets" based on unique combinations of column_a and column_b. Every row with the same values in these two columns gets put into the same bucket.
 
 4. HAVING: 
 - Filter the buckets: While WHERE filtered individual rows, HAVING filters the buckets. It looks at the aggregated math (like the total or average of column_c) for each bucket. If a bucket doesn't meet this second condition, the whole bucket is thrown out.
 
 5. SELECT: 
 Pick the columns: Now that the final buckets are chosen, the database pulls out only the specific columns you asked to see: column_a, column_b, and the final calculated math for column_c (the aggregate function).
 
 6. ORDER BY: 
 - Sort the final list: It takes the final results and sorts them neatly based on the values in column_a.
 
 7. LIMIT: 
 - Cap the output: Finally, instead of showing you thousands of results, it simply hands you the first 10 rows from that sorted list and stops

## Filtering and selecting

| Clause | What it does | Example |
|---|---|---|
| SELECT | Choose which columns come back | `SELECT stop_name, stop_lat` |
| SELECT DISTINCT | Remove duplicate rows from the result | `SELECT DISTINCT route_short_name` |
| WHERE | Filter rows before any grouping happens | `WHERE wheelchair_boarding = 0` |
| ORDER BY | Sort the result. Add DESC for descending | `ORDER BY stop_lat DESC` |
| LIMIT | Return only the first N rows | `LIMIT 10` |
| AND, OR, NOT | Combine multiple conditions | `WHERE direction_id = 0 AND bikes_allowed = 1` |
| IN | Match against a list of values | `WHERE route_short_name IN ('120', '50')` |
| LIKE | Pattern match on text. % means any characters | `WHERE trip_headsign LIKE '%Illini%'` |
| IS NULL, IS NOT NULL | Test for missing values. Never use = NULL, it silently returns nothing | `WHERE parent_station IS NULL` |

## Aggregate functions and GROUP BY

| Function | What it does |
|---|---|
| COUNT(*) | Number of rows |
| COUNT(column) | Number of non-NULL values in that column |
| SUM(column) | Total |
| AVG(column) | Average |
| MIN(column), MAX(column) | Smallest or largest value |

GROUP BY collapses rows that share a value into one row per group, so any column in SELECT that is not being aggregated has to be in GROUP BY too.

```sql
SELECT route_id, COUNT(*) AS trip_count
FROM trips
GROUP BY route_id
HAVING COUNT(*) > 300
ORDER BY trip_count DESC;
```

WHERE filters rows before grouping. HAVING filters groups after aggregating. Filtering on an aggregate value, like average or count, always requires HAVING, not WHERE.

## JOINs

| Type | What it returns |
|---|---|
| INNER JOIN (or just JOIN) | Only rows that match in both tables |
| LEFT JOIN | Every row from the left table, matched data where it exists, NULLs where it does not |

```sql
SELECT t.trip_headsign, r.route_long_name, r.route_short_name
FROM trips t
JOIN routes r ON t.route_id = r.route_id;
```

Default to LEFT JOIN when you are not sure every row will have a match. An INNER JOIN will silently drop unmatched rows, and a silent drop is the single most common source of a wrong analysis that looks correct.

## Calculated columns and CASE

```sql
SELECT stop_name,
       stop_lat, stop_lon
FROM stops
WHERE stop_lat > 40.10;
```

```sql
SELECT trip_headsign,
       CASE
           WHEN direction_id = 0 THEN 'Outbound'
           ELSE 'Inbound'
       END AS direction_label
FROM trips;
```

## Subqueries

A query inside another query, usually to compare a row against an aggregate.

```sql
SELECT route_id, COUNT(*) AS trip_count
FROM trips
GROUP BY route_id
HAVING COUNT(*) > (
    SELECT AVG(cnt) FROM (
        SELECT COUNT(*) AS cnt FROM trips GROUP BY route_id
    )
);
```

## Things that trip people up

- Comparing text needs quotes. `WHERE route_short_name = 120` fails if the column is stored as text. `WHERE route_short_name = '120'` works.

- Column aliases from SELECT, using AS, cannot be reused in the same query's WHERE clause, only in ORDER BY or an outer query. WHERE runs before SELECT does, so it does not know the alias exists yet.

- A JOIN with no ON condition, or the wrong one, silently multiplies rows instead of erroring. If a query suddenly returns far more rows than expected, check the JOIN condition first.

- Times past midnight are stored as text like 25:00:00 in this dataset's stop_times table, not a real time value. Comparing them like normal times, or trying to parse them as one, gives wrong answers without warning.

- `SELECT *` is fine for exploring. Name your columns explicitly once you know what you actually need, so the query stays readable and does not break silently if the table gains a column later.
