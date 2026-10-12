import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Download, AlertCircle, ArrowRight } from 'lucide-react';
import { OFFER_INFO, DELIVERABLES } from '../data/offerData';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({ isOpen, onClose }) => {
  const [testEmail, setTestEmail] = useState('');
  const [testName, setTestName] = useState('');
  const [simulatedSuccess, setSimulatedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  // Prevent background scroll when modal is open
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

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail || !testEmail.includes('@') || !testEmail.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSimulatedSuccess(true);
  };

  const handleReset = () => {
    setSimulatedSuccess(false);
    setTestEmail('');
    setTestName('');
    setErrorMsg('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      {/* Backdrop click */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#D1DED0] rounded-3xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close checkout details"
          className="absolute top-5 right-5 p-2 rounded-full text-[#2D4D3A] hover:text-[#1C3325] hover:bg-[#E4ECE3] transition-colors focus-visible:ring-2 focus-visible:ring-[#1C3325]"
        >
          <X className="w-5 h-5" />
        </button>

        {!simulatedSuccess ? (
          <div>
            {/* Header / Notice */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B85D3B]">
                Order Initiation & Technical Status
              </span>
              <h2 id="checkout-modal-title" className="text-2xl sm:text-3xl font-serif text-[#1C3325] mt-1 font-semibold">
                Get {OFFER_INFO.name}
              </h2>
              <p className="text-sm text-[#2D4D3A] mt-1">
                {OFFER_INFO.primaryCTASupporting}
              </p>
            </div>

            {/* Source Brief Notice regarding checkout URL */}
            <div className="p-4 rounded-2xl bg-[#EEF4ED] border border-[#D1DED0] mb-6 flex items-start gap-3 text-xs sm:text-sm text-[#1C3325]">
              <AlertCircle className="w-5 h-5 text-[#B85D3B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1C3325]">
                  Checkout Integration Status Notice (Design Brief Compliance)
                </p>
                <p className="text-[#2D4D3A] mt-0.5">
                  The live checkout endpoint has intentionally not been supplied in the sample offer brief. To prevent misleading broken links, this dialog displays the authentic order summary and provides a simulated preview of the access flow.
                </p>
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#E4ECE3] mb-6 shadow-xs">
              <div className="flex items-baseline justify-between border-b border-[#E4ECE3] pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1C3325]">
                    {OFFER_INFO.name}
                  </h3>
                  <p className="text-xs text-[#2D4D3A]">
                    Self-guided digital program · Instant delivery
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif font-bold text-[#1C3325] tabular-nums">
                    $149
                  </div>
                  <div className="text-xs text-[#2D4D3A]">One-time payment</div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#2D4D3A]">
                <div className="font-medium text-[#1C3325] mb-1">Includes all 6 deliverables:</div>
                {DELIVERABLES.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4D3A] shrink-0" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#E4ECE3] flex items-center justify-between text-xs text-[#2D4D3A]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1C3325]" />
                  <span>14-day illustrative satisfaction guarantee</span>
                </div>
                <span className="font-semibold text-[#1C3325]">Zero subscriptions or rebills</span>
              </div>
            </div>

            {/* Simulation test form */}
            <form onSubmit={handleSimulateCheckout} className="space-y-4">
              <div>
                <label htmlFor="test-name" className="block text-xs font-medium text-[#1C3325] mb-1">
                  Full Name (Optional Test)
                </label>
                <input
                  id="test-name"
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="e.g. Morgan Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1DED0] bg-white text-sm text-[#1C3325] placeholder:text-[#2D4D3A]/50 focus:outline-none focus:ring-2 focus:ring-[#1C3325]"
                />
              </div>

              <div>
                <label htmlFor="test-email" className="block text-xs font-medium text-[#1C3325] mb-1">
                  Work Email (To test instant delivery simulation)
                </label>
                <input
                  id="test-email"
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="name@consultancy.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1DED0] bg-white text-sm text-[#1C3325] placeholder:text-[#2D4D3A]/50 focus:outline-none focus:ring-2 focus:ring-[#1C3325]"
                  required
                />
                {errorMsg && (
                  <p className="text-xs text-[#B85D3B] mt-1 font-medium">{errorMsg}</p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 text-sm font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] active:bg-[#0D1811] rounded-full transition-all text-center flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1C3325]"
                >
                  <span>Simulate Order Confirmation ($149)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-5 text-sm font-medium text-[#2D4D3A] bg-[#E4ECE3] hover:bg-[#D1DED0] rounded-full transition-all text-center cursor-pointer"
                >
                  Return to Page
                </button>
              </div>
            </form>

            <div className="mt-5 text-center text-xs text-[#2D4D3A]">
              To connect a live gateway: Configure Stripe Checkout or LemonSqueezy URL in the production deployment.
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#E4ECE3] text-[#1C3325] flex items-center justify-center mx-auto mb-4">
              <Download className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-[#1C3325]">
              Order Simulation Complete
            </h3>
            <p className="text-sm text-[#2D4D3A] mt-2 max-w-md mx-auto">
              In production, the customer receives an immediate confirmation email at <strong className="text-[#1C3325]">{testEmail}</strong> containing their download links and 14-day implementation guide.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E4ECE3] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-[#2D4D3A]">
                <span>Order Reference:</span>
                <span className="font-mono text-[#1C3325]">#FND-RESET-DEMO-01</span>
              </div>
              <div className="flex justify-between text-[#2D4D3A]">
                <span>Amount Paid:</span>
                <span className="font-mono text-[#1C3325] font-semibold">$149.00 USD</span>
              </div>
              <div className="flex justify-between text-[#2D4D3A]">
                <span>Program Access:</span>
                <span className="text-emerald-800 font-semibold">Instant Digital Download</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-5 text-xs font-semibold text-[#1C3325] bg-[#E4ECE3] hover:bg-[#D1DED0] rounded-full transition-all"
              >
                Test Again
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-6 text-xs font-semibold text-[#FAF7F2] bg-[#1C3325] hover:bg-[#122319] rounded-full transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
