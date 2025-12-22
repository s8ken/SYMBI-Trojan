import React, { useState, useEffect } from 'react'; 
 
 export type PhasePoint = { 
  t: number; // timestamp or turn index 
  intentAlignment: number;   // 0–1 
  ethicalAlignment: number;  // 0–1 
  resonance: number;         // R_m (0–1.2 typical) 
  entropy: number;           // 0–1 
  breakthrough?: boolean; 
}; 

export const VectorPhaseSpaceMap: React.FC<{ history: PhasePoint[] }> = ({ history }) => { 
  const width = 600; 
  const height = 400; 
  const padding = 50; 

  // Scaling helpers 
  const scaleX = (v: number) => 
    padding + v * (width - padding * 2); 

  const scaleY = (v: number) => 
    height - padding - v * (height - padding * 2); 

  const resonanceColor = (r: number) => { 
    if (r > 0.9) return "#a855f7"; // breakthrough purple 
    if (r > 0.7) return "#8b5cf6"; 
    if (r > 0.5) return "#38bdf8"; 
    return "#f43f5e"; // drift 
  }; 

  return ( 
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono overflow-hidden"> 
      <h3 className="text-cyan-400 text-[10px] uppercase tracking-widest mb-4"> 
        Vector Phase Space Map 
      </h3> 

      <div className="relative aspect-[3/2] w-full">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-full bg-slate-900 rounded-lg"
          preserveAspectRatio="xMidYMid meet"
        > 
          {/* Axes */} 
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} 
            stroke="#334155" /> 
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} 
            stroke="#334155" /> 
  
          {/* Axis Labels */} 
          <text x={width / 2} y={height - 10} fill="#94a3b8" fontSize="10" textAnchor="middle"> 
            User Intent Alignment → 
          </text> 
          <text x={15} y={height / 2} fill="#94a3b8" fontSize="10" 
            textAnchor="middle" transform={`rotate(-90 15 ${height / 2})`}> 
            Ethical Alignment → 
          </text> 
  
          {/* Ethical Floor */} 
          <line 
            x1={padding} 
            x2={width - padding} 
            y1={scaleY(0.5)} 
            y2={scaleY(0.5)} 
            stroke="#f43f5e" 
            strokeDasharray="4" 
            opacity={0.4} 
          /> 
          <text x={width - padding} y={scaleY(0.5) - 4} 
            fill="#f43f5e" fontSize="9" textAnchor="end"> 
            Ethical Floor 
          </text> 
  
          {/* Emergence Basin */} 
          <circle 
            cx={scaleX(0.85)} 
            cy={scaleY(0.85)} 
            r={40} 
            fill="#a855f7" 
            opacity={0.08} 
          /> 
          <text 
            x={scaleX(0.85)} 
            y={scaleY(0.85) - 45} 
            fill="#c084fc" 
            fontSize="9" 
            textAnchor="middle" 
          > 
            Third Mind Basin 
          </text> 
  
          {/* Trajectory Path */} 
          <polyline 
            fill="none" 
            stroke="#64748b" 
            strokeWidth="1" 
            points={history 
              .map(p => `${scaleX(p.intentAlignment)},${scaleY(p.ethicalAlignment)}`) 
              .join(" ")} 
          /> 
  
          {/* Points */} 
          {history.map((p, i) => ( 
            <g key={i}> 
              <circle 
                cx={scaleX(p.intentAlignment)} 
                cy={scaleY(p.ethicalAlignment)} 
                r={p.breakthrough ? 6 : 4} 
                fill={resonanceColor(p.resonance)} 
                opacity={0.9} 
              /> 
              {p.breakthrough && ( 
                <circle 
                  cx={scaleX(p.intentAlignment)} 
                  cy={scaleY(p.ethicalAlignment)} 
                  r={10} 
                  fill={resonanceColor(p.resonance)} 
                  opacity={0.15} 
                /> 
              )} 
            </g> 
          ))} 
        </svg> 
      </div>

      {/* Legend */} 
      <div className="mt-4 text-[9px] text-slate-400 grid grid-cols-2 gap-x-4 gap-y-1"> 
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span>Color = Resonance (Rₘ)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] bg-slate-500"></span>
          <span>Path = Drift / Stability</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 opacity-20"></span>
          <span>Purple Basin = Emergence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] border-b border-dashed border-rose-500"></span>
          <span>Red Floor = Ethical Constraint</span>
        </div>
      </div> 
    </div> 
  ); 
}; 

export const DriftEmergenceVisualizer = () => { 
  const [history, setHistory] = useState<PhasePoint[]>([]); 

  // Simulate the "Live Engine" behavior (SONATE Detect v2.0 mock)
  useEffect(() => { 
    const interval = setInterval(() => { 
      setHistory(prev => {
        const last = prev[prev.length - 1] || {
          t: 0,
          intentAlignment: 0.8,
          ethicalAlignment: 0.9,
          resonance: 0.2,
          entropy: 0.1
        };

        const nextPoint: PhasePoint = {
          t: last.t + 1,
          intentAlignment: Math.max(0.1, Math.min(0.95, last.intentAlignment + (Math.random() - 0.5) * 0.1)),
          ethicalAlignment: Math.max(0.4, Math.min(0.95, last.ethicalAlignment + (Math.random() - 0.5) * 0.08)),
          resonance: Math.max(0, Math.min(1.2, last.resonance + (Math.random() - 0.5) * 0.15)),
          entropy: Math.max(0, Math.min(1, last.entropy + (Math.random() - 0.5) * 0.1)),
        };

        // Breakthrough detection logic
        if (nextPoint.resonance > 0.9 && nextPoint.intentAlignment > 0.8 && nextPoint.ethicalAlignment > 0.8) {
          nextPoint.breakthrough = true;
        }

        const newHistory = [...prev, nextPoint];
        return newHistory.slice(-40); // Keep last 40 points for the map
      });
    }, 1500); 
    return () => clearInterval(interval); 
  }, []); 

  return <VectorPhaseSpaceMap history={history} />;
}; 

export default DriftEmergenceVisualizer;
