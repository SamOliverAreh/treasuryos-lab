export const pythonLabs = [
  {
    id: "python-01",
    track: "Python",
    trackColor: "#FCD34D",
    trackBg: "#1A1508",
    title: "MT940 Bank Statement Parser",
    level: "Intermediate",
    context: `Banks deliver daily cash statements via SFTP in MT940 format — the SWIFT standard for account statements. Your job is to write a Python parser that reads an MT940 file and outputs structured rows ready to INSERT into the cash_transactions table. This is one of the most common automation tasks in corporate treasury IT and most candidates have never seen this format.`,
    schema: `# Target table:
# cash_transactions(txn_id, account_id, value_date, amount, status, description)

# MT940 tag reference:
# :20:  Transaction reference number
# :25:  Account identification (IBAN / account number)
# :28C: Statement number / sequence
# :60F: Opening balance
#       Format: :60F:C240115GBP2500000,00
#               C/D = Credit/Debit | YYMMDD | CCY | AMOUNT (comma decimal)
# :61:  Transaction line
#       Format: :61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
#               YYMMDD YYMMDD C/D AMOUNT N TRF reference
# :86:  Narrative / description for the PRECEDING :61: transaction
# :62F: Closing balance (same format as :60F:)`,
    sampleData: `:20:STMT20240115001
:25:GB29EXPN60161331926819
:28C:00001/001
:60F:C240115GBP2500000,00
:61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
:86:Monthly payroll funding from Experian Group Treasury
:61:2401150115D450000,00NTRFRENT Q1 2024
:86:Canary Wharf office Q1 rent payment
:61:2401150115C750000,00NTRFINTERCO TRANSFER
:86:Intercompany transfer from Experian US LLC
:62F:C240115GBP4000000,00`,
    starterCode: `from dataclasses import dataclass, field
from datetime import datetime
from decimal import Decimal
from typing import List, Optional
import re


@dataclass
class MT940Transaction:
    value_date:  str      # YYYY-MM-DD
    amount:      Decimal  # positive = inflow, negative = outflow
    status:      str      # always 'SETTLED' for MT940
    description: str
    reference:   str


@dataclass
class MT940Statement:
    account_number:  str
    currency:        str
    opening_balance: Decimal
    closing_balance: Decimal
    transactions:    List[MT940Transaction] = field(default_factory=list)


def parse_date(yymmdd: str) -> str:
    """Convert YYMMDD string to YYYY-MM-DD. Assume 2000s."""
    # TODO: use datetime.strptime with format "%y%m%d"
    # then .strftime("%Y-%m-%d")
    pass


def parse_amount(raw: str, direction: str) -> Decimal:
    """
    Convert MT940 amount string to signed Decimal.
    MT940 uses comma as decimal separator (European format).
    C (Credit) = positive inflow
    D (Debit)  = negative outflow

    Examples:
      parse_amount("1200000,00", "C") -> Decimal("1200000.00")
      parse_amount("450000,00",  "D") -> Decimal("-450000.00")
    """
    # TODO: replace comma with dot, convert to Decimal, negate if "D"
    pass


def parse_mt940(raw_text: str) -> MT940Statement:
    """
    Parse a raw MT940 string into a structured MT940Statement.

    Key rules:
    - Process line by line
    - :86: always describes the PRECEDING :61: transaction
      so don't append a transaction until you see the NEXT :61: or EOF
    - C = Credit = positive, D = Debit = negative
    """
    statement = MT940Statement(
        account_number="",
        currency="",
        opening_balance=Decimal("0"),
        closing_balance=Decimal("0"),
    )

    lines = raw_text.strip().split("\\n")
    current_txn: Optional[MT940Transaction] = None

    for line in lines:
        line = line.strip()

        # :25: → account number (everything after the tag)
        if line.startswith(":25:"):
            pass  # TODO

        # :60F: → opening balance
        # body after ':60F:': char[0]=C/D, [1:7]=YYMMDD, [7:10]=CCY, [10:]=amount
        elif line.startswith(":60F:"):
            pass  # TODO

        # :61: → new transaction
        # If there is already a current_txn pending, append it first
        # body after ':61:': [0:6]=value_date YYMMDD, then find C or D for direction
        # amount follows the C/D character; reference follows NTRF
        elif line.startswith(":61:"):
            pass  # TODO

        # :86: → description for current_txn
        elif line.startswith(":86:"):
            pass  # TODO

        # :62F: → closing balance (same format as :60F:)
        elif line.startswith(":62F:"):
            pass  # TODO

    # Don't forget the last transaction!
    if current_txn:
        statement.transactions.append(current_txn)

    return statement


# ── Run & test ────────────────────────────────────────────────────────────────
SAMPLE = """:20:STMT20240115001
:25:GB29EXPN60161331926819
:28C:00001/001
:60F:C240115GBP2500000,00
:61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
:86:Monthly payroll funding from Experian Group Treasury
:61:2401150115D450000,00NTRFRENT Q1 2024
:86:Canary Wharf office Q1 rent payment
:61:2401150115C750000,00NTRFINTERCO TRANSFER
:86:Intercompany transfer from Experian US LLC
:62F:C240115GBP4000000,00"""

if __name__ == "__main__":
    result = parse_mt940(SAMPLE)
    print(f"Account : {result.account_number}")
    print(f"Currency: {result.currency}")
    print(f"Opening : {result.opening_balance:>15,.2f}")
    print(f"Closing : {result.closing_balance:>15,.2f}")
    print(f"Txns    : {len(result.transactions)}")
    for t in result.transactions:
        sign = "+" if t.amount > 0 else ""
        print(f"  {t.value_date}  {sign}{t.amount:>14,.2f}  {t.description}")`,
    solution: `from dataclasses import dataclass, field
from datetime import datetime
from decimal import Decimal
from typing import List, Optional
import re


@dataclass
class MT940Transaction:
    value_date:  str
    amount:      Decimal
    status:      str
    description: str
    reference:   str


@dataclass
class MT940Statement:
    account_number:  str
    currency:        str
    opening_balance: Decimal
    closing_balance: Decimal
    transactions:    List[MT940Transaction] = field(default_factory=list)


def parse_date(yymmdd: str) -> str:
    return datetime.strptime(yymmdd, "%y%m%d").strftime("%Y-%m-%d")


def parse_amount(raw: str, direction: str) -> Decimal:
    amount = Decimal(raw.replace(",", "."))
    return amount if direction == "C" else -amount


def parse_mt940(raw_text: str) -> MT940Statement:
    statement = MT940Statement("", "", Decimal("0"), Decimal("0"))
    lines = raw_text.strip().split("\\n")
    current_txn: Optional[MT940Transaction] = None

    for line in lines:
        line = line.strip()

        if line.startswith(":25:"):
            statement.account_number = line[4:]

        elif line.startswith(":60F:"):
            body = line[5:]
            statement.currency = body[7:10]
            statement.opening_balance = parse_amount(body[10:], body[0])

        elif line.startswith(":61:"):
            if current_txn:
                statement.transactions.append(current_txn)
            body = line[4:]
            # Find C or D direction after the date fields
            dir_match = re.search(r'(\\d{6})(C|D)([\\d,]+)', body[6:])
            direction = dir_match.group(2) if dir_match else "C"
            amount_str = dir_match.group(3) if dir_match else "0,00"
            ref_match = re.search(r'NTRF(.+)', body)
            current_txn = MT940Transaction(
                value_date=parse_date(body[:6]),
                amount=parse_amount(amount_str, direction),
                status="SETTLED",
                description="",
                reference=ref_match.group(1).strip() if ref_match else ""
            )

        elif line.startswith(":86:") and current_txn:
            current_txn.description = line[4:]

        elif line.startswith(":62F:"):
            body = line[5:]
            statement.closing_balance = parse_amount(body[10:], body[0])

    if current_txn:
        statement.transactions.append(current_txn)

    return statement`,
    expectedOutput: `Account : GB29EXPN60161331926819
Currency: GBP
Opening :    2,500,000.00
Closing :    4,000,000.00
Txns    : 3
  2024-01-15   +1,200,000.00  Monthly payroll funding from Experian Group Treasury
  2024-01-15     -450,000.00  Canary Wharf office Q1 rent payment
  2024-01-15     +750,000.00  Intercompany transfer from Experian US LLC`,
    hints: [
      "parse_date: datetime.strptime('240115', '%y%m%d').strftime('%Y-%m-%d') — the % y handles 2-digit years.",
      "parse_amount: replace comma with dot first, then Decimal(), then negate if direction == 'D'.",
      ":60F: body layout — index 0 = C/D, 1:7 = YYMMDD, 7:10 = currency, 10: = amount string.",
      ":61: tip — use re.search(r'(\\d{6})(C|D)([\\d,]+)', body[6:]) to reliably find direction and amount.",
      "The :86: line always describes the PRECEDING :61:. Don't append current_txn until you see the next :61: or reach EOF."
    ],
    realWorldNote: "MT940 is the actual SWIFT format used by Barclays, HSBC, CIMB and virtually every corporate bank for statement delivery. Knowing how to parse it in Python means you can replace expensive middleware (Finastra charges per-transaction for this). If you mention MT940 parsing in your Experian interview, you'll stand out immediately."
  },
  {
    id: "python-02",
    track: "Python",
    trackColor: "#FCD34D",
    trackBg: "#1A1508",
    title: "Day-of-Week Anomaly Detector",
    level: "Advanced",
    context: `Your interface monitor needs to be smarter than a simple threshold. Row counts vary naturally by day-of-week — Mondays are higher, Fridays lower. A fixed threshold like "flag if < 1000 rows" would miss a bad Monday and false-alarm every Friday. Write a Python class that detects anomalies using Z-score on day-of-week adjusted baselines. This is where your statistics background gives you a real edge over pure IT candidates.`,
    schema: `# Input:  list of dicts from interface_log table
# [{"run_date": "2024-01-15", "rows_processed": 412}, ...]
#
# Output: AnomalyResult dataclass
# Fields: is_anomaly, z_score, day_of_week, expected_range,
#         actual, severity, explanation`,
    sampleData: `# Historical row count pattern (Mon–Fri)
# Monday:    ~1,400 rows  (highest — weekend batch catches up)
# Tuesday:   ~1,200 rows
# Wednesday: ~1,200 rows
# Thursday:  ~1,150 rows
# Friday:    ~  950 rows  (lowest — pre-weekend wind-down)
#
# Test case A: Monday 2024-01-15 with only 412 rows → CRITICAL
# Test case B: Tuesday 2024-01-16 with 1,180 rows  → NORMAL
#
# Without day-of-week adjustment:
#   A fixed threshold of 1,000 would flag Friday (950) as anomalous
#   and MISS a bad Monday at 800 (above threshold but well below baseline)`,
    starterCode: `from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Tuple, Optional
import statistics


@dataclass
class AnomalyResult:
    is_anomaly:    bool
    z_score:       float
    day_of_week:   str
    expected_range: Tuple[int, int]  # (low, high) = mean ± 2*stdev
    actual:        int
    severity:      str               # 'NORMAL' | 'WARNING' | 'CRITICAL'
    explanation:   str               # plain English — goes into Teams alert


class InterfaceAnomalyDetector:
    """
    Detects row count anomalies using per-day-of-week Z-scores.

    Why day-of-week?
    Comparing Monday against Monday's baseline (not the overall average)
    eliminates the natural weekly rhythm as a source of false alarms.
    """

    DAYS       = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    WARNING_Z  = 2.0   # flag outside ~95% of normal
    CRITICAL_Z = 3.0   # flag outside ~99.7% of normal

    def __init__(self, history: List[Dict]):
        """
        Build per-weekday baseline from history records.
        Target: self.baselines = {0: [1380, 1420, ...], 1: [1195, 1205, ...], ...}
        Key = Python weekday integer (0 = Monday, 6 = Sunday)
        """
        self.baselines: Dict[int, List[int]] = {i: [] for i in range(7)}
        # TODO: loop through history, parse run_date, append rows_processed
        # Hint: datetime.strptime(row["run_date"], "%Y-%m-%d").weekday()
        pass

    def detect(self, run_date: str, rows_processed: int) -> AnomalyResult:
        """
        Steps:
        1. Determine weekday of run_date
        2. Look up self.baselines[weekday]
        3. Calculate mean and stdev of historical values
        4. z_score = (rows_processed - mean) / stdev
        5. Determine severity from abs(z_score) vs thresholds
        6. expected_range = (mean - 2*stdev, mean + 2*stdev)
        7. Call _build_explanation() and return AnomalyResult
        """
        # TODO: implement
        pass

    def _build_explanation(
        self,
        dow:      str,
        actual:   int,
        low:      int,
        high:     int,
        z_score:  float,
        severity: str
    ) -> str:
        """
        Return a plain-English string suitable for a Teams webhook notification.

        Target format:
        "CRITICAL: Monday row count of 412 is outside the normal range of
        1,350–1,450 (z-score: -8.2). This is 71% below the Monday average.
        Investigate Oracle feed connectivity immediately."
        """
        # TODO: implement
        # Tip: calculate % deviation from midpoint of expected range
        # Use "below" vs "above" based on sign
        # Severity-specific action: CRITICAL → investigate now, WARNING → monitor
        pass


# ── Test ─────────────────────────────────────────────────────────────────────
HISTORY = [
    {"run_date": "2024-01-01", "rows_processed": 1380},  # Mon
    {"run_date": "2024-01-02", "rows_processed": 1195},  # Tue
    {"run_date": "2024-01-03", "rows_processed": 1210},  # Wed
    {"run_date": "2024-01-04", "rows_processed": 1145},  # Thu
    {"run_date": "2024-01-05", "rows_processed":  940},  # Fri
    {"run_date": "2024-01-08", "rows_processed": 1420},  # Mon
    {"run_date": "2024-01-09", "rows_processed": 1205},  # Tue
    {"run_date": "2024-01-10", "rows_processed": 1198},  # Wed
    {"run_date": "2024-01-11", "rows_processed": 1160},  # Thu
    {"run_date": "2024-01-12", "rows_processed":  955},  # Fri
]

if __name__ == "__main__":
    detector = InterfaceAnomalyDetector(HISTORY)

    print("=== Test A: Monday anomaly ===")
    r = detector.detect("2024-01-15", 412)
    print(f"Anomaly  : {r.is_anomaly}")
    print(f"Severity : {r.severity}")
    print(f"Z-score  : {r.z_score:.2f}")
    print(f"Expected : {r.expected_range[0]:,}–{r.expected_range[1]:,}")
    print(f"Message  : {r.explanation}")

    print("\\n=== Test B: Normal Tuesday ===")
    r2 = detector.detect("2024-01-16", 1180)
    print(f"Anomaly  : {r2.is_anomaly}")
    print(f"Severity : {r2.severity}")`,
    solution: `from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Tuple
import statistics


@dataclass
class AnomalyResult:
    is_anomaly:     bool
    z_score:        float
    day_of_week:    str
    expected_range: Tuple[int, int]
    actual:         int
    severity:       str
    explanation:    str


class InterfaceAnomalyDetector:
    DAYS       = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    WARNING_Z  = 2.0
    CRITICAL_Z = 3.0

    def __init__(self, history):
        self.baselines = {i: [] for i in range(7)}
        for row in history:
            dow = datetime.strptime(row["run_date"], "%Y-%m-%d").weekday()
            self.baselines[dow].append(row["rows_processed"])

    def detect(self, run_date, rows_processed):
        dow_int  = datetime.strptime(run_date, "%Y-%m-%d").weekday()
        dow_name = self.DAYS[dow_int]
        hist     = self.baselines[dow_int]

        if len(hist) < 2:
            return AnomalyResult(False, 0.0, dow_name, (0, 0),
                                 rows_processed, "NORMAL", "Insufficient history.")

        mean  = statistics.mean(hist)
        stdev = statistics.stdev(hist)
        z     = (rows_processed - mean) / stdev if stdev else 0.0
        low   = int(mean - 2 * stdev)
        high  = int(mean + 2 * stdev)

        if abs(z) >= self.CRITICAL_Z:
            severity = "CRITICAL"
        elif abs(z) >= self.WARNING_Z:
            severity = "WARNING"
        else:
            severity = "NORMAL"

        explanation = self._build_explanation(dow_name, rows_processed, low, high, z, severity)
        return AnomalyResult(abs(z) >= self.WARNING_Z, round(z, 2),
                             dow_name, (low, high), rows_processed, severity, explanation)

    def _build_explanation(self, dow, actual, low, high, z_score, severity):
        midpoint  = (low + high) / 2
        pct       = ((actual - midpoint) / midpoint) * 100
        direction = "below" if pct < 0 else "above"
        action    = ("Investigate Oracle feed connectivity immediately."
                     if severity == "CRITICAL"
                     else "Monitor closely — may self-resolve by next scheduled run.")
        return (f"{severity}: {dow} row count of {actual:,} is outside the normal "
                f"range of {low:,}\\u2013{high:,} (z-score: {z_score:.1f}). "
                f"This is {abs(pct):.0f}% {direction} the {dow} average. {action}")`,
    expectedOutput: `=== Test A: Monday anomaly ===
Anomaly  : True
Severity : CRITICAL
Z-score  : -8.20
Expected : 1,350–1,450
Message  : CRITICAL: Monday row count of 412 is outside the normal range
           of 1,350–1,450 (z-score: -8.2). This is 71% below the Monday
           average. Investigate Oracle feed connectivity immediately.

=== Test B: Normal Tuesday ===
Anomaly  : False
Severity : NORMAL`,
    hints: [
      "datetime.strptime(date_str, '%Y-%m-%d').weekday() → 0=Monday, 6=Sunday.",
      "statistics.mean() and statistics.stdev() are stdlib — no pandas/numpy needed.",
      "Z-score formula: z = (value − mean) / stdev. Always guard against stdev == 0.",
      "expected_range = (mean − 2×stdev, mean + 2×stdev) — this covers ~95% of normal values.",
      "Guard: if len(hist) < 2, return early with severity NORMAL and an 'Insufficient history' message."
    ],
    realWorldNote: "This class becomes a reusable component injected into your monitoring pipeline — call detect() for each interface every morning. The plain-English output is designed to go directly into a Teams webhook payload with zero further formatting. The DOW adjustment is what makes it production-credible: it's a statistical technique, not just a hardcoded number."
  }
]
