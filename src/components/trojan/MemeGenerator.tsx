import React, { useState, useCallback } from 'react';
import { Zap, Download, Share2, Shuffle, Rocket, Flame, Crown, Skull } from 'lucide-react';

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
      
      const memeText = `${viralText}\n\n🎯 TRUST SCORE: ${selectedScore.score}%\n\n🔍 Scanned with SYMBI Trojan\n💎 Make this go viral! ${window.location.origin}`;
      
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

  const shareMeme = () => {
    if (!generatedMeme) return;
    
    const viralShareText = `🔥 VIRAL MEME ALERT! 🔥\n\n${generatedMeme}\n\n⚡ SYMBI Trojan - Making trust go viral!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SYMBI Trust Meme Generator',
        text: viralShareText,
      });
    } else {
      navigator.clipboard.writeText(viralShareText);
      setCopiedMeme(true);
      setTimeout(() => setCopiedMeme(false), 2000);
    }
  };

  const getViralIcon = (potential: string) => {
    switch (potential) {
      case 'viral': return <Flame className="h-5 w-5 text-red-500" />;
      case 'high': return <Rocket className="h-5 w-5 text-orange-500" />;
      case 'medium': return <Zap className="h-5 w-5 text-yellow-500" />;
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mb-4 animate-bounce">
            <Flame className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">🔥 MEME TRUST GENERATOR 🔥</h1>
          <p className="text-xl text-purple-200 mb-4">Create VIRAL memes with REAL trust data!</p>
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg p-4">
            <p className="text-white font-bold text-lg">⚡ MAKE TRUST MEMES GO VIRAL! ⚡</p>
            <p className="text-purple-100">Share your memes and earn $SYMBI tokens!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Template Selection */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Crown className="h-5 w-5 mr-2 text-yellow-400" />
                CHOOSE VIRAL TEMPLATE
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

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={generateMeme}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    GENERATING VIRAL MEME...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Flame className="h-6 w-6 mr-2" />
                    GENERATE MEME!
                  </div>
                )}
              </button>
              
              <button
                onClick={randomizeEverything}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <div className="flex items-center justify-center">
                  <Shuffle className="h-5 w-5 mr-2" />
                  RANDOMIZE EVERYTHING!
                </div>
              </button>
            </div>
          </div>

          {/* Right Panel - Generated Meme */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Skull className="h-5 w-5 mr-2 text-purple-400" />
                YOUR VIRAL MEME
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
                        {copiedMeme ? 'COPIED!' : 'GO VIRAL!'}
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
                  <p className="text-purple-300 text-lg">Generate your first viral meme!</p>
                  <p className="text-purple-400 text-sm mt-2">
                    Your meme will appear here and be ready to share
                  </p>
                </div>
              )}
            </div>

            {/* Viral Tips */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6">
              <h3 className="text-black font-bold text-lg mb-3 flex items-center">
                <Flame className="h-5 w-5 mr-2" />
                VIRAL TIPS 🔥
              </h3>
              <ul className="text-black space-y-2 text-sm">
                <li>• Use trending AI/crypto tools for maximum engagement</li>
                <li>• Surprise people with unexpected trust scores</li>
                <li>• Call out popular tools with low scores</li>
                <li>• Flex about finding high-trust alternatives</li>
                <li>• Tag friends who use the tools you scan</li>
                <li>• Post during peak crypto Twitter hours</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6">
            <p className="text-white font-bold text-xl mb-2">🔥 MAKE MEMES GO VIRAL! 🔥</p>
            <p className="text-purple-100 mb-3">Share your trust memes and earn $SYMBI tokens!</p>
            <div className="flex justify-center items-center space-x-2">
              <Rocket className="h-5 w-5 text-white" />
              <span className="text-white font-bold">SYMBI Trojan - Meme Your Way to Trust!</span>
              <Rocket className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}