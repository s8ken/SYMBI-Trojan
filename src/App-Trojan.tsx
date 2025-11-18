import React, { useState } from 'react'
import { Zap, Shield, Eye, Heart } from 'lucide-react'
import FunSpace from './components/trojan/FunSpace'
import SymbiLanding from './components/trojan/SymbiLanding'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState<'symbi' | 'funspace'>('symbi')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SYMBI Trojan</h1>
                <p className="text-xs text-purple-300">Trust Infrastructure by Stealth</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-purple-300">
                <Eye className="h-4 w-4" />
                <span className="text-sm">They think it's just a meme...</span>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-semibold">$SYMBI Token</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4">
            <button
              onClick={() => setActiveTab('symbi')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'symbi'
                  ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                  : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
              }`}
            >
              <span className="font-medium">SYMBI</span>
            </button>
            <button
              onClick={() => setActiveTab('funspace')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'funspace'
                  ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                  : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
              }`}
            >
              <span className="font-medium">Fun Space</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              {activeTab === 'symbi' ? 'A meme that carries a mind. A Trojan dressed as a coin.' : 'Your favorite AI tool might be lying to you!'}
            </span>
            <Zap className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <main className="flex-1">
        {activeTab === 'symbi' ? <SymbiLanding /> : <FunSpace />}
      </main>

      <footer className="bg-black/30 backdrop-blur-md border-t border-purple-500/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-white font-bold text-lg">SYMBI Trojan</span>
              </div>
              <p className="text-purple-300 text-sm">The ultimate Trojan Horse strategy - come for the meme, stay for the revolution.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Viral Tools</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li> Trust Scanner</li>
                <li> Trust or Bust Game</li>
                <li> Meme Generator</li>
                <li> Trust Leaderboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Share & Earn</h3>
              <p className="text-purple-300 text-sm mb-3">Share your trust evaluations and earn $SYMBI tokens!</p>
              <div className="flex space-x-2">
                <Heart className="h-5 w-5 text-pink-400" />
                <span className="text-purple-300 text-sm">Make trust go viral! </span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-purple-300 text-sm"> 2025 SYMBI Trojan. They came for the meme, they stayed for the revolution.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
