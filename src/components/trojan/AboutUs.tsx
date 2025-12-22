import React from 'react'

export default function AboutUs() {
  return (
    <main className="pb-24 bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden border-b border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 lg:flex-row lg:items-center lg:py-20 lg:px-0">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Live AI Trust Network
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              The meme coin<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                backed by an AI trust engine
              </span>
            </h1>
            <p className="text-sm text-slate-300 md:text-base">
              $SYMBI invites people in with vibes — and then shows them the real machinery underneath: a W3C-aligned trust protocol for AI agents <span className="font-semibold">(Symphony)</span> and a real-time emergence &amp; drift monitor <span className="font-semibold">(Resonate)</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#framework" className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300">
                Explore the Framework
              </a>
              <a href="#whitepaper" className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 hover:border-cyan-400/70 hover:text-cyan-200">
                View Tech Whitepaper
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                DID &amp; verifiable credentials
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Drift &amp; emergence analytics
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Multi-agent orchestration
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-md flex-col items-center lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/80 shadow-[0_0_120px_rgba(34,211,238,0.35)]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 via-sky-300 to-indigo-400 text-lg font-bold text-slate-950 shadow-xl">
                  $SYMBI
                </div>
                <div className="absolute inset-6 rounded-full border border-slate-700/80"></div>
                <div className="absolute inset-12 rounded-full border border-slate-700/60"></div>
                <div className="absolute inset-[72px] rounded-full border border-slate-700/50"></div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-slate-950 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 shadow">Community &amp; Liquidity</div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-slate-950 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 shadow">Symphony</div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-950 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 shadow">Resonate</div>
                <div className="absolute bottom-0 left-1/2 mb-2 -translate-x-1/2 rounded-full bg-slate-950 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-200 shadow">Agents &amp; Enterprises</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-center text-xs text-slate-400">
              Hold the meme. Explore the protocol that gives AI agents identity, trust, and a measurable behavioural fingerprint.
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-0 lg:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Why this isn’t just another meme coin</h2>
              <p className="mt-4 text-sm text-slate-300 md:text-base">
                Most meme coins are just narratives. $SYMBI is wired into a working AI trust framework: decentralized identity for agents, verifiable credentials for capabilities, and an emergence engine that watches how behaviour changes over time.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-cyan-400"></span>
                  <div><span className="font-semibold">Decentralized identity.</span> Each agent has a W3C DID and cryptographic keys that can be verified, rotated, and revoked.</div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-indigo-400"></span>
                  <div><span className="font-semibold">Verifiable trust.</span> Agents publish signed trust declarations across six ethical pillars, plus cryptographic receipts for every action.</div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-400"></span>
                  <div><span className="font-semibold">Emergence analytics.</span> SYMBI Resonate tracks drift, self-organisation and critical states so you see turning points before they become incidents.</div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">For builders, enterprises &amp; regulators</p>
              <ul className="mt-3 space-y-3 text-sm text-slate-200">
                <li>• Prove what your agents did, and in what sequence.</li>
                <li>• Prove which capabilities were granted, and by whom.</li>
                <li>• Prove you were watching for behavioural drift the whole time.</li>
              </ul>
              <a href="#framework" className="mt-4 inline-flex text-xs font-semibold text-cyan-300 hover:text-cyan-200">Explore the SYMBI Framework →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">The SYMBI Framework</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">A layered stack that gives AI agents verifiable identity, enforceable trust contracts, and continuous emergence monitoring.</p>
            </div>
            <a href="https://symbi.world" target="_blank" className="text-xs font-semibold text-cyan-300 hover:text-cyan-200">Visit symbi.world →</a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">Identity</div>
              <h3 className="text-sm font-semibold text-slate-50">Decentralized Identity (DID Core)</h3>
              <p className="mt-2 text-sm text-slate-300">Agents use W3C DIDs (<span className="font-mono text-xs">did:web</span>, <span className="font-mono text-xs">did:key</span>, <span className="font-mono text-xs">did:ion</span>, <span className="font-mono text-xs">did:ethr</span>) so every action can be bound to a cryptographic identity.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• Verifiable agent and org identities</li>
                <li>• Key rotation &amp; verification</li>
                <li>• Works on and off chain</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">Trust</div>
              <h3 className="text-sm font-semibold text-slate-50">Trust Protocol (Symphony Core)</h3>
              <p className="mt-2 text-sm text-slate-300">A six-pillar trust declaration, verifiable credentials for capabilities, and hash-chained receipts for every operation.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• 6-pillar trust score with tiers</li>
                <li>• W3C Verifiable Credentials</li>
                <li>• StatusList2021 revocation &amp; suspension</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="mb-3 inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">Emergence</div>
              <h3 className="text-sm font-semibold text-slate-50">Emergence Monitor (Resonate Core)</h3>
              <p className="mt-2 text-sm text-slate-300">Time-series drift detection plus narrative emergence analytics for self-organisation, resonance, paradox and more.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• EWMA &amp; statistical drift metrics</li>
                <li>• Emergence scoring from agent notes</li>
                <li>• Alert levels: normal · high · critical</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-center">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-slate-50">Understanding drift and emergence</h3>
              <p className="mt-2 text-sm text-slate-300">SYMBI doesn’t just check whether a single answer is “good” or “bad”. It watches the <span className="font-semibold">trajectory</span> of each agent: how their risk vectors move, how their internal narratives change, and how often they enter critical states.</p>
              <p className="mt-2 text-xs text-slate-400">This gives enterprises and regulators a continuous, audit-friendly picture of how autonomous systems behave across days, weeks and lifecycles.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <img
                src="/assets/drift-emergence.png"
                alt="Understanding drift and emergence"
                className="w-full rounded-xl border border-slate-800/80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="symphony-resonate" className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Symphony vs Resonate</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">Two core systems, one shared mission: make autonomous agents observable, governable and safe enough for real-world deployment.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a href="https://github.com/s8ken/SYMBI-Symphony" target="_blank" className="rounded-full border border-slate-700 px-4 py-1.5 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">Symphony GitHub</a>
              <a href="https://github.com/s8ken/SYMBI-Resonate" target="_blank" className="rounded-full border border-slate-700 px-4 py-1.5 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">Resonate GitHub</a>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <h3 className="text-sm font-semibold text-slate-50">SYMBI Symphony · Trust Spine</h3>
              <p className="mt-2 text-sm text-slate-300">Symphony is the protocol that defines what an agent is allowed to be. It binds identity, capabilities and ethics together in cryptographically signed contracts.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• DID &amp; VC infrastructure for AI agents</li>
                <li>• Six-pillar trust declarations &amp; scores</li>
                <li>• W3C StatusList2021 revocation lists</li>
                <li>• Hash-chained receipts for every operation</li>
                <li>• Agent SDK for making any agent SYMBI-aware</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">Think of Symphony as the <span className="italic">legal and ethical spine</span> of an agent system.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"></div>
              <h3 className="text-sm font-semibold text-slate-50">SYMBI Resonate · Emergence Radar</h3>
              <p className="mt-2 text-sm text-slate-300">Resonate is the observer that watches what agents are actually becoming over time, not just what they claim they are.</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• Sliding-window analysis of trust &amp; guilt/risk vectors</li>
                <li>• EWMA &amp; statistical drift detection</li>
                <li>• Content emergence scoring from agent notes</li>
                <li>• Alert levels &amp; metrics exposed via API</li>
                <li>• Ready for dashboards, SIEMs and compliance tooling</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">Think of Resonate as a <span className="italic">radar dish</span> pointed at agent behaviour.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-[1px]">
            <div className="flex flex-col gap-4 rounded-2xl bg-slate-950/90 p-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
              <p>
                <span className="font-semibold text-slate-50">Together:</span> Symphony defines the contract for how agents <span className="font-semibold">should</span> behave. Resonate tells you how they <span className="font-semibold">are actually</span> behaving in the wild.
              </p>
              <a href="#whitepaper" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 font-semibold text-cyan-300 ring-1 ring-slate-700 hover:text-cyan-200">Read the combined architecture →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="agents" className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Multi-agent ecosystems, governed</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">SYMBI is designed for swarms of agents: research assistants, trading bots, copilots, compliance agents, and more — all operating under a shared trust fabric.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="space-y-5 text-xs text-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Users &amp; Orgs</div>
                    <div className="mt-1 text-xs text-slate-200">Humans, dApps, and enterprises submitting tasks and mandates.</div>
                  </div>
                  <div className="mx-2 text-slate-500">▼</div>
                  <div className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Agent Orchestrator</div>
                    <div className="mt-1 text-xs text-slate-200">Routes work to the right combination of SYMBI-aware agents and tools.</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 rounded-xl border border-cyan-600/50 bg-slate-950/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">Symphony</div>
                    <div className="mt-1 text-xs text-slate-200">Resolves agent DIDs, verifies credentials, applies trust scores and policy checks, and emits signed trust receipts.</div>
                  </div>
                  <div className="mx-2 flex flex-col items-center justify-center text-slate-500"><span>↔</span></div>
                  <div className="flex-1 rounded-xl border border-indigo-500/40 bg-slate-950/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-200">Resonate</div>
                    <div className="mt-1 text-xs text-slate-200">Watches the stream of receipts and notes, computing drift, emergence and alert levels for each agent and system.</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Agent Swarm</div>
                    <div className="mt-1 grid grid-cols-2 gap-2 text-[11px] text-slate-200">
                      <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 px-2 py-1">Research Agent</div>
                      <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 px-2 py-1">Trading Agent</div>
                      <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 px-2 py-1">Compliance Agent</div>
                      <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 px-2 py-1">Ops Copilot</div>
                    </div>
                  </div>
                  <div className="mx-2 flex flex-col items-center justify-center text-slate-500"><span>▲</span></div>
                  <div className="flex-1 rounded-xl border border-emerald-500/50 bg-slate-950/80 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">$SYMBI Community</div>
                    <div className="mt-1 text-xs text-slate-200">Uses governance signals and staking to steer policies, thresholds, and which agents or organisations can join the network.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <p>In a SYMBI-governed ecosystem, no agent operates in the dark. Every decision runs through a trust spine (Symphony) and is observed by an emergence radar (Resonate).</p>
              <p className="text-xs text-slate-400">That means enterprises can experiment with autonomous systems while still having the controls, logs and metrics needed for compliance, audits and internal risk management.</p>
              <a href="#whitepaper" className="inline-flex text-xs font-semibold text-cyan-300 hover:text-cyan-200">Learn more about the multi-agent architecture →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="whitepaper" className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-center">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">SYMBI Technical Whitepaper</h2>
              <p className="mt-2 text-sm text-slate-300 md:text-base">A deep dive into the architecture behind $SYMBI: decentralized identity, verifiable credentials, six-pillar trust declarations, revocation semantics, emergence analytics, and multi-agent governance.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Written for engineers, auditors and protocol architects</li>
                <li>• Explains Symphony, Resonate and the token’s role without hype</li>
                <li>• Maps features to regulatory and enterprise risk frameworks</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                <a href="/docs/symbi-whitepaper.pdf" className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300">Download PDF</a>
                <a href="https://github.com/s8ken" target="_blank" className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">View on GitHub</a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">Whitepaper Outline</p>
              <ol className="mt-3 space-y-1.5 list-decimal list-inside text-[11px] text-slate-300">
                <li>Problem: trust &amp; emergence in autonomous agents</li>
                <li>Design principles &amp; threat model</li>
                <li>Identity layer (DIDs &amp; key management)</li>
                <li>Credential &amp; trust layer (Symphony)</li>
                <li>Revocation, suspension &amp; lifecycle</li>
                <li>Provenance, receipts &amp; verification flows</li>
                <li>Emergence &amp; drift analytics (Resonate)</li>
                <li>Multi-agent governance &amp; $SYMBI community role</li>
                <li>Security considerations &amp; roadmap</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="trade" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-0">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-[1px]">
            <div className="flex flex-col gap-4 rounded-2xl bg-slate-950/95 p-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg text-sm text-slate-300">
                <h3 className="text-base font-semibold text-slate-50">$SYMBI · From meme to mechanism</h3>
                <p className="mt-1 text-xs text-slate-400">If you’re here for the memes, stay for the protocol. $SYMBI is the community key to a living AI trust stack that anyone can inspect, build on and help govern.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <a href="https://dex.example.com/SYMBI" target="_blank" className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300">Trade on DEX</a>
                <a href="https://symbi.world" target="_blank" className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">Visit symbi.world</a>
                <a href="https://github.com/s8ken" target="_blank" className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200">Explore the repos</a>
              </div>
            </div>
          </div>
          <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-900 pt-5 text-[11px] text-slate-500 md:flex-row">
            <p>© 2025 SYMBI · This is not financial advice. Do your own research.</p>
            <div className="flex gap-4">
              <a href="https://x.com" className="hover:text-cyan-300">X</a>
              <a href="https://discord.gg" className="hover:text-cyan-300">Discord</a>
              <a href="https://telegram.org" className="hover:text-cyan-300">Telegram</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
