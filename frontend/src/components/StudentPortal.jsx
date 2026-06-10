import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, Users, GraduationCap, CheckCircle2, ChevronRight, Download } from './Icons';

const courses = [
  {
    id: 'drafting',
    title: 'Advanced Legal Drafting & Contract Management',
    modules: 8,
    duration: '4 Weeks',
    level: 'Intermediate',
    students: 1840
  },
  {
    id: 'arbitration',
    title: 'International Commercial Arbitration Practice',
    modules: 12,
    duration: '6 Weeks',
    level: 'Advanced',
    students: 1240
  },
  {
    id: 'mediation',
    title: 'Practical Corporate Mediation & Dispute Resolution',
    modules: 6,
    duration: '3 Weeks',
    level: 'Beginner to Intermediate',
    students: 920
  }
];

const StudentPortal = () => {
  const [studentName, setStudentName] = useState('Jane Doe');
  const [selectedCourse, setSelectedCourse] = useState('drafting');
  const [isGenerating, setIsGenerating] = useState(false);

  const activeCourse = courses.find(c => c.id === selectedCourse);

  const handlePrint = () => {
    setIsGenerating(true);
    setTimeout(() => {
      window.print();
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <section id="student-portal" className="py-24 relative overflow-hidden bg-brand-darker border-b border-black/[0.04]">
      {/* Background soft lighting */}
      <div className="glow-blue w-[500px] h-[500px] -top-20 -right-20 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Clause & Effect Academy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 font-display">
            Interactive Student Portal
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Empowering lawyers, law students, and business executives. Experience our learning management mockup and test drive our live certificate renderer below.
          </p>
        </div>

        {/* Portal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Course Finder & Inputs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Academy Quick Stats */}
            <div className="bg-white border border-black/[0.04] p-6 rounded-3xl flex flex-col gap-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.02)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Academy Enrollment Stats
              </span>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-slate-800">4.8★</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-blue">98%</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-red">4k+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Alumni</div>
                </div>
              </div>
            </div>

            {/* Academy Course Picker */}
            <div className="bg-white border border-black/[0.04] p-6 rounded-3xl flex flex-col gap-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.02)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                1. Select Academic Track
              </span>
              <div className="flex flex-col gap-2">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    className={`p-3.5 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                      selectedCourse === course.id
                        ? 'bg-brand-blue/5 border-brand-blue/30 text-slate-800 font-semibold shadow-xs'
                        : 'bg-slate-50 border-black/[0.03] text-slate-500 hover:border-black/[0.08] hover:text-slate-800 hover:bg-slate-100/50'
                    }`}
                    data-hover="true"
                    data-hover-type="blue"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-slate-700">{course.title}</span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">
                        {course.duration} • {course.level}
                      </span>
                    </div>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input Widget */}
            <div className="bg-white border border-black/[0.04] p-6 rounded-3xl flex flex-col gap-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.02)]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                2. Input Graduation Name
              </span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                maxLength={25}
                placeholder="Enter Full Name..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-black/[0.08] focus:border-brand-red focus:bg-white text-slate-800 text-sm focus:outline-none transition-all duration-300"
                data-hover="true"
                data-hover-type="red"
              />
              <p className="text-[10px] text-slate-400 font-medium">
                Type your name above to see it dynamically overlay onto the certificate completion preview.
              </p>
            </div>

          </div>

          {/* Right Panel: Premium Dynamic Certificate Renderer */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-black/[0.04] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between h-full min-h-[450px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.04)]">
              
              {/* Interactive Certificate View */}
              <div 
                className="relative w-full aspect-[1.414/1] bg-[#FAF8F2] border-8 border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.06)] rounded-lg p-5 md:p-8 flex flex-col justify-between items-center text-center select-none overflow-hidden print:bg-white print:text-black print:border-black"
                id="certificate-print-area"
              >
                {/* Thin double border for document feel */}
                <div className="absolute inset-2 border border-[#E3DFC9] pointer-events-none" />
                <div className="absolute inset-2.5 border border-dashed border-[#E3DFC9] pointer-events-none" />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C0B99B]/55" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C0B99B]/55" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C0B99B]/55" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C0B99B]/55" />

                {/* Certificate Core Content */}
                <div className="w-full relative z-10 pt-2">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <GraduationCap size={20} className="text-brand-blue" />
                    <span className="text-[9px] font-bold tracking-widest text-[#8C8358] uppercase">
                      Clause & Effect Academy
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 tracking-wide">
                    CERTIFICATE OF COMPLETION
                  </h3>
                  <div className="w-20 h-[1.5px] bg-linear-to-r from-brand-blue to-brand-red mx-auto my-3" />
                </div>

                <div className="my-1 relative z-10">
                  <p className="text-[9px] italic text-slate-500 tracking-wider">
                    This certifies that the academic board has awarded graduation honors to
                  </p>
                  <h4 className="text-2xl md:text-3xl font-extrabold font-display bg-linear-to-r from-brand-red via-slate-800 to-brand-blue bg-clip-text text-transparent my-2 drop-shadow-xs">
                    {studentName || 'Graduating Student'}
                  </h4>
                  <p className="text-[9px] text-slate-500 max-w-sm mx-auto leading-relaxed mt-2">
                    for successfully completing all syllabus modules, practical drafting examinations, and mediation milestones prescribed for the program
                  </p>
                  <div className="text-[10px] font-bold text-slate-700 mt-2.5 italic px-3 py-1 rounded bg-white border border-[#E3DFC9] inline-block">
                    {activeCourse.title}
                  </div>
                </div>

                {/* Signatures & Seal */}
                <div className="w-full grid grid-cols-3 items-end pt-3 border-t border-[#E3DFC9] relative z-10 pb-1">
                  <div className="text-left pl-2">
                    <div className="text-[9px] text-slate-700 font-semibold italic font-serif">
                      Clause & Effect LLP
                    </div>
                    <div className="text-[7px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                      Academic Senate
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {/* Seal Emblem */}
                    <div className="w-10 h-10 rounded-full bg-[#FAF5E1] border border-[#D9CE9F] flex items-center justify-center text-[#9E8B47] shadow-xs">
                      <Award size={18} className="stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="text-right pr-2">
                    <div className="text-[9px] font-bold text-slate-700 italic font-serif">
                      J. R. Chowdhury
                    </div>
                    <div className="text-[7px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                      Managing Director
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="w-full flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={handlePrint}
                  disabled={isGenerating}
                  className="px-6 py-3.5 rounded-xl font-bold bg-brand-red hover:bg-brand-red/95 text-white flex items-center gap-2 transition-all duration-300 shadow-[0_4px_12px_rgba(185,28,28,0.1)] hover:scale-[1.02] text-xs uppercase tracking-wider"
                  data-hover="true"
                  data-hover-type="red"
                >
                  <Download size={15} className="stroke-[2.5]" />
                  {isGenerating ? 'Rendering...' : 'Download Certificate'}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StudentPortal;
