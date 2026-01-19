
import React from 'react';
import { SKILLS } from '../constants';

const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative bg-slate-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">Mastered <span className="gradient-text">Sub-Systems</span></h2>
          <p className="text-slate-400 text-lg font-medium">A diverse stack spanning the entire Web3 lifecycle, from frontend state management to complex backend indexing and smart contract logic.</p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
          {(['Frontend', 'Backend', 'Blockchain', 'Tools'] as const).map(category => (
            <div key={category} className="space-y-8 glass p-8 rounded-sm border-l-2 border-l-cyan-500/50">
              <h3 className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">
                {category}_STATION
              </h3>
              
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.name} className="group cursor-crosshair">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold group-hover:text-white transition-colors uppercase tracking-tight">{skill.name}</span>
                      <span className="text-[10px] text-slate-500 mono">{skill.level}/100</span>
                    </div>
                    <div className="h-1 w-full bg-slate-900 overflow-hidden relative">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                      <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-[-20deg]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Chains */}
        <div className="mt-32 p-12 glass border border-white/5 rounded-sm flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-700">
           <span className="text-3xl font-black tracking-tighter italic">ETHEREUM</span>
           <span className="text-3xl font-black tracking-tighter italic">AVAX</span>
           <span className="text-3xl font-black tracking-tighter italic">SOLANA</span>
           <span className="text-3xl font-black tracking-tighter italic">BASE</span>
           <span className="text-3xl font-black tracking-tighter italic">POLYGON</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
