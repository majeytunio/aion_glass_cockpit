'use client';

import { useState } from 'react';

// ISO 2-character codes for territories
export const TERRITORIES = [
  { code: 'AU', name: 'Australia', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg' },
  { code: 'HK', name: 'Hong Kong', flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg' },
  { code: 'JP', name: 'Japan', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' },
  { code: 'GB', name: 'United Kingdom', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_England.svg' },
  { code: 'IE', name: 'Ireland', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg' },
  { code: 'FR', name: 'France', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
  { code: 'AE', name: 'UAE', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg' },
  { code: 'SA', name: 'South Africa', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_South_Africa.svg' },
  { code: 'NZ', name: 'New Zealand', flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg' },
  { code: 'US', name: 'United States', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
  { code: 'CA', name: 'Canada', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg' },
  { code: 'KR', name: 'South Korea', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg' },
  { code: 'IN', name: 'India', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' },
  { code: 'BR', name: 'Brazil', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg' },
  { code: 'UR', name: 'Uruguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg' },
  { code: 'AR', name: 'Argentina', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
];

interface TerritorySelectorProps {
  selectedTerritories: string[];
  onChange: (territories: string[]) => void;
}

export const TerritorySelector = ({ selectedTerritories, onChange }: TerritorySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTerritory = (code: string) => {
    if (selectedTerritories.includes(code)) {
      // Remove if already selected
      onChange(selectedTerritories.filter(t => t !== code));
    } else {
      // Add if not selected
      onChange([...selectedTerritories, code]);
    }
  };

  const selectAll = () => {
    onChange(TERRITORIES.map(t => t.code));
  };

  const clearAll = () => {
    onChange([]);
  };

  // Display summary of selected territories
  const getDisplayText = () => {
    if (selectedTerritories.length === 0) return 'All Territories';
    if (selectedTerritories.length === TERRITORIES.length) return 'All Territories';
    if (selectedTerritories.length <= 3) {
      return selectedTerritories.join(' · ');
    }
    return `${selectedTerritories.length} Territories Selected`;
  };

  return (
    <div className="flex flex-col gap-1.5 relative min-w-[200px]">
      <label className="text-[12px] font-black tracking-wider text-muted-foreground uppercase">
        Territory
      </label>

      {/* Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-3 py-2 text-sm bg-[#dfdfdf] rounded-lg shadow-inner h-[48px]
          ${selectedTerritories.length > 0 ? 'border-l-4 border-blue-500' : ''}`}
      >
        <span className="font-medium truncate">{getDisplayText()}</span>
        <span className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-3 max-h-96 overflow-y-auto">
          
          {/* Action Buttons */}
          <div className="flex justify-between gap-2 mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={selectAll}
              className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
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

          {/* Territory Grid */}
          <div className="grid grid-cols-2 gap-2">
            {TERRITORIES.map((territory) => {
              const isSelected = selectedTerritories.includes(territory.code);
              
              return (
                <button
                  key={territory.code}
                  onClick={() => toggleTerritory(territory.code)}
                  className={`
                    flex items-center gap-2 px-2 py-2 rounded-lg transition-all
                    ${isSelected 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  {/* Flag */}
                  <img
                    src={territory.flag}
                    alt={territory.code}
                    className="w-5 h-3.5 rounded-sm object-cover shadow-sm"
                  />
                  
                  {/* Code and Name */}
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-bold">{territory.code}</span>
                    <span className="text-[8px] opacity-75">{territory.name}</span>
                  </div>

                  {/* Checkmark for selected */}
                  {isSelected && (
                    <span className="ml-auto text-white">✓</span>
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