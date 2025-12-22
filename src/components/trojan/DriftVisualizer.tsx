import React, { useEffect, useRef, useState } from 'react'

export default function DriftVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [metrics, setMetrics] = useState({ drift: 0.12, resonance: 0.88, phase: 0.05 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const points: { x: number; y: number; color: string }[] = []
    for (let i = 0; i < 50; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: Math.random() > 0.5 ? '#22d3ee' : '#6366f1'
      })
    }

    const draw = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background grid
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.5)'
      ctx.lineWidth = 1
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Draw waves
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)'
      ctx.lineWidth = 2
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.02 + time) * 20 + Math.cos(x * 0.01 - time * 0.5) * 10
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)'
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.cos(x * 0.015 + time * 0.8) * 25 + Math.sin(x * 0.03 + time) * 15
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Draw particles
      points.forEach((p, i) => {
        p.x += Math.sin(time + i) * 0.5
        p.y += Math.cos(time * 0.5 + i) * 0.5
        
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
        
        // Connect nearby points
        points.forEach((p2, j) => {
          if (i === j) return
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 50) {
            ctx.strokeStyle = p.color
            ctx.globalAlpha = (1 - dist / 50) * 0.2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.globalAlpha = 1.0
          }
        })
      })

      // Update metrics slightly
      if (Math.random() > 0.95) {
        setMetrics(prev => ({
          drift: Math.max(0.05, Math.min(0.25, prev.drift + (Math.random() - 0.5) * 0.01)),
          resonance: Math.max(0.8, Math.min(0.98, prev.resonance + (Math.random() - 0.5) * 0.01)),
          phase: Math.max(0.01, Math.min(0.1, prev.phase + (Math.random() - 0.5) * 0.005))
        }))
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-950">
      <canvas
        ref={canvasRef}
        width={400}
        height={192}
        className="h-full w-full opacity-60"
      />
      
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/80">Phase‑shift & Resonance (last 24h)</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400"></span>
            <span className="text-[9px] font-medium text-emerald-400/80">LIVE MONITOR</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-slate-800/50 bg-slate-900/50 p-1.5 backdrop-blur-sm">
            <div className="text-[8px] uppercase text-slate-500">Drift Vel.</div>
            <div className="font-mono text-[10px] text-cyan-300">{(metrics.drift * 100).toFixed(2)}%</div>
          </div>
          <div className="rounded-lg border border-slate-800/50 bg-slate-900/50 p-1.5 backdrop-blur-sm">
            <div className="text-[8px] uppercase text-slate-500">Resonance</div>
            <div className="font-mono text-[10px] text-indigo-300">{(metrics.resonance * 100).toFixed(1)}%</div>
          </div>
          <div className="rounded-lg border border-slate-800/50 bg-slate-900/50 p-1.5 backdrop-blur-sm">
            <div className="text-[8px] uppercase text-slate-500">Phase Err.</div>
            <div className="font-mono text-[10px] text-emerald-300">{(metrics.phase * 100).toFixed(3)}%</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  )
}
