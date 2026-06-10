import React from 'react';
import { Scale, Heart, Shield, ArrowUpRight } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-darker border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 text-left">
          
          {/* Column 1: Monogram and Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <img 
                src="/logo.png" 
                alt="Clause & Effect Logo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="font-display font-bold text-lg text-white">
                CLAUSE <span className="text-brand-red">&</span> EFFECT
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              Clause & Effect LLP is a premium consortium integrating advanced corporate legal advisory, domestic/international commercial arbitration panels, and dual-certified professional academies.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
              <Shield size={12} className="text-brand-blue" /> Registered LLP • Reg No. AAB-9918
            </div>
          </div>

          {/* Column 2: Academic Tracks */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Academy Tracks
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <a href="#student-portal" className="hover:text-brand-blue transition-colors duration-150">
                Contract Drafting
              </a>
              <a href="#student-portal" className="hover:text-brand-blue transition-colors duration-150">
                Commercial Arbitration
              </a>
              <a href="#student-portal" className="hover:text-brand-blue transition-colors duration-150">
                Conflict Mediation
              </a>
              <a href="#student-portal" className="hover:text-brand-blue transition-colors duration-150">
                Placement Mentorship
              </a>
            </div>
          </div>

          {/* Column 3: Corporate services */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Consultancy Services
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <a href="#services" className="hover:text-brand-red transition-colors duration-150">
                Commercial Vetting
              </a>
              <a href="#services" className="hover:text-brand-red transition-colors duration-150">
                IP Audit & Defense
              </a>
              <a href="#services" className="hover:text-brand-red transition-colors duration-150">
                Mediation Settlements
              </a>
              <a href="#services" className="hover:text-brand-red transition-colors duration-150">
                Arbitration Advocacy
              </a>
            </div>
          </div>

          {/* Column 4: Quick Intake */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Intake Desk
            </h4>
            <a
              href="#contact"
              className="text-xs text-brand-red font-bold flex items-center gap-1 hover:underline underline-offset-4"
              data-hover="true"
              data-hover-type="red"
            >
              Request Consult Invitation
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Bar Council Compliance Disclaimer (Standard Legal requirement for law firms) */}
        <div className="border-t border-white/5 pt-8 pb-6 text-left">
          <p className="text-[9px] text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> As per the regulations of the Bar Council of India, this website is intended solely for informational purposes and to facilitate access to educational content. It does not constitute legal advice, solicitation, or an advertisement of legal services. The transmission, receipt, or use of this website does not establish an attorney-client relationship. Visitors are advised to seek independent legal advice for their specific circumstances.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-500">
            © {currentYear} Clause & Effect LLP. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="text-[10px] text-slate-400 hover:text-white transition-colors duration-200 uppercase tracking-widest font-bold flex items-center gap-1"
            data-hover="true"
            data-hover-type="text"
            data-hover-text="UP"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
