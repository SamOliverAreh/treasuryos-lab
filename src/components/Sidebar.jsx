import { TRACK_META, TRACKS } from '../labs/index.js'

export default function Sidebar({ labs, selectedLab, onSelect, completedLabs, activeTrack, onTrackChange }) {
  const visible = activeTrack === "ALL" ? labs : labs.filter(l => l.track === activeTrack)

  return (
    <div style={{
      width: "230px",
      flexShrink: 0,
      borderRight: "1px solid #0E1E2E",
      background: "#070C12",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Track filter */}
      <div style={{ padding: "10px 10px 8px", borderBottom: "1px solid #0E1E2E" }}>
        {TRACKS.map(t => {
          const m = TRACK_META[t]
          const active = activeTrack === t
          return (
            <button key={t} onClick={() => onTrackChange(t)} style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "5px 10px",
              marginBottom: "2px",
              fontSize: "10px",
              letterSpacing: "0.1em",
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 600,
              cursor: "pointer",
              border: `1px solid ${active ? (m?.border || "#1E3A6A") : "transparent"}`,
              background: active ? (m?.bg || "#0A1520") : "transparent",
              color: active ? (m?.color || "#60A5FA") : "#2A4A5E",
              borderRadius: "2px",
              transition: "all 0.15s",
            }}>{t}</button>
          )
        })}
      </div>

      {/* Lab list */}
      <div style={{ overflowY: "auto", flex: 1 }}>
        {visible.map(lab => {
          const m = TRACK_META[lab.track]
          const done = completedLabs.has(lab.id)
          const active = selectedLab.id === lab.id
          return (
            <div key={lab.id} onClick={() => onSelect(lab)} style={{
              padding: "12px 14px",
              borderBottom: "1px solid #0A1520",
              cursor: "pointer",
              background: active ? "#0C1828" : "transparent",
              borderLeft: active ? `3px solid ${m.color}` : "3px solid transparent",
              transition: "all 0.15s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                <span style={{ fontSize: "9px", color: m.color, letterSpacing: "0.1em", fontWeight: 600 }}>
                  {lab.track}
                </span>
                {done && <span style={{ fontSize: "9px", color: "#34D399" }}>✓</span>}
              </div>
              <div style={{ fontSize: "12px", color: active ? "#E0F0FC" : "#8AAEC8", lineHeight: 1.3, marginBottom: "3px" }}>
                {lab.title}
              </div>
              <div style={{ fontSize: "10px", color: "#2A4A5A" }}>{lab.level}</div>
            </div>
          )
        })}
      </div>

      {/* Progress */}
      <div style={{ padding: "10px 14px", borderTop: "1px solid #0E1E2E", background: "#060A10" }}>
        <div style={{ fontSize: "9px", color: "#1A3A4A", letterSpacing: "0.1em", marginBottom: "5px" }}>
          PROGRESS
        </div>
        <div style={{ background: "#0A1520", borderRadius: "2px", height: "4px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${(completedLabs.size / labs.length) * 100}%`,
            background: "#34D399",
            transition: "width 0.3s",
          }} />
        </div>
        <div style={{ fontSize: "10px", color: "#2A5A4A", marginTop: "4px" }}>
          {completedLabs.size} / {labs.length} completed
        </div>
      </div>
    </div>
  )
}
