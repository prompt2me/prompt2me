import React from 'react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, onOpenAudit }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4ECE3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a 
          href="#stage-1-attention" 
          className="text-xl font-serif font-semibold tracking-tight text-[#1C3325] hover:text-[#122319] transition-colors whitespace-nowrap shrink-0"
        >
          Fieldnote Studio
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2D4D3A]"
        >
          <a 
            href="#stage-2-problem" 
            className="hover:text-[#1C3325] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#B85D3B]"
          >
            The Problem
          </a>
          <a 
            href="#stage-3-solution" 
            className="hover:text-[#1C3325] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#B85D3B]"
          >
            The Workflow
          </a>
          <a 
            href="#stage-5-benefits" 
            className="hover:text-[#1C3325] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#B85D3B]"
          >
            Key Benefits
          </a>
          <a 
            href="#stage-7-offer" 
            className="hover:text-[#1C3325] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#B85D3B]"
          >
            Deliverables
          </a>
          <a 
            href="#stage-9-guarantee" 
            className="hover:text-[#1C3325] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#B85D3B]"
          >
            Guarantee
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenAudit}
            className="hidden lg:inline-flex items-center text-xs text-[#2D4D3A] hover:text-[#1C3325] underline underline-offset-2 py-1 px-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#1C3325]"
            title="Inspect pre-launch requirements checklist"
          >
            Launch Audit
          </button>
          <button
            type="button"
            onClick={onOpenCheckout}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] active:bg-[#0D1811] rounded-full transition-all shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#1C3325] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get the Reset — $149
          </button>
        </div>
      </div>
    </header>
  );
};
