'use client';

import { RaceButton } from '../RaceButtonProps';
import { UpcomingTile } from '../UpComingTile';
import { ControlInput } from '../ControlInput';
import { useButtonContext } from '../ButtonContext';
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
  mdiRadar,
  mdiExitToApp,
  mdiArrowLeft
} from "@mdi/js";
import Icon from "@mdi/react";
import { RunnerRowData } from '../RunnerRowInterface';

const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

const upcomingRaces = [
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
];

export const JockeyProfileHeader = ({ jockeyData }: { jockeyData: RunnerRowData }) => {
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
    { title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
    { title: "Harness (Search)", icon: mdiHorseshoe },
    { title: "Greyhound (Search)", icon: mdiDogSide },
    { title: "Kyotei (Search)", icon: mdiMotorbike },
    { title: "Keirin (Search)", icon: mdiBicycle }
  ];

  // Status Buttons (11-15)
  const statusButtons = [
    { title: "Pre-Race Features", icon: mdiFlash },
    { title: "Post Race Performance Measurement", icon: mdiChartLine },
    { title: "VDL (Video Data Labelling)", icon: mdiVideo },
    { title: "Sectional Times (Search)", icon: mdiTimerOutline },
    { title: "Meeting Analysis", icon: mdiFileChart }
  ];

  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative">
      {/* MAIN GRID - 3 columns */}
      <div className="grid grid-cols-12 gap-4 items-start">
        
        {/* COLUMN 1 - Takes 7 columns */}
        <div className="col-span-11 flex flex-col gap-4">
          
          {/* ROW 1 OF COLUMN 1 */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Flag + SHA TIN - Column 1-2 */}
            <div className="col-span-1 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                {/* <img
                  src="/aion_logo.png"
                  alt="HK Flag"
                  className="w-15 h-15 rounded-md shadow-md object-cover"
                /> */}
                {/* <span className="text-xl font-black tracking-tight whitespace-nowrap">
                  SHA TIN
                </span> */}

                <div className="col-span-1 flex flex-col gap-1 ms-5">
                    <div className="flex items-center gap-3">
                        <img
                            src="/jockey_icon.png"
                            alt="Jockey"
                            className="w-20 h-20"
                        />
                        <span className="text-[20pt] font-black tracking-tight whitespace-nowrap">
                            {/* SHA TIN {runnerData?.name || ''} */}
                            {jockeyData?.jockey || ''}
                        </span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
          {/* <div className="pt-4">
            <div className="col-span-1 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <img
                  src="/runner_placeholder.jpeg"
                  alt="HK Flag"
                  className="w-10 h-7 rounded-md shadow-md object-cover"
                />
                <span className="text-xl font-black tracking-tight whitespace-nowrap">
                  {runnerData?.name || ''}
                </span>
              </div>
            </div>
          </div> */}
        </div>

        {/* COLUMN 2 - Takes 4 columns, Rowspan 2 */}
        {/* <div className="col-span-4 row-span-2 h-full ms-4">
          <div className="flex flex-col gap-4 h-full">
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

            <div className="flex-grow">
              <div className="grid grid-cols-10 gap-1.5 mb-2 mt-14">
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
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
              </div>

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
        </div> */}

        {/* COLUMN 3 - Takes 1 column for PULSE Logo, Rowspan 2 */}
        <div className="col-span-1 row-span-2">
          <div className="flex flex-col items-end justify-end h-full">
            <div className="flex items-end justify-end mb-10 hover:bg-secondary/50 rounded-lg p-1 cursor-pointer" 
            onClick={() => window.location.href = '/'}
            >
                <Icon path={mdiArrowLeft} size={2} className="text-primary" />
            </div>
          </div>
          <div className="flex flex-col items-end justify-end h-full">
                <div className="w-25 h-25 flex items-end justify-end mb-3">
                    <img
                    src="/aion_logo.png"
                    alt="Aion Logo"
                    className="w-23 h-23 object-cover"
                    />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};