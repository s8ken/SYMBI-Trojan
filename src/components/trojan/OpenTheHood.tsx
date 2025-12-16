import React, { useState, useEffect } from 'react'
import RepoProofGrid from './RepoProofGrid'
import ReceiptVerifier from './ReceiptVerifier'
import { CONFIG } from '../../config'
import { Connection, PublicKey } from '@solana/web3.js'

export default function OpenTheHood() {
  const [open, setOpen] = useState(false)
  const [supply, setSupply] = useState<string>('')
  const [mint, setMint] = useState<string>(CONFIG.solana.mintAddress)

  useEffect(() => {
    const fetchSupply = async () => {
      if (!mint) return
      try {
        const conn = new Connection(CONFIG.solana.rpcUrl)
        const mintPub = new PublicKey(mint)
        const info = await conn.getParsedAccountInfo(mintPub)
        const data: any = info.value?.data
        const amount = data?.parsed?.info?.supply || data?.parsed?.info?.mintAuthority ? data.parsed.info.supply : ''
        setSupply(amount ? String(amount) : '')
      } catch (e) {
        setSupply('')
      }
    }
    fetchSupply()
  }, [mint])

  return (
    <div className="my-4">
      <button onClick={() => setOpen(true)} className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">Open The Hood</button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md">
          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-100">SYMBI Proof Overlay</h3>
              <button onClick={() => setOpen(false)} className="text-xs text-zinc-400">Close</button>
            </div>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">GitHub Evidence</h4>
                <RepoProofGrid />
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Verify Receipts</h4>
                <ReceiptVerifier />
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
                <h4 className="mb-2 text-sm font-semibold text-zinc-100">Token Presence</h4>
                {mint ? (
                  <div className="text-xs text-zinc-300">
                    <p className="mb-2">Mint: <span className="font-mono">{mint}</span></p>
                    {supply && <p>Supply: {supply}</p>}
                    <div className="mt-3">
                      <a className="rounded-full border border-zinc-700 px-3 py-1" target="_blank" rel="noreferrer" href={`https://explorer.solana.com/address/${mint}`}>View on Explorer</a>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-zinc-400">Set VITE_SYMBI_MINT to show mint details.</p>
                )}
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
                <h4 className="mb-2 text-sm font-semibold text-zinc-100">Links</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a className="rounded-full bg-white px-4 py-2 text-black" href={CONFIG.links.community} target="_blank" rel="noreferrer">Community</a>
                  <a className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-100" href={CONFIG.links.research} target="_blank" rel="noreferrer">Research</a>
                  <a className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-100" href={`https://github.com/${CONFIG.links.githubUser}`} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-100" href={CONFIG.links.dex} target="_blank" rel="noreferrer">DEX</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
