# Data Foundations Cheat Sheet

Reference for week 5. Keep it open through week 9.

## Set up DB Browser for SQLite

DB Browser for SQLite is a free program that opens and queries SQLite database files. The current version is 3.13.1.

1. Go to sqlitebrowser.org/dl.
2. Download the file for your computer.
   - Windows: `DB.Browser.for.SQLite-v3.13.1-win64.msi`. Windows on ARM uses the `arm64` file.
   - Mac: `DB.Browser.for.SQLite-v3.13.1.dmg`. Drag the app into Applications. If macOS blocks the first launch, right-click the app and choose Open.
3. In your copy of the curriculum repo, run `git pull`. The database is `data/mtd_transit.db`.
4. Open DB Browser. Choose File, then Open Database Read Only. Select `data/mtd_transit.db`.

Read-only mode protects the file. Nothing you run can change it.

| Tab | What it shows | Use it to |
|---|---|---|
| Database Structure | Every table, column, and type | Read the schema |
| Browse Data | The rows of one table, with a filter box above each column | Look at real values |
| Edit Pragmas | Database settings | Leave this tab alone |
| Execute SQL | A query editor and a results grid | Run SQL |

To run a query, type it in Execute SQL. Click the play button, or press Ctrl+Enter on Windows or Cmd+Enter on Mac. The message pane under the results shows the row count or the error.

## Vocabulary

| Term | Meaning | In mtd_transit.db |
|---|---|---|
| Database | A collection of related tables managed by software | `mtd_transit.db` |
| Table | A set of rows about one kind of thing | `stops` holds one row per boarding point or station |
| Row | One record | `IU:1`, Illini Union (South Side Shelter) |
| Column | One attribute, with one data type | `stop_name` is TEXT. `stop_lat` is REAL. |
| Primary key | The column that identifies each row uniquely | `stops.stop_id` |
| Foreign key | A column that points to another table's primary key | `trips.route_id` points to `routes.route_id` |
| Composite key | Two or more columns that identify a row together | `stop_times`: `trip_id` plus `stop_sequence` |
| NULL | No value stored | `parent_station` is NULL for 1,921 stops |
| Schema | The full design: tables, columns, types, and keys | 7 tables, 349,381 rows |
| Normalization | Storing each fact once and linking tables with keys | Route names live in 90 rows of `routes` |
| SQL | Structured Query Language, the language for asking a database questions | `SELECT COUNT(*) FROM stop_times;` |

## The MTD schema

| Table | One row is | Key | Links to | Rows |
|---|---|---|---|---|
| agency | The transit agency | `agency_id` | None | 1 |
| routes | One route variant, such as TEAL EVENING | `route_id` | agency, through `agency_id` | 90 |
| trips | One scheduled bus trip | `trip_id` | routes through `route_id`, calendar through `service_id` | 8,222 |
| stop_times | One stop on one trip | No declared key. `trip_id` plus `stop_sequence` is unique. | trips through `trip_id`, stops through `stop_id` | 321,337 |
| stops | One boarding point or station | `stop_id` | Its parent station, through `parent_station` | 1,936 |
| calendar | One service pattern | `service_id` | None | 514 |
| calendar_dates | One service on one date | No declared key. `service_id` plus `date` is unique. | calendar, through `service_id` | 17,281 |

Each link is one to many. One route has many trips. One trip has many stop_times rows. One stop appears in many stop_times rows.

Full column notes are in `data/mtd-data-dictionary.md`.

## Kinds of databases

| Type | Stores data as | Strong at | Common products |
|---|---|---|---|
| Relational | Tables of rows, linked by keys | Consistent records, joins, reporting | PostgreSQL, MySQL, SQLite, SQL Server |
| Document | Nested records, often JSON | Records whose fields vary | MongoDB |
| Key-value | A key and one value | Fast lookup by a single key | Redis, Amazon DynamoDB |
| Graph | Nodes and edges | Following connections and paths | Neo4j |
| Columnar warehouse | Columns stored together | Scanning and summarizing huge tables | Google BigQuery, Snowflake, Amazon Redshift |

Relational databases hold most business data. Many companies run several types side by side.

The MTD network as a graph has 1,931 stops as nodes and 2,565 distinct stop-to-stop connections as edges.

## Two kinds of systems

| | Transactional (OLTP) | Analytical (OLAP) |
|---|---|---|
| Job | Records each event as it happens | Answers questions about many events |
| Queries | Many small reads and writes | Fewer, larger reads |
| Example | A fare payment | Trips per route per month |

A **data lake** keeps raw files of any format, as they arrived. Our version is `data/mtd-gtfs-raw/`.
A **data warehouse** keeps clean tables with keys, built for questions. Our version is `data/mtd_transit.db`.

## The pipeline and the roles

| Stage | What happens | Main owner | This semester |
|---|---|---|---|
| Source | Data is created | Source system teams | MTD's published schedule |
| Ingest | Data is copied in | Data engineer | The gtfs.zip download |
| Store | Data is kept, typed, and keyed | Data engineer | `mtd-gtfs-raw/` and `mtd_transit.db` |
| Transform | Data is cleaned and shaped | Analytics engineer | SQL queries, weeks 6 to 9 |
| Analyze | Questions get answered | Data analyst, data scientist | SQL now, Python in month 3 |
| Present | Answers reach decision makers | Data analyst | Tableau and briefings |

| Role | Core question | Common tools |
|---|---|---|
| Data engineer | Is the data arriving, complete, and stored correctly? | SQL, Python, Airflow, Spark, cloud platforms |
| Analytics engineer | Can analysts trust these tables? | SQL, dbt, warehouses |
| Data analyst | What happened, and why? | SQL, Excel, Tableau or Power BI, Python |
| Data scientist | What will happen, and what should we do? | Python, R, SQL, statistics |
| Data consultant | What should this client do next? | The analyst toolkit, plus client communication |

## Tools

| Job | Tools in industry | This semester |
|---|---|---|
| Store relational data | PostgreSQL, MySQL, SQL Server, Oracle, SQLite | SQLite |
| Store at warehouse scale | Google BigQuery, Snowflake, Amazon Redshift, Databricks | Overview only |
| Browse and query | DBeaver, pgAdmin, DataGrip, DB Browser for SQLite | DB Browser for SQLite |
| Move and schedule data | Apache Airflow, Fivetran | Overview only |
| Transform and model | dbt, SQL | SQL |
| Analyze | SQL, Python with pandas, R, Excel | Excel, then SQL, then Python |
| Present | Tableau, Power BI, Looker | Tableau Public |
| Version and share | Git, GitHub | GitHub |

## Further learning

- CS50's Introduction to Databases with SQL, Harvard: cs50.harvard.edu/sql. Free lectures and problem sets. It uses SQLite, the same engine as `mtd_transit.db`.
- SQLBolt: sqlbolt.com. Short interactive lessons in the browser.
- Select Star SQL: selectstarsql.com. An interactive book built on one real dataset.
- Mode SQL Tutorial: mode.com/sql-tutorial. Lessons written for analysts.
- DB-Engines Ranking: db-engines.com/en/ranking. Databases listed by type and popularity.
- GTFS Schedule Reference: gtfs.org. The definition of every file and column in the MTD feed.
- Books: *Fundamentals of Data Engineering* by Joe Reis and Matt Housley (O'Reilly, 2022). *Designing Data-Intensive Applications* by Martin Kleppmann (O'Reilly, 2017).
