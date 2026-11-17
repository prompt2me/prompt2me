import React from 'react';
import { Compass, CalendarCheck, Shield } from 'lucide-react';

export const Stage08Scarcity: React.FC = () => {
  return (
    <section 
      id="stage-8-scarcity" 
      className="py-20 sm:py-28 bg-[#F4EFE8] border-t border-[#E4ECE3]"
      aria-label="8. Inject scarcity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            08. Inject Scarcity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Zero manufactured urgency. Honest, evergreen access.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            We don't use fake countdown timers, arbitrary cohort deadlines, or claims that "only 3 spots remain." The Organic Content Reset is always accessible whenever you are ready.
          </p>
        </div>

        {/* The 3 Pillars of Honest Scarcity & Timeless Access */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <CalendarCheck className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                Self-Paced Enrollment
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                As a digital program, capacity is not artificially constrained. You begin your 14 days when your consulting workload allows, not when a marketing clock expires.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-semibold text-[#1C3325]">
              No expiration dates on access
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                Transparent Flat Pricing
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                The price is $149 today, tomorrow, and next month. We don't inflate prices to manufacture artificial 50% discount sales or false flash bargains.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-semibold text-[#1C3325]">
              Constant, honest $149 price
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5 text-[#1C3325]" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1C3325]">
                The Real Urgency: Lost Time
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                The only authentic urgency is internal: every week spent without a structured system is another week of lost client inquiries and scattered drafting friction.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4EFE8] text-xs font-semibold text-[#1C3325]">
              The cost of inaction is your time
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
