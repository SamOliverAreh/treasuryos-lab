export const sqlLabs = [
  {
    id: "sql-01",
    track: "SQL",
    trackColor: "#60A5FA",
    trackBg: "#0A1830",
    title: "Cash Position Rollup",
    level: "Intermediate",
    context: `You've just joined Experian Group Treasury. Your manager asks you to pull today's consolidated cash position across all bank accounts, grouped by currency. The TMS database has been running for months and has dirty data — some accounts are inactive, some transactions are pending. She needs net position per currency, excluding pending transactions and closed accounts.`,
    schema: `-- Tables available in this exercise:
CREATE TABLE bank_accounts (
  account_id     INT PRIMARY KEY,
  account_name   VARCHAR(100),
  currency       CHAR(3),
  entity         VARCHAR(50),
  status         VARCHAR(10)  -- 'ACTIVE' | 'CLOSED'
);

CREATE TABLE cash_transactions (
  txn_id         INT PRIMARY KEY,
  account_id     INT REFERENCES bank_accounts,
  value_date     DATE,
  amount         DECIMAL(18,2),  -- positive = inflow, negative = outflow
  status         VARCHAR(10),    -- 'SETTLED' | 'PENDING' | 'FAILED'
  description    VARCHAR(200)
);`,
    sampleData: `-- bank_accounts (8 rows)
account_id | currency | entity                | status
---------- | -------- | --------------------- | -------
1          | USD      | Experian US LLC        | ACTIVE
2          | USD      | Experian NA Corp       | ACTIVE
3          | GBP      | Experian Ltd UK        | ACTIVE
4          | EUR      | Experian Ireland       | ACTIVE
5          | EUR      | Experian Germany       | ACTIVE
6          | MYR      | Experian Malaysia      | ACTIVE
7          | SGD      | Experian Singapore     | CLOSED
8          | USD      | Experian Legacy        | CLOSED

-- cash_transactions sample
txn_id | account_id | value_date | amount       | status
------ | ---------- | ---------- | ------------ | -------
101    | 1          | 2024-01-15 |  5000000.00  | SETTLED
102    | 1          | 2024-01-15 | -1200000.00  | SETTLED
103    | 2          | 2024-01-15 |  3000000.00  | SETTLED
104    | 3          | 2024-01-15 |  2500000.00  | SETTLED
105    | 4          | 2024-01-15 |  -800000.00  | SETTLED
106    | 4          | 2024-01-15 |  1100000.00  | PENDING
107    | 5          | 2024-01-15 |   900000.00  | SETTLED
108    | 7          | 2024-01-15 |   500000.00  | SETTLED
109    | 8          | 2024-01-15 |   200000.00  | SETTLED`,
    starterCode: `-- Write a query that returns:
-- currency | net_position | account_count | entity_list
-- Ordered by net_position DESC
--
-- Requirements:
--   1. Only ACTIVE accounts
--   2. Only SETTLED transactions
--   3. entity_list = comma-separated entity names per currency

SELECT
  -- your code here


FROM bank_accounts ba
  -- your joins here


WHERE
  -- your filters here


GROUP BY
  -- your grouping here

ORDER BY net_position DESC;`,
    solution: `SELECT
  ba.currency,
  SUM(ct.amount)                        AS net_position,
  COUNT(DISTINCT ba.account_id)         AS account_count,
  STRING_AGG(DISTINCT ba.entity, ', ') AS entity_list
FROM bank_accounts ba
  JOIN cash_transactions ct
    ON ba.account_id = ct.account_id
WHERE ba.status = 'ACTIVE'
  AND ct.status  = 'SETTLED'
GROUP BY ba.currency
ORDER BY net_position DESC;`,
    expectedOutput: `currency | net_position  | account_count | entity_list
-------- | ------------- | ------------- | -----------------------------------
USD      | 6,800,000.00  | 2             | Experian US LLC, Experian NA Corp
GBP      | 2,500,000.00  | 1             | Experian Ltd UK
EUR      |   200,000.00  | 2             | Experian Ireland, Experian Germany
MYR      | (no txns yet) | 1             | Experian Malaysia`,
    hints: [
      "You need a JOIN between bank_accounts and cash_transactions — what's the linking column?",
      "Filter at the WHERE level, not with CASE — keep it clean and readable.",
      "STRING_AGG(DISTINCT column, ', ') builds a comma-separated list in PostgreSQL.",
      "PENDING transactions should be excluded — what does that mean for your WHERE clause on ct.status?"
    ],
    realWorldNote: "This exact query pattern — daily cash position by currency — runs automatically every morning at a company like Experian before the treasury team arrives. In the real system it feeds a CFO dashboard and a morning email. The PENDING exclusion matters: including unconfirmed cash gives you a false picture of available liquidity."
  },
  {
    id: "sql-02",
    track: "SQL",
    trackColor: "#60A5FA",
    trackBg: "#0A1830",
    title: "Interface Failure Detection",
    level: "Advanced",
    context: `The Oracle-to-Finastra interface runs every weekday at 06:00. Your job is to detect anomalies: missed runs, duplicate runs, and days where the row count dropped more than 30% from the prior rolling average. This is real monitoring logic — if this query returns rows, someone needs to investigate before markets open.`,
    schema: `CREATE TABLE interface_log (
  log_id         INT PRIMARY KEY,
  interface_name VARCHAR(50),
  run_date       DATE,
  run_time       TIMESTAMP,
  status         VARCHAR(10),   -- 'SUCCESS' | 'FAILED' | 'PARTIAL'
  rows_processed INT,
  error_message  VARCHAR(500)
);`,
    sampleData: `-- interface_log entries for 'ORACLE_TO_FINASTRA'
log_id | run_date   | run_time            | status  | rows_processed
------ | ---------- | ------------------- | ------- | --------------
1      | 2024-01-08 | 2024-01-08 06:01:03 | SUCCESS | 1240
2      | 2024-01-09 | 2024-01-09 06:00:58 | SUCCESS | 1198
3      | 2024-01-10 | 2024-01-10 06:02:11 | SUCCESS | 1215
4      | 2024-01-11 | 2024-01-11 06:01:44 | SUCCESS | 1201
-- 2024-01-12 is a weekday — NO ROW (missed run!)
5      | 2024-01-13 | 2024-01-13 06:00:33 | SUCCESS | 1230
6      | 2024-01-14 | 2024-01-14 06:01:20 | SUCCESS | 1225
7      | 2024-01-15 | 2024-01-15 06:00:45 | SUCCESS | 412   -- dropped 66%!
8      | 2024-01-15 | 2024-01-15 06:00:52 | SUCCESS | 408   -- DUPLICATE run!`,
    starterCode: `-- ─────────────────────────────────────────────────────────────
-- Part A: Find weekdays in the last 30 days with NO run
-- ─────────────────────────────────────────────────────────────
WITH date_series AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE,
    INTERVAL '1 day'
  )::DATE AS business_date
),
weekdays AS (
  SELECT business_date
  FROM date_series
  WHERE EXTRACT(DOW FROM business_date) NOT IN (0, 6) -- 0=Sun, 6=Sat
)
-- TODO: LEFT JOIN to find dates with no matching interface_log row


;

-- ─────────────────────────────────────────────────────────────
-- Part B: Find duplicate runs (same interface, same date, >1 row)
-- ─────────────────────────────────────────────────────────────
SELECT
  -- your code here


;

-- ─────────────────────────────────────────────────────────────
-- Part C: Find days where row count dropped >30% vs rolling avg
-- ─────────────────────────────────────────────────────────────
WITH daily_counts AS (
  SELECT
    run_date,
    SUM(rows_processed) AS total_rows,
    AVG(SUM(rows_processed)) OVER (
      ORDER BY run_date
      ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING
    ) AS rolling_avg
  FROM interface_log
  WHERE interface_name = 'ORACLE_TO_FINASTRA'
    AND status = 'SUCCESS'
  GROUP BY run_date
)
-- TODO: filter to rows where total_rows < rolling_avg * 0.70


;`,
    solution: `-- Part A: Missed runs
WITH date_series AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE,
    INTERVAL '1 day'
  )::DATE AS business_date
),
weekdays AS (
  SELECT business_date FROM date_series
  WHERE EXTRACT(DOW FROM business_date) NOT IN (0, 6)
)
SELECT w.business_date AS missed_date
FROM weekdays w
LEFT JOIN interface_log il
  ON il.run_date = w.business_date
  AND il.interface_name = 'ORACLE_TO_FINASTRA'
WHERE il.log_id IS NULL;

-- Part B: Duplicate runs
SELECT interface_name, run_date, COUNT(*) AS run_count
FROM interface_log
GROUP BY interface_name, run_date
HAVING COUNT(*) > 1;

-- Part C: Row count anomalies
WITH daily_counts AS (
  SELECT run_date,
    SUM(rows_processed) AS total_rows,
    AVG(SUM(rows_processed)) OVER (
      ORDER BY run_date ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING
    ) AS rolling_avg
  FROM interface_log
  WHERE interface_name = 'ORACLE_TO_FINASTRA' AND status = 'SUCCESS'
  GROUP BY run_date
)
SELECT
  run_date,
  total_rows,
  ROUND(rolling_avg, 0)                              AS avg_7d,
  ROUND((total_rows - rolling_avg)/rolling_avg*100, 1) AS pct_change
FROM daily_counts
WHERE total_rows < rolling_avg * 0.70
ORDER BY run_date;`,
    expectedOutput: `-- Part A
missed_date
-----------
2024-01-12

-- Part B
interface_name      | run_date   | run_count
ORACLE_TO_FINASTRA  | 2024-01-15 | 2

-- Part C
run_date   | total_rows | avg_7d | pct_change
2024-01-15 | 412        | 1218   | -66.2`,
    hints: [
      "Part A: generate_series creates a sequence of dates. LEFT JOIN to interface_log, then WHERE log_id IS NULL finds the gaps.",
      "Part B: GROUP BY interface_name, run_date — then HAVING COUNT(*) > 1 isolates duplicates.",
      "Part C: The window function ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING excludes today from its own average.",
      "The 0.70 threshold means: flag if today is less than 70% of average (i.e. dropped more than 30%)."
    ],
    realWorldNote: "This is production monitoring logic. At Experian this runs via APScheduler every morning. If Part A or C returns any rows, an alert fires to a Teams channel before the treasury team's 8am standup — giving them time to investigate before markets open."
  }
]
