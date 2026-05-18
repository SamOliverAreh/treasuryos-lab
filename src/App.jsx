import { useState, useCallback } from "react"
import { ALL_LABS } from "./labs/index.js"
import Sidebar from "./components/Sidebar.jsx"
import LabHeader from "./components/LabHeader.jsx"
import ContextPanel from "./components/ContextPanel.jsx"
import CodePanel from "./components/CodePanel.jsx"

export default function App() {
  const [selectedLab, setSelectedLab]   = useState(ALL_LABS[0])
  const [activeTrack, setActiveTrack]   = useState("ALL")
  const [activeTab, setActiveTab]       = useState("exercise")
  const [userCode, setUserCode]         = useState(ALL_LABS[0].starterCode)
  const [completedLabs, setCompletedLabs] = useState(new Set())
  const [aiReview, setAiReview]         = useState("")
  const [aiLoading, setAiLoading]       = useState(false)
  // Store user code per lab so switching doesn't wipe work
  const [savedCode, setSavedCode]       = useState({ [ALL_LABS[0].id]: ALL_LABS[0].starterCode })

  const selectLab = useCallback((lab) => {
    // Save current code before switching
    setSavedCode(prev => ({ ...prev, [selectedLab.id]: userCode }))
    setSelectedLab(lab)
    setUserCode(savedCode[lab.id] ?? lab.starterCode)
    setActiveTab("exercise")
    setAiReview("")
  }, [selectedLab.id, userCode, savedCode])

  const handleCodeChange = useCallback((code) => {
    setUserCode(code)
    setSavedCode(prev => ({ ...prev, [selectedLab.id]: code }))
  }, [selectedLab.id])

  const markComplete = () => {
    setCompletedLabs(prev => new Set([...prev, selectedLab.id]))
  }

  const getAIReview = async () => {
    setAiLoading(true)
    setAiReview("")
    setActiveTab("ai")

    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a senior treasury systems engineer at a FTSE 100 company reviewing a candidate's code submission.
The candidate is preparing for a Senior Technical System Specialist role at Experian Group Treasury.
Be direct, specific, and practical. Do not use markdown headers or bullet symbols — use plain text with line breaks only.

Structure your feedback as:
WHAT WORKS
(1-2 sentences on what they got right)

ISSUES TO FIX
(List specific problems — reference actual code patterns, not generalities. If their code is blank or barely started, say so directly.)

SENIOR-LEVEL IMPROVEMENT
(One technique or pattern they wouldn't have thought of — make it treasury-system specific)

PRODUCTION CONSEQUENCE
(What would actually happen if this ran in a real treasury system with their current code)

Keep total response under 380 words. Be honest — do not soften feedback if the code is wrong or incomplete.`,
          messages: [{
            role: "user",
            content: `Lab: ${selectedLab.title}
Track: ${selectedLab.track}
Level: ${selectedLab.level}

Scenario:
${selectedLab.context}

Candidate's code:
\`\`\`
${userCode}
\`\`\`

Reference solution:
\`\`\`
${selectedLab.solution}
\`\`\`

Review the candidate's code against the reference solution.`,
          }],
        }),
      })

      const data = await resp.json()
      const text = data.content?.map(b => b.text || "").join("") || "No response received."
      setAiReview(text)
    } catch (err) {
      setAiReview("AI review unavailable right now. Compare your code against the Solution tab manually.")
    }

    setAiLoading(false)
  }

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      background: "#060A0F",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      color: "#B8D0E8",
      overflow: "hidden",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #0A1018; }
        ::-webkit-scrollbar-thumb { background: #1E3040; border-radius: 2px; }
        textarea::placeholder { color: #1A3040; }
      `}</style>

      {/* Top bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        height: "40px",
        borderBottom: "1px solid #0E1E2E",
        background: "#060A10",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "11px", color: "#2A6A8A", letterSpacing: "0.2em", fontWeight: 600 }}>
            TREASURYOS
          </span>
          <span style={{ color: "#0E2A3A", fontSize: "14px" }}>|</span>
          <span style={{ fontSize: "10px", color: "#0E3A50", letterSpacing: "0.12em" }}>
            HANDS-ON LAB
          </span>
        </div>
        <div style={{ fontSize: "10px", color: "#1A3A4A" }}>
          {completedLabs.size}/{ALL_LABS.length} labs complete
          {completedLabs.size === ALL_LABS.length && (
            <span style={{ color: "#34D399", marginLeft: "10px" }}>✓ ALL DONE</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar
          labs={ALL_LABS}
          selectedLab={selectedLab}
          onSelect={selectLab}
          completedLabs={completedLabs}
          activeTrack={activeTrack}
          onTrackChange={setActiveTrack}
        />

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <LabHeader
            lab={selectedLab}
            isComplete={completedLabs.has(selectedLab.id)}
            onMarkComplete={markComplete}
            onAIReview={getAIReview}
            aiLoading={aiLoading}
          />

          {/* Split: context left, code right */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <ContextPanel lab={selectedLab} />
            <CodePanel
              lab={selectedLab}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              userCode={userCode}
              onCodeChange={handleCodeChange}
              aiReview={aiReview}
              aiLoading={aiLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
