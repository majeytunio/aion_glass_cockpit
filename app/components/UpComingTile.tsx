'use client';

interface UpcomingTileProps {
  trackCode: string;
  raceNo: number | string;
  ttm: string;
  countryCode?: string;
  isEmpty?: boolean;
}
export const UpcomingTile = ({ trackCode, raceNo, ttm, isEmpty }: UpcomingTileProps) => {
  if (isEmpty) {
    return (
      <div className="upcoming-tile bg-muted" />
    );
  }
  return (
    <div className="upcoming-tile">
      <div className="text-[11px] font-extrabold tracking-wide text-foreground">
        {trackCode} R{raceNo}
      </div>
      <div className="text-xs font-black tracking-wider text-primary mt-1">
        {ttm}
      </div>
    </div>
  );
};