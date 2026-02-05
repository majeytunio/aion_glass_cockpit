// 'use client';

// interface UpcomingTileProps {
//   trackCode: string;
//   raceNo: number | string;
//   ttm: string;
//   countryCode?: string;
//   isEmpty?: boolean;
// }
// export const UpcomingTile = ({ trackCode, raceNo, ttm, isEmpty }: UpcomingTileProps) => {
//   if (isEmpty) {
//     return (
//       <div className="upcoming-tile bg-muted" />
//     );
//   }
//   return (
//     <div className="upcoming-tile">
//       <div className="text-[11px] font-extrabold tracking-wide text-foreground">
//         {trackCode} R{raceNo}
//       </div>
//       <div className="text-xs font-black tracking-wider text-primary mt-1">
//         {ttm}
//       </div>
//     </div>
//   );
// };





'use client';

interface UpcomingTileProps {
  trackCode: string;
  raceNo: number | string;
  ttm: string;
  countryCode?: string;
  isEmpty?: boolean;
}

export const UpcomingTile = ({ trackCode, raceNo, ttm, countryCode = 'HK', isEmpty }: UpcomingTileProps) => {
  if (isEmpty) {
    return (
      <div className="upcoming-tile bg-muted" />
    );
  }

  // Get flag image based on country code
  const getFlagUrl = (code: string) => {
    switch (code) {
      case 'HK':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
      case 'AU':
        return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg';
      case 'UK':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg';
      case 'US':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
      case 'JP':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
      case 'SA':
        return 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_South_Africa.svg';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
    }
  };

  return (
    <div className="upcoming-tile relative">
      {/* Country Flag - Top Right Corner */}
      <div className="absolute top-1 right-1">
        <img
          src={getFlagUrl(countryCode)}
          alt={`${countryCode} Flag`}
          className="w-5 h-3.5 rounded-sm shadow-xs object-cover"
        />
      </div>
      
      {/* Race Details */}
      <div className="text-[11px] font-extrabold tracking-wide text-foreground">
        {trackCode} R{raceNo}
      </div>
      <div className="text-xs font-black tracking-wider text-primary mt-1">
        {ttm}
      </div>
    </div>
  );
};