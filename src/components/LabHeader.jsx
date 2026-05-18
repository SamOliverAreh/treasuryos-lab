import { TRACK_META } from '../labs/index.js'

export default function LabHeader({ lab, isComplete, onMarkComplete, onAIReview, aiLoading }) {
  const meta = TRACK_META[lab.track]

  return (
    <div style={{
      padding: "14px 24px 12px",
      borderBottom: "1px solid #0E1E2E",
      background: "#080D14",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexShrink: 0,
    }}>
      <div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "5px" }}>
          <span style={{
            fontSize: "10px", color: meta.color,
            letterSpacing: "0.12em", fontWeight: 600,
            padding: "2px 8px",
            background: meta.bg,
            border: `1px solid ${meta.border}`,
            borderRadius: "2px",
          }}>
            {lab.track}
          </span>
          <span style={{ fontSize: "10px", color: "#2A5060" }}>•</span>
          <span style={{ fontSize: "10px", color: "#2A5060" }}>{lab.level}</span>
        </div>
        <h2 style={{
          fontSize: "17px", fontWeight: 600,
          color: "#E0F0FC", margin: 0,
          letterSpacing: "-0.01em",
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          {lab.title}
        </h2>
      </div>

      <div style={{ display: "flex", gap: "8px", flexShrink: 0, marginLeft: "16px" }}>
        <button onClick={onMarkComplete} style={{
          padding: "6px 12px",
          fontSize: "10px",
          letterSpacing: "0.08em",
          fontFamily: "'IBM Plex Mono', monospace",
          cursor: "pointer",
          background: isComplete ? "#0A2A10" : "#0A1820",
          color: isComplete ? "#34D399" : "#3A7A9A",
          border: `1px solid ${isComplete ? "#1A5A30" : "#1A3A4A"}`,
          borderRadius: "2px",
          transition: "all 0.15s",
        }}>
          {isComplete ? "✓ DONE" : "MARK DONE"}
        </button>

        <button onClick={onAIReview} disabled={aiLoading} style={{
          padding: "6px 14px",
          fontSize: "10px",
          letterSpacing: "0.08em",
          fontFamily: "'IBM Plex Mono', monospace",
          cursor: aiLoading ? "default" : "pointer",
          background: "#0D1A0A",
          color: "#5AE090",
          border: "1px solid #1A4A20",
          borderRadius: "2px",
          opacity: aiLoading ? 0.5 : 1,
          transition: "all 0.15s",
        }}>
          {aiLoading ? "REVIEWING…" : "⚡ AI REVIEW"}
        </button>
      </div>
    </div>
  )
}
