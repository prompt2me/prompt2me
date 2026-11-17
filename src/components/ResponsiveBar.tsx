import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';

interface ResponsiveBarProps {
  currentSimulatedWidth: number | null;
  onSelectWidth: (width: number | null) => void;
}

export const ResponsiveBar: React.FC<ResponsiveBarProps> = ({
  currentSimulatedWidth,
  onSelectWidth
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1440);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const presets = [
    { label: '320px', width: 320, name: 'Min Mobile', icon: Smartphone },
    { label: '375px', width: 375, name: 'iPhone SE', icon: Smartphone },
    { label: '390px', width: 390, name: 'iPhone 14/15', icon: Smartphone },
    { label: '768px', width: 768, name: 'iPad Portrait', icon: Tablet },
    { label: '1024px', width: 1024, name: 'iPad Landscape', icon: Tablet },
    { label: '1440px', width: 1440, name: 'Desktop Baseline', icon: Monitor },
  ];

  return (
    <aside 
      aria-label="Responsive viewport tester toolbar"
      className="fixed bottom-4 right-4 z-40 print:hidden font-sans"
    >
      <div className="bg-[#1C3325] text-[#FAF7F2] rounded-2xl shadow-xl border border-[#2D4D3A] overflow-hidden text-xs">
        
        {/* Header / Toggle Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-3.5 py-2 flex items-center justify-between gap-3 text-left hover:bg-[#244230] transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B85D3B]" />
            <span className="font-semibold">Viewport QA:</span>
            <span className="font-mono tabular-nums text-[#D1DED0]">
              {currentSimulatedWidth ? `${currentSimulatedWidth}px (Simulated)` : `${windowWidth}px (Window)`}
            </span>
          </div>
          {isExpanded ? <ChevronDown className="w-4 h-4 text-[#D1DED0]" /> : <ChevronUp className="w-4 h-4 text-[#D1DED0]" />}
        </button>

        {/* Expanded Panel */}
        {isExpanded && (
          <div className="p-3 border-t border-[#2D4D3A] bg-[#122319] space-y-2">
            <div className="text-[11px] text-[#D1DED0] mb-1">
              Select viewport to test responsive layouts:
            </div>
            
            <div className="grid grid-cols-3 gap-1.5">
              {presets.map((preset) => {
                const isSelected = currentSimulatedWidth === preset.width;
                const Icon = preset.icon;
                return (
                  <button
                    key={preset.width}
                    type="button"
                    onClick={() => onSelectWidth(preset.width)}
                    className={`px-2 py-1.5 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B85D3B] text-white font-semibold shadow-xs'
                        : 'bg-[#1C3325] hover:bg-[#244230] text-[#D1DED0]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mb-0.5" />
                    <span className="font-mono text-[11px] tabular-nums">{preset.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onSelectWidth(null)}
              className={`w-full mt-2 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs transition-all cursor-pointer ${
                currentSimulatedWidth === null
                  ? 'bg-[#E4ECE3] text-[#1C3325] font-semibold'
                  : 'bg-[#1C3325] hover:bg-[#244230] text-[#D1DED0]'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Reset to Full Window ({windowWidth}px)</span>
            </button>
          </div>
        )}

      </div>
    </aside>
  );
};
