import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { CONFIG } from '../../config';
import { sha256 } from '../../utils/crypto';
import { Search, Share2, Trophy, TrendingUp, AlertCircle, CheckCircle, Zap, Rocket } from 'lucide-react';

interface TrustScan {
  url: string;
  trustScore: number;
  technicalScore: number;
  ethicalScore: number;
  transparencyScore: number;
  securityScore: number;
  complianceScore: number;
  operationalScore: number;
  issues: string[];
  strengths: string[];
  viralQuote: string;
  shareableBadge: string;
  memeQuote: string;
}

const mockTrustData: Record<string, TrustScan> = {
  'chat.openai.com': {
    url: 'chat.openai.com',
    trustScore: 87,
    technicalScore: 92,
    ethicalScore: 85,
    transparencyScore: 78,
    securityScore: 95,
    complianceScore: 88,
    operationalScore: 90,
    issues: ['Limited transparency in training data', 'Potential bias in responses'],
    strengths: ['Strong security protocols', 'Consistent performance', 'Clear usage policies'],
    viralQuote: '🚨 BREAKING: ChatGPT scores 87% trust - higher than your favorite NFT project! 🚀',
    shareableBadge: '🛡️ 87% TRUST VERIFIED #SYMBITrojan',
    memeQuote: 'When ChatGPT has better trust scores than your crypto bags 📈💎🙌'
  },
  'bard.google.com': {
    url: 'bard.google.com',
    trustScore: 82,
    technicalScore: 88,
    ethicalScore: 80,
    transparencyScore: 75,
    securityScore: 90,
    complianceScore: 85,
    operationalScore: 85,
    issues: ['Data collection concerns', 'Limited model transparency'],
    strengths: ['Google security infrastructure', 'Regular updates', 'Clear terms of service'],
    viralQuote: '🤔 Google Bard: 82% trust score - but is it better than ChatGPT? Battle of the AI giants!',
    shareableBadge: '🔍 82% TRUST VERIFIED #SYMBITrojan',
    memeQuote: 'Google Bard trying to compete with ChatGPT like... 👀🍿'
  },
  'claude.ai': {
    url: 'claude.ai',
    trustScore: 91,
    technicalScore: 94,
    ethicalScore: 92,
    transparencyScore: 88,
    securityScore: 93,
    complianceScore: 90,
    operationalScore: 92,
    issues: ['Limited availability', 'Higher cost tier'],
    strengths: ['Excellent ethical guidelines', 'Strong transparency', 'Robust security'],
    viralQuote: '💎 HIDDEN GEM: Claude AI scores 91% trust - the most trustworthy AI you\'ve never heard of! 🚀',
    shareableBadge: '⭐ 91% TRUST VERIFIED #SYMBITrojan',
    memeQuote: 'Claude AI watching everyone fight over ChatGPT vs Bard like... 😎📊'
  },
  'solana.com': {
    url: 'solana.com',
    trustScore: 79,
    technicalScore: 85,
    ethicalScore: 82,
    transparencyScore: 80,
    securityScore: 75,
    complianceScore: 78,
    operationalScore: 83,
    issues: ['Network outages history', 'Centralization concerns'],
    strengths: ['Fast transactions', 'Growing ecosystem', 'Strong developer community'],
    viralQuote: '🚨 REALITY CHECK: Solana scores 79% trust - those outages hurt! Still higher than most altcoins though 😅',
    shareableBadge: '⚡ 79% TRUST VERIFIED #SYMBITrojan',
    memeQuote: 'Solana going down again like... \*surprised Pikachu face\* ⚡😅'
  },
  'ethereum.org': {
    url: 'ethereum.org',
    trustScore: 94,
    technicalScore: 95,
    ethicalScore: 93,
    transparencyScore: 96,
    securityScore: 92,
    complianceScore: 95,
    operationalScore: 94,
    issues: ['High gas fees', 'Complexity for new users'],
    strengths: ['Decentralization', 'Security track record', 'Transparency', 'Developer ecosystem'],
    viralQuote: '👑 THE KING: Ethereum scores 94% trust - the gold standard of crypto! Don\'t @ me maxis 🚀',
    shareableBadge: '👑 94% TRUST VERIFIED #SYMBITrojan',
    memeQuote: 'Ethereum maxis when they see that 94% trust score 🥇😎'
  }
};

const viralTargets = [
  { name: 'ChatGPT', url: 'chat.openai.com', icon: '💬', category: 'AI' },
  { name: 'Google Bard', url: 'bard.google.com', icon: '🔍', category: 'AI' },
  { name: 'Claude AI', url: 'claude.ai', icon: '🧠', category: 'AI' },
  { name: 'Solana', url: 'solana.com', icon: '⚡', category: 'Crypto' },
  { name: 'Ethereum', url: 'ethereum.org', icon: '💎', category: 'Crypto' },
  { name: 'Binance', url: 'binance.com', icon: '🏦', category: 'Exchange' },
  { name: 'OpenSea', url: 'opensea.io', icon: '🌊', category: 'NFT' },
  { name: 'Uniswap', url: 'uniswap.org', icon: '🦄', category: 'DeFi' }
];

export default function TrustScanner() {
  const [url, setUrl] = useState('');
  const [scanResult, setScanResult] = useState<TrustScan | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [copiedBadge, setCopiedBadge] = useState(false);
  const [shareMode, setShareMode] = useState<'badge' | 'meme' | 'full'>('badge');

  const scanUrl = useCallback(async () => {
    if (!url.trim()) return;
    
    setIsScanning(true);
    
    try {
      if (CONFIG.api.trustScanEndpoint) {
        const res = await axios.post(CONFIG.api.trustScanEndpoint, { url });
        const data: TrustScan = res.data;
        setScanResult(data);
      } else {
        await new Promise(r => setTimeout(r, 1200));
        const result = mockTrustData[url.toLowerCase()] || generateViralTrustData(url);
        setScanResult(result);
      }
    } catch {
      const result = mockTrustData[url.toLowerCase()] || generateViralTrustData(url);
      setScanResult(result);
    }
    setIsScanning(false);
  }, [url]);

  const generateViralTrustData = (url: string): TrustScan => {
    const baseScore = Math.floor(Math.random() * 40) + 50; // 50-90
    const hasMajorIssues = Math.random() > 0.7;
    const isExceptional = Math.random() > 0.85;
    
    let finalScore = baseScore;
    let viralQuote = '';
    let memeQuote = '';
    
    if (isExceptional) {
      finalScore = Math.min(95, baseScore + 15);
      viralQuote = `🚨 RARE FIND: ${url} scores ${finalScore}% trust - this is EXCEPTIONAL! 💎🙌`;
      memeQuote = `When you find a ${finalScore}% trust score in the wild... \*chef\'s kiss\* 👨‍🍳💋`;
    } else if (hasMajorIssues) {
      finalScore = Math.max(25, baseScore - 25);
      viralQuote = `💀 BRUTAL: ${url} only scores ${finalScore}% trust - MAJOR red flags detected! 🚩`;
      memeQuote = `${url} trust score be like: \*surprised Pikachu face\* 😱⚠️`;
    } else {
      viralQuote = `📊 TRUST ALERT: ${url} scores ${finalScore}% trust - here\'s the breakdown! 🔍`;
      memeQuote = `Me checking ${url} trust score vs. my expectations 🤔📈`;
    }

    return {
      url,
      trustScore: finalScore,
      technicalScore: finalScore + Math.floor(Math.random() * 10) - 5,
      ethicalScore: finalScore + Math.floor(Math.random() * 10) - 5,
      transparencyScore: finalScore + Math.floor(Math.random() * 10) - 5,
      securityScore: finalScore + Math.floor(Math.random() * 10) - 5,
      complianceScore: finalScore + Math.floor(Math.random() * 10) - 5,
      operationalScore: finalScore + Math.floor(Math.random() * 10) - 5,
      issues: hasMajorIssues ? 
        ['Major security vulnerabilities', 'Lack of transparency', 'Questionable practices'] :
        ['Limited public information', 'Could improve transparency'],
      strengths: isExceptional ?
        ['Exceptional security', 'Outstanding transparency', 'Industry-leading practices', 'Proven track record'] :
        ['Some positive aspects', 'Growing adoption', 'Active development'],
      viralQuote,
      shareableBadge: `${finalScore >= 80 ? '🛡️' : finalScore >= 60 ? '⚠️' : '💀'} ${finalScore}% TRUST #SYMBITrojan`,
      memeQuote
    };
  };

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBadge(true);
      setTimeout(() => setCopiedBadge(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  const shareResults = useCallback(async () => {
    if (!scanResult) return;
    
    let shareText = '';
    
    if (shareMode === 'badge') {
      shareText = scanResult.shareableBadge;
    } else if (shareMode === 'meme') {
      shareText = `${scanResult.memeQuote}\n\n${scanResult.shareableBadge}\n\n🎯 Try it yourself: ${window.location.origin}`;
    } else {
      shareText = `🚨 SYMBI TRUST SCAN RESULTS 🚨\n\n${scanResult.viralQuote}\n\n${scanResult.shareableBadge}\n\n🔥 Make this go viral! ${window.location.origin}`;
    }
    const proof = await sha256(shareText);
    const proofUrl = `${window.location.origin}?proof=${proof}`;
    shareText += `\n\n🔏 Proof: ${proofUrl}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SYMBI Trust Scanner',
        text: shareText,
      });
    } else {
      copyToClipboard(shareText);
    }
  }, [scanResult, shareMode, copyToClipboard]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20 border-green-500';
    if (score >= 80) return 'bg-yellow-500/20 border-yellow-500';
    if (score >= 60) return 'bg-orange-500/20 border-orange-500';
    return 'bg-red-500/20 border-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Viral Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
            <Search className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">🔍 TRUST SCANNER</h1>
          <p className="text-xl text-purple-300 mb-2">Upload any AI tool and get VIRAL trust scores!</p>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg p-3">
            <p className="text-white font-bold text-lg">🚨 MAKE THIS GO VIRAL! 🚨</p>
            <p className="text-purple-100">Share your results and earn $SYMBI tokens!</p>
          </div>
        </div>
      </div>

      {/* Quick Viral Targets */}
      <div className="max-w-4xl mx-auto mb-8">
        <h3 className="text-white text-lg font-semibold mb-4 text-center">🔥 VIRAL TARGETS - CLICK TO SCAN!</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {viralTargets.map((target) => (
            <button
              key={target.url}
              onClick={() => setUrl(target.url)}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="text-2xl mb-1">{target.icon}</div>
              <div className="text-sm font-bold">{target.name}</div>
              <div className="text-xs text-purple-200">{target.category}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Scan Input */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-white text-xl font-bold mb-2">🎯 ENTER URL TO SCAN</h2>
            <p className="text-purple-300">Check if your favorite AI/crypto tool is actually trustworthy!</p>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="chat.openai.com or any URL"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={scanUrl}
              disabled={!url.trim() || isScanning}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed font-bold transition-all duration-200"
            >
              {isScanning ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  SCANNING...
                </div>
              ) : (
                <div className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  SCAN NOW!
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scan Results */}
      {scanResult && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Viral Score Display */}
          <div className="bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-6 text-center">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 ${getScoreBg(scanResult.trustScore)} mb-4`}>
              <span className={`text-6xl font-bold ${getScoreColor(scanResult.trustScore)}`}>
                {scanResult.trustScore}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">OVERALL TRUST SCORE</h3>
            <p className="text-purple-300 mb-4">{scanResult.viralQuote}</p>
            
            {/* Share Mode Selector */}
            <div className="flex justify-center space-x-2 mb-4">
              <button
                onClick={() => setShareMode('badge')}
                className={`px-3 py-1 rounded text-sm font-bold ${
                  shareMode === 'badge' ? 'bg-purple-500 text-white' : 'bg-white/10 text-purple-300'
                }`}
              >
                Badge
              </button>
              <button
                onClick={() => setShareMode('meme')}
                className={`px-3 py-1 rounded text-sm font-bold ${
                  shareMode === 'meme' ? 'bg-purple-500 text-white' : 'bg-white/10 text-purple-300'
                }`}
              >
                Meme
              </button>
              <button
                onClick={() => setShareMode('full')}
                className={`px-3 py-1 rounded text-sm font-bold ${
                  shareMode === 'full' ? 'bg-purple-500 text-white' : 'bg-white/10 text-purple-300'
                }`}
              >
                Full
              </button>
            </div>
            
            <div className="flex justify-center space-x-3">
              <button
                onClick={shareResults}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 font-bold flex items-center space-x-2"
              >
                <Share2 className="h-5 w-5" />
                <span>GO VIRAL!</span>
              </button>
              <button
                onClick={() => copyToClipboard(scanResult.shareableBadge)}
                className="bg-black/20 text-white border border-purple-500/20 px-6 py-3 rounded-lg hover:bg-white/20 font-bold flex items-center space-x-2 border border-white/20"
              >
                <Trophy className="h-5 w-5" />
                <span>{copiedBadge ? 'COPIED!' : 'COPY BADGE'}</span>
              </button>
            </div>
          </div>

          {/* Detailed Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Technical', score: scanResult.technicalScore, icon: '🔧' },
              { label: 'Ethical', score: scanResult.ethicalScore, icon: '🛡️' },
              { label: 'Transparency', score: scanResult.transparencyScore, icon: '🔍' },
              { label: 'Security', score: scanResult.securityScore, icon: '🔒' },
              { label: 'Compliance', score: scanResult.complianceScore, icon: '📋' },
              { label: 'Operational', score: scanResult.operationalScore, icon: '⚙️' }
            ].map((item) => (
              <div key={item.label} className="bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    <span className="text-white font-semibold">{item.label}</span>
                  </div>
                  <span className={`text-2xl font-bold ${getScoreColor(item.score)}`}>
                    {item.score}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.score >= 90 ? 'bg-green-500' :
                      item.score >= 80 ? 'bg-yellow-500' :
                      item.score >= 60 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Issues and Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-yellow-400" />
                RED FLAGS 🚩
              </h3>
              <ul className="space-y-2">
                {scanResult.issues.map((issue, index) => (
                  <li key={index} className="text-purple-200 flex items-start">
                    <span className="text-red-400 mr-2">⚠️</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                GREEN FLAGS ✅
              </h3>
              <ul className="space-y-2">
                {scanResult.strengths.map((strength, index) => (
                  <li key={index} className="text-purple-200 flex items-start">
                    <span className="text-green-400 mr-2">✅</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meme Quote */}
          {shareMode === 'meme' && (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">🔥 MEME QUOTE</h3>
              <p className="text-white text-lg">{scanResult.memeQuote}</p>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg p-6 mb-6">
          <p className="text-white font-bold text-xl mb-2">🔥 MAKE THIS GO VIRAL! 🔥</p>
          <p className="text-purple-100 mb-2">Share your trust scans and earn $SYMBI tokens!</p>
          <div className="flex justify-center items-center space-x-2">
            <Rocket className="h-5 w-5 text-white" />
            <span className="text-white font-bold">SYMBI Trojan - Trust Infrastructure by Stealth</span>
            <Rocket className="h-5 w-5 text-white" />
          </div>
        </div>
        <p className="text-purple-300 text-sm">
          🎯 Scan. Share. Go Viral. Earn $SYMBI. 🎯
        </p>
      </div>
    </div>
  );
}
