
'use client';

import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';
import { useButtonContext } from './ButtonContext';
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

const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// const upcomingRaces = [
//   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// ];

const upcomingRaces = [
  // Hong Kong - Thoroughbred
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK', racingCode: 'TH' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK', racingCode: 'TH' },
  
  // Australia - Mixed
  { trackCode: 'FLEM', raceNo: 3, ttm: '15m', countryCode: 'AU', racingCode: 'TH' },
  { trackCode: 'FLEM', raceNo: 4, ttm: '50m', countryCode: 'AU', racingCode: 'TH' },
  { trackCode: 'WENT', raceNo: 5, ttm: '25m', countryCode: 'AU', racingCode: 'GR' }, // Greyhound
  
  { trackCode: 'MTH', raceNo: 12, ttm: '89m', countryCode: 'US', racingCode: 'GR' }, // Greyhound
];

export const HeaderRealm = () => {
  const { activeButton, setActiveButton } = useButtonContext();

  // Market Buttons (1-5) - NOW CLICKABLE
  const marketButtons = [
    { id: 1, title: "Tote Pool Market", icon: mdiCashMultiple },
    { id: 2, title: "Fixed Odds Markets", icon: mdiTicketPercent },
    { id: 3, title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
    { id: 4, title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
    { id: 5, title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
  ];

  // Search Filter Buttons (6-10)
  const searchButtons = [
    { id: 6, title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
    { id: 7, title: "Harness (Search)", icon: mdiHorseshoe },
    { id: 8, title: "Greyhound (Search)", icon: mdiDogSide },
    { id: 9, title: "Kyotei (Search)", icon: mdiMotorbike },
    { id: 10, title: "Keirin (Search)", icon: mdiBicycle }
  ];

  // Status Buttons (11-15)
  const statusButtons = [
    { id: 11, title: "Pre-Race Features", icon: mdiFlash },
    { id: 12, title: "Post Race Performance Measurement", icon: mdiChartLine },
    { id: 13, title: "VDL (Video Data Labelling)", icon: mdiVideo },
    { id: 14, title: "Sectional Times (Search)", icon: mdiTimerOutline },
    { id: 15, title: "Meeting Analysis", icon: mdiFileChart }
  ];

  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative">
      {/* MAIN GRID - 3 columns */}
      <div className="grid grid-cols-12 gap-4 items-start">
        
        {/* COLUMN 1 - Takes 7 columns */}
        <div className="col-span-7 flex flex-col gap-4">
          
          {/* ROW 1 OF COLUMN 1 */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Flag + SHA TIN - Column 1-2 */}
            <div className="col-span-1 flex flex-col gap-1">
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

            {/* Weather + Race Buttons - Column 3-6 */}
            <div className="col-span-6 flex items-center gap-2 ms-6">
              {/* Race Buttons Grid - 2 rows of 6 */}
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

            {/* 4 Control Inputs - Column 7-12 */}
            <div className="col-span-5">
              <div className="grid grid-cols-4 gap-3">
                <ControlInput label="Territory" value="" size="medium" />
                <ControlInput label="Date" value="" size="medium" />
                <ControlInput label="Code" value="" size="medium" />
                <ControlInput label="Track" value="" size="medium" />
              </div>
            </div>
          </div>

          {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
          <div className="pt-4">
            {/* Row 1: 7 controls */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              <ControlInput label="Post Time" value="" size="small" />
              <ControlInput label="Surface" value="" size="small" />
              <ControlInput label="Distance" value="" size="small" />
              <ControlInput label="Rail Pos" value="" size="small" />
              <ControlInput label="Going" value="" size="small" />
              <ControlInput label="Grade" value="" size="small" />
              <ControlInput label="Prize Money" value="" size="small" />
            </div>
            
            {/* Row 2: 14 controls */}
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

        {/* COLUMN 2 - Takes 4 columns, Rowspan 2 */}
        <div className="col-span-4 row-span-2 h-full ms-4">
          <div className="flex flex-col gap-4 h-full">
            {/* ROW 1 CONTENT - Upcoming Races */}
            <div>
              <div className="grid grid-cols-6 gap-2">
                {upcomingRaces.map((race, i) => (
                  <UpcomingTile
                    key={i}
                    trackCode={race.trackCode}
                    raceNo={race.raceNo}
                    ttm={race.ttm}
                    countryCode={race.countryCode}
                    isEmpty={false}
                  />
                ))}
              </div>
            </div>

            {/* ROW 2 CONTENT - Action Buttons + Search */}
            <div className="flex-grow">
              {/* Market Buttons (1-5) - NOW CLICKABLE WITH ACTIVE STATE */}
              <div className="grid grid-cols-10 gap-1.5 mb-2 mt-5">
                {marketButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => setActiveButton(button.id)}
                    className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeButton === button.id 
                        ? 'bg-blue-600 hover:bg-blue-300 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/50'
                    }`}
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}

                {searchButtons.map((button, index) => (
                  <button
                    key={index}
                    className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    title={button.title}
                  >

                    {button.id === 6 ? (
                      <img src="/button_6.png" alt="Thoroughbred (Search)" className="h-8 w-8 object-contain" />
                    ) : button.id === 7 ? (
                      <img src="/button_7.png" alt="Harnes (Search)" className="h-8 w-8 object-contain" />
                    ) : button.id === 8 ? (
                      <img src="/button_8.png" alt="Greyhound (Search)" className="h-8 w-8 object-contain" />
                    ) : (
                      /* The final 'Else' - Default for all other IDs */
                      <Icon path={button.icon} size={1} />
                    )}




                    {/* <Icon path={button.icon} size={1} /> */}
                  </button>
                ))}
              </div>

              {/* Status Buttons (11-15) */}
              <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
                {statusButtons.map((button, index) => (
                  <button
                    key={index}
                    className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="Search…"
                  className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 - Takes 1 column for PULSE Logo, Rowspan 2 */}
        <div className="col-span-1 row-span-2">
          <div className="flex flex-col items-center justify-start h-full">
            <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">
              PULSE
            </div>
            <div className="text-[12pt] font-bold text-muted-foreground mb-3">
              {UI_VERSION}
            </div>
            <div className="w-25 h-25 flex items-center justify-center mb-3">
              <img
                src="/aion_logo.png"
                alt="Aion Logo"
                className="w-23 h-23 object-cover"
              />
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