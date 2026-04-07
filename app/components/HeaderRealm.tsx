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
  mdiCashMultiple, mdiTicketPercent, mdiSwapHorizontal, mdiSwapHorizontalVariant, mdiSlotMachine,
  mdiHorseVariantFast, mdiHorseshoe, mdiDogSide, mdiMotorbike, mdiBicycle,
  mdiFlash, mdiChartLine, mdiVideo, mdiTimerOutline, mdiFileChart, mdiRadar
} from "@mdi/js";
import Icon from "@mdi/react";
import { TrackSelector } from './TrackSelector';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://3.25.213.38:8000';
const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

export const HeaderRealm = () => {
  const { activeButton, setActiveButton } = useButtonContext();
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  });
  
  const [selectedTerritories, setSelectedTerritories] = useState<string[]>([]);
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const [allRaces, setAllRaces] = useState<any[]>([]);
  const [filteredRaces, setFilteredRaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch races from API
  useEffect(() => {
    const fetchRaces = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/api/upcoming/`);
        const data = await response.json();
        setAllRaces(data);
      } catch (error) {
        console.error('Failed to fetch races:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRaces();
  }, []);

  // Filter when date or filters change
  useEffect(() => {
    let filtered = allRaces.filter(race => race.date === selectedDate);
    
    if (selectedTerritories.length > 0) {
      filtered = filtered.filter(race => selectedTerritories.includes(race.countryCode));
    }
    
    if (selectedCodes.length > 0) {
      filtered = filtered.filter(race => selectedCodes.includes(race.racingCode));
    }
    
    setFilteredRaces(filtered);
  }, [selectedDate, selectedTerritories, selectedCodes, allRaces]);

  const marketButtons = [
    { id: 1, title: "Tote Pool Market", icon: mdiCashMultiple },
    { id: 2, title: "Fixed Odds Markets", icon: mdiTicketPercent },
    { id: 3, title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
    { id: 4, title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
    { id: 5, title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
  ];

  const searchButtons = [
    { id: 6, title: "Thoroughbred", icon: mdiHorseVariantFast },
    { id: 7, title: "Harness", icon: mdiHorseshoe },
    { id: 8, title: "Greyhound", icon: mdiDogSide },
    { id: 9, title: "Kyotei", icon: mdiMotorbike },
    { id: 10, title: "Keirin", icon: mdiBicycle }
  ];

  const statusButtons = [
    { id: 11, title: "Pre-Race Features", icon: mdiFlash },
    { id: 12, title: "Post Race Performance", icon: mdiChartLine },
    { id: 13, title: "VDL", icon: mdiVideo },
    { id: 14, title: "Sectional Times", icon: mdiTimerOutline },
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" alt="HK Flag" className="w-10 h-7 rounded-md shadow-md object-cover" />
                <span className="text-xl font-black tracking-tight whitespace-nowrap">SHA TIN</span>
              </div>
            </div>

            <div className="col-span-4 flex items-center ms-4 me-4">
              <div className="grid grid-cols-12 gap-2 flex-grow">
                {Array.from({ length: 12 }, (_, i) => (
                  <RaceButton key={i + 1} number={i + 1} isActive={i === 0} className="w-12 h-12 text-[12pt]" />
                ))}
              </div>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-4 gap-2">
                <TerritorySelector selectedTerritories={selectedTerritories} onChange={setSelectedTerritories} />
                <DateSelector label="Date" value={selectedDate} onChange={(date) => setSelectedDate(date)} />
                <RacingCodeSelector selectedCodes={selectedCodes} onChange={setSelectedCodes} />
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
              {loading ? (
                <div className="text-center py-8 text-gray-500">Loading races...</div>
              ) : (
                <>
                  <div className="text-xs text-gray-500 mb-1">
                    Showing {filteredRaces.length} races on {selectedDate}
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {filteredRaces.slice(0, 6).map((race, i) => (
                      <UpcomingTile
                        key={i}
                        trackCode={race.trackCode || '???'}
                        raceNo={race.raceNo}
                        ttm={race.ttm}
                        countryCode={race.countryCode}
                        racingCode={race.racingCode}
                        isEmpty={false}
                      />
                    ))}
                    {filteredRaces.length === 0 && !loading && (
                      <div className="col-span-6 text-center py-4 text-gray-400">
                        No races for this date
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="flex-grow">
              <div className="grid grid-cols-10 gap-1.5 mb-2 mt-1">
                {marketButtons.map((button) => (
                  <button key={button.id} onClick={() => setActiveButton(button.id)} className={`h-8 rounded-lg flex items-center justify-center transition-colors ${activeButton === button.id ? 'bg-blue-600' : 'bg-secondary'}`} title={button.title}>
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
                {searchButtons.map((button, index) => (
                  <button key={index} className="h-8 rounded-lg bg-secondary flex items-center justify-center" title={button.title}>
                    {button.id === 6 ? <img src="/button_6.png" alt="Thoroughbred" className="h-8 w-8 object-contain" /> :
                     button.id === 7 ? <img src="/button_7.png" alt="Harness" className="h-8 w-8 object-contain" /> :
                     button.id === 8 ? <img src="/button_8.png" alt="Greyhound" className="h-8 w-8 object-contain" /> :
                     button.id === 9 ? <img src="/Kyotei_Icon_96x96.png" alt="Kyotei" className="h-8 w-8 object-contain" /> :
                     button.id === 10 ? <img src="/Keirin_Icon_96x96.png" alt="Keirin" className="h-8 w-8 object-contain" /> :
                     <Icon path={button.icon} size={1} />}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
                {statusButtons.map((button) => (
                  <button key={button.id} onClick={() => setActiveButton(button.id)} className={`h-8 rounded-lg flex items-center justify-center ${activeButton === button.id ? 'bg-blue-600' : 'bg-secondary'}`}>
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
                <input type="text" placeholder="Search…" className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5" />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
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