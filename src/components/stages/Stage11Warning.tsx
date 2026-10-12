import React from 'react';
import { AlertCircle, ArrowRightCircle, CheckCircle2 } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage11Warning: React.FC = () => {
  return (
    <section 
      id="stage-11-warning" 
      className="py-20 sm:py-28 bg-[#F4EFE8] border-t border-[#E4ECE3]"
      aria-label="11. Give a warning"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            11. Give a Warning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Honest expectations and the cost of staying scattered.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            We believe in setting clear, sober expectations before you invest in any business tool.
          </p>
        </div>

        {/* 2-Column Balanced Contrast */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: The Warning on Inaction */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B85D3B] uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4 text-[#B85D3B]" />
                <span>The Warning: The Cost of Inaction</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C3325] leading-snug">
                If you keep planning from scattered notes...
              </h3>
              <p className="mt-4 text-sm text-[#2D4D3A] leading-relaxed">
                Publishing will continue to feel harder than it needs to. Ideas will remain trapped in voice memos and email drafts, posts will remain sporadic, and each new update will feel like starting from zero.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4EFE8] flex items-center gap-2 text-xs text-[#1C3325] font-medium">
              <ArrowRightCircle className="w-4 h-4 text-[#B85D3B]" />
              <span>Without a system, blank-page friction compounds.</span>
            </div>
          </div>

          {/* Card 2: Honest System Expectations */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF4ED] border border-[#D1DED0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1C3325] uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4 text-[#1C3325]" />
                <span>What The Toolkit Can & Cannot Do</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C3325] leading-snug">
                Tools organize the process; execution delivers results.
              </h3>
              <p className="mt-4 text-sm text-[#2D4D3A] leading-relaxed">
                The Organic Content Reset provides the structure, prompts, and cadence. However, it cannot guarantee automatic audience growth, viral engagement, or consulting sales. Your outcomes depend on the genuine usefulness of your thinking, your audience fit, your advisory offers, and steady execution.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#D1DED0]/60 flex items-center gap-2 text-xs text-[#1C3325] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#1C3325]" />
              <span>Grounded clarity over inflated promises.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
