import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';

import Image from 'next/image';

const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
const upcomingRaces = [
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
  { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
  { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
  { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
  { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
];
export const HeaderRealm = () => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Left: Flag + Track + Race Buttons */}
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
            alt="HK Flag"
            className="w-10 h-7 rounded-md shadow-md object-cover"
          />
          <span className="text-xl font-black tracking-tight min-w-[140px]">SHA TIN</span>
          <div className="flex gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
            ))}
          </div>
        </div>
        {/* Center: Controls Block */}
        <div className="flex flex-col gap-2.5 ml-8">
          {/* Row 1: Upcoming Tiles */}
          <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(6, 114px)' }}>
            {upcomingRaces.map((race, i) => (
              <UpcomingTile
                key={i}
                trackCode={race.trackCode}
                raceNo={race.raceNo}
                ttm={race.ttm}
                isEmpty={race.isEmpty}
              />
            ))}
          </div>
          {/* Row 2: Action Tiles + Search */}
          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 100px) 300px' }}>
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="h-9 rounded-xl bg-secondary" />
            ))}
            <input
              type="text"
              placeholder="Search…"
              className="h-9 rounded-xl border border-border px-3 font-semibold"
            />
          </div>
        </div>
        {/* Right: Status + Version */}
        <div className="text-right ml-6">
          <>
          <Image
            src="/aion_logo.png"
            alt="Pulse Icon"
            width={50}
            height={50}
            className="mx-auto mb-1"
          />
          <div className="text-sm font-black tracking-[0.18em] text-primary text-center">PULSE</div>
          <div className="text-xs font-bold text-muted-foreground text-center">{UI_VERSION}</div>
          </>
        </div>
      </div>
      {/* 2x2 Input Grid */}
      <div className="grid gap-x-5 gap-y-3.5 mt-5" style={{ gridTemplateColumns: '220px 220px' }}>
        <ControlInput label="Territory" value="HK" />
        <ControlInput label="Date" value={today} />
        <ControlInput label="Code" value="RACE001" />
        <ControlInput label="Track" value="SHATIN" />
      </div>
    </div>
  );
};