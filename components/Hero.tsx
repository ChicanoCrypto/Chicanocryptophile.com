
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glows */}
      <div className="absolute -top-40 -right-40 -z-10 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-0 -z-10 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-sm bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span>Operational Mode: Full-Stack Engineering</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            Bridging the <br />
            <span className="gradient-text italic">Digital Void.</span>
          </h1>
          
          <div className="flex space-x-6 mono text-sm font-medium border-l-2 border-cyan-500/30 pl-6 py-2">
            <div className="text-cyan-400">&gt; Frontend</div>
            <div className="text-white/40">/</div>
            <div className="text-blue-400">&gt; Backend</div>
            <div className="text-white/40">/</div>
            <div className="text-purple-400">&gt; Smart Contracts</div>
          </div>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            Senior Full-Stack Developer specializing in high-throughput Web3 ecosystems. Currently scaling decentralized liquidity layers at <span className="text-white font-bold underline decoration-cyan-400 underline-offset-8">CITALBLOCK</span>. I build the machines that power the borderless economy.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="group relative px-10 py-5 bg-cyan-500 text-black font-black uppercase tracking-widest transition-all overflow-hidden rounded-sm">
              <span className="relative z-10">Establish Uplink</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#projects" className="px-10 py-5 glass text-white font-black uppercase tracking-widest border border-white/10 hover:border-cyan-400 transition-all rounded-sm">
              Decrypt Archive
            </a>
          </div>
        </div>
        
        <div className="relative">
          {/* Decorative Code Panel */}
          <div className="glass rounded-lg border border-white/5 overflow-hidden shadow-2xl">
            <div className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] mono text-slate-500 uppercase tracking-widest">system_log.tsx</div>
            </div>
            <div className="p-8 mono text-xs md:text-sm text-slate-300 leading-relaxed overflow-hidden max-h-[400px]">
              <div className="flex space-x-4 opacity-70">
                <span className="text-slate-600">01</span>
                <span><span className="text-purple-400">import</span> {'{ FullStack }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@chicano/core'</span>;</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-600">02</span>
                <span><span className="text-blue-400">const</span> <span className="text-yellow-400">architect</span> = <span className="text-blue-400">new</span> <span className="text-cyan-400">Developer</span>({'{'}</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-600">03</span>
                <span className="pl-4">handle: <span className="text-green-400">'realCryptophile'</span>,</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-600">04</span>
                <span className="pl-4">vision: <span className="text-green-400">'Web3 Supremacy'</span>,</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-600">05</span>
                <span className="pl-4">stack: [<span className="text-green-400">'Go'</span>, <span className="text-green-400">'Solidity'</span>, <span className="text-green-400">'React'</span>]</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-slate-600">06</span>
                <span>{'}'});</span>
              </div>
              <div className="mt-4 flex space-x-4 text-cyan-400/50">
                <span className="text-slate-600">07</span>
                <span className="animate-pulse">&gt; Initializing decentralized node... OK</span>
              </div>
              <div className="flex space-x-4 text-magenta-400/50">
                <span className="text-slate-600">08</span>
                <span className="animate-pulse">&gt; Loading institutional liquidity... OK</span>
              </div>
              <div className="mt-8 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-sm">
                <div className="text-cyan-400 font-bold mb-2 uppercase tracking-tighter">CURRENT_FOCUS</div>
                <div className="text-white text-base font-black">CITALBLOCK MAINNET</div>
              </div>
            </div>
          </div>
          
          {/* Floaters */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 glass border border-cyan-500/30 rounded-full flex flex-col items-center justify-center animate-bounce shadow-xl">
             <div className="text-2xl font-black text-cyan-400">6+</div>
             <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
