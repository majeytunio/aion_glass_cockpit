'use client';

import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';
import { RunnerButton } from './RunnerButton';
const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
const upcomingRaces = [
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
  { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
  { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
  { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
  { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
];
export const ColumnRealm = () => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <>
    {Array.from({ length: 14 }, (_, i) => (
      <div
        key={i + 1}
        className="grid gap-1 py-1.5"
        style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
      >
        <div className="flex items-center justify-center">
          <RunnerButton number={i + 1} />
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    ))}
    </>
  );
};