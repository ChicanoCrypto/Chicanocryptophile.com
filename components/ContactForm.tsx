
import React, { useState } from 'react';
import { verifyAndSignMessage } from '../services/geminiService';
import { VerificationResult } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const verification = await verifyAndSignMessage(formData.name, formData.email, formData.message);
    setResult(verification);
    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
       {/* Background Grid Accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 -z-10 blur-3xl rounded-full" />
       
       <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-6xl font-black tracking-tighter italic uppercase leading-none">
                  Open <br />
                  <span className="text-cyan-400">Connection_</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium">
                  Seeking a senior engineer to architect your next protocol? Propose a mission or schedule a technical deep-dive.
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="flex items-center space-x-6 p-6 glass border border-white/5 hover:border-cyan-400/30 transition-all rounded-sm">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-sm flex items-center justify-center text-cyan-400 border border-cyan-400/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-400/50 font-black uppercase tracking-[0.3em] mb-1">Direct_Mail</div>
                    <div className="text-lg font-bold">Chicanocryptonite@gmail.com</div>
                  </div>
                </div>

                <a href="https://x.com/realCryptophile" target="_blank" rel="noreferrer" className="flex items-center space-x-6 p-6 glass border border-white/5 hover:border-cyan-400/30 transition-all rounded-sm group">
                  <div className="w-14 h-14 bg-magenta-500/10 rounded-sm flex items-center justify-center text-magenta-400 border border-magenta-400/20 group-hover:bg-magenta-500 group-hover:text-black transition-all">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-magenta-400/50 font-black uppercase tracking-[0.3em] mb-1">X_Protocol</div>
                    <div className="text-lg font-bold">@realCryptophile</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-magenta-500 blur opacity-20" />
              <div className="relative glass p-10 rounded-sm border border-white/10">
                {result ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-sm flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="text-3xl font-black uppercase italic tracking-tighter">Transmission_Signed</h3>
                      <p className="text-slate-400 mono text-xs leading-relaxed italic">
                        "{result.message}"
                      </p>
                    </div>
                    <div className="p-6 bg-slate-950 border border-white/5 mono text-[10px] text-cyan-500/70 break-all leading-tight">
                      <div className="mb-2 text-white font-bold tracking-widest uppercase">AUDIT_HASH:</div>
                      {result.hash}
                    </div>
                    <button 
                      onClick={() => setResult(null)} 
                      className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all rounded-sm"
                    >
                      New Sequence
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Identity_String</label>
                      <input 
                        required
                        className="w-full bg-slate-950/80 border border-white/5 rounded-sm px-6 py-4 focus:border-cyan-400/50 focus:bg-slate-900 outline-none transition-all mono text-sm"
                        placeholder="NAME_OR_ORG"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Endpoint_Address</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-slate-950/80 border border-white/5 rounded-sm px-6 py-4 focus:border-cyan-400/50 focus:bg-slate-900 outline-none transition-all mono text-sm"
                        placeholder="EMAIL_HOST"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Mission_Payload</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-slate-950/80 border border-white/5 rounded-sm px-6 py-4 focus:border-cyan-400/50 focus:bg-slate-900 outline-none transition-all mono text-sm resize-none"
                        placeholder="TRANSMISSION_DATA..."
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    
                    <button 
                      disabled={loading}
                      className="group w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] relative overflow-hidden disabled:opacity-50 transition-all"
                    >
                      <span className="relative z-10">
                        {loading ? 'AUDITING_NETWORK...' : 'EXECUTE_UPLINK'}
                      </span>
                      <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default ContactForm;
