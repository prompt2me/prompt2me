import React from 'react';
import { ArrowRight, Check, ShieldCheck, Download } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

interface Stage10Props {
  onOpenCheckout: () => void;
}

export const Stage10CallToAction: React.FC<Stage10Props> = ({ onOpenCheckout }) => {
  return (
    <section 
      id="stage-10-cta" 
      className="py-20 sm:py-28 bg-[#1C3325] text-[#FAF7F2] relative overflow-hidden"
      aria-label="10. Call to action"
    >
      {/* Subtle organic background curve */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#2D4D3A]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#122319] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#D1DED0] mb-3">
            10. Call to Action
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-tight text-balance">
            Install your repeatable content system today.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#D1DED0] max-w-2xl mx-auto leading-relaxed">
            {OFFER_INFO.primaryCTASupporting}
          </p>

          {/* Decision Box */}
          <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-[#244230] border border-[#2D4D3A] shadow-xl max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#2D4D3A]">
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D1DED0]">
                  Immediate Digital Access
                </span>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                  {OFFER_INFO.name}
                </div>
                <div className="text-xs text-[#D1DED0] mt-1">
                  All 6 deliverables · 14-day guided action plan
                </div>
              </div>
              <div className="text-right sm:text-right shrink-0">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums">
                  $149
                </div>
                <div className="text-xs text-[#D1DED0]">One-time payment</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                type="button"
                onClick={onOpenCheckout}
                className="w-full py-4 px-8 text-base font-semibold text-[#1C3325] bg-[#FAF7F2] hover:bg-white active:bg-[#E4ECE3] rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{OFFER_INFO.primaryCTA}</span>
                <ArrowRight className="w-5 h-5 text-[#1C3325]" />
              </button>
            </div>

            {/* Trust markers */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#D1DED0]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>14-day satisfaction guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-white" />
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white" />
                <span>No recurring subscription</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-[#D1DED0]/70 max-w-md mx-auto">
            Live checkout configuration status: Add and verify production checkout URL prior to commercial deployment.
          </div>

        </div>
      </div>
    </section>
  );
};
