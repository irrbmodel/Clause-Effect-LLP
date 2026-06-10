import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Scale, Award, GraduationCap } from './Icons';

const teamData = {
  faculty: [
    {
      name: 'Ananya Sen',
      role: 'Senior Partner - IP Law & Dispute Strategy',
      initials: 'AS',
      education: 'LL.M., University of Oxford',
      experience: 'Ex-Tier 1 Corporate Advocate',
      specialty: 'Intellectual Property Defense & International Mediation',
      linkedin: '#',
      email: 'mailto:ananya.sen@clauseandeffect.in'
    },
    {
      name: 'Rohan Malhotra',
      role: 'Partner - Corporate Contracts & Venture Advisory',
      initials: 'RM',
      education: 'B.A. LL.B. (Hons.), National Law School (NLSIU)',
      experience: 'Ex-Senior Counsel at Luthra & Luthra',
      specialty: 'Commercial Drafting, VC Funding, & Startup Strategy',
      linkedin: '#',
      email: 'mailto:rohan.malhotra@clauseandeffect.in'
    },
    {
      name: 'Dr. Sudhir Nair',
      role: 'Head of Academic Senate & ADR Trainer',
      initials: 'SN',
      education: 'Ph.D. in Alternative Dispute Resolution, NUJS',
      experience: 'Arbitrator & Trainer at Indian Council of Arbitration',
      specialty: 'Mediation Simulations & Certificate Course Director',
      linkedin: '#',
      email: 'mailto:sudhir.nair@clauseandeffect.in'
    }
  ],
  advisors: [
    {
      name: 'Justice V. K. Gupta (Retd.)',
      role: 'Chief Judicial Advisor',
      initials: 'VKG',
      education: 'Former Chief Justice of High Court',
      experience: '35+ Years Bench Experience',
      specialty: 'Arbitration Panels & Complex Dispute Assessment',
      linkedin: '#',
      email: 'mailto:judicial.desk@clauseandeffect.in'
    },
    {
      name: 'Meera Deshmukh',
      role: 'Independent Governance Advisor',
      initials: 'MD',
      education: 'MBA, Harvard Business School',
      experience: 'Board Member at leading Public Sector Undertakings',
      specialty: 'Corporate Compliance, Risk Mitigation & Audits',
      linkedin: '#',
      email: 'mailto:governance@clauseandeffect.in'
    },
    {
      name: 'Prof. David Sterling',
      role: 'International Arbitration Mentor',
      initials: 'DS',
      education: 'LL.D., London School of Economics',
      experience: 'Consultant Arbitrator at ICC (Paris) & LCIA (London)',
      specialty: 'Cross-Border Supply Chain Disputes & Mediation',
      linkedin: '#',
      email: 'mailto:international.adr@clauseandeffect.in'
    }
  ]
};

const Team = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-brand-dark grid-bg">
      <div className="glow-blue w-[400px] h-[400px] top-1/2 right-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Our Experts</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Faculty, Partners & Advisors
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A consortium of senior advocates, corporate lawyers, retired judges, and academic scholars uniting legal precision with business strategy.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'faculty'
                ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'glass text-slate-400 hover:text-white border-white/5'
            }`}
            data-hover="true"
            data-hover-type="blue"
          >
            Faculty & Partners
          </button>
          <button
            onClick={() => setActiveTab('advisors')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'advisors'
                ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'glass text-slate-400 hover:text-white border-white/5'
            }`}
            data-hover="true"
            data-hover-type="blue"
          >
            Board of Advisors
          </button>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence mode="wait">
            {teamData[activeTab].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass glass-hover p-6 rounded-3xl border-white/5 flex flex-col justify-between h-full relative group overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-brand-blue to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Monogram profile visual */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-card border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all duration-300 font-display font-bold text-lg mb-6">
                    {person.initials}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-xs font-semibold text-brand-red uppercase tracking-wide mb-4">
                    {person.role}
                  </p>

                  <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <GraduationCap size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{person.education}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-400">
                      <Scale size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{person.experience}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-400 italic mt-1 border-l-2 border-slate-700 pl-2">
                      <span>{person.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center gap-3 mt-8 pt-4 border-t border-white/5">
                  <a
                    href={person.linkedin}
                    className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-brand-blue text-slate-400 hover:text-white transition-all duration-200"
                    aria-label="LinkedIn Profile"
                    data-hover="true"
                    data-hover-type="blue"
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={person.email}
                    className="p-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-brand-red text-slate-400 hover:text-white transition-all duration-200"
                    aria-label="Send Email"
                    data-hover="true"
                    data-hover-type="red"
                  >
                    <Mail size={14} />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Team;
