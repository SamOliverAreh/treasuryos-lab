import { sqlLabs } from './sqlLabs.js'
import { pythonLabs } from './pythonLabs.js'
import { shellLabs } from './shellLabs.js'

export const ALL_LABS = [...sqlLabs, ...pythonLabs, ...shellLabs]

export const TRACK_META = {
  SQL:        { color: "#60A5FA", bg: "#0A1830", border: "#1E3A6A" },
  Python:     { color: "#FCD34D", bg: "#1A1508", border: "#3A3010" },
  PowerShell: { color: "#A78BFA", bg: "#110A28", border: "#2A1A5A" },
  Bash:       { color: "#FF6B35", bg: "#1A1008", border: "#3A2010" },
}

export const TRACKS = ["ALL", "SQL", "Python", "PowerShell", "Bash"]
