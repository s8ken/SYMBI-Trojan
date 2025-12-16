import React from 'react'

export default function SonateOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 340" className="w-full h-auto rounded-2xl border border-slate-800 bg-slate-900">
      <rect x="20" y="20" width="760" height="60" rx="10" fill="#0f172a" stroke="#334155" />
      <text x="40" y="58" fill="#93c5fd" fontSize="18" fontFamily="Inter, system-ui">Constitutional Principles • CIQ Metrics • Cryptographic Trust Receipts</text>
      <rect x="20" y="100" width="240" height="200" rx="10" fill="#0f172a" stroke="#334155" />
      <text x="40" y="130" fill="#c084fc" fontSize="16" fontFamily="Inter, system-ui">Detect</text>
      <text x="40" y="160" fill="#e5e7eb" fontSize="13" fontFamily="Inter, system-ui">Production sensors</text>
      <text x="40" y="185" fill="#9ca3af" fontSize="12" fontFamily="Inter, system-ui">&lt;100ms • thresholds</text>
      <rect x="280" y="100" width="240" height="200" rx="10" fill="#0f172a" stroke="#334155" />
      <text x="300" y="130" fill="#c084fc" fontSize="16" fontFamily="Inter, system-ui">Lab</text>
      <text x="300" y="160" fill="#e5e7eb" fontSize="13" fontFamily="Inter, system-ui">Research validators</text>
      <text x="300" y="185" fill="#9ca3af" fontSize="12" fontFamily="Inter, system-ui">A/B • phase‑shift</text>
      <rect x="540" y="100" width="240" height="200" rx="10" fill="#0f172a" stroke="#334155" />
      <text x="560" y="130" fill="#c084fc" fontSize="16" fontFamily="Inter, system-ui">Orchestrate</text>
      <text x="560" y="160" fill="#e5e7eb" fontSize="13" fontFamily="Inter, system-ui">Identity • RBAC • audit</text>
      <text x="560" y="185" fill="#9ca3af" fontSize="12" fontFamily="Inter, system-ui">DID/VC • receipts</text>
      <line x1="140" y1="100" x2="140" y2="85" stroke="#334155" />
      <line x1="400" y1="100" x2="400" y2="85" stroke="#334155" />
      <line x1="660" y1="100" x2="660" y2="85" stroke="#334155" />
      <text x="300" y="320" fill="#64748b" fontSize="12" fontFamily="Inter, system-ui">Hard boundaries • independent testing • verifiable governance</text>
    </svg>
  )
}

