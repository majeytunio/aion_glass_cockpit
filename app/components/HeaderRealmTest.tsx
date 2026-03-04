// 'use client';

// import { RaceButton } from './RaceButtonProps';
// import { UpcomingTile } from './UpComingTile';
// import { ControlInput } from './ControlInput';
// import { DateSelector } from './DateSelector';
// import { TerritorySelector } from './TerritorySelector';
// import { RacingCodeSelector } from './RacingCodeSelector';
// import { useButtonContext } from './ButtonContext';
// import { useState, useEffect } from 'react';
// import { 
//   mdiCashMultiple, 
//   mdiTicketPercent, 
//   mdiSwapHorizontal, 
//   mdiSwapHorizontalVariant, 
//   mdiSlotMachine,
//   mdiHorseVariantFast,
//   mdiHorseshoe,
//   mdiDogSide,
//   mdiMotorbike,
//   mdiBicycle,
//   mdiFlash,
//   mdiChartLine,
//   mdiVideo,
//   mdiTimerOutline,
//   mdiFileChart,
//   mdiRadar
// } from "@mdi/js";
// import Icon from "@mdi/react";
// import { TrackSelector } from './TrackSelector';

// const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // All available races (simulated database)
// const allRaces = [
//   // Hong Kong - Thoroughbred
//   { trackCode: 'SHA', raceNo: 1, ttm: '1m', countryCode: 'HK', racingCode: 'TH', date: '2026-02-25' },
//   { trackCode: 'SHA', raceNo: 2, ttm: '36m', countryCode: 'HK', racingCode: 'TH', date: '2026-02-25' },
//   { trackCode: 'HV', raceNo: 3, ttm: '15m', countryCode: 'HK', racingCode: 'TH', date: '2026-02-26' },
  
//   // Australia - Thoroughbred & Greyhound
//   { trackCode: 'FLEM', raceNo: 3, ttm: '15m', countryCode: 'AU', racingCode: 'TH', date: '2026-02-25' },
//   { trackCode: 'WENT', raceNo: 5, ttm: '8m', countryCode: 'AU', racingCode: 'GR', date: '2026-02-25' },
//   { trackCode: 'CAUL', raceNo: 4, ttm: '42m', countryCode: 'AU', racingCode: 'TH', date: '2026-02-26' },
  
//   // UK - Thoroughbred & Harness
//   { trackCode: 'ASCT', raceNo: 4, ttm: '23m', countryCode: 'GB', racingCode: 'TH', date: '2026-02-25' },
//   { trackCode: 'YORK', raceNo: 7, ttm: '55m', countryCode: 'GB', racingCode: 'TH', date: '2026-02-26' },
//   { trackCode: 'NEWC', raceNo: 2, ttm: '42m', countryCode: 'GB', racingCode: 'HN', date: '2026-02-27' },
  
//   // US - Thoroughbred, Harness & Greyhound
//   { trackCode: 'CD', raceNo: 6, ttm: '12m', countryCode: 'US', racingCode: 'TH', date: '2026-02-25' },
//   { trackCode: 'MEAD', raceNo: 4, ttm: '23m', countryCode: 'US', racingCode: 'HN', date: '2026-02-26' },
//   { trackCode: 'PALM', raceNo: 8, ttm: '29m', countryCode: 'US', racingCode: 'GR', date: '2026-02-27' },
  
//   // Japan - Thoroughbred, Kyotei & Keirin
//   { trackCode: 'TOKY', raceNo: 1, ttm: '1m', countryCode: 'JP', racingCode: 'TH', date: '2026-02-27' },
//   { trackCode: 'KURA', raceNo: 2, ttm: '19m', countryCode: 'JP', racingCode: 'KY', date: '2026-02-27' },
//   { trackCode: 'MAEB', raceNo: 3, ttm: '33m', countryCode: 'JP', racingCode: 'KE', date: '2026-02-28' },
  
//   // South Africa - Thoroughbred
//   { trackCode: 'KENI', raceNo: 8, ttm: '22m', countryCode: 'ZA', racingCode: 'TH', date: '2026-02-26' },
  
//   // Ireland - Thoroughbred
//   { trackCode: 'CURR', raceNo: 5, ttm: '18m', countryCode: 'IE', racingCode: 'TH', date: '2026-02-28' },
  
//   // France - Thoroughbred & Harness
//   { trackCode: 'LONG', raceNo: 3, ttm: '25m', countryCode: 'FR', racingCode: 'TH', date: '2026-02-26' },
//   { trackCode: 'VINC', raceNo: 6, ttm: '31m', countryCode: 'FR', racingCode: 'HN', date: '2026-02-28' },
// ];

// export const HeaderRealm = () => {
//   const { activeButton, setActiveButton } = useButtonContext();
//   const [selectedDate, setSelectedDate] = useState(() => {
//     const today = new Date();
//     return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
//   });
  
//   const [selectedTerritories, setSelectedTerritories] = useState<string[]>([]); // Empty = all territories
//   const [selectedCodes, setSelectedCodes] = useState<string[]>([]); // Empty = all racing codes
//   const [filteredRaces, setFilteredRaces] = useState(allRaces);

//   // Update filtered races when date, territory, or racing code selection changes
//   useEffect(() => {
//     let filtered = allRaces.filter(race => race.date === selectedDate);
    
//     // Apply territory filter if any territories are selected
//     if (selectedTerritories.length > 0) {
//       filtered = filtered.filter(race => selectedTerritories.includes(race.countryCode));
//     }
    
//     // Apply racing code filter if any codes are selected
//     if (selectedCodes.length > 0) {
//       filtered = filtered.filter(race => selectedCodes.includes(race.racingCode));
//     }
    
//     setFilteredRaces(filtered);
//   }, [selectedDate, selectedTerritories, selectedCodes]);

//   // Market Buttons (1-5)
//   const marketButtons = [
//     { id: 1, title: "Tote Pool Market", icon: mdiCashMultiple },
//     { id: 2, title: "Fixed Odds Markets", icon: mdiTicketPercent },
//     { id: 3, title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
//     { id: 4, title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
//     { id: 5, title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
//   ];

//   // Search Filter Buttons (6-10)
//   const searchButtons = [
//     { id: 6, title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
//     { id: 7, title: "Harness (Search)", icon: mdiHorseshoe },
//     { id: 8, title: "Greyhound (Search)", icon: mdiDogSide },
//     { id: 9, title: "Kyotei (Search)", icon: mdiMotorbike },
//     { id: 10, title: "Keirin (Search)", icon: mdiBicycle }
//   ];

//   // Status Buttons (11-15)
//   const statusButtons = [
//     { id: 11, title: "Pre-Race Features", icon: mdiFlash },
//     { id: 12, title: "Post Race Performance Measurement", icon: mdiChartLine },
//     { id: 13, title: "VDL (Video Data Labelling)", icon: mdiVideo },
//     { id: 14, title: "Sectional Times (Search)", icon: mdiTimerOutline },
//     { id: 15, title: "Meeting Analysis", icon: mdiFileChart }
//   ];

//   return (
//     <div className="cockpit-card p-5 mx-4 mt-4 relative w-[99%]">
//       {/* MAIN GRID - 12 columns */}
//       <div className="grid grid-cols-12 gap-4 items-start w-full">
        
//         {/* COLUMN 1 - Takes 7 columns (same as original) */}
//         <div className="col-span-7 flex flex-col gap-4">
          
//           {/* ROW 1 OF COLUMN 1 */}
//           <div className="grid grid-cols-12 gap-4 items-start">
//             {/* Flag + SHA TIN - Column 1-2 (same as original) */}
//             <div className="col-span-2 flex flex-col gap-1">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
//                   alt="HK Flag"
//                   className="w-10 h-7 rounded-md shadow-md object-cover"
//                 />
//                 <span className="text-xl font-black tracking-tight whitespace-nowrap">
//                   SHA TIN
//                 </span>
//               </div>
//             </div>

//             {/* Race Buttons - Column 3-7 (adjusted to leave space for controls) */}
//             <div className="col-span-4 flex items-center ms-4 me-4">
//               <div className="grid grid-cols-12 gap-2 flex-grow">
//                 {Array.from({ length: 12 }, (_, i) => (
//                   <RaceButton
//                     key={i + 1}
//                     number={i + 1}
//                     isActive={i === 0}
//                     className="w-12 h-12 text-[12pt]"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* 4 Control Inputs - Column 8-12 */}
//             <div className="col-span-6">
//               <div className="grid grid-cols-4 gap-2">
//                 <TerritorySelector 
//                   selectedTerritories={selectedTerritories}
//                   onChange={setSelectedTerritories}
//                 />
//                 <DateSelector 
//                   label="Date" 
//                   value={selectedDate}
//                   onChange={(date) => setSelectedDate(date)}
//                 />
//                 <RacingCodeSelector 
//                   selectedCodes={selectedCodes}
//                   onChange={setSelectedCodes}
//                 />
//                 {/* <ControlInput label="Track" value="" size="medium" /> */}
//                 <TrackSelector  label="Track" value="" size="medium" />
//               </div>
//             </div>
//           </div>

//           {/* ROW 2 OF COLUMN 1 - Race Details Inputs (unchanged) */}
//           <div className="pt-6">
//             {/* Row 1: 7 controls */}
//             <div className="grid grid-cols-7 gap-2 mb-3">
//               <ControlInput label="Post Time" value="" size="small" />
//               <ControlInput label="Surface" value="" size="small" />
//               <ControlInput label="Distance" value="" size="small" />
//               <ControlInput label="Rail Pos" value="" size="small" />
//               <ControlInput label="Going" value="" size="small" />
//               <ControlInput label="Grade" value="" size="small" />
//               <ControlInput label="Prize Money" value="" size="small" />
//             </div>
            
//             {/* Row 2: 14 controls */}
//             <div className="grid grid-cols-14 gap-2">
//               <ControlInput label="Benchmark" value="" size="small" />
//               <ControlInput label="Level" value="" size="small" />
//               <ControlInput label="RQ" value="" size="small" />
//               <ControlInput label="STD Time" value="" size="small" />
//               <ControlInput label="FIN Time" value="" size="small" />
//               <ControlInput label="RSPD" value="" size="small" />
//               <ControlInput label="TRKSPD" value="" size="small" />
//               <ControlInput label="+/- STD" value="" size="small" />
//               <ControlInput label="Tempo" value="" size="small" />
//               <ControlInput label="QR2" value="" size="small" />
//               <ControlInput label="QR3" value="" size="small" />
//               <ControlInput label="QR4" value="" size="small" />
//               <ControlInput label="$ENT" value="" size="small" />
//               <ControlInput label="$ELA" value="" size="small" />
//             </div>
//           </div>
//         </div>

//         {/* COLUMN 2 - Takes 4 columns (same as original) */}
//         <div className="col-span-4 row-span-2 h-full">
//           <div className="flex flex-col gap-2 h-full">
//             {/* ROW 1 CONTENT - Upcoming Races */}
//             <div>
//               <div className="grid grid-cols-6 gap-2">
//                 {filteredRaces.slice(0, 6).map((race, i) => (
//                   <UpcomingTile
//                     key={i}
//                     trackCode={race.trackCode}
//                     raceNo={race.raceNo}
//                     ttm={race.ttm}
//                     countryCode={race.countryCode}
//                     racingCode={race.racingCode}
//                     isEmpty={false}
//                   />
//                 ))}
//                 {/* Fill empty slots if less than 6 races */}
//                 {filteredRaces.length < 6 && Array.from({ length: 6 - filteredRaces.length }, (_, i) => (
//                   <UpcomingTile
//                     key={`empty-${i}`}
//                     trackCode=""
//                     raceNo=""
//                     ttm=""
//                     isEmpty={true}
//                   />
//                 ))}
//               </div>
              
//               {/* Filter summary */}
//               {/* <div className="text-xs text-muted-foreground mt-1 space-y-1">
//                 <div>
//                   Showing {filteredRaces.length} races on {selectedDate}
//                 </div>
//                 {(selectedTerritories.length > 0 || selectedCodes.length > 0) && (
//                   <div className="flex flex-wrap gap-2">
//                     {selectedTerritories.length > 0 && (
//                       <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
//                         Territories: {selectedTerritories.join(', ')}
//                       </span>
//                     )}
                    
//                     {selectedCodes.length > 0 && (
//                       <span className="bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">
//                         Codes: {selectedCodes.join(', ')}
//                       </span>
//                     )}
//                   </div>
//                 )}
//               </div> */}

//               {/* Filter summary with preserved space */}
//               <div className="text-xs text-muted-foreground mt-1 min-h-[40px]">
//                 {/* Always present - shows race count */}
//                 <div>
//                   &nbsp;
//                   {/* Showing {filteredRaces.length} races on {selectedDate} */}
//                 </div>
                
//                 {/* Filter badges container - always in DOM but visibility toggled */}
//                 <div className={`flex flex-wrap gap-2 transition-opacity duration-200 ${
//                   (selectedTerritories.length > 0 || selectedCodes.length > 0) 
//                     ? 'opacity-100' 
//                     : 'opacity-0 pointer-events-none'
//                 }`}>
//                   {selectedTerritories.length > 0 && (
//                     // <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
//                     <span className="px-2 py-0.5 rounded">
//                       Territories: {selectedTerritories.join(', ')}
//                     </span>
//                   )}
                  
//                   {selectedCodes.length > 0 && (
//                     // <span className="bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">
//                     <span className="px-2 py-0.5 rounded">
//                       Codes: {selectedCodes.join(', ')}
//                     </span>
//                   )}
//                 </div>
                
//                 {/* Invisible placeholder to maintain exact height when no filters - optional but ensures perfect consistency */}
//                 {(selectedTerritories.length === 0 && selectedCodes.length === 0) && (
//                   <div className="invisible h-[24px]">
//                     <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
//                       Placeholder
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ROW 2 CONTENT - Action Buttons + Search (adjusted margins to match original) */}
//             <div className="flex-grow">
//               {/* Market Buttons (1-5) */}
//               <div className="grid grid-cols-10 gap-1.5 mb-2 mt-1">
//                 {marketButtons.map((button) => (
//                   <button
//                     key={button.id}
//                     onClick={() => setActiveButton(button.id)}
//                     className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
//                       activeButton === button.id 
//                         ? 'bg-blue-600 hover:bg-blue-300 text-primary-foreground' 
//                         : 'bg-secondary hover:bg-secondary/50'
//                     }`}
//                     title={button.title}
//                   >
//                     <Icon path={button.icon} size={1} />
//                   </button>
//                 ))}

//                 {searchButtons.map((button, index) => (
//                   <button
//                     key={index}
//                     className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
//                     title={button.title}
//                   >
//                     {button.id === 6 ? (
//                       <img src="/button_6.png" alt="Thoroughbred (Search)" className="h-8 w-8 object-contain" />
//                     ) : button.id === 7 ? (
//                       <img src="/button_7.png" alt="Harnes (Search)" className="h-8 w-8 object-contain" />
//                     ) : button.id === 8 ? (
//                       <img src="/button_8.png" alt="Greyhound (Search)" className="h-8 w-8 object-contain" />
//                     ) : button.id === 9 ? (
//                       <img src="/Kyotei_Icon_96x96.png" alt="Kyotei (Search)" className="h-8 w-8 object-contain" />
//                     ) : button.id === 10 ? (
//                       <img src="/Keirin_Icon_96x96.png" alt="Keirin (Search)" className="h-8 w-8 object-contain" />
//                     ) : (
//                       <Icon path={button.icon} size={1} />
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {/* Status Buttons (11-15) - with original mt-10 spacing */}
//               <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
//                 {statusButtons.map((button, index) => (
//                   // <button
//                   //   key={index}
//                   //   className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
//                   //   title={button.title}
//                   // >
//                   //   <Icon path={button.icon} size={1} />
//                   // </button>

//                   <button
//                     key={button.id}
//                     onClick={() => setActiveButton(button.id)}
//                     className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
//                       activeButton === button.id 
//                         ? 'bg-blue-600 hover:bg-blue-300 text-primary-foreground' 
//                         : 'bg-secondary hover:bg-secondary/50'
//                     }`}
//                     title={button.title}
//                   >
//                     <Icon path={button.icon} size={1} />
//                   </button>
//                 ))}
//                 <input
//                   type="text"
//                   placeholder="Search…"
//                   className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COLUMN 3 - Takes 1 column for PULSE Logo (same as original) */}
//         <div className="col-span-1 row-span-2">
//           <div className="flex flex-col items-center justify-start h-full">
//             <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">
//               PULSE
//             </div>
//             <div className="text-[12pt] font-bold text-muted-foreground mb-3">
//               {UI_VERSION}
//             </div>
//             <div className="w-25 h-25 flex items-center justify-center mb-3">
//               <img
//                 src="/aion_logo.png"
//                 alt="Aion Logo"
//                 className="w-23 h-23 object-cover"
//               />
//             </div>
//             <div className="flex items-center justify-center">
//               <Icon path={mdiRadar} size={3} className="text-primary" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };






















'use client';

import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';
import { DateSelector } from './DateSelector';
import { TerritorySelector } from './TerritorySelector';
import { RacingCodeSelector } from './RacingCodeSelector';
import { useButtonContext } from './ButtonContext';
import { useState, useEffect } from 'react';
import { 
  mdiCashMultiple, 
  mdiTicketPercent, 
  mdiSwapHorizontal, 
  mdiSwapHorizontalVariant, 
  mdiSlotMachine,
  mdiHorseVariantFast,
  mdiHorseshoe,
  mdiDogSide,
  mdiMotorbike,
  mdiBicycle,
  mdiFlash,
  mdiChartLine,
  mdiVideo,
  mdiTimerOutline,
  mdiFileChart,
  mdiRadar
} from "@mdi/js";
import Icon from "@mdi/react";
import { TrackSelector } from './TrackSelector';

// 1. Define the Interface to fix the 'any' type error
interface Race {
  trackCode: string;
  raceNo: number;
  ttm: string;
  countryCode: string;
  racingCode: string;
  date: string;
}

const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

export const HeaderRealm = () => {
  const { activeButton, setActiveButton } = useButtonContext();
  
  // 2. State for API data
  const [allRaces, setAllRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  });
  
  const [selectedTerritories, setSelectedTerritories] = useState<string[]>([]);
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const [filteredRaces, setFilteredRaces] = useState<Race[]>([]);

  // 3. Fetch data from FastAPI on component mount
  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/upcoming');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setAllRaces(data);
      } catch (error) {
        console.error("Failed to fetch races:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRaces();
  }, []);

  // 4. Update filtered races when data or filters change
  useEffect(() => {
    // Note: 'race' is now typed correctly via the interface
    let filtered = allRaces.filter((race: Race) => race.date === selectedDate);
    
    if (selectedTerritories.length > 0) {
      filtered = filtered.filter((race: Race) => selectedTerritories.includes(race.countryCode));
    }
    
    if (selectedCodes.length > 0) {
      filtered = filtered.filter((race: Race) => selectedCodes.includes(race.racingCode));
    }
    
    setFilteredRaces(filtered);
  }, [selectedDate, selectedTerritories, selectedCodes, allRaces]);

  // Market, Search, and Status buttons remain the same...
  const marketButtons = [
    { id: 1, title: "Tote Pool Market", icon: mdiCashMultiple },
    { id: 2, title: "Fixed Odds Markets", icon: mdiTicketPercent },
    { id: 3, title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
    { id: 4, title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
    { id: 5, title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
  ];

  const searchButtons = [
    { id: 6, title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
    { id: 7, title: "Harness (Search)", icon: mdiHorseshoe },
    { id: 8, title: "Greyhound (Search)", icon: mdiDogSide },
    { id: 9, title: "Kyotei (Search)", icon: mdiMotorbike },
    { id: 10, title: "Keirin (Search)", icon: mdiBicycle }
  ];

  const statusButtons = [
    { id: 11, title: "Pre-Race Features", icon: mdiFlash },
    { id: 12, title: "Post Race Performance Measurement", icon: mdiChartLine },
    { id: 13, title: "VDL (Video Data Labelling)", icon: mdiVideo },
    { id: 14, title: "Sectional Times (Search)", icon: mdiTimerOutline },
    { id: 15, title: "Meeting Analysis", icon: mdiFileChart }
  ];

  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative w-[99%]">
      <div className="grid grid-cols-12 gap-4 items-start w-full">
        
        {/* COLUMN 1 */}
        <div className="col-span-7 flex flex-col gap-4">
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-2 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
                  alt="HK Flag"
                  className="w-10 h-7 rounded-md shadow-md object-cover"
                />
                <span className="text-xl font-black tracking-tight whitespace-nowrap">
                  SHA TIN
                </span>
              </div>
            </div>

            <div className="col-span-4 flex items-center ms-4 me-4">
              <div className="grid grid-cols-12 gap-2 flex-grow">
                {Array.from({ length: 12 }, (_, i) => (
                  <RaceButton
                    key={i + 1}
                    number={i + 1}
                    isActive={i === 0}
                    className="w-12 h-12 text-[12pt]"
                  />
                ))}
              </div>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-4 gap-2">
                <TerritorySelector 
                  selectedTerritories={selectedTerritories}
                  onChange={setSelectedTerritories}
                />
                <DateSelector 
                  label="Date" 
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
                <RacingCodeSelector 
                  selectedCodes={selectedCodes}
                  onChange={setSelectedCodes}
                />
                <TrackSelector label="Track" value="" size="medium" />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="grid grid-cols-7 gap-2 mb-3">
              <ControlInput label="Post Time" value="" size="small" />
              <ControlInput label="Surface" value="" size="small" />
              <ControlInput label="Distance" value="" size="small" />
              <ControlInput label="Rail Pos" value="" size="small" />
              <ControlInput label="Going" value="" size="small" />
              <ControlInput label="Grade" value="" size="small" />
              <ControlInput label="Prize Money" value="" size="small" />
            </div>
            
            <div className="grid grid-cols-14 gap-2">
              <ControlInput label="Benchmark" value="" size="small" />
              <ControlInput label="Level" value="" size="small" />
              <ControlInput label="RQ" value="" size="small" />
              <ControlInput label="STD Time" value="" size="small" />
              <ControlInput label="FIN Time" value="" size="small" />
              <ControlInput label="RSPD" value="" size="small" />
              <ControlInput label="TRKSPD" value="" size="small" />
              <ControlInput label="+/- STD" value="" size="small" />
              <ControlInput label="Tempo" value="" size="small" />
              <ControlInput label="QR2" value="" size="small" />
              <ControlInput label="QR3" value="" size="small" />
              <ControlInput label="QR4" value="" size="small" />
              <ControlInput label="$ENT" value="" size="small" />
              <ControlInput label="$ELA" value="" size="small" />
            </div>
          </div>
        </div>

        {/* COLUMN 2 - Upcoming Races */}
        <div className="col-span-4 row-span-2 h-full">
          <div className="flex flex-col gap-2 h-full">
            <div>
              <div className="grid grid-cols-6 gap-2">
                {loading ? (
                   /* Optional Loading State for tiles */
                   Array.from({ length: 6 }).map((_, i) => (
                    <UpcomingTile key={i} trackCode="" raceNo="" ttm="Loading..." isEmpty={true} />
                  ))
                ) : (
                  <>
                    {filteredRaces.slice(0, 6).map((race, i) => (
                      <UpcomingTile
                        key={i}
                        trackCode={race.trackCode}
                        raceNo={race.raceNo.toString()}
                        ttm={race.ttm}
                        countryCode={race.countryCode}
                        racingCode={race.racingCode}
                        isEmpty={false}
                      />
                    ))}
                    {filteredRaces.length < 6 && Array.from({ length: 6 - filteredRaces.length }, (_, i) => (
                      <UpcomingTile
                        key={`empty-${i}`}
                        trackCode=""
                        raceNo=""
                        ttm=""
                        isEmpty={true}
                      />
                    ))}
                  </>
                )}
              </div>
              
              <div className="text-xs text-muted-foreground mt-1 min-h-[40px]">
                <div>&nbsp;</div>
                <div className={`flex flex-wrap gap-2 transition-opacity duration-200 ${
                  (selectedTerritories.length > 0 || selectedCodes.length > 0) ? 'opacity-100' : 'opacity-0'
                }`}>
                  {selectedTerritories.length > 0 && (
                    <span className="px-2 py-0.5 rounded">
                      Territories: {selectedTerritories.join(', ')}
                    </span>
                  )}
                  {selectedCodes.length > 0 && (
                    <span className="px-2 py-0.5 rounded">
                      Codes: {selectedCodes.join(', ')}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <div className="grid grid-cols-10 gap-1.5 mb-2 mt-1">
                {marketButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => setActiveButton(button.id)}
                    className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeButton === button.id ? 'bg-blue-600 text-primary-foreground' : 'bg-secondary hover:bg-secondary/50'
                    }`}
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}

                {searchButtons.map((button) => (
                  <button
                    key={button.id}
                    className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    title={button.title}
                  >
                    <img src={`/button_${button.id}.png`} alt={button.title} className="h-8 w-8 object-contain" onError={(e) => {
                      // Fallback for icons that don't match the numbering exactly like Kyotei/Keirin
                      if (button.id === 9) (e.target as HTMLImageElement).src = "/Kyotei_Icon_96x96.png";
                      if (button.id === 10) (e.target as HTMLImageElement).src = "/Keirin_Icon_96x96.png";
                    }}/>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
                {statusButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => setActiveButton(button.id)}
                    className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeButton === button.id ? 'bg-blue-600 text-primary-foreground' : 'bg-secondary hover:bg-secondary/50'
                    }`}
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="Search…"
                  className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5 bg-background"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 - Pulse Logo */}
        <div className="col-span-1 row-span-2">
          <div className="flex flex-col items-center justify-start h-full">
            <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">PULSE</div>
            <div className="text-[12pt] font-bold text-muted-foreground mb-3">{UI_VERSION}</div>
            <div className="w-25 h-25 flex items-center justify-center mb-3">
              <img src="/aion_logo.png" alt="Aion Logo" className="w-23 h-23 object-cover" />
            </div>
            <div className="flex items-center justify-center">
              <Icon path={mdiRadar} size={3} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};