import React, { useState } from 'react';
import { Check, ArrowRight, BookOpen, Compass, FileText, Calendar, CheckSquare, Layers, Clock } from 'lucide-react';
import { OFFER_INFO, DELIVERABLES, FOURTEEN_DAY_ROADMAP } from '../../data/offerData';

interface Stage07Props {
  onOpenCheckout: () => void;
}

export const Stage07Offer: React.FC<Stage07Props> = ({ onOpenCheckout }) => {
  const [activeDeliverableId, setActiveDeliverableId] = useState<string>(DELIVERABLES[0].id);
  const [viewRoadmap, setViewRoadmap] = useState<boolean>(false);

  const activeItem = DELIVERABLES.find((d) => d.id === activeDeliverableId) || DELIVERABLES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return Compass;
      case 'BookOpen': return BookOpen;
      case 'FileText': return FileText;
      case 'Calendar': return Calendar;
      case 'CheckSquare': return CheckSquare;
      case 'Layers': return Layers;
      default: return FileText;
    }
  };

  return (
    <section 
      id="stage-7-offer" 
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E4ECE3]"
      aria-label="7. Make your offer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            07. Make Your Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Everything inside The Organic Content Reset.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            A complete self-guided digital program with instant access to all 6 core deliverables, structured worksheets, and the 14-day implementation plan.
          </p>
        </div>

        {/* Pricing Anchor Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-[#D1DED0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#2D4D3A] mb-2">
                <span>Self-guided Digital Toolkit</span>
                <span aria-hidden="true">·</span>
                <span>Lifetime Access</span>
                <span aria-hidden="true">·</span>
                <span>No Recurring Fees</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C3325]">
                {OFFER_INFO.name}
              </h3>
              <p className="text-sm sm:text-base text-[#2D4D3A] mt-2 leading-relaxed">
                Includes all six core deliverables, worksheets, planning templates, and the guided 14-day action plan. Work completely at your own pace.
              </p>

              {/* Offer Summary Bullets from Brief */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1C3325]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
                  <span>Structured 14-day implementation path</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
                  <span>Downloadable worksheets & planning templates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
                  <span>Reusable content workflow for independent practices</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1C3325] shrink-0 mt-0.5" />
                  <span>Self-guided access with zero rush or expiry</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#EEF4ED] border border-[#D1DED0] flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B]">
                One-Time Payment
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#1C3325] mt-1 tabular-nums">
                $149
              </div>
              <p className="text-xs text-[#2D4D3A] mt-1">
                No monthly subscription. Ever.
              </p>
              <button
                type="button"
                onClick={onOpenCheckout}
                className="mt-5 w-full py-3.5 px-6 text-sm font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] active:bg-[#0D1811] rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1C3325]"
              >
                <span>Get the Reset Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#2D4D3A] mt-2">
                Instant digital access upon purchase
              </span>
            </div>

          </div>
        </div>

        {/* Deliverables Explorer & 14-Day Roadmap Switcher */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1C3325]">
                The 6 Program Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-[#2D4D3A]">
                Select any deliverable to examine its purpose and format.
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => setViewRoadmap(!viewRoadmap)}
              className="px-4 py-2 text-xs font-semibold text-[#1C3325] bg-[#EEF4ED] hover:bg-[#E4ECE3] border border-[#D1DED0] rounded-xl transition-all cursor-pointer self-start sm:self-auto"
            >
              {viewRoadmap ? 'Show Deliverables View' : 'Preview 14-Day Daily Roadmap'}
            </button>
          </div>

          {!viewRoadmap ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Deliverable Selector List (6 cols) */}
              <div className="lg:col-span-6 space-y-3">
                {DELIVERABLES.map((item, idx) => {
                  const Icon = getIcon(item.iconName);
                  const isSelected = item.id === activeDeliverableId;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveDeliverableId(item.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isSelected 
                          ? 'bg-white border-[#1C3325] shadow-xs ring-1 ring-[#1C3325]' 
                          : 'bg-[#F4EFE8]/70 border-[#E4ECE3] hover:border-[#D1DED0]'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveDeliverableId(item.id);
                        }
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EEF4ED] text-[#1C3325] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-[#1C3325]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm sm:text-base font-serif font-semibold text-[#1C3325]">
                            {item.name}
                          </h4>
                          <span className="text-[11px] font-mono text-[#B85D3B]">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs text-[#2D4D3A] mt-1 line-clamp-2">
                          {item.purpose}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Deliverable Deep Dive Card (6 cols) */}
              <div className="lg:col-span-6 bg-white rounded-3xl border border-[#D1DED0] p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-[#B85D3B] uppercase tracking-wider mb-2">
                  <span>Deliverable Detail</span>
                  <span>Fieldnote Studio</span>
                </div>
                <h4 className="text-2xl font-serif font-semibold text-[#1C3325]">
                  {activeItem.name}
                </h4>
                
                <div className="mt-6 space-y-5 text-sm text-[#2D4D3A]">
                  <div>
                    <span className="text-xs font-semibold text-[#1C3325] uppercase tracking-wider block mb-1">
                      Primary Purpose
                    </span>
                    <p className="text-sm text-[#1C3325] leading-relaxed">
                      {activeItem.purpose}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#1C3325] uppercase tracking-wider block mb-1">
                      Asset Format & Delivery
                    </span>
                    <p className="text-xs text-[#2D4D3A]">
                      {activeItem.format}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#1C3325] uppercase tracking-wider block mb-1">
                      Strategic Consulting Takeaway
                    </span>
                    <p className="text-xs text-[#2D4D3A] leading-relaxed">
                      {activeItem.keyTakeaway}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E4ECE3] flex items-center justify-between">
                  <span className="text-xs text-[#2D4D3A]">
                    Included in the $149 package
                  </span>
                  <button
                    type="button"
                    onClick={onOpenCheckout}
                    className="text-xs font-semibold text-[#1C3325] hover:text-[#B85D3B] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Instant access</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* 14-Day Action Plan Preview */
            <div className="bg-white rounded-3xl border border-[#D1DED0] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E4ECE3] mb-6">
                <div>
                  <h4 className="text-xl font-serif font-semibold text-[#1C3325]">
                    14-Day Implementation Schedule
                  </h4>
                  <p className="text-xs text-[#2D4D3A] mt-0.5">
                    15–20 minutes per day. Follow short daily tasks to install your content routine.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setViewRoadmap(false)}
                  className="text-xs font-semibold text-[#2D4D3A] hover:text-[#1C3325] underline"
                >
                  Back to Deliverables
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FOURTEEN_DAY_ROADMAP.map((d) => (
                  <div key={d.day} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E4ECE3]">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-serif font-bold text-[#B85D3B]">Day {d.day}</span>
                      <span className="flex items-center gap-1 text-[11px] text-[#2D4D3A]">
                        <Clock className="w-3 h-3" />
                        {d.timeCommitment}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#1C3325] leading-snug">
                      {d.title}
                    </div>
                    <p className="text-[11px] text-[#2D4D3A] mt-1 leading-relaxed">
                      {d.task}
                    </p>
                    <div className="mt-2 pt-2 border-t border-[#E4ECE3]/60 text-[10px] text-[#1C3325] font-medium">
                      Output: {d.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
