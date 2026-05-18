import { useState } from "react"

export default function ContextPanel({ lab }) {
  const [openHint, setOpenHint] = useState(-1)

  return (
    <div style={{
      overflowY: "auto",
      padding: "18px 20px",
      background: "#070C12",
      borderRight: "1px solid #0E1E2E",
    }}>

      {/* Scenario */}
      <Section label="SCENARIO">
        <p style={{
          fontSize: "12px", color: "#7AA8C0", lineHeight: 1.75,
          fontFamily: "'IBM Plex Sans', sans-serif", margin: 0,
        }}>
          {lab.context}
        </p>
      </Section>

      {/* Schema */}
      <Section label="SCHEMA / STRUCTURE">
        <CodeBlock>{lab.schema}</CodeBlock>
      </Section>

      {/* Sample Data */}
      <Section label="SAMPLE DATA">
        <CodeBlock color="#4A7A8A">{lab.sampleData}</CodeBlock>
      </Section>

      {/* Hints */}
      <Section label={`HINTS (${lab.hints.length})`}>
        {lab.hints.map((hint, i) => (
          <div key={i} onClick={() => setOpenHint(openHint === i ? -1 : i)} style={{
            padding: "8px 12px",
            marginBottom: "4px",
            background: openHint === i ? "#080F18" : "#050A10",
            border: "1px solid #0E1A24",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "background 0.15s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "10px", color: "#2A5A6A", letterSpacing: "0.08em" }}>
                Hint {i + 1}
              </span>
              <span style={{ fontSize: "10px", color: "#1A3A4A" }}>
                {openHint === i ? "▲" : "▼"}
              </span>
            </div>
            {openHint === i && (
              <p style={{
                fontSize: "11px", color: "#6A9AB0",
                marginTop: "6px", marginBottom: 0,
                lineHeight: 1.65,
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}>
                {hint}
              </p>
            )}
          </div>
        ))}
      </Section>

      {/* Real world note */}
      <div style={{
        padding: "12px 14px",
        background: "#060F08",
        border: "1px solid #0E2418",
        borderLeft: "3px solid #34D399",
        borderRadius: "2px",
      }}>
        <div style={{
          fontSize: "9px", color: "#1A5A30",
          letterSpacing: "0.12em", marginBottom: "7px", fontWeight: 600,
        }}>
          WHY THIS MATTERS AT EXPERIAN
        </div>
        <p style={{
          fontSize: "11px", color: "#5A9A70",
          lineHeight: 1.7, margin: 0,
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}>
          {lab.realWorldNote}
        </p>
      </div>

    </div>
  )
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div style={{
        fontSize: "9px", color: "#1A4A5A",
        letterSpacing: "0.15em", marginBottom: "8px", fontWeight: 600,
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

function CodeBlock({ children, color = "#4A8AAA" }) {
  return (
    <pre style={{
      fontSize: "11px", color,
      background: "#050810",
      padding: "12px 14px",
      border: "1px solid #0E1E2E",
      borderRadius: "2px",
      lineHeight: 1.65,
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      margin: 0,
      fontFamily: "'IBM Plex Mono', monospace",
    }}>
      {children}
    </pre>
  )
}
