import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

interface DriftPoint { t: number; drift: number; resonance: number; alert: 'normal' | 'high' | 'critical' }

const sample: DriftPoint[] = Array.from({ length: 48 }).map((_, i) => ({
  t: i,
  drift: Math.max(0, Math.sin(i / 6) * 20 + (i > 36 ? 20 : 0)),
  resonance: Math.max(0, Math.cos(i / 5) * 15 + (i > 30 ? -10 : 0)),
  alert: i > 40 ? 'critical' : i > 32 ? 'high' : 'normal',
}))

export default function DriftMonitor() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
      <h4 className="text-sm font-semibold text-slate-50 mb-2">Phase‑shift & Resonance (last 24h)</h4>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sample} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
            <XAxis dataKey="t" tick={{ fill: '#94a3b8', fontSize: 11 }} hide />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 40]} hide />
            <Tooltip contentStyle={{ background: '#0b0f19', border: '1px solid #1f2937' }} labelStyle={{ color: '#cbd5e1' }} />
            <Line type="monotone" dataKey="drift" stroke="#22d3ee" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="resonance" stroke="#a78bfa" strokeWidth={2} dot={false} />
            <ReferenceLine x={40} stroke="#ef4444" strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">Critical band shows where phase‑shift velocity crosses alert threshold.</p>
    </div>
  )
}

