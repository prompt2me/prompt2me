import React, { useState } from 'react';
import { ShieldCheck, FileCheck, HelpCircle, CheckCircle2 } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage06SocialProof: React.FC = () => {
  const [showSpecification, setShowSpecification] = useState(false);

  return (
    <section 
      id="stage-6-social-proof" 
      className="py-20 sm:py-28 bg-[#F4EFE8] border-t border-[#E4ECE3]"
      aria-label="6. Give social proof"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            06. Give Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Zero fabricated proof. Only verifiable evidence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            Many marketing courses inject manufactured reviews and unverified revenue claims. Fieldnote Studio adheres to a strict truth-in-advertising standard.
          </p>
        </div>

        {/* Evidence Policy Container */}
        <div className="mt-12 bg-white rounded-3xl border border-[#D1DED0] p-6 sm:p-10 shadow-xs">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E4ECE3]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#B85D3B] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#B85D3B]" />
                <span>Source Brief Evidence Mandate</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1C3325]">
                Why you won't see fabricated testimonials on this page
              </h3>
              <p className="text-xs sm:text-sm text-[#2D4D3A] mt-2 leading-relaxed">
                {OFFER_INFO.evidencePolicyNotice}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setShowSpecification(!showSpecification)}
                className="px-5 py-2.5 text-xs font-semibold text-[#1C3325] bg-[#EEF4ED] hover:bg-[#E4ECE3] rounded-full border border-[#D1DED0] transition-colors cursor-pointer whitespace-nowrap"
              >
                {showSpecification ? 'Hide Verification Criteria' : 'Inspect Evidence Protocol'}
              </button>
            </div>
          </div>

          {/* Verification Protocol Breakdown */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E4ECE3]">
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#1C3325] mb-2">
                <FileCheck className="w-4 h-4 text-[#2D4D3A]" />
                <span>1. Verified Case Studies</span>
              </div>
              <p className="text-xs text-[#2D4D3A] leading-relaxed">
                Prior to commercial launch, authentic case studies from independent consultants will document tangible publishing consistency and reduced drafting friction.
              </p>
              <div className="mt-3 text-[11px] text-[#B85D3B] font-medium">
                Pending real participant verification
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E4ECE3]">
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#1C3325] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4D3A]" />
                <span>2. Verifiable Client Profiles</span>
              </div>
              <p className="text-xs text-[#2D4D3A] leading-relaxed">
                Every testimonial added to the production site must include full name, consulting discipline, company URL, and verifiable permission.
              </p>
              <div className="mt-3 text-[11px] text-[#B85D3B] font-medium">
                No anonymous quotes or stock photos
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E4ECE3]">
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#1C3325] mb-2">
                <HelpCircle className="w-4 h-4 text-[#2D4D3A]" />
                <span>3. Measurable Methodology</span>
              </div>
              <p className="text-xs text-[#2D4D3A] leading-relaxed">
                The program is self-guided and evaluated on whether it delivers the promised clarity and repeatable habit over 14 days, supported by our satisfaction guarantee.
              </p>
              <div className="mt-3 text-[11px] text-[#B85D3B] font-medium">
                Grounded in operational design
              </div>
            </div>

          </div>

          {showSpecification && (
            <div className="mt-6 p-5 rounded-2xl bg-[#EEF4ED] border border-[#D1DED0] text-xs text-[#1C3325] leading-relaxed">
              <strong className="block font-semibold mb-1">CRO Auditor Note on Stage 6:</strong>
              Conversion-rate optimization research indicates that discerning B2B consultants and executive coaches heavily discount generic, unverified reviews. Establishing a strict, transparent evidence policy builds far greater credibility and trust than generic filler.
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
