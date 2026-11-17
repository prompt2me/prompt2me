import React, { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage02Problem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frustrations' | 'desires'>('frustrations');

  return (
    <section 
      id="stage-2-problem" 
      className="py-20 sm:py-28 bg-[#F4EFE8] border-y border-[#E4ECE3]"
      aria-label="2. Identify the problem"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            02. Identify the Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Why content creation feels harder than it needs to.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            {OFFER_INFO.problemStatement}
          </p>
        </div>

        {/* Interactive Comparison / Audit Tabs */}
        <div className="mt-12">
          {/* Segmented Filter Control (responsive on narrow viewports) */}
          <div className="inline-flex max-w-full p-1.5 bg-[#E4ECE3] rounded-2xl mb-8 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('frustrations')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'frustrations'
                  ? 'bg-white text-[#1C3325] shadow-xs'
                  : 'text-[#2D4D3A] hover:text-[#1C3325]'
              }`}
            >
              The Common Frustrations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('desires')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'desires'
                  ? 'bg-white text-[#1C3325] shadow-xs'
                  : 'text-[#2D4D3A] hover:text-[#1C3325]'
              }`}
            >
              What You Actually Want
            </button>
          </div>

          {/* Tab 1: Frustrations Grid */}
          {activeTab === 'frustrations' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OFFER_INFO.commonFrustrations.map((frustration, index) => (
                <div 
                  key={index}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between transition-all hover:border-[#D1DED0]"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#B85D3B] font-serif font-semibold mb-3">
                      <span>Frustration 0{index + 1}</span>
                      <X className="w-4 h-4 text-[#B85D3B]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1C3325] font-semibold leading-snug">
                      {frustration}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed pt-4 border-t border-[#F4EFE8]">
                    {index === 0 && "Without a standard drafting architecture, you're constantly reinventing structure, headlines, and tone every time you open a blank doc."}
                    {index === 1 && "Snippets of wisdom sit in voice memos, email replies, and sticky notes without a defined path to a finished draft."}
                    {index === 2 && "A surge of energy produces three posts in one week, followed by a month of silence while client deliverables take over."}
                    {index === 3 && "Wasting energy worrying about LinkedIn, Substack, podcasts, and video all at once instead of mastering one clear message."}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: What They Want Grid */}
          {activeTab === 'desires' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OFFER_INFO.audienceWants.map((want, index) => (
                <div 
                  key={index}
                  className="p-6 sm:p-8 rounded-3xl bg-[#EEF4ED] border border-[#D1DED0] shadow-xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#1C3325] font-serif font-semibold mb-3">
                      <span>Requirement 0{index + 1}</span>
                      <Sparkles className="w-4 h-4 text-[#1C3325]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-[#1C3325] font-semibold leading-snug">
                      {want}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed pt-4 border-t border-[#D1DED0]/60">
                    {index === 0 && "A structured decision rubric that turns real customer questions and project insights into prioritized topics immediately."}
                    {index === 1 && "Every piece ties back to the actual problem you solve and the advisory services you provide."}
                    {index === 2 && "A lightweight 15–20 minute daily habit designed for solo operators without needing an agency or content coordinator."}
                    {index === 3 && "Reusable worksheets and prompting templates so you start with structured building blocks instead of a terrifying blinking cursor."}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Transition statement */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-sm font-serif italic text-[#2D4D3A]">
            The solution isn't to push harder or post more — it's to replace the scattered notes with an integrated 14-day routine.
          </p>
        </div>

      </div>
    </section>
  );
};
