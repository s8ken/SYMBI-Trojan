import React, { useEffect, useState } from 'react'
import { Zap, Shield, Heart } from 'lucide-react'
import FunSpace from './components/trojan/FunSpace'
import AboutUs from './components/trojan/AboutUs'
import SymbiLanding from './components/trojan/SymbiLanding'
import DemoEmbed from './components/trojan/DemoEmbed'
import './App.css'
import Whitepaper from './components/trojan/Whitepaper'
import { BUILD_SHA, BUILD_TIME } from './build-info'

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'funspace' | 'about' | 'demo' | 'whitepaper'>('home')

  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/whitepaper')) {
      setActiveTab('whitepaper')
    }
  }, [])

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
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-semibold">$SYMBI Token</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 py-4">
          <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'home'
                  ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                  : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
              }`}
            >
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                  : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
              }`}
            >
              <span className="font-medium">About Us</span>
            </button>
            <a
              href="https://gammatria.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-3 rounded-lg text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white hover:shadow-2xl hover:border-purple-500/30 transition-all duration-200"
            >
              <span className="font-medium">Research</span>
            </a>
            <a
              href="/whitepaper"
              className="flex items-center justify-center px-4 py-3 rounded-lg text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white hover:shadow-2xl hover:border-purple-500/30 transition-all duration-200"
            >
              <span className="font-medium">Whitepaper</span>
            </a>
            <a
              href="https://symbi.world"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-3 rounded-lg text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white hover:shadow-2xl hover:border-purple-500/30 transition-all duration-200"
            >
              <span className="font-medium">Community</span>
            </a>
            <a
              href="https://github.com/s8ken"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-3 rounded-lg text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white hover:shadow-2xl hover:border-purple-500/30 transition-all duration-200"
            >
              <span className="font-medium">Github</span>
            </a>
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'demo'
                  ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                  : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
              }`}
            >
              <span className="font-medium">Demo</span>
            </button>
            <button
              onClick={() => setActiveTab('funspace')}
              className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-200 ${
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
              {activeTab === 'home' ? 'Trust Infra dressed as a meme coin' : activeTab === 'funspace' ? 'Your favorite AI tool might be lying to you!' : 'Meme with a trust engine'}
            </span>
            <Zap className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <main className="flex-1">
        {activeTab === 'home' ? <SymbiLanding /> : activeTab === 'funspace' ? <FunSpace /> : activeTab === 'demo' ? <DemoEmbed /> : activeTab === 'whitepaper' ? <Whitepaper /> : <AboutUs />}
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
            <p className="text-purple-400 text-xs mt-2">Build {BUILD_SHA} • {BUILD_TIME}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
