import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CONFIG } from '../../config'

interface RepoInfo {
  name: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  pushed_at: string
  description?: string
}

export default function RepoProofGrid() {
  const [repos, setRepos] = useState<RepoInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await axios.get<RepoInfo[]>(`https://api.github.com/users/${CONFIG.links.githubUser}/repos?per_page=12&sort=updated`)
        setRepos(res.data)
      } catch (e: any) {
        setError('Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-sm text-zinc-400">Loading repositories...</div>
  if (error) return <div className="text-sm text-red-400">{error}</div>

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((r) => (
        <a key={r.html_url} href={r.html_url} target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-600 transition">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-zinc-100">{r.name}</h4>
            <span className="text-[10px] text-zinc-400">{new Date(r.pushed_at).toLocaleDateString()}</span>
          </div>
          {r.description && <p className="mt-1 text-xs text-zinc-300">{r.description}</p>}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="rounded bg-zinc-800 px-2 py-0.5">{r.language || 'Mixed'}</span>
            <span className="rounded bg-zinc-800 px-2 py-0.5">⭐ {r.stargazers_count}</span>
            <span className="rounded bg-zinc-800 px-2 py-0.5">🍴 {r.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

