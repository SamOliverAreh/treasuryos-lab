# TreasuryOS Lab

**Hands-on treasury systems training** — SQL, Python, PowerShell, Bash.  
Built to prepare for Senior Technical System Specialist roles in corporate treasury IT.

🔗 **Live:** https://samoliverareh.github.io/treasuryos-lab/

---

## What's inside

| Lab | Track | Level |
|-----|-------|-------|
| Cash Position Rollup | SQL | Intermediate |
| Interface Failure Detection | SQL | Advanced |
| MT940 Bank Statement Parser | Python | Intermediate |
| Day-of-Week Anomaly Detector | Python | Advanced |
| Bank Feed File Watcher | PowerShell | Beginner–Intermediate |
| System Health Check Script | Bash | Beginner–Intermediate |

Each lab includes:
- Real treasury scenario (Experian Group Treasury context)
- Schema / folder structure reference
- Sample data
- Progressive hints
- Reference solution
- Expected output
- AI-powered code review (Claude)

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/treasuryos-lab/

---

## Deploy to GitHub Pages

```bash
npm run deploy
```

Then on GitHub: **Settings → Pages → Source → gh-pages branch → / (root) → Save**

Your URL: `https://samoliverareh.github.io/treasuryos-lab/`

---

## Tech stack

- React 18 + Vite
- IBM Plex Mono (Google Fonts)
- Anthropic Claude API (AI review feature)
- GitHub Pages via gh-pages

---

## Note on AI Review

The AI Review button calls the Anthropic API directly from the browser.  
For local dev, this works out of the box.  
For the public GitHub Pages version, the API key is handled by the claude.ai artifact environment — the deployed site will show a graceful fallback if unavailable.

---

## Project context

This project was built as a portfolio piece targeting Experian Group Treasury's  
Senior Technical System Specialist role. The labs mirror real automation patterns:

- **MT940 parsing** — the actual SWIFT bank statement format used by Barclays, HSBC, CIMB
- **Interface monitoring** — the Oracle ↔ Finastra feed patterns Experian runs daily  
- **File watcher automation** — production Windows Server pattern for SFTP bank feeds
- **Health check JSON** — designed to pipe directly into a FastAPI monitoring endpoint
