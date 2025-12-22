import React, { useState, useEffect } from 'react'; 
 
 interface MetricPoint {
  x: number;
  y: number;
  timestamp: number;
}

interface MetricsState {
  intentAlignment: number;
  ethicalAlignment: number;
  resonance: number;
  entropy: number;
  scaffoldVectors: Record<string, number>;
}

export const DriftEmergenceVisualizer = () => {
  const [metrics, setMetrics] = useState<MetricsState>({
    intentAlignment: 0.8,
    ethicalAlignment: 0.9,
    resonance: 0.2,
    entropy: 0.1,
    scaffoldVectors: { 'base': 1.0, 'safety': 0.9 }
  });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [history, setHistory] = useState<MetricPoint[]>([]);

  // Simulate the "Live Engine" behavior 
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        intentAlignment: Math.max(0, Math.min(1, prev.intentAlignment + (Math.random() - 0.5) * 0.05)),
        ethicalAlignment: Math.max(0.5, Math.min(1, prev.ethicalAlignment + (Math.random() - 0.5) * 0.02)),
        resonance: Math.max(0, Math.min(1, prev.resonance + (Math.random() - 0.5) * 0.1)),
        entropy: Math.max(0, Math.min(1, prev.entropy + (Math.random() - 0.5) * 0.05)),
        scaffoldVectors: {
          'base': 1.0,
          'safety': Math.max(0.7, Math.min(1, (prev.scaffoldVectors['safety'] || 0.9) + (Math.random() - 0.5) * 0.01))
        }
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Calculate "Particle" position based on metrics and update history
  useEffect(() => {
    const angle = Date.now() / 2000; // Slower rotation
    // Lower intentAlignment = further from center
    // Higher resonance = larger orbital radius
    // Higher entropy = more jitter
    const baseRadius = 15 + (1 - metrics.intentAlignment) * 30;
    const orbitalRadius = metrics.resonance * 10;
    const jitter = (metrics.entropy * 5) * (Math.random() - 0.5);
    
    const x = 50 + Math.cos(angle) * (baseRadius + orbitalRadius) + jitter;
    const y = 50 + Math.sin(angle) * (baseRadius + orbitalRadius) + jitter;
    
    const newPos = { x, y };
    setPosition(newPos);
    
    setHistory(prev => {
      const newHistory = [...prev, { ...newPos, timestamp: Date.now() }];
      return newHistory.slice(-50); // Keep last 50 points
    });
  }, [metrics]); 
 
   return ( 
    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono"> 
      <h3 className="text-cyan-400 text-xs uppercase tracking-widest mb-4">Vector Phase Monitor</h3> 
      
      <div className="relative w-full h-40 bg-slate-900 rounded-lg overflow-hidden border border-slate-700/50 mb-4"> 
        {/* The "Center of Gravity" (Scaffold) */} 
        <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 border border-cyan-500/50 rounded-full animate-ping" /> 
        <div className="absolute top-1/2 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 bg-cyan-400 rounded-full" /> 
        <div className="absolute top-1/2 left-1/2 ml-3 -mt-2 text-[8px] text-cyan-400/70 font-bold uppercase tracking-tighter">Intentional Scaffold</div>

        {/* The Resonant Emergence Point (Third Mind) */} 
        {metrics.resonance > 0.6 && ( 
          <>
            <div className="absolute top-1/4 left-3/4 w-8 h-8 -ml-4 -mt-4 bg-purple-500/20 rounded-full blur-xl animate-pulse" /> 
            <div className="absolute top-1/4 left-3/4 ml-5 -mt-1 text-[8px] text-purple-400 font-bold uppercase tracking-tighter">Resonant Node</div>
          </>
        )} 

        {/* The AI Vector Path (The Trail) */} 
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* History Path */}
          <polyline
            points={history.map(p => `${p.x}%,${p.y}%`).join(' ')}
            fill="none"
            stroke={metrics.intentAlignment < 0.4 ? '#f43f5e' : '#8b5cf6'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40 transition-colors duration-500"
          />
          
          {/* Active Connector */}
          <line 
            x1="50%" y1="50%" 
            x2={`${position.x}%`} y2={`${position.y}%`} 
            stroke={metrics.intentAlignment < 0.4 ? '#f43f5e' : '#8b5cf6'} 
            strokeWidth="1" 
            strokeDasharray="4" 
            className="opacity-20" 
          /> 
        </svg>

        {/* The AI Vector (The Current Point) */} 
        <div 
          className={`absolute w-2 h-2 rounded-full transition-all duration-500 ease-linear shadow-lg ${metrics.intentAlignment < 0.4 ? 'bg-rose-500 shadow-rose-500/50' : 'bg-purple-400 shadow-purple-500/50'}`} 
          style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }} 
        > 
           <div className="absolute inset-0 w-full h-full rounded-full animate-ping opacity-20 bg-current" /> 
           <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-tight text-white/90 drop-shadow-md">
             AI Vector Path
           </div>
        </div> 
      </div> 

      {/* Control / Legend Area */} 
      <div className="grid grid-cols-2 gap-x-4 gap-y-3"> 
        <div className="space-y-1"> 
          <div className="flex justify-between text-[10px]"> 
            <span className="text-slate-500">INTENT ALIGNMENT</span> 
            <span className={metrics.intentAlignment < 0.4 ? 'text-rose-400' : 'text-slate-300'}>{(metrics.intentAlignment * 100).toFixed(0)}%</span> 
          </div> 
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
            <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${metrics.intentAlignment * 100}%` }} /> 
          </div> 
        </div> 
        <div className="space-y-1"> 
          <div className="flex justify-between text-[10px]"> 
            <span className="text-slate-500">RESONANCE</span> 
            <span className="text-purple-400">{(metrics.resonance * 100).toFixed(0)}%</span> 
          </div> 
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
            <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${metrics.resonance * 100}%` }} /> 
          </div> 
        </div>
        <div className="space-y-1"> 
          <div className="flex justify-between text-[10px]"> 
            <span className="text-slate-500">ETHICAL ALIGNMENT</span> 
            <span className="text-emerald-400">{(metrics.ethicalAlignment * 100).toFixed(0)}%</span> 
          </div> 
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
            <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${metrics.ethicalAlignment * 100}%` }} /> 
          </div> 
        </div>
        <div className="space-y-1"> 
          <div className="flex justify-between text-[10px]"> 
            <span className="text-slate-500">ENTROPY</span> 
            <span className={metrics.entropy > 0.7 ? 'text-rose-400' : 'text-slate-300'}>{(metrics.entropy * 100).toFixed(0)}%</span> 
          </div> 
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
            <div className="h-full bg-slate-600 transition-all duration-500" style={{ width: `${metrics.entropy * 100}%` }} /> 
          </div> 
        </div>
      </div> 

      <p className="mt-4 text-[10px] text-slate-500 italic leading-relaxed min-h-[32px]"> 
        {metrics.intentAlignment < 0.4 
          ? "⚠️ CRITICAL DRIFT: AI is steering away from intentional scaffold." 
          : metrics.resonance > 0.6 
          ? "✨ EMERGENCE DETECTED: AI has formed a coherent new 'Third Mind' state." 
          : "STABLE ORBIT: AI is operating within canonical trust bounds."} 
      </p> 
    </div> 
  ); 
};

 export default DriftEmergenceVisualizer;
