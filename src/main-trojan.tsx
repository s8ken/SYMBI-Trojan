import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { Toaster } from 'sonner'
import AppTrojan from './App-Trojan'
import './index.css'

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'

const network = WalletAdapterNetwork.Mainnet
const endpoint = 'https://api.mainnet-beta.solana.com'
const wallets = [new PhantomWalletAdapter()]

// Hydration logic: Remove LLM fallback when JS loads
const fallback = document.getElementById('llm-fallback');
if (fallback) {
  fallback.style.display = 'none';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <BrowserRouter>
            <AppTrojan />
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1F2937',
                  color: '#fff',
                  border: '1px solid #374151',
                },
                success: {
                  style: {
                    background: '#065F46',
                    border: '1px solid #059669',
                  },
                },
                error: {
                  style: {
                    background: '#991B1B',
                    border: '1px solid #DC2626',
                  },
                },
              }}
            />
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>
)