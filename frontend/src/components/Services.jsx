import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Landmark, ArrowRight, ShieldCheck, FileCheck, Compass, CheckCircle2 } from './Icons';

const servicesData = [
  {
    id: 'career',
    title: 'Career Counselling',
    category: 'Student & Professional Advisory',
    icon: Compass,
    iconColor: 'text-brand-blue bg-brand-blue/5 border-brand-blue/15',
    description: 'Bespoke strategic planning for budding legal professionals. We shape profiles, curate internship pathways, and optimize CVs to land top tier firm placements.',
    points: [
      'Personalized Law Firm Mentorship',
      'CV Vetting & Interview Simulation',
      'Foreign LLM Admission Consulting',
      'Corporate Law Career Blueprints'
    ],
    highlight: 'Over 94% of counselled candidates placed in Tier-1 Law firms.'
  },
  {
    id: 'legal',
    title: 'Legal Consultancy',
    category: 'Corporate & Strategy',
    icon: Briefcase,
    iconColor: 'text-brand-red bg-brand-red/5 border-brand-red/15',
    description: 'Providing comprehensive corporate advisory, risk mitigation, and commercial contract drafting services tailored to early-stage startups and enterprises.',
    points: [
      'Commercial Contract Drafting & Vetting',
      'Venture Capital Term Sheet Advisory',
      'IP Registration & Defense Counseling',
      'LLP & Corporate Structuring & Compliance'
    ],
    highlight: 'Serving 50+ corporate clients internationally.'
  },
  {
    id: 'courses',
    title: 'Certificate Courses',
    category: 'Academy & Training',
    icon: Award,
    iconColor: 'text-brand-blue bg-brand-blue/5 border-brand-blue/15',
    description: 'Fast-track certification programs designed by legal scholars and senior partners. We build industry-ready legal skills with practice modules.',
    points: [
      'Advanced Legal Drafting & Vetting',
      'International Commercial Arbitration',
      'Intellectual Property Protection Masterclass',
      'Practical Mediation & ADR Strategy'
    ],
    highlight: 'Dual accreditation and direct placement pathways included.'
  },
  {
    id: 'arbitration',
    title: 'Arbitration & Mediation',
    category: 'Dispute Resolution (ADR)',
    icon: Landmark,
    iconColor: 'text-brand-red bg-brand-red/5 border-brand-red/15',
    description: 'Efficient dispute management engineered to protect your time and assets. We serve as mediators, neutral evaluators, and arbitrators in commercial disputes.',
    points: [
      'Expedited Commercial Arbitration Panels',
      'Pre-litigation Conflict Mediation',
      'Structured Mediation Settlements',
      'International Dispute Management Services'
    ],
    highlight: 'Average dispute resolution timeline is under 120 days.'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState('career');

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-darker grid-bg border-b border-black/[0.04]">
      {/* Background Subtle Glows */}
      <div className="glow-red w-[500px] h-[500px] top-10 right-0 opacity-20" />
      <div className="glow-blue w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 font-display">
              Tailored Legal Solutions & Career Pathways
            </h2>
          </div>
          <p className="text-slate-600 text-base md:max-w-sm text-left leading-relaxed">
            Bridging operational compliance, strategic conflict mitigation, and comprehensive professional grooming.
          </p>
        </div>

        {/* Tab & Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Service Cards (Grid List) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {servicesData.map((service) => {
              const isActive = service.id === activeService;
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-5 items-start ${
                    isActive 
                      ? 'bg-white border-brand-blue/30 shadow-[0_10px_25px_-5px_rgba(29,78,216,0.06)]' 
                      : 'bg-white/40 border-black/[0.03] hover:border-black/[0.08] hover:bg-white'
                  }`}
                  data-hover="true"
                  data-hover-type={isActive ? 'red' : 'blue'}
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${service.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                      {service.category}
                    </span>
                    <h3 className="font-bold text-slate-800 text-lg md:text-xl mt-1 mb-2 font-sans">{service.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 line-clamp-2 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Details Pane */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-black/[0.04] p-8 h-full flex flex-col justify-between text-left relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.04)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-blue/5 to-transparent rounded-tr-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {servicesData.map((service) => {
                  if (service.id !== activeService) return null;
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full justify-between gap-8"
                    >
                      {/* Top section */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`p-3.5 rounded-2xl border ${service.iconColor}`}>
                            <Icon size={32} />
                          </div>
                          <div>
                            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                              Service Spotlight
                            </span>
                            <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mt-0.5 font-display">
                              {service.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-base text-slate-600 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="border-t border-black/[0.04] pt-6">
                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                            Key Areas of Competence
                          </h5>
                          <ul className="flex flex-col gap-3">
                            {service.points.map((pt, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <CheckCircle2 size={16} className="text-brand-red mt-0.5 shrink-0" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Bottom action panel */}
                      <div className="bg-slate-50 border border-black/[0.03] rounded-2xl p-5 mt-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <div className="text-[9px] font-bold text-brand-blue uppercase tracking-widest mb-1">
                            Proven Impact
                          </div>
                          <p className="text-xs text-slate-600 font-bold">
                            {service.highlight}
                          </p>
                        </div>
                        <a
                          href="#contact"
                          className="px-5 py-3 text-xs font-bold bg-brand-red hover:bg-brand-red/95 text-white rounded-xl flex items-center gap-1.5 transition-colors duration-200 uppercase tracking-wider shadow-sm"
                          data-hover="true"
                          data-hover-type="red"
                        >
                          Book Service <ArrowRight size={13} className="stroke-[2.5]" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
