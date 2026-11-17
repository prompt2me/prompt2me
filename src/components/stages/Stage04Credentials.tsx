import React from 'react';
import { ShieldCheck, FileCheck, Target, CheckCircle2 } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage04Credentials: React.FC = () => {
  return (
    <section 
      id="stage-4-credentials" 
      className="py-20 sm:py-28 bg-[#F4EFE8] border-t border-[#E4ECE3]"
      aria-label="4. Present your credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            04. Present Your Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Why this approach is credible.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            The Reset isn't built on social media hacking or algorithmic tricks. It is grounded in deliberate editorial craft, customer listening, and consulting communication systems.
          </p>
        </div>

        {/* The 3 Core Methodological Foundations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                Rooted in Client Reality
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                Rather than asking "What should I post today?", the framework forces you to mine the actual questions clients pay you to answer during calls and projects.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-medium text-[#1C3325] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4D3A]" />
              <span>Zero blank-page guessing</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <FileCheck className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                Single-Point Focus
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                Every piece of content is engineered around one audience need, one central lesson, and one next step. No meandering essays or fragmented tangents.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-medium text-[#1C3325] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4D3A]" />
              <span>Disciplined editorial rigor</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                Consulting-Grade Pace
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                Calibrated specifically for billable professionals with full schedules. Designed to take 15–20 focused minutes a day without consuming billable client hours.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-medium text-[#1C3325] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4D3A]" />
              <span>Built for solo consultants</span>
            </div>
          </div>

        </div>

        {/* Transparent Evidence Policy Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#EEF4ED] border border-[#D1DED0]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B]">
                Truth-in-Advertising Standard
              </span>
              <h4 className="text-lg font-serif font-semibold text-[#1C3325] mt-1">
                Evidence & Grounding Policy
              </h4>
              <p className="text-xs sm:text-sm text-[#2D4D3A] mt-1 max-w-3xl leading-relaxed">
                {OFFER_INFO.evidencePolicyNotice}
              </p>
            </div>
            <div className="shrink-0 self-start md:self-center">
              <span className="inline-flex items-center text-xs font-semibold text-[#1C3325] bg-white px-3.5 py-2 rounded-xl border border-[#D1DED0]">
                Strict CRO Policy
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
