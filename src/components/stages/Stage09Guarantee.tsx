import React from 'react';
import { ShieldCheck, Mail, AlertCircle, Check } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage09Guarantee: React.FC = () => {
  return (
    <section 
      id="stage-9-guarantee" 
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E4ECE3]"
      aria-label="9. Give a guarantee"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            09. Give a Guarantee
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Try the complete 14-day routine with peace of mind.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            We want you to explore the worksheets, test the prompts, and feel the clarity of the routine firsthand.
          </p>
        </div>

        {/* Guarantee Badge / Container */}
        <div className="mt-12 bg-white rounded-3xl border border-[#D1DED0] p-8 sm:p-12 shadow-xs max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-[#E4ECE3]">
            <div className="w-16 h-16 rounded-3xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center shrink-0 border border-[#D1DED0]">
              <ShieldCheck className="w-9 h-9 text-[#1C3325]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D3B]">
                Illustrative Policy For Page-Design Testing
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C3325] mt-1">
                14-Day Satisfaction Guarantee
              </h3>
              <p className="text-sm text-[#2D4D3A] mt-2 leading-relaxed">
                {OFFER_INFO.guaranteeText}
              </p>
            </div>
          </div>

          {/* Guarantee Conditions & Policy Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#1C3325]">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
              <span>Full 14 calendar days from the date of purchase to review materials</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
              <span>Simple email refund request — just provide order details</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
              <span>Keep all downloaded worksheets and templates for future reference</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
              <span>Prompt support response from our studio team</span>
            </div>
          </div>

          {/* Transparent sample policy legal note */}
          <div className="mt-8 p-4 rounded-2xl bg-[#EEF4ED] border border-[#D1DED0] flex items-start gap-3 text-xs text-[#2D4D3A]">
            <AlertCircle className="w-4 h-4 text-[#B85D3B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1C3325]">Legal Disclosure (Source Brief Requirement):</span>
              <p className="mt-0.5 leading-relaxed">
                {OFFER_INFO.guaranteeDisclaimer}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
