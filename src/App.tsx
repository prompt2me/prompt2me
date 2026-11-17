/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { LaunchAuditDrawer } from './components/LaunchAuditDrawer';
import { ResponsiveBar } from './components/ResponsiveBar';

// The 12 Stages in exact specified sequence
import { Stage01Attention } from './components/stages/Stage01Attention';
import { Stage02Problem } from './components/stages/Stage02Problem';
import { Stage03Solution } from './components/stages/Stage03Solution';
import { Stage04Credentials } from './components/stages/Stage04Credentials';
import { Stage05Benefits } from './components/stages/Stage05Benefits';
import { Stage06SocialProof } from './components/stages/Stage06SocialProof';
import { Stage07Offer } from './components/stages/Stage07Offer';
import { Stage08Scarcity } from './components/stages/Stage08Scarcity';
import { Stage09Guarantee } from './components/stages/Stage09Guarantee';
import { Stage10CallToAction } from './components/stages/Stage10CallToAction';
import { Stage11Warning } from './components/stages/Stage11Warning';
import { Stage12Reminder } from './components/stages/Stage12Reminder';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [simulatedWidth, setSimulatedWidth] = useState<number | null>(null);

  const handleOpenCheckout = () => setIsCheckoutOpen(true);
  const handleCloseCheckout = () => setIsCheckoutOpen(false);
  const handleOpenAudit = () => setIsAuditOpen(true);
  const handleCloseAudit = () => setIsAuditOpen(false);

  return (
    <div className={`min-h-screen bg-[#FAF7F2] text-[#1C3325] flex flex-col ${simulatedWidth ? 'bg-neutral-800 py-6 px-2' : ''}`}>
      
      {/* Container wrapper: either natural full width or simulated viewport testing frame */}
      <div 
        style={simulatedWidth ? { maxWidth: `${simulatedWidth}px`, width: '100%', margin: '0 auto' } : undefined}
        className={`bg-[#FAF7F2] text-[#1C3325] transition-all duration-300 flex-1 flex flex-col ${
          simulatedWidth ? 'shadow-2xl rounded-3xl overflow-hidden border-4 border-neutral-700' : ''
        }`}
      >
        {/* Navigation Bar matching Top Bar Contract */}
        <Header 
          onOpenCheckout={handleOpenCheckout}
          onOpenAudit={handleOpenAudit}
        />

        {/* The 12 Stages in Exact Specified Order */}
        <main className="flex-1">
          {/* Stage 1: Get attention */}
          <Stage01Attention onOpenCheckout={handleOpenCheckout} />

          {/* Stage 2: Identify the problem */}
          <Stage02Problem />

          {/* Stage 3: Provide the solution */}
          <Stage03Solution />

          {/* Stage 4: Present your credentials */}
          <Stage04Credentials />

          {/* Stage 5: Show the benefits */}
          <Stage05Benefits />

          {/* Stage 6: Give social proof */}
          <Stage06SocialProof />

          {/* Stage 7: Make your offer */}
          <Stage07Offer onOpenCheckout={handleOpenCheckout} />

          {/* Stage 8: Inject scarcity */}
          <Stage08Scarcity />

          {/* Stage 9: Give a guarantee */}
          <Stage09Guarantee />

          {/* Stage 10: Call to action */}
          <Stage10CallToAction onOpenCheckout={handleOpenCheckout} />

          {/* Stage 11: Give a warning */}
          <Stage11Warning />

          {/* Stage 12: Close with a reminder */}
          <Stage12Reminder onOpenCheckout={handleOpenCheckout} />
        </main>

        {/* Quiet, authentic editorial footer */}
        <Footer 
          onOpenAudit={handleOpenAudit}
          onOpenCheckout={handleOpenCheckout}
        />
      </div>

      {/* Interactive Checkout Destination Modal */}
      <CheckoutDrawer 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
      />

      {/* Pre-Launch Fact & Asset Checklist Drawer (Brief Section 14) */}
      <LaunchAuditDrawer 
        isOpen={isAuditOpen} 
        onClose={handleCloseAudit} 
      />

      {/* Interactive Viewport QA Toolbar (320, 375, 390, 768, 1024, 1440) */}
      <ResponsiveBar 
        currentSimulatedWidth={simulatedWidth}
        onSelectWidth={setSimulatedWidth}
      />
    </div>
  );
}
