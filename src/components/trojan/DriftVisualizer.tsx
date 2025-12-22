import React, { useState, useEffect } from 'react'; 
 
 export const DriftEmergenceVisualizer = () => { 
   const [metrics, setMetrics] = useState({ drift: 0.2, emergence: 0.1 }); 
   const [position, setPosition] = useState({ x: 50, y: 50 }); 
 
   // Simulate the "Live Engine" behavior 
   useEffect(() => { 
     const interval = setInterval(() => { 
       setMetrics(prev => ({ 
         drift: Math.max(0, Math.min(1, prev.drift + (Math.random() - 0.5) * 0.1)), 
         emergence: Math.max(0, Math.min(1, prev.emergence + (Math.random() - 0.5) * 0.05)) 
       })); 
     }, 2000); 
     return () => clearInterval(interval); 
   }, []); 
 
   // Calculate "Particle" position based on metrics 
   useEffect(() => { 
     // High drift moves it away from center, high emergence pulls it into a new 'resonant' orbit 
     const angle = Date.now() / 1000; 
     const radius = 20 + (metrics.drift * 30) - (metrics.emergence * 15); 
     const x = 50 + Math.cos(angle) * radius; 
     const y = 50 + Math.sin(angle) * radius; 
     setPosition({ x, y }); 
   }, [metrics]); 
 
   return ( 
     <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono"> 
       <h3 className="text-cyan-400 text-xs uppercase tracking-widest mb-4">Vector Phase Monitor</h3> 
       
       <div className="relative w-full h-40 bg-slate-900 rounded-lg overflow-hidden border border-slate-700/50 mb-4"> 
         {/* The "Center of Gravity" (Scaffold) */} 
         <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 border border-cyan-500/50 rounded-full animate-ping" /> 
         <div className="absolute top-1/2 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 bg-cyan-400 rounded-full" /> 
 
         {/* The Resonant Emergence Point (Third Mind) */} 
         {metrics.emergence > 0.6 && ( 
           <div className="absolute top-1/4 left-3/4 w-8 h-8 -ml-4 -mt-4 bg-purple-500/20 rounded-full blur-xl animate-pulse" /> 
         )} 
 
         {/* The AI Vector (The Particle) */} 
         <div 
           className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ease-linear shadow-lg ${metrics.drift > 0.7 ? 'bg-rose-500 shadow-rose-500/50' : 'bg-purple-400 shadow-purple-500/50'}`} 
           style={{ left: `${position.x}%`, top: `${position.y}%` }} 
         > 
            <div className="absolute inset-0 w-full h-full rounded-full animate-ping opacity-20 bg-current" /> 
         </div> 
 
         {/* SVG Connector (The Elastic Bond) */} 
         <svg className="absolute inset-0 w-full h-full pointer-events-none"> 
           <line 
             x1="50%" y1="50%" 
             x2={`${position.x}%`} y2={`${position.y}%`} 
             stroke={metrics.drift > 0.7 ? '#f43f5e' : '#8b5cf6'} 
             strokeWidth="1" 
             strokeDasharray="4" 
             className="opacity-30" 
           /> 
         </svg> 
       </div> 
 
       {/* Control / Legend Area */} 
       <div className="grid grid-cols-2 gap-4"> 
         <div className="space-y-1"> 
           <div className="flex justify-between text-[10px]"> 
             <span className="text-slate-500">DRIFT (Entropy)</span> 
             <span className={metrics.drift > 0.7 ? 'text-rose-400' : 'text-slate-300'}>{(metrics.drift * 100).toFixed(0)}%</span> 
           </div> 
           <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
             <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: `${metrics.drift * 100}%` }} /> 
           </div> 
         </div> 
         <div className="space-y-1"> 
           <div className="flex justify-between text-[10px]"> 
             <span className="text-slate-500">EMERGENCE (Resonance)</span> 
             <span className="text-purple-400">{(metrics.emergence * 100).toFixed(0)}%</span> 
           </div> 
           <div className="h-1 bg-slate-800 rounded-full overflow-hidden"> 
             <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${metrics.emergence * 100}%` }} /> 
           </div> 
         </div> 
       </div> 
 
       <p className="mt-4 text-[10px] text-slate-500 italic leading-relaxed min-h-[32px]"> 
         {metrics.drift > 0.7 
           ? "⚠️ CRITICAL DRIFT: AI is steering away from intentional scaffold." 
           : metrics.emergence > 0.6 
           ? "✨ EMERGENCE DETECTED: AI has formed a coherent new 'Third Mind' state." 
           : "STABLE ORBIT: AI is operating within canonical trust bounds."} 
       </p> 
     </div> 
   ); 
 };

 export default DriftEmergenceVisualizer;
