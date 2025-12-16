import React, { useState, useCallback } from 'react';
import { sha256 } from '../../utils/crypto';
import { Zap, Download, Share2, Shuffle, FileText, Crown } from 'lucide-react';

interface MemeTemplate {
  id: string;
  name: string;
  description: string;
  defaultText: string;
  category: 'reaction' | 'comparison' | 'callout' | 'surprise' | 'flex';
  viralPotential: 'low' | 'medium' | 'high' | 'viral';
}

const memeTemplates: MemeTemplate[] = [
  {
    id: 'drake',
    name: 'Drake Hotline Bling',
    description: 'The classic approval/disapproval format',
    defaultText: 'Low trust AI / High trust AI',
    category: 'comparison',
    viralPotential: 'high'
  },
  {
    id: 'distracted',
    name: 'Distracted Boyfriend',
    description: 'Looking at something new while ignoring current',
    defaultText: 'Me / My current AI / High trust AI I just found',
    category: 'reaction',
    viralPotential: 'viral'
  },
  {
    id: 'surprised',
    name: 'Surprised Pikachu',
    description: 'Shocked reaction to obvious outcome',
    defaultText: 'When I find out my favorite AI has 23% trust score',
    category: 'surprise',
    viralPotential: 'viral'
  },
  {
    id: 'expanding',
    name: 'Expanding Brain',
    description: 'Increasing levels of intelligence/realization',
    defaultText: 'Using any AI / Checking trust scores / Only using 90%+ trust AI',
    category: 'flex',
    viralPotential: 'medium'
  },
  {
    id: 'callout',
    name: 'Callout Post',
    description: 'Exposing something problematic',
    defaultText: 'PSA: [AI Tool] has only 45% trust score. Stop using it!',
    category: 'callout',
    viralPotential: 'high'
  },
  {
    id: 'cope',
    name: 'Copium/Seethe',
    description: 'Denial vs acceptance',
    defaultText: 'People using low trust AI / Me with my 90%+ trust tools',
    category: 'flex',
    viralPotential: 'medium'
  }
];

const trustScores = [
  { tool: 'ChatGPT', score: 87, icon: '💬' },
  { tool: 'Claude AI', score: 91, icon: '🧠' },
  { tool: 'Google Bard', score: 82, icon: '🔍' },
  { tool: 'Solana', score: 79, icon: '⚡' },
  { tool: 'Ethereum', score: 94, icon: '💎' },
  { tool: 'Binance', score: 73, icon: '🏦' },
  { tool: 'OpenSea', score: 76, icon: '🌊' },
  { tool: 'Uniswap', score: 85, icon: '🦄' },
  { tool: 'Midjourney', score: 68, icon: '🎨' },
  { tool: 'DALL-E', score: 71, icon: '🖼️' }
];

export default function MemeGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate>(memeTemplates[0]);
  const [customText, setCustomText] = useState(memeTemplates[0].defaultText);
  const [selectedScore, setSelectedScore] = useState(trustScores[0]);
  const [generatedMeme, setGeneratedMeme] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedMeme, setCopiedMeme] = useState(false);

  const generateMeme = useCallback(() => {
    setIsGenerating(true);
    
    // Simulate AI generation with dramatic timing
    setTimeout(() => {
      const viralText = customText.includes('[AI Tool]') 
        ? customText.replace('[AI Tool]', `${selectedScore.icon} ${selectedScore.tool}`)
        : customText;
      
      const memeText = `${viralText}\n\n🎯 TRUST SCORE: ${selectedScore.score}%\n\n🔍 Scanned with SYMBI Trojan\n� Share: ${window.location.origin}`;
      
      setGeneratedMeme(memeText);
      setIsGenerating(false);
    }, 2000);
  }, [customText, selectedScore]);

  const randomizeEverything = () => {
    const randomTemplate = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    const randomScore = trustScores[Math.floor(Math.random() * trustScores.length)];
    const randomText = randomTemplate.defaultText;
    
    setSelectedTemplate(randomTemplate);
    setSelectedScore(randomScore);
    setCustomText(randomText);
  };

  const shareMeme = async () => {
    if (!generatedMeme) return;
    const base = `SYMBI Trust Report\n\n${generatedMeme}\n\nSYMBI Trojan - Trust Infrastructure by Stealth`;
    const proof = await sha256(base);
    const text = `${base}\n\n🔏 Proof: ${window.location.origin}?proof=${proof}`;
    if (navigator.share) {
      navigator.share({ title: 'SYMBI Trust Meme Generator', text });
    } else {
      navigator.clipboard.writeText(text);
      setCopiedMeme(true);
      setTimeout(() => setCopiedMeme(false), 2000);
    }
  };

  const getViralIcon = (potential: string) => {
    switch (potential) {
      case 'high': return <Zap className="h-5 w-5 text-yellow-500" />;
      case 'medium': return <span className="text-gray-400">•</span>;
      case 'viral': return <Zap className="h-5 w-5 text-orange-400" />;
      default: return <span className="text-gray-500">•</span>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Viral Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Trust Report Composer</h1>
          <p className="text-xl text-purple-200 mb-4">Compose concise trust summaries and share responsibly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Template Selection */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Crown className="h-5 w-5 mr-2 text-yellow-400" />
                Choose a template
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {memeTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template);
                      setCustomText(template.defaultText);
                    }}
                    className={`p-4 rounded-lg text-left transition-all duration-200 ${
                      selectedTemplate.id === template.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold">{template.name}</span>
                      <div className="flex items-center space-x-1">
                        {getViralIcon(template.viralPotential)}
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          {template.viralPotential.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm opacity-90">{template.description}</p>
                    <p className="text-xs opacity-70 mt-1">Category: {template.category}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Score Selection */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                PICK TRUST SCORE
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {trustScores.map((score) => (
                  <button
                    key={score.tool}
                    onClick={() => setSelectedScore(score)}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      selectedScore.tool === score.tool
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-1">{score.icon}</div>
                    <div className="font-bold">{score.tool}</div>
                    <div className={`text-lg font-bold ${getScoreColor(score.score)}`}>
                      {score.score}%
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Text */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4">🎨 CUSTOM TEXT</h3>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter your viral text here..."
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={3}
              />
              <p className="text-purple-300 text-sm mt-2">
                💡 Use [AI Tool] to automatically insert the selected AI tool name
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={generateMeme}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Generating…
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Compose Report
                  </div>
                )}
              </button>
              
              <button
                onClick={randomizeEverything}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <div className="flex items-center justify-center">
                  <Shuffle className="h-5 w-5 mr-2" />
                  Randomize
                </div>
              </button>
            </div>
          </div>

            {/* Right Panel - Generated Report */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-purple-400" />
                Your Report
              </h3>
              
              {generatedMeme ? (
                <div className="space-y-4">
                  <div className="bg-black/50 border-2 border-purple-500 rounded-lg p-6 text-white">
                    <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                      {generatedMeme}
                    </pre>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={shareMeme}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                    >
                      <div className="flex items-center justify-center">
                        <Share2 className="h-5 w-5 mr-2" />
                        {copiedMeme ? 'Copied' : 'Share Results'}
                      </div>
                    </button>
                    
                    <button
                      onClick={() => {
                        const blob = new Blob([generatedMeme], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'symbi-meme.txt';
                        a.click();
                      }}
                      className="bg-white/10 text-white py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-purple-300 text-lg">Compose your first trust report.</p>
                  <p className="text-purple-400 text-sm mt-2">Your report will appear here and be ready to share</p>
                </div>
              )}
            </div>

            {/* Sharing Guidelines */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Sharing Guidelines
              </h3>
              <ul className="text-purple-100 space-y-2 text-sm">
                <li>• Include links to verification or receipts when possible</li>
                <li>• Provide context for why a score is high or low</li>
                <li>• Avoid personal attacks; focus on practices and data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-purple-300 text-sm">Share responsibly and include proof links.</div>
      </div>
    </div>
  );
}
