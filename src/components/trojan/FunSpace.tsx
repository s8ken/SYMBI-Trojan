import React, { useState } from 'react'
import { Trophy, Search, Share2, TrendingUp } from 'lucide-react'
import TrustScanner from './TrustScanner'
import TrustOrBustGame from './TrustOrBustGame'
import MemeGenerator from './MemeGenerator'
import TrustLeaderboard from './TrustLeaderboard'

export default function FunSpace() {
  const [activeDemo, setActiveDemo] = useState<'scanner' | 'game' | 'meme' | 'leaderboard'>('scanner')
  const demos = [
    { id: 'scanner', name: 'Trust Scanner', icon: Search, viralHook: 'Assess and share trust signals for AI and crypto tools.' },
    { id: 'game', name: 'Trust or Bust', icon: Trophy, viralHook: 'Practice identifying trustworthy system behaviors.' },
    { id: 'meme', name: 'Trust Report Composer', icon: Share2, viralHook: 'Compose a succinct trust summary and share responsibly.' },
    { id: 'leaderboard', name: 'Trust Rankings', icon: TrendingUp, viralHook: 'See current trust scores and trends across popular tools.' }
  ]

  const renderActiveDemo = () => {
    switch (activeDemo) {
      case 'scanner':
        return <TrustScanner />
      case 'game':
        return <TrustOrBustGame />
      case 'meme':
        return <MemeGenerator />
      case 'leaderboard':
        return <TrustLeaderboard />
      default:
        return <TrustScanner />
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-1 py-2">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeDemo === demo.id
                    ? 'bg-black/30 text-white shadow-2xl border border-purple-500/30'
                    : 'text-purple-200 bg-black/10 border border-purple-500/20 hover:bg-purple-500/10 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{demo.name}</span>
              </button>
            )
          })}
        </div>
      </div>
      {renderActiveDemo()}
    </div>
  )
}
