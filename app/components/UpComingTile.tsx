// // 'use client';

// // interface UpcomingTileProps {
// //   trackCode: string;
// //   raceNo: number | string;
// //   ttm: string;
// //   countryCode?: string;
// //   isEmpty?: boolean;
// // }
// // export const UpcomingTile = ({ trackCode, raceNo, ttm, isEmpty }: UpcomingTileProps) => {
// //   if (isEmpty) {
// //     return (
// //       <div className="upcoming-tile bg-muted" />
// //     );
// //   }
// //   return (
// //     <div className="upcoming-tile">
// //       <div className="text-[11px] font-extrabold tracking-wide text-foreground">
// //         {trackCode} R{raceNo}
// //       </div>
// //       <div className="text-xs font-black tracking-wider text-primary mt-1">
// //         {ttm}
// //       </div>
// //     </div>
// //   );
// // };





// 'use client';

// interface UpcomingTileProps {
//   trackCode: string;
//   raceNo: number | string;
//   ttm: string;
//   countryCode?: string;
//   isEmpty?: boolean;
// }

// export const UpcomingTile = ({ trackCode, raceNo, ttm, countryCode = 'HK', isEmpty }: UpcomingTileProps) => {
//   if (isEmpty) {
//     return (
//       <div className="upcoming-tile bg-muted" />
//     );
//   }

//   // Get flag image based on country code
//   const getFlagUrl = (code: string) => {
//     switch (code) {
//       case 'HK':
//         return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
//       case 'AU':
//         return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg';
//       case 'UK':
//         return 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_England.svg';
//       case 'US':
//         return 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
//       case 'JP':
//         return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
//       case 'SA':
//         return 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_South_Africa.svg';
//       default:
//         return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
//     }
//   };

//   return (
//     <div className="upcoming-tile relative">
//       {/* Country Flag - Top Right Corner */}
//       <div className="absolute top-1 right-1">
//         <img
//           src={getFlagUrl(countryCode)}
//           alt={`${countryCode} Flag`}
//           className="w-5 h-3.5 rounded-sm shadow-xs object-cover"
//         />
//       </div>
      
//       {/* Race Details */}
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
  racingCode?: string; 
  // 'TH' | 'HN' | 'GR' | 'KY' | 'KE'; // Optional racing code prop
}

export const UpcomingTile = ({ 
  trackCode, 
  raceNo, 
  ttm, 
  countryCode = 'HK', 
  isEmpty,
  racingCode = 'TH' // Default to 'TH' until API provides it
}: UpcomingTileProps) => {
  if (isEmpty) {
    return (
      <div className="upcoming-tile bg-muted h-20" /> // Double the height
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
        return 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_England.svg';
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

  // Get racing code icon (using Unicode symbols as placeholders - replace with actual icons)
  // const getRacingCodeIcon = (code: string) => {
  //   switch (code) {
  //     case 'TH':
  //       return '<🐎>'; // Thoroughbred - Horse
  //     case 'HN':
  //       return '🏇'; // Harness - Harness racing
  //     case 'GR':
  //       return '🐕'; // Greyhound - Dog
  //     case 'KY':
  //       return '🛥️'; // Kyotei - Boat/Motorboat
  //     case 'KE':
  //       return '🚲'; // Keirin - Bicycle
  //     default:
  //       return '🐎';
  //   }
  // };



  // const getRacingCodeIcon = (code: string) => {
  //   switch (code) {
  //     case 'TH':
  //       return '🐎'; // Thoroughbred - Horse
  //     case 'HN':
  //       return '🏇'; // Harness - Harness racing
  //     case 'GR':
  //       return '🐕'; // Greyhound - Dog
  //     case 'KY':
  //       return '🛥️'; // Kyotei - Boat/Motorboat
  //     case 'KE':
  //       return '🚲'; // Keirin - Bicycle
  //     default:
  //       return '🐎';
  //   }
  // };


  // Get racing code icon (Returning JSX instead of strings)
  const getRacingCodeIcon = (code: string) => {
    // Shared classes for all racing icons
    const iconClass = "h-6 w-6 object-contain"; 

    switch (code) {
      case 'TH':
        return <img src="/button_6.png" alt="Thoroughbred" className={iconClass} />;
      case 'HN':
        return <img src="/button_7.png" alt="Harness" className={iconClass} />;
      case 'GR':
        return <img src="/button_8.png" alt="Greyhound" className={iconClass} />;
      case 'KY':
        return <img src="/Kyotei_Icon_96x96.png" alt="Kyotei" className={iconClass} />;
      case 'KE':
        return <img src="/Keirin_Icon_96x96.png" alt="Keirin" className={iconClass} />;
      default:
        // Default horse icon
        return <img src="/button_6.png" alt="Racing" className={iconClass} />;
    }
  };

  return (
    <div className="upcoming-tile relative h-20 p-2"> {/* Double height (was h-10) */}
      {/* Territory Flag - Top Right Corner - 100% larger */}
      <div className="absolute top-1 right-1">
        <img
          src={getFlagUrl(countryCode)}
          alt={`${countryCode} Flag`}
          className="w-10 h-7 rounded-sm shadow-xs object-cover"
        />
      </div>
      
      {/* Racing Code Icon - Bottom Right Corner */}
      <div className="absolute bottom-1 right-1 text-xl">
        {getRacingCodeIcon(racingCode)}
      </div>
      
      {/* Race Details - Increased font sizes */}
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Venue and Race No - Larger font */}
          <div className="text-sm font-extrabold tracking-wide text-foreground">
            {trackCode} R{raceNo}
          </div>
        </div>
        
        {/* Time to Start - Larger font and more prominent */}
        <div className="text-base font-black tracking-wider text-primary">
          {ttm}
        </div>
      </div>
    </div>
  );
};