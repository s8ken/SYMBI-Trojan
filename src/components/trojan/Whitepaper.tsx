import React from 'react'

export default function Whitepaper() {
  return (
    <main className="pb-24 bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">The SONATE Framework: A Constitutional Trust Infrastructure for Enterprise AI</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">Enterprise AI operates in a crisis of trust. SONATE is a production‑ready constitutional trust infrastructure that makes AI governed, measurable, and cryptographically verifiable.</p>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Abstract & Executive Summary</h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">Core Thesis: Unverifiable trust undermines enterprise AI. SONATE introduces a constitutional framework that provides measurable (CIQ metrics), enforceable (policy‑bound identity/credentials), and cryptographically verifiable trust (signed, hash‑chained receipts).</p>
          <p className="mt-3 text-sm text-slate-300">Key Takeaway: SONATE combines SYMBI constitutional research with a production TypeScript monorepo, enabling enterprises to govern AI from research to production through hard‑boundary separation of detection, validation, and orchestration.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Principles • CIQ • Receipts</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Detect • Lab • Orchestrate</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Governed • Measurable • Verifiable</p></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 1 · The Constitutional Foundation</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">The SYMBI Paradigm</h3>
          <p className="mt-2 text-sm text-slate-300">Shift from directive‑based AI toward constitutional AI, governed by explicit principles and measured outcomes. Governance is expressed through identity, credentials, policies and receipts.</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Core Principles</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Constitutional Supremacy</li>
            <li>• Measurable Quality</li>
            <li>• Cryptographic Trust</li>
            <li>• Continuous Oversight</li>
            <li>• Identity Coherence & Revocation</li>
            <li>• Auditability & Accountability</li>
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Trust as Measurement</h3>
          <p className="mt-2 text-sm text-slate-300">CIQ metrics (Clarity, Integrity, Quality) summarize agent trust posture. Cryptographic Trust Receipts capture decisions with payload, signature, public key and previous hash for verifiable chains.</p>
          <p className="mt-1 text-xs text-slate-400">Receipt schema reference: receipt_schema.json (monorepo docs).</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Research Validation</h3>
          <p className="mt-2 text-sm text-slate-300">Replication kits and A/B testing frameworks establish empirical credibility for constitutional approaches, including t‑tests and effect sizes over agent behaviors.</p>
          <div className="mt-3 text-xs">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/symbi-vault">symbi‑vault</a>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">CIQ: Clarity</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">CIQ: Integrity</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">CIQ: Quality</p></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 2 · Architectural Blueprint & Technical Specs</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Three‑Pillar Architecture</h3>
          <p className="mt-2 text-sm text-slate-300">The Three‑Pillar Architecture enforces hard boundaries between <span className="font-mono text-xs">@sonate/detect</span> (production), <span className="font-mono text-xs">@sonate/lab</span> (research), and <span className="font-mono text-xs">@sonate/orchestrate</span> (infrastructure). Each pillar is independently testable and governable.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Detect: Production</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Lab: Research</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"><p className="text-xs text-slate-300">Orchestrate: Identity/RBAC</p></div>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h4 className="text-sm font-semibold text-slate-50"><span className="font-mono text-xs">@sonate/core</span> · The Protocol</h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
                <li>• Trust scoring algorithm tied to six principles; monitored across five dimensions (Reality Index, Trust Protocol, Ethical Alignment, Resonance Quality, Canvas Parity)</li>
                <li>• Trust receipt generation with SHA‑256 and Ed25519</li>
                <li>• Policy evaluation and tiering</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h4 className="text-sm font-semibold text-slate-50"><span className="font-mono text-xs">@sonate/detect</span> · The Sensor</h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
                <li>• Real‑time scoring under &lt;100ms latency</li>
                <li>• Five‑dimension outputs and alert thresholds</li>
                <li>• Streaming to receipt ledger</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h4 className="text-sm font-semibold text-slate-50"><span className="font-mono text-xs">@sonate/lab</span> · The Validator</h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
                <li>• Double‑blind experiments and replication kits</li>
                <li>• Statistical methods: t‑tests, Cohen’s d</li>
                <li>• Phase‑Shift Velocity for behavior change detection</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h4 className="text-sm font-semibold text-slate-50"><span className="font-mono text-xs">@sonate/orchestrate</span> · The Controller</h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
                <li>• W3C DID/VC for agent identity and capability</li>
                <li>• RBAC, policy routing, cryptographic audit logs</li>
                <li>• Integration points for SIEM and compliance tooling</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 text-xs">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/yseeku-platform">yseeku‑platform</a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 3 · Enterprise Trust Infrastructure & Compliance</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Trust Receipt Lifecycle</h3>
          <p className="mt-2 text-sm text-slate-300">The Trust Receipt Lifecycle: detection → scoring → signing → storage & chaining → verification. The result is a verifiable, immutable audit trail.</p>
          <div className="mt-4 grid gap-2 md:grid-cols-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"><p className="text-[11px] text-slate-300">Detection</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"><p className="text-[11px] text-slate-300">Scoring</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"><p className="text-[11px] text-slate-300">Signing</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"><p className="text-[11px] text-slate-300">Storage & Chain</p></div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"><p className="text-[11px] text-slate-300">Verification</p></div>
          </div>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Identity Coherence & Monitoring</h3>
          <p className="mt-2 text-sm text-slate-300">Persona vectors and cosine similarity help detect agent drift and instability. Combined with emergence metrics, they provide early warnings and trend insights.</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Enterprise Readiness</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Compliance: EU AI Act alignment, SOC 2, GDPR data handling</li>
            <li>• Deployment: cloud‑native, hybrid, and on‑prem options</li>
            <li>• Security: zero‑trust posture, robust key management</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Conclusion & Roadmap</h2>
          <p className="mt-2 text-sm text-slate-300">SONATE delivers provable trust by combining constitutional principles with verifiable mechanisms and modular architecture. Near‑term roadmap includes expanded experiment kits, deeper SIEM integrations, and governance prototypes.</p>
          <div className="mt-3 text-xs flex flex-wrap gap-3">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://symbi.world">symbi.world</a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://gammatria.com">gammatria.com</a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://yseeku.com">yseeku.com</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">How to Get Started</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• Copy directly: adapt technical sections from <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/yseeku-platform">yseeku‑platform</a> README</li>
            <li>• Lift from the vault: philosophical and governance materials from <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/symbi-vault">symbi‑vault</a></li>
            <li>• Flesh out the narrative: weave specs and research into a coherent enterprise trust story</li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">Work‑in‑progress; the page will evolve as repositories and demos are updated.</p>
        </div>
      </section>
    </main>
  )
}
