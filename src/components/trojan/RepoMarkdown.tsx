import React, { useEffect, useState } from 'react'

type RepoMarkdownProps = {
  title: string
  rawUrl: string
  maxChars?: number
}

export default function RepoMarkdown({ title, rawUrl, maxChars = 24000 }: RepoMarkdownProps) {
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(rawUrl)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const text = await res.text()
        if (!cancelled) setContent(text.slice(0, maxChars))
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Failed to load')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [rawUrl, maxChars])

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <a className="text-xs text-cyan-300 hover:text-cyan-200" href={rawUrl.replace('raw.githubusercontent.com', 'github.com').replace('/main/', '/blob/main/')} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
      {loading && <p className="mt-3 text-xs text-slate-400">Loading…</p>}
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
      {!loading && !error && (
        <pre className="mt-3 whitespace-pre-wrap text-xs text-slate-300 max-h-[480px] overflow-auto">{content}</pre>
      )}
    </div>
  )
}

