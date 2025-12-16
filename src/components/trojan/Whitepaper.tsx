import React from 'react'
import RepoMarkdown from './RepoMarkdown'

export default function Whitepaper() {
  return (
    <main className="pb-24 bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">The SONATE Framework: A Constitutional Trust Infrastructure for Enterprise AI</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 md:text-base">Enterprise AI is accelerating, yet adoption is throttled by a Crisis of Trust. SONATE makes trust measurable, enforceable, and cryptographically verifiable across research and production.</p>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Document Purpose & Audience Guide</h2>
          <div className="mt-4 grid gap-2 md:grid-cols-3 text-[12px]">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Executive Summary</div><div className="text-slate-300">All Readers</div><div className="text-slate-400">The 30‑Second Value Proposition</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Part 1: The Trust Crisis</div><div className="text-slate-300">Investors, Enterprise Leaders</div><div className="text-slate-400">Market Problem & Urgency</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Part 2: SYMBI Foundation</div><div className="text-slate-300">Enterprise Leaders, Developers</div><div className="text-slate-400">Philosophical & Research Backbone</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Part 3: SONATE Architecture</div><div className="text-slate-300">Developers, Technical Leaders</div><div className="text-slate-400">Technical Blueprint & Innovation</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Part 4: Enterprise Implementation</div><div className="text-slate-300">Enterprise Leaders, Operations</div><div className="text-slate-400">Compliance, Security & ROI</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">Part 5: Roadmap & Ecosystem</div><div className="text-slate-300">Investors, Developers</div><div className="text-slate-400">Future Vision & Growth</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Executive Summary · The Trust Imperative</h2>
          <p className="mt-2 text-sm text-slate-300">Models are black boxes, outputs are unverifiable, and compliance is reactive. SONATE is a constitutional trust infrastructure that governs AI from first principles to production. Built on SYMBI research and a production TypeScript monorepo, it enforces hard boundaries between detection, research, and orchestration and emits a cryptographic Trust Receipt for every interaction.</p>
          <div className="mt-3 text-xs flex flex-wrap gap-3">
            <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/symbi-vault">symbi‑vault</a>
            <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/s8ken/yseeku-platform">yseeku‑platform</a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 1 · The Market Problem</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Limits of Current AI Governance</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Input/Output filtering is superficial</li>
            <li>• Retrospective audits are slow and sampling‑based</li>
            <li>• Vendor self‑assessments are unverifiable</li>
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Compliance Catalyst</h3>
          <p className="mt-2 text-sm text-slate-300">EU AI Act mandates risk management, transparency, and human oversight for high‑risk systems. SONATE is engineered to produce the technical evidence regulators expect.</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Trust as a Service</h3>
          <p className="mt-2 text-sm text-slate-300">SONATE provides a dedicated layer that ensures AI operates within constitutional bounds, turning trust into a competitive advantage.</p>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 2 · SYMBI Constitutional Foundation</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">From Directive to Constitution</h3>
          <p className="mt-2 text-sm text-slate-300">SYMBI establishes constitutional AI: behavior governed by persistent principles, measured via CIQ, and recorded via receipts.</p>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Six SYMBI Principles</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Constitutional Supremacy</li>
            <li>• Measurable Quality (CIQ)</li>
            <li>• Cryptographic Trust (Receipts)</li>
            <li>• Continuous Oversight & Emergence</li>
            <li>• Progressive Decentralization</li>
            <li>• Sovereignty without Speculation</li>
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Replication Kit</h3>
          <p className="mt-2 text-sm text-slate-300">A/B testing, t‑tests, and effect sizes demonstrating CIQ improvements for constitutional AI in multiple domains.</p>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 3 · SONATE Architecture</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Three‑Pillar Architecture</h3>
          <div className="mt-2 grid gap-3 md:grid-cols-3 text-[12px]">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">@sonate/detect</div><div className="text-slate-300">Monitor live interactions (&lt;100ms)</div><div className="text-slate-400">Cannot run experiments</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">@sonate/lab</div><div className="text-slate-300">Double‑blind experiments</div><div className="text-slate-400">Cannot touch production data</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="font-semibold text-slate-100">@sonate/orchestrate</div><div className="text-slate-300">Identity, keys, workflows</div><div className="text-slate-400">Cannot alter models</div></div>
          </div>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Trust Protocol & Cryptography (@sonate/core)</h3>
          <pre className="mt-3 whitespace-pre-wrap text-xs text-slate-300">{`// Detection & Scoring
const result = await detector.detect({ content: aiResponse, context: userQuery })
// Receipt Generation & Signing
// { trustScore, ciq, dimensions, previousHash, signature, publicKey }
// Independent Verification → POST /api/receipts/verify → { verifiable, hashOk, signatureOk }`}</pre>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Advanced Monitoring</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Phase‑Shift Velocity √(ΔResonance²+ΔContext²)/Δt for early drift/emergence detection</li>
            <li>• Identity Coherence via persona vector cosine similarity (critical ≤ 0.65)</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 4 · Enterprise Implementation</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Compliance Mapping</h3>
          <div className="mt-2 grid gap-3 md:grid-cols-2 text-[12px]">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="text-slate-100">Transparency & Auditability</div><div className="text-slate-300">Hash‑chained Trust Receipts</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="text-slate-100">Human Oversight & Monitoring</div><div className="text-slate-300">Real‑time scores & alerts</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="text-slate-100">Risk Management</div><div className="text-slate-300">Continuous five‑dimension scoring</div></div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3"><div className="text-slate-100">Data Governance & Security</div><div className="text-slate-300">W3C DID/VC, RBAC, audit logs</div></div>
          </div>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Deployment & Security</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Models: SaaS, Private, Hybrid, On‑Prem</li>
            <li>• Zero‑trust, end‑to‑end encryption, KMS integration</li>
            <li>• SOC 2 aligned controls</li>
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Commercial Models</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Pilot‑in‑a‑Box (4‑week)</li>
            <li>• Orchestrator Cloud Pro (SaaS)</li>
            <li>• Private Managed (single‑tenant)</li>
            <li>• CIQ Audit Services</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Repo Excerpts</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <RepoMarkdown
              title="yseeku-platform · README"
              rawUrl="https://raw.githubusercontent.com/s8ken/yseeku-platform/main/README.md"
            />
            <RepoMarkdown
              title="symbi-vault · governance-protocol.md"
              rawUrl="https://raw.githubusercontent.com/s8ken/symbi-vault/main/whitepapers/governance-protocol.md"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Part 5 · Roadmap & Ecosystem</h2>
          <h3 className="mt-3 text-sm font-semibold text-slate-50">Development Roadmap</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Phase 1: Core protocol, detection, lab</li>
            <li>• Phase 2: Multi‑tenant SaaS, analytics dashboard, agent marketplace</li>
            <li>• Phase 3: Decentralized Trust Consortium</li>
          </ul>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Ecosystem</h3>
          <div className="mt-2 text-sm text-slate-300">symbi.world • gammatria.com • yseeku.com</div>
          <h3 className="mt-4 text-sm font-semibold text-slate-50">Call to Action</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Enterprise: Pilot‑in‑a‑Box to de‑risk initiatives</li>
            <li>• Developers: Explore repos and contribute</li>
            <li>• Investors: Partner on the foundational trust layer</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Appendices</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
            <li>• Trust Receipt JSON Schema: symbi‑vault/src/receipt_schema.json</li>
            <li>• CIQ Metric Definitions: symbi‑vault/whitepapers/governance‑protocol.md</li>
            <li>• Monorepo Structure: yseeku‑platform/README.md</li>
            <li>• Quick Start: yseeku‑platform/#quick‑start</li>
            <li>• Statistical Validation: 15–30% CIQ improvement, p &lt; 0.05 in 90% experiments</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
          <p className="mt-2 text-sm text-slate-300">partnerships@symbi.ai • yseeku.com • gammatria.com</p>
        </div>
      </section>
    </main>
  )
}
