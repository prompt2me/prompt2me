import React from 'react';
import { Layers, Calendar, CheckSquare, Sparkles, SlidersHorizontal } from 'lucide-react';

export const Stage05Benefits: React.FC = () => {
  const benefits = [
    {
      num: "01",
      title: "Less scattered planning",
      desc: "Keep core ideas, drafts, and publishing decisions in one repeatable process instead of fragmented across notebooks, voice memos, and bookmarks.",
      icon: Layers
    },
    {
      num: "02",
      title: "Clearer messaging",
      desc: "Connect each piece of content directly to a specific audience need and business service, making your domain authority obvious.",
      icon: Sparkles
    },
    {
      num: "03",
      title: "More realistic consistency",
      desc: "Build a publishing rhythm that fits the time and resources you actually have available, rather than burning out on unrealistic schedules.",
      icon: Calendar
    },
    {
      num: "04",
      title: "Reusable building blocks",
      desc: "Start with structured templates and field-tested prompts instead of confronting a paralyzing blank page each week.",
      icon: CheckSquare
    },
    {
      num: "05",
      title: "More deliberate repurposing",
      desc: "Extend useful ideas into appropriate formats across channels while adapting them thoughtfully without blind copying and pasting.",
      icon: SlidersHorizontal
    }
  ];

  return (
    <section 
      id="stage-5-benefits" 
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E4ECE3]"
      aria-label="5. Show the benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B] mb-2">
            05. Show the Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3325] tracking-tight leading-tight text-balance">
            Real outcomes for independent service professionals.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D4D3A] leading-relaxed">
            The difference between frantic posting bursts and sustainable organic visibility comes down to having the right structural support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {benefits.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between transition-all hover:border-[#D1DED0] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#B85D3B] font-serif font-bold mb-5">
                    <span>Benefit {item.num}</span>
                    <Icon className="w-5 h-5 text-[#1C3325]" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1C3325] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Fourth & Fifth Benefits with visual spotlight */}
          {benefits.slice(3, 5).map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4ECE3] shadow-xs flex flex-col justify-between transition-all hover:border-[#D1DED0] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#B85D3B] font-serif font-bold mb-5">
                    <span>Benefit {item.num}</span>
                    <Icon className="w-5 h-5 text-[#1C3325]" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1C3325] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#2D4D3A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Integrated Visual Spotlight card */}
          <div className="rounded-3xl overflow-hidden border border-[#D1DED0] bg-[#EEF4ED] flex flex-col justify-between">
            <div className="h-44 sm:h-48 overflow-hidden bg-[#E4ECE3]">
              <img
                src="/src/assets/images/calm_planning_focus_1791739846898.jpg"
                alt="Minimalist weekly content milestones worksheet in action on wooden desk"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 sm:p-6 bg-[#EEF4ED]">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#B85D3B]">
                Daily Routine Impact
              </div>
              <div className="font-serif font-semibold text-[#1C3325] text-sm mt-1">
                A calmer, clearer publishing cadence
              </div>
              <p className="text-xs text-[#2D4D3A] mt-1">
                No last-minute panic or late-night posting scrambles.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
