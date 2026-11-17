import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

interface Stage12Props {
  onOpenCheckout: () => void;
}

export const Stage12Reminder: React.FC<Stage12Props> = ({ onOpenCheckout }) => {
  return (
    <section 
      id="stage-12-reminder" 
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E4ECE3]"
      aria-label="12. Close with a reminder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            12. Close with a Reminder
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Simplicity over complexity.
          </h2>
          <p className="mt-4 text-base sm:text-xl font-serif text-[#2D4D3A] leading-relaxed">
            "{OFFER_INFO.closingReminder}"
          </p>
        </div>

        {/* Final Conversion Card */}
        <div className="mt-12 max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-[#D1DED0] shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-[#1C3325]" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#1C3325]">
            {OFFER_INFO.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#2D4D3A] mt-2 max-w-md mx-auto">
            Get instant access to all 6 templates, prompts, and the 14-day implementation plan.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#1C3325] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#2D4D3A]" />
            <span>$149 one-time payment</span>
            <span aria-hidden="true">·</span>
            <span>14-day satisfaction guarantee</span>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] active:bg-[#0D1811] rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1C3325]"
            >
              <span>{OFFER_INFO.finalCTA}</span>
              <ArrowRight className="w-5 h-5 text-[#FAF7F2]" />
            </button>
          </div>

          <p className="mt-4 text-[11px] text-[#2D4D3A]">
            Self-guided access · Downloadable immediately after checkout
          </p>
        </div>

      </div>
    </section>
  );
};
