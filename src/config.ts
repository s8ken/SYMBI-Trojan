const env = (import.meta as any).env || {}

export const CONFIG = {
  solana: {
    mintAddress: env.VITE_SYMBI_MINT || '',
    rpcUrl: env.VITE_SOLANA_RPC || 'https://api.mainnet-beta.solana.com',
  },
  links: {
    telegram: env.VITE_TELEGRAM_URL || 'https://t.me/symbi_trojan',
    dex: env.VITE_DEX_URL || 'https://dexscreener.com/solana',
    community: 'https://symbi.world',
    research: 'https://gammatria.com',
    githubUser: 's8ken',
  },
  api: {
    trustScanEndpoint: env.VITE_TRUST_SCAN_URL || '',
  },
}
