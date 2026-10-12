import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

interface Stage01Props {
  onOpenCheckout: () => void;
}

export const Stage01Attention: React.FC<Stage01Props> = ({ onOpenCheckout }) => {
  return (
    <section 
      id="stage-1-attention" 
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden"
      aria-label="1. Get attention"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Editorial copy & primary action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed metadata (anti-slop: zero pill capsule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#2D4D3A] tracking-normal mb-5">
              <span>Fieldnote Studio</span>
              <span aria-hidden="true">·</span>
              <span>Self-Guided Digital Program</span>
              <span aria-hidden="true">·</span>
              <span>14-Day Implementation</span>
            </div>

            {/* Main Headline & Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C3325] leading-[1.12] tracking-tight text-balance">
              {OFFER_INFO.name}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-serif text-[#2D4D3A] leading-snug">
              {OFFER_INFO.tagline}
            </p>

            <p className="mt-5 text-base sm:text-lg text-[#2D4D3A] leading-relaxed max-w-2xl">
              A practical 14-day program that helps independent consultants and small service businesses turn scattered ideas into a clear, repeatable content system.
            </p>

            {/* Audience callout strip */}
            <div className="mt-8 pt-6 border-t border-[#E4ECE3] max-w-xl">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
                Designed specifically for
              </div>
              <p className="text-sm text-[#1C3325] leading-relaxed">
                Independent consultants, coaches, and small service-business owners who understand content can explain their expertise, but struggle to publish consistently because ideas, drafts, and plans are scattered across notes and apps.
              </p>
            </div>

            {/* Primary Action Zone */}
            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] active:bg-[#0D1811] rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1C3325]"
              >
                <span>{OFFER_INFO.primaryCTA}</span>
                <ArrowRight className="w-5 h-5 text-[#FAF7F2]" />
              </button>
              
              <div className="text-xs text-[#2D4D3A] flex flex-col sm:items-start pl-1">
                <span className="font-semibold text-[#1C3325] tabular-nums">$149 one-time payment</span>
                <span>Instant digital access · No subscription</span>
              </div>
            </div>

            {/* Quick reassurance checkmarks */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#2D4D3A]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#1C3325]" />
                <span>6 complete practical templates & worksheets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#1C3325]" />
                <span>15–20 minutes per day pacing</span>
              </div>
            </div>

          </div>

          {/* Column 2: Organic Imagery Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Organic background curve glow */}
              <div className="absolute -inset-4 bg-[#E4ECE3]/70 rounded-[2.5rem] transform rotate-1 -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-[#D1DED0] bg-[#FAF7F2] shadow-xl aspect-16/10 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_workspace_notebook_1791739818173.jpg"
                  alt="Fieldnote Studio workspace with an open linen notebook detailing an editorial outline"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating organic card anchor */}
              <div className="mt-4 p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#E4ECE3] shadow-sm flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-semibold text-[#1C3325]">The 14-Day Reset Routine</div>
                  <div className="text-[#2D4D3A] text-[11px] mt-0.5">Capturing · Clarifying · Drafting · Scheduling</div>
                </div>
                <span className="text-[#B85D3B] font-serif font-semibold text-xs tracking-tight">
                  Fieldnote Method
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
