import React, { useState } from 'react';
import { Trophy, Search, Share2, TrendingUp, Zap, Shield, Eye, Heart } from 'lucide-react';
import TrustScanner from './components/trojan/TrustScanner';
import TrustOrBustGame from './components/trojan/TrustOrBustGame';
import MemeGenerator from './components/trojan/MemeGenerator';
import TrustLeaderboard from './components/trojan/TrustLeaderboard';
import './App.css';

function App() {
  const [activeDemo, setActiveDemo] = useState<'scanner' | 'game' | 'meme' | 'leaderboard'>('scanner');

  const demos = [
    {
      id: 'scanner',
      name: 'Trust Scanner',
      icon: Search,
      description: 'Scan any AI tool and get instant trust scores',
      color: 'from-blue-500 to-cyan-500',
      viralHook: 'Your favorite AI tool might be lying to you!'
    },
    {
      id: 'game',
      name: 'Trust or Bust',
      icon: Trophy,
      description: 'Test your AI trust evaluation skills',
      color: 'from-purple-500 to-pink-500',
      viralHook: 'Can you spot trustworthy AI better than your friends?'
    },
    {
      id: 'meme',
      name: 'Meme Generator',
      icon: Share2,
      description: 'Create viral trust-themed memes',
      color: 'from-green-500 to-emerald-500',
      viralHook: 'Make memes that actually mean something!'
    },
    {
      id: 'leaderboard',
      name: 'Trust Leaderboard',
      icon: TrendingUp,
      description: 'See who\'s really trustworthy in crypto',
      color: 'from-orange-500 to-red-500',
      viralHook: 'Is your favorite influencer actually trustworthy?'
    }
  ];

  const renderActiveDemo = () => {
    switch (activeDemo) {
      case 'scanner':
        return <TrustScanner />;
      case 'game':
        return <TrustOrBustGame />;
      case 'meme':
        return <MemeGenerator />;
      case 'leaderboard':
        return <TrustLeaderboard />;
      default:
        return <TrustScanner />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                <span className="text-white text-sm font-semibold">$SYMBI Token</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4">
            {demos.map((demo) => {
              const Icon = demo.icon;
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeDemo === demo.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-purple-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{demo.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Viral Hook Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-white font-medium">
              {demos.find(d => d.id === activeDemo)?.viralHook}
            </span>
            <Zap className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {renderActiveDemo()}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-white font-bold text-lg">SYMBI Trojan</span>
              </div>
              <p className="text-purple-300 text-sm">
                The ultimate Trojan Horse strategy - come for the meme, stay for the revolution.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Viral Tools</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li>🔍 Trust Scanner</li>
                <li>🎮 Trust or Bust Game</li>
                <li>🎨 Meme Generator</li>
                <li>🏆 Trust Leaderboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Share & Earn</h3>
              <p className="text-purple-300 text-sm mb-3">
                Share your trust evaluations and earn $SYMBI tokens!
              </p>
              <div className="flex space-x-2">
                <Heart className="h-5 w-5 text-pink-400" />
                <span className="text-purple-300 text-sm">Make trust go viral! 🔥</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-purple-300 text-sm">
              © 2025 SYMBI Trojan. They came for the meme, they stayed for the revolution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;