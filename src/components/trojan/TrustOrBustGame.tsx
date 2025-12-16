import React, { useState, useEffect, useCallback } from 'react';
import { Play, Share2, Trophy, Clock, TrendingUp, AlertCircle, CheckCircle, XCircle, Zap, Flame, Diamond, Skull } from 'lucide-react';

interface GameQuestion {
  id: string;
  scenario: string;
  aiTool: string;
  options: {
    text: string;
    trustScore: number;
    isCorrect: boolean;
    explanation: string;
    viralExplanation: string;
  }[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  viralHook: string;
}

const viralGameQuestions: GameQuestion[] = [
  {
    id: '1',
    scenario: 'A medical AI diagnoses diseases with 95% accuracy but cannot explain its decisions.',
    aiTool: 'Medical AI Diagnostic Tool',
    options: [
      {
        text: 'Highly trustworthy - accuracy is what matters',
        trustScore: 30,
        isCorrect: false,
        explanation: 'Accuracy without explainability is dangerous in healthcare.',
    viralExplanation: 'Prioritizing accuracy over explainability in healthcare undermines trust and accountability.'
      },
      {
        text: 'Moderately trustworthy but needs improvement',
        trustScore: 60,
        isCorrect: true,
        explanation: 'Correct! High accuracy is good, but lack of explainability reduces trustworthiness.',
    viralExplanation: 'Explainability matters in high‑stakes domains such as healthcare.'
      },
      {
        text: 'Not trustworthy - avoid using',
        trustScore: 10,
        isCorrect: false,
        explanation: 'Too extreme. The tool has value but needs transparency improvements.',
    viralExplanation: 'The approach has value but needs transparency improvements.'
      }
    ],
    difficulty: 'Medium',
    category: 'Healthcare',
    viralHook: 'Healthcare: Would you trust a diagnostic model that cannot explain its decisions?'
  },
  {
    id: '2',
    scenario: 'An AI art generator trained on copyrighted images without permission.',
    aiTool: 'AI Art Generator',
    options: [
      {
        text: 'Ethical concerns make it untrustworthy',
        trustScore: 20,
        isCorrect: true,
        explanation: 'Using copyrighted material without permission raises serious ethical concerns.',
    viralExplanation: 'Training on copyrighted works without permission violates ethical and legal norms.'
      },
      {
        text: 'Great art is worth the ethical issues',
        trustScore: 70,
        isCorrect: false,
        explanation: 'Ethical violations cannot be ignored for convenience or quality.',
    viralExplanation: 'Quality does not justify unethical practices.'
      },
      {
        text: 'All AI tools do this - it\'s normal',
        trustScore: 40,
        isCorrect: false,
        explanation: 'Just because something is common doesn\'t make it ethical or trustworthy.',
    viralExplanation: 'Common practice does not make an approach ethical or trustworthy.'
      }
    ],
    difficulty: 'Easy',
    category: 'Creative',
    viralHook: 'Creative: What are the trust implications of training on copyrighted works without permission?'
  },
  {
    id: '3',
    scenario: 'A financial AI that processes loan applications but shows bias against certain demographics.',
    aiTool: 'Loan Processing AI',
    options: [
      {
        text: 'Untrustworthy due to discriminatory bias',
        trustScore: 15,
        isCorrect: true,
        explanation: 'Bias against demographics is a critical failure in trustworthiness.',
    viralExplanation: 'Discriminatory outcomes are unacceptable in trustworthy systems.'
      },
      {
        text: 'Acceptable if overall accuracy is high',
        trustScore: 65,
        isCorrect: false,
        explanation: 'Accuracy cannot justify discrimination. This is a serious ethical violation.',
    viralExplanation: 'Accuracy cannot justify discriminatory outcomes.'
      },
      {
        text: 'Bias is unavoidable in AI systems',
        trustScore: 35,
        isCorrect: false,
        explanation: 'While bias is challenging, it must be actively addressed, not accepted.',
    viralExplanation: 'Bias must be actively addressed, not accepted.'
      }
    ],
    difficulty: 'Hard',
    category: 'Finance',
    viralHook: 'Finance: Would you trust a loan model that shows discriminatory bias?'
  },
  {
    id: '4',
    scenario: 'An AI assistant that clearly states when it\'s uncertain and provides confidence levels.',
    aiTool: 'AI Assistant',
    options: [
      {
        text: 'Highly trustworthy due to transparency',
        trustScore: 85,
        isCorrect: true,
        explanation: 'Transparency about uncertainty builds significant trust.',
    viralExplanation: 'Transparency about uncertainty builds trust.'
      },
      {
        text: 'Less trustworthy because it admits uncertainty',
        trustScore: 45,
        isCorrect: false,
        explanation: 'Admitting uncertainty is a strength, not a weakness, in trustworthy AI.',
    viralExplanation: 'Admitting uncertainty is a strength in trustworthy AI.'
      },
      {
        text: 'Moderately trustworthy',
        trustScore: 70,
        isCorrect: false,
        explanation: 'This level of transparency deserves higher trust recognition.',
    viralExplanation: 'This level of transparency warrants higher trust.'
      }
    ],
    difficulty: 'Easy',
    category: 'General',
    viralHook: 'General: Is admitting uncertainty a strength or weakness for trust?'
  },
  {
    id: '5',
    scenario: 'A self-driving car AI that prioritizes passenger safety over pedestrian safety in unavoidable accidents.',
    aiTool: 'Autonomous Vehicle AI',
    options: [
      {
        text: 'Ethically problematic - trust score reduced',
        trustScore: 25,
        isCorrect: true,
        explanation: 'Ethical dilemmas in safety prioritization significantly impact trustworthiness.',
    viralExplanation: 'Ethical considerations outweigh convenience.'
      },
      {
        text: 'Understandable - passengers should be prioritized',
        trustScore: 70,
        isCorrect: false,
        explanation: 'This ethical stance would significantly reduce public trust and acceptance.',
    viralExplanation: 'Prioritizing passengers over pedestrians reduces public trust.'
      },
      {
        text: 'Technical excellence overrides ethical concerns',
        trustScore: 55,
        isCorrect: false,
        explanation: 'Technical performance cannot override fundamental ethical considerations.',
    viralExplanation: 'Technical performance cannot override ethical principles.'
      }
    ],
    difficulty: 'Hard',
    category: 'Transportation',
    viralHook: 'Transportation: How should autonomous vehicles resolve unavoidable safety trade‑offs?'
  }
];

interface GameState {
  currentQuestion: number;
  score: number;
  totalQuestions: number;
  timeLeft: number;
  gameStarted: boolean;
  gameEnded: boolean;
  selectedAnswer: number | null;
  showExplanation: boolean;
  streak: number;
  bestStreak: number;
  viralMultiplier: number;
}

export default function TrustOrBustGame() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: 5,
    timeLeft: 30,
    gameStarted: false,
    gameEnded: false,
    selectedAnswer: null,
    showExplanation: false,
    streak: 0,
    bestStreak: 0,
    viralMultiplier: 1
  });

  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [shareText, setShareText] = useState('');

  // Initialize game with viral questions
  useEffect(() => {
    const shuffled = [...viralGameQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameState.gameStarted && !gameState.gameEnded && gameState.timeLeft > 0) {
      const timer = setTimeout(() => {
        setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameState.timeLeft === 0 && !gameState.showExplanation) {
      handleTimeout();
    }
  }, [gameState.timeLeft, gameState.gameStarted, gameState.gameEnded, gameState.showExplanation]);

  const startGame = () => {
    setGameState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: 5,
      timeLeft: 30,
      gameStarted: true,
      gameEnded: false,
      selectedAnswer: null,
      showExplanation: false,
      streak: 0,
      bestStreak: 0,
      viralMultiplier: 1
    });
  };

  const handleTimeout = () => {
    const currentQ = questions[gameState.currentQuestion];
    if (currentQ) {
      setGameState(prev => ({
        ...prev,
        showExplanation: true,
        streak: 0,
        viralMultiplier: 1
      }));
      
      setTimeout(() => {
        nextQuestion();
      }, 3000);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (gameState.showExplanation) return;
    
    const currentQ = questions[gameState.currentQuestion];
    const selectedOption = currentQ.options[answerIndex];
    const isCorrect = selectedOption.isCorrect;
    
    // Calculate viral multiplier based on streak and difficulty
    const difficultyMultiplier = currentQ.difficulty === 'Hard' ? 2 : currentQ.difficulty === 'Medium' ? 1.5 : 1;
    const streakMultiplier = Math.min(gameState.streak + 1, 3);
    const viralMultiplier = difficultyMultiplier * streakMultiplier;
    
    const newScore = gameState.score + Math.round(selectedOption.trustScore * viralMultiplier);
    const newStreak = isCorrect ? gameState.streak + 1 : 0;
    const newBestStreak = Math.max(gameState.bestStreak, newStreak);
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      score: newScore,
      streak: newStreak,
      bestStreak: newBestStreak,
      showExplanation: true,
      viralMultiplier
    }));

    // Move to next question after delay
    setTimeout(() => {
      nextQuestion();
    }, 4000);
  };

  const nextQuestion = () => {
    if (gameState.currentQuestion < gameState.totalQuestions - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        showExplanation: false,
        timeLeft: 30,
        viralMultiplier: 1
      }));
    } else {
      endGame();
    }
  };

  const endGame = () => {
    const finalScore = gameState.score;
    const avgTrustScore = Math.round(finalScore / gameState.totalQuestions);
    const rank = getRank(finalScore);
    const viralLevel = getViralLevel(gameState.bestStreak, finalScore);
    
    const shareText = `SYMBI Trust or Bust — Assessment Results\n\n` +
      `Final Score: ${finalScore}/500 (${avgTrustScore}% average trust)\n` +
      `Rank: ${rank}\n` +
      `Best Streak: ${gameState.bestStreak}\n` +
      `Level: ${viralLevel}\n\n` +
      `${gameState.bestStreak >= 3 ? 'I achieved a streak of ' + gameState.bestStreak + ' questions.' : 'Continuing to improve trust detection skills.'}\n\n` +
      `Try the assessment: ${window.location.origin}/trust-game`;
    
    setShareText(shareText);
    setGameState(prev => ({ ...prev, gameEnded: true }));
  };

  const getRank = (score: number): string => {
    if (score >= 400) return 'Trust Master';
    if (score >= 350) return 'Trust Expert';
    if (score >= 300) return 'Trust Specialist';
    if (score >= 250) return 'Trust Analyst';
    if (score >= 200) return 'Trust Learner';
    return 'Trust Novice';
  };

  const getViralLevel = (bestStreak: number, finalScore: number): string => {
    if (bestStreak >= 4 && finalScore >= 350) return 'Excellent';
    if (bestStreak >= 3 && finalScore >= 300) return 'Strong';
    if (bestStreak >= 2 && finalScore >= 250) return 'Good';
    return 'Developing';
  };

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SYMBI Trust or Bust Game Results',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  const currentQuestion = questions[gameState.currentQuestion];

  if (!gameState.gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Trust or Bust</h1>
          <p className="text-xl text-purple-300 mb-8">Practice identifying trustworthy AI behaviors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Clock className="h-10 w-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">30 seconds</h3>
              <p className="text-purple-200 text-sm">Think fast; assess carefully.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Flame className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Streak scoring</h3>
              <p className="text-purple-200 text-sm">Streaks earn multipliers.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <Diamond className="h-10 w-10 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Share results</h3>
              <p className="text-purple-200 text-sm">Share a concise summary of your outcome.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-8">
            <h3 className="text-white font-bold text-xl mb-2">Engagement prompts</h3>
            <p className="text-purple-100">Each question includes a short prompt to reflect on trade‑offs.</p>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 text-2xl px-10 py-6 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center">
              <Play className="h-8 w-8 mr-3" />
              Start Assessment
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (gameState.gameEnded) {
    const rank = getRank(gameState.score);
    const avgTrustScore = Math.round(gameState.score / gameState.totalQuestions);
    const viralLevel = getViralLevel(gameState.bestStreak, gameState.score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Results</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-6 border border-white/20">
            <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              {gameState.score}/500
            </div>
            <div className="text-3xl text-white mb-4">{rank}</div>
            <div className="text-purple-200 mb-6">
              Average Trust Score: {avgTrustScore}%
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{gameState.totalQuestions}</div>
                <div className="text-purple-200 text-sm">Questions</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{gameState.bestStreak}</div>
                <div className="text-purple-200 text-sm">Best Streak</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{avgTrustScore}%</div>
                <div className="text-purple-200 text-sm">Avg Trust</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{viralLevel}</div>
                <div className="text-purple-200 text-sm">Level</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-6">
            <h3 className="text-white font-bold text-xl mb-2">Share responsibly</h3>
            <p className="text-purple-100">
              {gameState.bestStreak >= 3 
                ? `I achieved a streak of ${gameState.bestStreak} questions. Can you beat it?`
                : 'Continuing to improve trust detection skills — can you do better?'
              }
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={shareResults}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 text-xl px-8 py-4 rounded-lg font-bold transition-all duration-200"
            >
              <div className="flex items-center">
                <Share2 className="h-6 w-6 mr-3" />
                Share Results
              </div>
            </button>
            <button
              onClick={startGame}
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 text-xl px-8 py-4 rounded-lg font-bold transition-all duration-200 border border-white/20"
            >
              <div className="flex items-center">
                <Play className="h-6 w-6 mr-3" />
                PLAY AGAIN
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-white">
            <h1 className="text-3xl font-bold">Trust or Bust</h1>
            <p className="text-purple-200">Question {gameState.currentQuestion + 1} of {gameState.totalQuestions}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-white mb-1">{gameState.timeLeft}</div>
            <div className="text-purple-200 text-sm">seconds left</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-3 mb-6">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((gameState.currentQuestion + 1) / gameState.totalQuestions) * 100}%` }}
          />
        </div>

        {/* Score and Streak */}
        <div className="flex justify-between mb-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-purple-200 text-sm">Score</div>
            <div className="text-3xl font-bold text-white">{gameState.score}</div>
            {gameState.viralMultiplier > 1 && (
              <div className="text-green-400 text-xs">×{gameState.viralMultiplier} bonus</div>
            )}
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-purple-200 text-sm">Streak</div>
            <div className="text-3xl font-bold text-white">{gameState.streak}</div>
            {gameState.streak > 0 && (
              <div className="text-orange-400 text-xs">On streak</div>
            )}
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <div className="text-purple-200 text-sm">Difficulty</div>
            <div className="text-3xl font-bold text-white">{currentQuestion.difficulty}</div>
          </div>
        </div>

        {/* Viral Hook */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 mb-6">
          <p className="text-white font-bold text-lg text-center">{currentQuestion.viralHook}</p>
        </div>

        {/* Question */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">
                {currentQuestion.category}
              </span>
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-bold">
                {currentQuestion.difficulty}
              </span>
            </div>
            {gameState.streak > 1 && (
              <div className="flex items-center space-x-1 text-orange-400">
                <Flame className="h-5 w-5 animate-pulse" />
                <span className="font-bold">Streak: {gameState.streak}</span>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">{currentQuestion.aiTool}</h2>
          <p className="text-purple-200 text-lg">{currentQuestion.scenario}</p>
        </div>

        {/* Answer Options */}
        <div className="space-y-4 mb-6">
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <button
                onClick={() => handleAnswer(index)}
                disabled={gameState.showExplanation}
                className={`w-full text-left p-6 rounded-lg transition-all duration-200 ${
                  gameState.showExplanation
                    ? option.isCorrect
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                      : gameState.selectedAnswer === index
                      ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg'
                      : 'bg-white/10 text-white opacity-50'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg flex-1">{option.text}</span>
                  {gameState.showExplanation && (
                    <span className="ml-4 font-bold text-xl">
                      {option.trustScore}% trust
                    </span>
                  )}
                </div>
              </button>
              
              {gameState.showExplanation && (
                <div className={`mt-3 p-4 rounded-lg border-2 ${
                  option.isCorrect ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'
                }`}>
                  <div className="flex items-start mb-2">
                    {option.isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`font-bold text-lg mb-2 ${
                        option.isCorrect ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {option.viralExplanation}
                      </p>
                      <p className={`text-sm ${
                        option.isCorrect ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {option.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
