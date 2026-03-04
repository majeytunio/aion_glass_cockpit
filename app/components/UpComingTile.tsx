// // // 'use client';

// // // interface UpcomingTileProps {
// // //   trackCode: string;
// // //   raceNo: number | string;
// // //   ttm: string;
// // //   countryCode?: string;
// // //   isEmpty?: boolean;
// // // }
// // // export const UpcomingTile = ({ trackCode, raceNo, ttm, isEmpty }: UpcomingTileProps) => {
// // //   if (isEmpty) {
// // //     return (
// // //       <div className="upcoming-tile bg-muted" />
// // //     );
// // //   }
// // //   return (
// // //     <div className="upcoming-tile">
// // //       <div className="text-[11px] font-extrabold tracking-wide text-foreground">
// // //         {trackCode} R{raceNo}
// // //       </div>
// // //       <div className="text-xs font-black tracking-wider text-primary mt-1">
// // //         {ttm}
// // //       </div>
// // //     </div>
// // //   );
// // // };





// // 'use client';

// // interface UpcomingTileProps {
// //   trackCode: string;
// //   raceNo: number | string;
// //   ttm: string;
// //   countryCode?: string;
// //   isEmpty?: boolean;
// // }

// // export const UpcomingTile = ({ trackCode, raceNo, ttm, countryCode = 'HK', isEmpty }: UpcomingTileProps) => {
// //   if (isEmpty) {
// //     return (
// //       <div className="upcoming-tile bg-muted" />
// //     );
// //   }

// //   // Get flag image based on country code
// //   const getFlagUrl = (code: string) => {
// //     switch (code) {
// //       case 'HK':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
// //       case 'AU':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg';
// //       case 'UK':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_England.svg';
// //       case 'US':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
// //       case 'JP':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
// //       case 'SA':
// //         return 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_South_Africa.svg';
// //       default:
// //         return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
// //     }
// //   };

// //   return (
// //     <div className="upcoming-tile relative">
// //       {/* Country Flag - Top Right Corner */}
// //       <div className="absolute top-1 right-1">
// //         <img
// //           src={getFlagUrl(countryCode)}
// //           alt={`${countryCode} Flag`}
// //           className="w-5 h-3.5 rounded-sm shadow-xs object-cover"
// //         />
// //       </div>
      
// //       {/* Race Details */}
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
//   racingCode?: string; 
//   // 'TH' | 'HN' | 'GR' | 'KY' | 'KE'; // Optional racing code prop
// }

// export const UpcomingTile = ({ 
//   trackCode, 
//   raceNo, 
//   ttm, 
//   countryCode = 'HK', 
//   isEmpty,
//   racingCode = 'TH' // Default to 'TH' until API provides it
// }: UpcomingTileProps) => {
//   if (isEmpty) {
//     return (
//       <div className="upcoming-tile bg-muted h-20" /> // Double the height
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
//       case 'ZA':
//         return 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg';
//       // case 'SA':
//       //   return 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_South_Africa.svg';
//       default:
//         return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
//     }
//   };

//   // Get racing code icon (using Unicode symbols as placeholders - replace with actual icons)
//   // const getRacingCodeIcon = (code: string) => {
//   //   switch (code) {
//   //     case 'TH':
//   //       return '<🐎>'; // Thoroughbred - Horse
//   //     case 'HN':
//   //       return '🏇'; // Harness - Harness racing
//   //     case 'GR':
//   //       return '🐕'; // Greyhound - Dog
//   //     case 'KY':
//   //       return '🛥️'; // Kyotei - Boat/Motorboat
//   //     case 'KE':
//   //       return '🚲'; // Keirin - Bicycle
//   //     default:
//   //       return '🐎';
//   //   }
//   // };



//   // const getRacingCodeIcon = (code: string) => {
//   //   switch (code) {
//   //     case 'TH':
//   //       return '🐎'; // Thoroughbred - Horse
//   //     case 'HN':
//   //       return '🏇'; // Harness - Harness racing
//   //     case 'GR':
//   //       return '🐕'; // Greyhound - Dog
//   //     case 'KY':
//   //       return '🛥️'; // Kyotei - Boat/Motorboat
//   //     case 'KE':
//   //       return '🚲'; // Keirin - Bicycle
//   //     default:
//   //       return '🐎';
//   //   }
//   // };


//   // Get racing code icon (Returning JSX instead of strings)
//   const getRacingCodeIcon = (code: string) => {
//     // Shared classes for all racing icons
//     const iconClass = "h-6 w-6 object-contain"; 

//     switch (code) {
//       case 'TH':
//         return <img src="/button_6.png" alt="Thoroughbred" className={iconClass} />;
//       case 'HN':
//         return <img src="/button_7.png" alt="Harness" className={iconClass} />;
//       case 'GR':
//         return <img src="/button_8.png" alt="Greyhound" className={iconClass} />;
//       case 'KY':
//         return <img src="/Kyotei_Icon_96x96.png" alt="Kyotei" className={iconClass} />;
//       case 'KE':
//         return <img src="/Keirin_Icon_96x96.png" alt="Keirin" className={iconClass} />;
//       default:
//         // Default horse icon
//         return <img src="/button_6.png" alt="Racing" className={iconClass} />;
//     }
//   };

//   return (
//     <div className="upcoming-tile relative h-20 p-2"> {/* Double height (was h-10) */}
//       {/* Territory Flag - Top Right Corner - 100% larger */}
//       <div className="absolute top-1 right-1">
//         <img
//           src={getFlagUrl(countryCode)}
//           alt={`${countryCode} Flag`}
//           className="w-10 h-7 rounded-sm shadow-xs object-cover"
//         />
//       </div>
      
//       {/* Racing Code Icon - Bottom Right Corner */}
//       <div className="absolute bottom-1 right-1 text-xl">
//         {getRacingCodeIcon(racingCode)}
//       </div>
      
//       {/* Race Details - Increased font sizes */}
//       <div className="flex flex-col h-full justify-between">
//         <div>
//           {/* Venue and Race No - Larger font */}
//           <div className="text-sm font-extrabold tracking-wide text-foreground">
//             {trackCode} R{raceNo}
//           </div>
//         </div>
        
//         {/* Time to Start - Larger font and more prominent */}
//         <div className="text-base font-black tracking-wider text-primary">
//           {ttm}
//         </div>
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
  isActive?: boolean; // Used to trigger the Red border/highlight seen in your image
}

export const UpcomingTile = ({ 
  trackCode, 
  raceNo, 
  ttm, 
  countryCode = 'HK', 
  isEmpty,
  racingCode = 'TH',
  isActive = false 
}: UpcomingTileProps) => {

  if (isEmpty) {
    return (
      <div className="w-44 h-24 bg-gray-100 border border-gray-200 rounded-md shadow-sm" />
    );
  }

  // YOUR SPECIFIC FLAG LOGIC RESTORED
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
      case 'ZA':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
    }
  };

  const getRacingCodeIcon = (code: string) => {
    const iconClass = "h-5 w-5 object-contain opacity-90"; 
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
        return <img src="/button_6.png" alt="Racing" className={iconClass} />;
    }
  };

  /**
   * Layout Logic to match image:
   * - Red border if isActive (like the Sha Tin R2 tile)
   * - Red text for urgent time, Blue for standard
   */
  const isUrgent = isActive || ttm.startsWith('0') || ttm.includes('s');
  const textColor = isUrgent ? "text-red-600" : "text-blue-700";
  const borderColor = isActive ? "border-red-500 ring-1 ring-red-500" : "border-gray-300";

  return (
    <div className={`
      relative w-40 h-24 p-3 flex flex-col justify-between 
      bg-white border-2 rounded-lg transition-all shadow-sm ${borderColor}
      me-3
    `}>
      
      {/* TOP ROW: Track Name (Left) and Flag (Right) */}
      <div className="flex justify-between items-start">
        <span className="font-extrabold text-[13px] uppercase tracking-tighter text-gray-900 truncate pr-2">
          {trackCode}
        </span>
        <div className="w-8 h-5 flex-shrink-0 border border-gray-100 shadow-sm overflow-hidden rounded-sm">
          <img
            src={getFlagUrl(countryCode)}
            alt={`${countryCode} Flag`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* MIDDLE ROW: The Racing Type Icon */}
      <div className="flex items-center">
        {getRacingCodeIcon(racingCode)}
      </div>

      {/* BOTTOM ROW: Time Remaining (Left) and Race Number (Right) */}
      <div className="flex justify-between items-end">
        <div className={`text-xl font-black italic tracking-tighter leading-none ${textColor}`}>
          {ttm}
        </div>
        <div className="text-lg font-extrabold text-gray-800 leading-none">
          R{raceNo}
        </div>
      </div>
    </div>
  );
};