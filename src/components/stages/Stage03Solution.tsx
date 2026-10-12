import React, { useState } from 'react';
import { OFFER_INFO } from '../../data/offerData';

export const Stage03Solution: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <section 
      id="stage-3-solution" 
      className="py-20 sm:py-28 bg-[#FAF7F2]"
      aria-label="3. Provide the solution"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            03. Provide the Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            A calm, lightweight workflow you can repeat weekly.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            {OFFER_INFO.solutionStatement}
          </p>
        </div>

        {/* 2-Column Split: Interactive 5-Step Workflow & Supporting Media */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {OFFER_INFO.coreWorkflowSteps.map((item) => {
              const isSelected = selectedStep === item.step;
              return (
                <div
                  key={item.step}
                  onClick={() => setSelectedStep(item.step)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#1C3325] shadow-sm'
                      : 'bg-[#F4EFE8]/70 border-[#E4ECE3] hover:border-[#D1DED0]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedStep(item.step);
                    }
                  }}
                  aria-expanded={isSelected}
                >
                  <div className="flex items-start gap-4">
                    <span 
                      className={`text-sm sm:text-base font-serif font-bold tabular-nums shrink-0 mt-0.5 ${
                        isSelected ? 'text-[#B85D3B]' : 'text-[#2D4D3A]/60'
                      }`}
                    >
                      Step 0{item.step}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-semibold text-[#1C3325]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2D4D3A] mt-1.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Solution Media Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#D1DED0] bg-[#FAF7F2] shadow-lg sticky top-24">
              <div className="aspect-4/3 overflow-hidden bg-[#E4ECE3]">
                <img
                  src="/src/assets/images/content_workflow_materials_1791739832274.jpg"
                  alt="Neatly arranged strategic vision and marketing objectives planning worksheets on wood desk"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="text-xs font-semibold text-[#B85D3B] uppercase tracking-wider mb-1">
                  Active Workflow Focal Point
                </div>
                <div className="font-serif text-lg font-semibold text-[#1C3325]">
                  Step 0{selectedStep}: {OFFER_INFO.coreWorkflowSteps[selectedStep - 1].title}
                </div>
                <p className="text-xs text-[#2D4D3A] mt-2 leading-relaxed">
                  Instead of staring at a blank cursor, each step is supported by a dedicated template or checklist, reducing the entire process to short, structured micro-sessions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
