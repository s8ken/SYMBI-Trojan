import React, { useState } from 'react'
import { sha256 } from '../../utils/crypto'

interface VerifyResult {
  valid: boolean
  message: string
}

export default function ReceiptVerifier() {
  const [jsonText, setJsonText] = useState('')
  const [result, setResult] = useState<VerifyResult | null>(null)

  const verify = async () => {
    try {
      const obj = JSON.parse(jsonText)
      const { payload, signature, publicKey, previousHash } = obj
      const payloadStr = JSON.stringify(payload)
      const chainOk = previousHash ? (await sha256(payloadStr)) === previousHash : false
      let sigOk = false
      try {
        const algo: any = { name: 'Ed25519' }
        const pk = await crypto.subtle.importKey('raw', Uint8Array.from(Buffer.from(publicKey, 'base64')), algo, false, ['verify'])
        sigOk = await crypto.subtle.verify(algo, pk, Uint8Array.from(Buffer.from(signature, 'base64')), new TextEncoder().encode(payloadStr))
      } catch {}
      const valid = sigOk || chainOk
      const message = valid ? 'Receipt integrity verified' : 'Verification failed'
      setResult({ valid, message })
    } catch {
      setResult({ valid: false, message: 'Invalid JSON or fields missing' })
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
      <h4 className="mb-2 text-sm font-semibold text-zinc-100">Verify a Trust Receipt</h4>
      <p className="mb-3 text-xs text-zinc-400">Paste a JSON receipt with base64 signature and publicKey to verify Ed25519.</p>
      <textarea value={jsonText} onChange={(e) => setJsonText(e.target.value)} rows={6} className="w-full rounded-lg bg-black/50 border border-zinc-800 p-3 text-sm" placeholder='{"payload":{...},"signature":"base64","publicKey":"base64","previousHash":"hex"}' />
      <div className="mt-3 flex gap-2">
        <button onClick={verify} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">Verify</button>
        {result && (
          <span className={"text-xs font-semibold " + (result.valid ? 'text-green-400' : 'text-red-400')}>{result.message}</span>
        )}
      </div>
    </div>
  )
}
