import { useRef, useEffect } from "react"
import { TRACK_META } from "../labs/index.js"

const TABS = [
  { id: "exercise", label: "EXERCISE" },
  { id: "solution", label: "SOLUTION" },
  { id: "output",   label: "EXPECTED OUTPUT" },
  { id: "ai",       label: "AI REVIEW" },
]

export default function CodePanel({ lab, activeTab, onTabChange, userCode, onCodeChange, aiReview, aiLoading }) {
  const textareaRef = useRef(null)
  const meta = TRACK_META[lab.track]

  useEffect(() => {
    if (activeTab === "exercise") {
      setTimeout(() => textareaRef.current?.focus(), 50)
    }
  }, [activeTab, lab.id])

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const s = e.target.selectionStart
      const end = e.target.selectionEnd
      const next = userCode.substring(0, s) + "    " + userCode.substring(end)
      onCodeChange(next)
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = s + 4
      }, 0)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", flex: 1 }}>

      {/* Tabs */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #0E1E2E",
        background: "#070C12",
        flexShrink: 0,
      }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => onTabChange(tab.id)} style={{
            padding: "9px 16px",
            fontSize: "10px",
            letterSpacing: "0.1em",
            fontFamily: "'IBM Plex Mono', monospace",
            cursor: "pointer",
            background: "transparent",
            color: activeTab === tab.id ? meta.color : "#2A4A5A",
            border: "none",
            borderBottom: activeTab === tab.id
              ? `2px solid ${meta.color}`
              : "2px solid transparent",
            marginBottom: "-1px",
            transition: "all 0.15s",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>

        {activeTab === "exercise" && (
          <textarea
            ref={textareaRef}
            value={userCode}
            onChange={e => onCodeChange(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            placeholder="// Write your solution here…"
            style={{
              width: "100%",
              height: "100%",
              background: "#050810",
              color: "#C8E0F0",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              lineHeight: 1.75,
              padding: "16px",
              border: "none",
              outline: "none",
              resize: "none",
              tabSize: 4,
            }}
          />
        )}

        {activeTab === "solution" && (
          <ScrollPane>
            <Label color="#1A5A30">REFERENCE SOLUTION</Label>
            <pre style={preStyle("#7AB8A0")}>{lab.solution}</pre>
          </ScrollPane>
        )}

        {activeTab === "output" && (
          <ScrollPane>
            <Label color="#1A4A6A">EXPECTED OUTPUT</Label>
            <pre style={preStyle("#5A9AB5")}>{lab.expectedOutput}</pre>
          </ScrollPane>
        )}

        {activeTab === "ai" && (
          <ScrollPane>
            <Label color="#1A5A30">AI CODE REVIEW</Label>
            {aiLoading && (
              <p style={{ color: "#3A7A5A", fontSize: "12px", lineHeight: 1.7 }}>
                Reviewing your code against the reference solution…
              </p>
            )}
            {!aiLoading && !aiReview && (
              <p style={{ color: "#2A4A5A", fontSize: "12px", lineHeight: 1.7 }}>
                Write your solution in the Exercise tab, then click{" "}
                <span style={{ color: "#5AE090" }}>⚡ AI REVIEW</span> for
                senior-level feedback specific to treasury systems roles.
              </p>
            )}
            {aiReview && (
              <div style={{
                fontSize: "12px", color: "#7AB8A0",
                lineHeight: 1.85,
                fontFamily: "'IBM Plex Sans', sans-serif",
                whiteSpace: "pre-wrap",
              }}>
                {aiReview}
              </div>
            )}
          </ScrollPane>
        )}

      </div>
    </div>
  )
}

function ScrollPane({ children }) {
  return (
    <div style={{
      height: "100%",
      overflowY: "auto",
      background: "#050810",
      padding: "16px 18px",
    }}>
      {children}
    </div>
  )
}

function Label({ children, color }) {
  return (
    <div style={{
      fontSize: "9px", color,
      letterSpacing: "0.14em",
      marginBottom: "12px",
      fontWeight: 600,
      fontFamily: "'IBM Plex Mono', monospace",
    }}>
      {children}
    </div>
  )
}

function preStyle(color) {
  return {
    fontSize: "12px",
    color,
    lineHeight: 1.75,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    margin: 0,
    fontFamily: "'IBM Plex Mono', monospace",
  }
}
