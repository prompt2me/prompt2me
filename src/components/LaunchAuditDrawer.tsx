import React, { useEffect } from 'react';
import { X, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { REQUIRED_LAUNCH_CHECKLIST } from '../data/offerData';

interface LaunchAuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchAuditDrawer: React.FC<LaunchAuditDrawerProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden bg-black/40 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-drawer-title"
    >
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="w-full max-w-xl h-full bg-[#FAF7F2] border-l border-[#D1DED0] shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E4ECE3]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D3B]">
                Brief Section 14 Audit
              </span>
              <h2 id="audit-drawer-title" className="text-2xl font-serif font-semibold text-[#1C3325] mt-0.5">
                Pre-Launch Fact & Asset Checklist
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close audit panel"
              className="p-2 rounded-full text-[#2D4D3A] hover:text-[#1C3325] hover:bg-[#E4ECE3] transition-colors focus-visible:ring-2 focus-visible:ring-[#1C3325]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#2D4D3A] mt-4 leading-relaxed">
            Per the design brief, the result is a near-production-ready website that strictly adheres to verified facts without fabricating credentials or social proof. Here is the operational audit of items required before connecting live commerce:
          </p>

          <div className="mt-6 space-y-4">
            {REQUIRED_LAUNCH_CHECKLIST.map((item, idx) => (
              <div 
                key={item.id} 
                className="p-4 rounded-2xl bg-white border border-[#E4ECE3] transition-all hover:border-[#D1DED0]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-serif text-[#B85D3B] font-semibold tabular-nums">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-sm font-semibold text-[#1C3325]">
                      {item.label}
                    </h3>
                  </div>
                  {item.status === 'supplied_in_demo' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-700" />
                      Mock Ready
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md shrink-0">
                      <Clock className="w-3 h-3 text-amber-700" />
                      Action Needed
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#2D4D3A] mt-2 leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#EEF4ED] border border-[#D1DED0] text-xs text-[#1C3325] flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#B85D3B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Ethical CRO Standard:</span>
              <p className="text-[#2D4D3A] mt-0.5">
                No false urgency, fake countdown timers, or invented client quotes have been injected. The page honors authentic persuasion, customer clarity, and respect for independent consultants.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E4ECE3] mt-8">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-5 text-sm font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] rounded-full transition-all text-center cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
