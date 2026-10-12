import React from 'react';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenCheckout }) => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E4ECE3] py-16 text-[#2D4D3A] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#E4ECE3]">
          <div>
            <span className="text-xl font-serif font-bold text-[#1C3325]">
              Fieldnote Studio
            </span>
            <p className="mt-1 text-xs text-[#2D4D3A] max-w-sm">
              The Organic Content Reset: Build a calmer, clearer content routine in 14 days.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium text-[#1C3325]">
            <a href="#stage-1-attention" className="hover:text-[#B85D3B] transition-colors">Overview</a>
            <a href="#stage-2-problem" className="hover:text-[#B85D3B] transition-colors">The Problem</a>
            <a href="#stage-3-solution" className="hover:text-[#B85D3B] transition-colors">The Workflow</a>
            <a href="#stage-7-offer" className="hover:text-[#B85D3B] transition-colors">Deliverables</a>
            <a href="#stage-9-guarantee" className="hover:text-[#B85D3B] transition-colors">Guarantee</a>
            <button 
              type="button" 
              onClick={onOpenAudit}
              className="hover:text-[#B85D3B] transition-colors underline cursor-pointer"
            >
              Launch Checklist
            </button>
            <button 
              type="button" 
              onClick={onOpenCheckout}
              className="text-[#1C3325] font-semibold hover:text-[#B85D3B] transition-colors cursor-pointer"
            >
              Order ($149)
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#2D4D3A]/80">
          <div>
            © {new Date().getFullYear()} Fieldnote Studio. Fictional demonstration offer for testing landing-page generation.
          </div>
          <div className="flex items-center gap-4">
            <span>Illustrative price: $149 USD</span>
            <span aria-hidden="true">·</span>
            <span>Support: support@fieldnotestudio.example</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
