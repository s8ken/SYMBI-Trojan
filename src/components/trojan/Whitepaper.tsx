import React from 'react'

export default function Whitepaper() {
  return (
    <main className="pb-24 bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">SYMBI Technical Whitepaper</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            A working architecture for AI trust: decentralized identity, verifiable trust contracts, signed receipts, and emergence monitoring for autonomous agents.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Overview</h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            SYMBI is a trust spine for agent ecosystems. It binds identity (DIDs), capabilities (W3C Verifiable Credentials), and ethical constraints into verifiable contracts and records signed receipts for every operation. A companion emergence monitor observes drift and phase‑shift in agent behavior over time.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Decentralized Identity (DID Core) for agents and organizations</li>
            <li>• Verifiable Credentials for capabilities and trust declarations</li>
            <li>• Hash‑chained, signed receipts for provenance and auditability</li>
            <li>• StatusList2021 for revocation and suspension semantics</li>
            <li>• Emergence analytics (drift, resonance, alert tiers)</li>
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Identity Layer · DID Core</h3>
              <p className="mt-2 text-sm text-slate-300">Agents use W3C DIDs (e.g., did:web, did:key, did:ion, did:ethr). Keys can be verified, rotated, and revoked. Actions are bound to identities for accountability.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• DID Documents and verification methods</li>
                <li>• Key lifecycle: issuance, rotation, revocation</li>
                <li>• On‑chain and off‑chain identifiers supported</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Trust Layer · Symphony</h3>
              <p className="mt-2 text-sm text-slate-300">Trust declarations across ethical pillars are expressed as Verifiable Credentials and enforced by policy. Every operation emits a signed, hash‑chained receipt.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• VC issuance, verification, and presentation flows</li>
                <li>• StatusList2021 for revocation/suspension</li>
                <li>• Ed25519 signatures; SHA‑256 hash chains</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold text-slate-50">Emergence Layer · Resonate</h3>
            <p className="mt-2 text-sm text-slate-300">Resonate watches trajectories, not single answers. It tracks drift and phase‑shift velocity, resonance changes, and narrative emergence from agent notes.</p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
              <li>• Sliding‑window metrics and EWMA for drift</li>
              <li>• Alert tiers: normal · high · critical</li>
              <li>• APIs for dashboards, SIEMs, and audits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Receipts & Verification</h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">Each operation emits a signed receipt with payload, signature, public key, and previous hash. Verification checks the signature and hash‑chain continuity.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Ed25519 signatures (W3C data integrity)</li>
            <li>• SHA‑256 payload hashing and chaining</li>
            <li>• Verifier can reconstruct and validate provenance</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0">
          <h2 className="text-xl font-semibold sm:text-2xl">Outline</h2>
          <ol className="mt-3 space-y-1.5 list-decimal list-inside text-[13px] text-slate-300">
            <li>Problem: trust & emergence in autonomous agents</li>
            <li>Design principles & threat model</li>
            <li>Identity layer (DIDs & key management)</li>
            <li>Credential & trust layer (Symphony)</li>
            <li>Revocation, suspension & lifecycle</li>
            <li>Provenance, receipts & verification flows</li>
            <li>Emergence & drift analytics (Resonate)</li>
            <li>Multi‑agent governance & community role</li>
            <li>Security considerations & roadmap</li>
          </ol>
          <p className="mt-4 text-xs text-slate-400">Work‑in‑progress; content will evolve as repositories and demos are updated.</p>
        </div>
      </section>
    </main>
  )
}

