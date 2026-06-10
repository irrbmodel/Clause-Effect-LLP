import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, DollarSign, Calendar, Sparkles, FileText, ArrowRight, Activity } from './Icons';
import TextReveal from './TextReveal';
import Magnetic from './Magnetic';

const clausesData = [
  {
    id: 'arbitration',
    name: 'Expedited Arbitration Clause',
    type: 'Resolution Strategy',
    description: 'Bypasses public court systems. Mandates private, fast-track arbitration in case of disputes, with binding decisions within 90 days.',
    metrics: {
      time: '90 Days',
      timePercent: 10, // representing visual bar scale
      cost: 'Low ($15k est.)',
      costPercent: 15,
      risk: 'Minimal',
      riskColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    },
    quote: '"Drafting this clause saved us over $150,000 in court litigation fees and preserved key partnership relations during a licensing dispute."',
    author: 'Tech Innovators Corp, CEO'
  },
  {
    id: 'ip-indemnity',
    name: 'Dynamic IP Indemnity Clause',
    type: 'Liability Shield',
    description: 'Protects clients against third-party patent infringement lawsuits arising from software or design usage, shifting risks to providers.',
    metrics: {
      time: 'Immediate Indemnity',
      timePercent: 5,
      cost: 'Shielded (0% risk)',
      costPercent: 5,
      risk: 'Zero Liability',
      riskColor: 'text-sky-700 bg-sky-50 border-sky-100'
    },
    quote: '"When a patent troll attacked our client, the IP indemnity clause we drafted forced the software provider to cover all damages and litigation costs."',
    author: 'Fintech Startup, Founder'
  },
  {
    id: 'escalation',
    name: 'Multi-Tier Dispute Resolution',
    type: 'Conflict Cooling',
    description: 'Requires executive negotiation, followed by voluntary mediation, before either party can initiate formal legal actions.',
    metrics: {
      time: '30-45 Days',
      timePercent: 30,
      cost: 'Nominal ($5k est.)',
      costPercent: 8,
      risk: 'Very Low',
      riskColor: 'text-teal-700 bg-teal-50 border-teal-100'
    },
    quote: '"90% of contract disputes are settled at the mediation table. This clause ensures we cool down emotions and reach a commercial agreement without suing."',
    author: 'Global Logistics LLP'
  },
  {
    id: 'price-adjustment',
    name: 'Index-Linked Price Adjustment',
    type: 'Inflation Protection',
    description: 'Automatically adjusts annual contract pricing based on national consumer price indexes, protecting margins against inflation spikes.',
    metrics: {
      time: 'Real-time Adjustment',
      timePercent: 5,
      cost: 'Stable Margins',
      costPercent: 10,
      risk: 'Low Inflation Risk',
      riskColor: 'text-amber-700 bg-amber-50 border-amber-100'
    },
    quote: '"During the recent inflation shock, our long-term supply agreement adapted automatically without friction or renegotiation stress."',
    author: 'Manufacturing Ltd, CFO'
  }
];

const InteractiveSimulator = () => {
  const [selectedId, setSelectedId] = useState('arbitration');
  const activeClause = clausesData.find(c => c.id === selectedId);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-darker border-b border-black/4">
      {/* Background Soft Glows */}
      <div className="glow-blue w-[400px] h-[400px] top-1/2 left-0 opacity-25" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Brand Mechanics</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 font-display">
            <TextReveal>The Clause & Effect Concept</TextReveal>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            A contract is not just a document; it is a business strategy. Explore how single clauses shape actual corporate outcomes, litigation costs, and operational timelines.
          </p>
        </div>

        {/* Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Clause Options Selection */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-2">
              Select a Strategic Clause
            </span>
            {clausesData.map((clause) => {
              const isSelected = clause.id === selectedId;
              return (
                <button
                  key={clause.id}
                  onClick={() => setSelectedId(clause.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-white border-brand-blue/30 shadow-[0_10px_25px_-5px_rgba(29,78,216,0.06)]' 
                      : 'bg-white/40 border-black/3 hover:border-black/8 hover:bg-white'
                  }`}
                  data-hover="true"
                  data-hover-type="text"
                  data-hover-text={isSelected ? 'ACTIVE' : 'SELECT'}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                      {clause.type}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] text-brand-blue font-bold">
                        Active <Activity size={12} className="animate-pulse" />
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-1">{clause.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{clause.description}</p>
                </button>
              );
            })}
          </div>

          {/* Center Connector (Visual line) */}
          <div className="hidden lg:col-span-1 lg:flex flex-col items-center justify-center h-full relative py-12">
            <motion.div 
              className="w-10 h-10 rounded-full bg-white border border-black/6 flex items-center justify-center text-brand-blue shadow-sm z-10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              <ArrowRight size={16} />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="2" height="200" viewBox="0 0 2 200" fill="none" className="h-full opacity-60">
                <path d="M1 0v200" stroke="#e2e8f0" strokeWidth="2" />
                <motion.path 
                  d="M1 0v200" 
                  stroke="url(#simGrad)" 
                  strokeWidth="2" 
                  strokeDasharray="20, 50"
                  animate={{ strokeDashoffset: [-70, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="simGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Panel: Simulated Effect Outcomes */}
          <div className="lg:col-span-6">
            <div className="bg-white h-full p-6 md:p-8 rounded-3xl border border-black/4 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.04)] flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-brand-red/5 to-transparent rounded-tr-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between gap-6"
                >
                  {/* Top header of document card */}
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="text-brand-red" size={18} />
                      <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Strategic Effect Analysis
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-800 mb-3 font-display">
                      {activeClause.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {activeClause.description}
                    </p>
                  </div>

                  {/* Visual Analytics / Outcome Metrics */}
                  <div className="bg-slate-50/70 border border-black/3 rounded-2xl p-5 flex flex-col gap-4 text-left">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Outcome Dashboard
                    </span>
                    
                    {/* Time Metric */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <Calendar size={12} className="text-brand-blue" /> Resolution Speed
                        </span>
                        <span className="font-bold text-slate-800">{activeClause.metrics.time}</span>
                      </div>
                      <div className="w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="bg-brand-blue h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${100 - activeClause.metrics.timePercent}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Cost Metric */}
                    <div>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                          <DollarSign size={12} className="text-brand-red" /> Litigation Expense Risk
                        </span>
                        <span className="font-bold text-slate-800">{activeClause.metrics.cost}</span>
                      </div>
                      <div className="w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="bg-brand-red h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${100 - activeClause.metrics.costPercent}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Risk Level Badge */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/4">
                      <span className="text-slate-500 text-xs font-medium flex items-center gap-1.5">
                        <ShieldAlert size={12} /> Total Risk Exposure
                      </span>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold border ${activeClause.metrics.riskColor}`}>
                        {activeClause.metrics.risk}
                      </span>
                    </div>
                  </div>

                  {/* Impact Testimony */}
                  <div className="border-l-2 border-brand-red pl-4 italic text-sm text-slate-600 text-left">
                    <p className="mb-1 leading-relaxed">"{activeClause.quote}"</p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase not-italic tracking-wider">
                      - {activeClause.author}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveSimulator;
