'use client';

import { useState } from "react";

// Racing codes with their display names and icons
// export const RACING_CODES = [
//   { code: 'TH', name: 'Thoroughbred', icon: '🐎' },
//   { code: 'HN', name: 'Harness', icon: '🏇' },
//   { code: 'GR', name: 'Greyhound', icon: '🐕' },
//   { code: 'KY', name: 'Kyotei', icon: '🛥️' },
//   { code: 'KE', name: 'Keirin', icon: '🚲' },
// ];


export const RACING_CODES = [
  { code: 'TH', name: 'Thoroughbred', icon: '/button_6.png' },
  { code: 'HN', name: 'Harness', icon: '/button_7.png' },
  { code: 'GR', name: 'Greyhound', icon: '/button_8.png' },
  { code: 'KY', name: 'Kyotei', icon: '/Kyotei_Icon_96x96.png' },
  { code: 'KE', name: 'Keirin', icon: '/Keirin_Icon_96x96.png' },
];

interface RacingCodeSelectorProps {
  selectedCodes: string[];
  onChange: (codes: string[]) => void;
}

export const RacingCodeSelector = ({ selectedCodes, onChange }: RacingCodeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCode = (code: string) => {
    if (selectedCodes.includes(code)) {
      // Remove if already selected
      onChange(selectedCodes.filter(c => c !== code));
    } else {
      // Add if not selected
      onChange([...selectedCodes, code]);
    }
  };

  const selectAll = () => {
    onChange(RACING_CODES.map(c => c.code));
  };

  const clearAll = () => {
    onChange([]);
  };

  // Display summary of selected codes
  const getDisplayText = () => {
    if (selectedCodes.length === 0) return 'All Codes';
    if (selectedCodes.length === RACING_CODES.length) return 'All Codes';
    if (selectedCodes.length <= 3) {
      return selectedCodes.join(' · ');
    }
    return `${selectedCodes.length} Codes Selected`;
  };

  // Get icon for a code
  const getIconForCode = (code: string) => {
    return RACING_CODES.find(c => c.code === code)?.icon || '🐎';
  };

  return (
    <div className="flex flex-col gap-1.5 relative min-w-[120px]">
      <label className="text-[12px] font-black tracking-wider text-muted-foreground uppercase">
        Code
      </label>

      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-3 py-2 text-sm bg-[#dfdfdf] rounded-lg shadow-inner h-[48px]
          ${selectedCodes.length > 0 ? 'border-l-4 border-green-500' : ''}`}
      >
        <span className="font-medium truncate">{getDisplayText()}</span>
        <span className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-3">
          
          {/* Action Buttons */}
          <div className="flex justify-between gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={selectAll}
              className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Select All
            </button>
            <button
              onClick={clearAll}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Clear All
            </button>
          </div>

          {/* Racing Code Grid */}
          <div className="grid grid-cols-1 gap-2">
            {RACING_CODES.map((racingCode) => {
                const isSelected = selectedCodes.includes(racingCode.code);
                
                return (
                    <button
                    key={racingCode.code}
                    onClick={() => toggleCode(racingCode.code)}
                    className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg transition-all group
                        ${isSelected 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }
                    `}
                    >
                    {/* PNG Icon with Dynamic Color Logic */}
                    <img 
                        src={racingCode.icon} 
                        alt={racingCode.name}
                        className={`w-6 h-6 object-contain transition-all
                        ${isSelected ? 'brightness-0 invert' : ''} 
                        /* This makes the icon turn white when the row is green */
                        `}
                    />
                    
                    {/* Code and Name */}
                    <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-bold">{racingCode.code}</span>
                        <span className="text-[10px] opacity-75">{racingCode.name}</span>
                    </div>

                    {/* Checkmark for selected */}
                    {isSelected && (
                        <span className="ml-auto text-white text-lg">✓</span>
                    )}
                    </button>
                );
            })}
          </div>
        </div>
      )}
    </div>
  );
};