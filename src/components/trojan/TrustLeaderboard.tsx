import React, { useState, useEffect } from 'react';
import { sha256 } from '../../utils/crypto';
import { Trophy, TrendingUp, TrendingDown, Share2, Zap, Rocket, Crown, Star, Flame, Diamond } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  name: string;
  category: 'AI' | 'Crypto' | 'Exchange' | 'NFT' | 'DeFi' | 'Social';
  icon: string;
  trustScore: number;
  previousScore: number;
  change: number;
  rank: number;
  previousRank: number;
  viralQuote: string;
  isTrending: boolean;
  controversy: number;
  hype: number;
  marketCap?: string;
  users?: string;
}

const mockLeaderboardData: LeaderboardEntry[] = [
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'AI',
    icon: '🧠',
    trustScore: 91,
    previousScore: 89,
    change: 2,
    rank: 1,
    previousRank: 2,
    viralQuote: 'The most trustworthy AI you\'ve never heard of just hit #1! 💎',
    isTrending: true,
    controversy: 15,
    hype: 85,
    users: '1M+'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    category: 'Crypto',
    icon: '💎',
    trustScore: 94,
    previousScore: 94,
    change: 0,
    rank: 2,
    previousRank: 1,
    viralQuote: 'The king stays strong at #2 - consistency is key 👑',
    isTrending: false,
    controversy: 25,
    hype: 95,
    marketCap: '$300B+',
    users: '10M+'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI',
    icon: '💬',
    trustScore: 87,
    previousScore: 85,
    change: 2,
    rank: 3,
    previousRank: 4,
    viralQuote: 'ChatGPT climbing back up! Is the AI wars heating up? 🔥',
    isTrending: true,
    controversy: 45,
    hype: 98,
    users: '100M+'
  },
  {
    id: 'google-bard',
    name: 'Google Bard',
    category: 'AI',
    icon: '🔍',
    trustScore: 82,
    previousScore: 80,
    change: 2,
    rank: 4,
    previousRank: 5,
    viralQuote: 'Google Bard gaining ground! The AI race is REAL 🏃‍♂️',
    isTrending: true,
    controversy: 35,
    hype: 75,
    users: '50M+'
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    category: 'DeFi',
    icon: '🦄',
    trustScore: 85,
    previousScore: 83,
    change: 2,
    rank: 5,
    previousRank: 6,
    viralQuote: 'Uniswap proving DeFi can be trustworthy! Take notes 📚',
    isTrending: true,
    controversy: 40,
    hype: 70,
    marketCap: '$5B+',
    users: '1M+'
  },
  {
    id: 'solana',
    name: 'Solana',
    category: 'Crypto',
    icon: '⚡',
    trustScore: 79,
    previousScore: 76,
    change: 3,
    rank: 6,
    previousRank: 8,
    viralQuote: 'Solana making a comeback! Are the outages finally behind them? 🤔',
    isTrending: true,
    controversy: 70,
    hype: 85,
    marketCap: '$40B+',
    users: '2M+'
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    category: 'NFT',
    icon: '🌊',
    trustScore: 76,
    previousScore: 78,
    change: -2,
    rank: 7,
    previousRank: 7,
    viralQuote: 'OpenSea holding steady but losing ground to competitors 👀',
    isTrending: false,
    controversy: 55,
    hype: 60,
    users: '500K+'
  },
  {
    id: 'binance',
    name: 'Binance',
    category: 'Exchange',
    icon: '🏦',
    trustScore: 73,
    previousScore: 75,
    change: -2,
    rank: 8,
    previousRank: 7,
    viralQuote: 'Binance under pressure! Regulatory heat affecting trust 📉',
    isTrending: false,
    controversy: 80,
    hype: 70,
    users: '30M+'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'AI',
    icon: '🎨',
    trustScore: 68,
    previousScore: 70,
    change: -2,
    rank: 9,
    previousRank: 9,
    viralQuote: 'Midjourney needs to step up their trust game! Artists are watching 👨‍🎨',
    isTrending: false,
    controversy: 45,
    hype: 65,
    users: '200K+'
  },
  {
    id: 'x-twitter',
    name: 'X (Twitter)',
    category: 'Social',
    icon: '𝕏',
    trustScore: 45,
    previousScore: 48,
    change: -3,
    rank: 10,
    previousRank: 10,
    viralQuote: 'X continues to freefall! Can Elon turn this around? 🚀💥',
    isTrending: false,
    controversy: 95,
    hype: 90,
    users: '400M+'
  }
];

const categoryColors = {
  AI: 'bg-blue-500',
  Crypto: 'bg-purple-500',
  Exchange: 'bg-red-500',
  NFT: 'bg-green-500',
  DeFi: 'bg-yellow-500',
  Social: 'bg-gray-500'
};

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
  if (rank <= 3) return <Star className="h-5 w-5 text-purple-400" />;
  if (rank <= 5) return <Diamond className="h-5 w-5 text-blue-400" />;
  return <Flame className="h-5 w-5 text-red-400" />;
};

const getChangeIcon = (change: number) => {
  if (change > 0) return <TrendingUp className="h-4 w-4 text-green-400" />;
  if (change < 0) return <TrendingDown className="h-4 w-4 text-red-400" />;
  return <span className="text-gray-400">—</span>;
};

export default function TrustLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(mockLeaderboardData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'trust' | 'change' | 'controversy' | 'hype'>('trust');
  const [shareText, setShareText] = useState('');

  const categories = ['All', 'AI', 'Crypto', 'Exchange', 'NFT', 'DeFi', 'Social'];

  const filteredEntries = entries
    .filter(entry => selectedCategory === 'All' || entry.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'change':
          return b.change - a.change;
        case 'controversy':
          return b.controversy - a.controversy;
        case 'hype':
          return b.hype - a.hype;
        default:
          return b.trustScore - a.trustScore;
      }
    });

  const shareLeaderboard = async () => {
    const top3 = filteredEntries.slice(0, 3);
    const base = `🏆 SYMBI TRUST LEADERBOARD UPDATE! 🏆\n\n` +
      top3.map(entry => 
        `${entry.rank}. ${entry.icon} ${entry.name}: ${entry.trustScore}% trust ${entry.change > 0 ? '📈' : entry.change < 0 ? '📉' : '➡️'}`
      ).join('\n') + `\n\n` +
      `🔥 Biggest movers this week:\n` +
      `📈 ${entries.reduce((prev, current) => (prev.change > current.change) ? prev : current).name} (+${Math.max(...entries.map(e => e.change))})\n` +
      `📉 ${entries.reduce((prev, current) => (prev.change < current.change) ? prev : current).name} (${Math.min(...entries.map(e => e.change))})\n\n` +
      `💡 Find out why: ${window.location.origin}/trust-leaderboard\n\n` +
      `#SYMBITrojan #TrustLeaderboard #CryptoTrust`;
    const proof = await sha256(base);
    const shareText = `${base}\n\n🔏 Proof: ${window.location.origin}?proof=${proof}`;
    setShareText(shareText);
    
    if (navigator.share) {
      navigator.share({
        title: 'SYMBI Trust Leaderboard',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Leaderboard results copied to clipboard!');
    }
  };

  const shareEntry = async (entry: LeaderboardEntry) => {
    const base = `🚨 TRUST ALERT: ${entry.icon} ${entry.name}\n\n` +
      `${entry.viralQuote}\n\n` +
      `📊 Trust Score: ${entry.trustScore}%\n` +
      `📈 Change: ${entry.change > 0 ? '+' : ''}${entry.change}\n` +
      `🏆 Rank: #${entry.rank}\n\n` +
      `🔍 Full rankings: ${window.location.origin}/trust-leaderboard\n\n` +
      `#SYMBITrojan #TrustScore #${entry.name.replace(/\s+/g, '')}`;
    const proof = await sha256(base);
    const shareText = `${base}\n\n🔏 Proof: ${window.location.origin}?proof=${proof}`;
    
    if (navigator.share) {
      navigator.share({
        title: `${entry.name} Trust Score`,
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert(`${entry.name} results copied to clipboard!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">🏆 TRUST LEADERBOARD</h1>
          <p className="text-xl text-purple-200 mb-4">Who\'s really trustworthy in crypto?</p>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-4">
            <p className="text-white font-bold text-lg">🔥 WEEKLY TRUST RANKINGS! 🔥</p>
            <p className="text-purple-100">Share your favorites and call out the frauds!</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-white font-semibold mb-2 block">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-white font-semibold mb-2 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white"
              >
                <option value="trust">Trust Score</option>
                <option value="change">Weekly Change</option>
                <option value="controversy">Controversy</option>
                <option value="hype">Hype Level</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={shareLeaderboard}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <div className="flex items-center justify-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Rankings
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 transition-all duration-200 ${
                entry.isTrending ? 'ring-2 ring-purple-500 shadow-lg' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getRankIcon(entry.rank)}
                    <span className="text-2xl font-bold text-white">#{entry.rank}</span>
                    {entry.previousRank !== entry.rank && (
                      <span className={`text-sm px-2 py-1 rounded ${
                        entry.rank < entry.previousRank ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {entry.rank < entry.previousRank ? '↗' : '↘'} {Math.abs(entry.rank - entry.previousRank)}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-4xl">{entry.icon}</div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">{entry.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs text-white ${categoryColors[entry.category]}`}>
                        {entry.category}
                      </span>
                      {entry.isTrending && (
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                          TRENDING 🔥
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">{entry.trustScore}%</div>
                  <div className="flex items-center justify-end space-x-1">
                    {getChangeIcon(entry.change)}
                    <span className={`text-sm ${
                      entry.change > 0 ? 'text-green-400' : entry.change < 0 ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {entry.change > 0 ? '+' : ''}{entry.change}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-black/20 rounded-lg">
                <p className="text-purple-200 text-sm mb-2">{entry.viralQuote}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <div className="text-purple-300">Controversy</div>
                    <div className="text-white font-bold">{entry.controversy}/100</div>
                  </div>
                  <div>
                    <div className="text-purple-300">Hype Level</div>
                    <div className="text-white font-bold">{entry.hype}/100</div>
                  </div>
                  {entry.marketCap && (
                    <div>
                      <div className="text-purple-300">Market Cap</div>
                      <div className="text-white font-bold">{entry.marketCap}</div>
                    </div>
                  )}
                  {entry.users && (
                    <div>
                      <div className="text-purple-300">Users</div>
                      <div className="text-white font-bold">{entry.users}</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => shareEntry(entry)}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
            <p className="text-white font-bold text-xl mb-2">🏆 MAKE LEADERBOARDS GO VIRAL! 🏆</p>
            <p className="text-purple-100 mb-3">Call out frauds and praise the trustworthy!</p>
            <div className="flex justify-center items-center space-x-2">
              <Rocket className="h-5 w-5 text-white" />
              <span className="text-white font-bold">SYMBI Trojan - Trust Rankings That Matter</span>
              <Rocket className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
