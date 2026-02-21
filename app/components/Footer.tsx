// // 'use client';

// // import { mdiChartAreaspline } from "@mdi/js";
// // import Icon from "@mdi/react";
// // import { FaChartArea } from "react-icons/fa";

// // export const Footer = () => {
// //   return (
// //     <div 
// //       className="fixed bottom-2 left-2 right-2 h-9 flex items-center z-50 p-7 gap-1.5 rounded-xl shadow-lg"
// //       style={{ background: 'hsl(var(--cockpit-footer))' }}
// //     >
// //       {/* Left Edge Button - floats left */}
// //       <button className="footer-btn flex-shrink-0" title="Market Graph (Runner Select)">
// //         <Icon path={mdiChartAreaspline} size={1} />
// //       </button>
      
// //       {/* Center 9 Buttons - fill remaining space evenly */}
// //       <div className="flex-1 flex justify-center items-center gap-1.5">
// //         {Array.from({ length: 9 }, (_, i) => (
// //           <button key={i} className="footer-btn flex-1 max-w-[108px]" />
// //         ))}
// //       </div>
// //       {/* Right Edge Button - floats right */}
// //       <button className="footer-btn flex-shrink-0" />
      
      
      
// //       {/* Left Edge Button - floats left */}
// //       {/* <button className="footer-btn flex-shrink-0" /> */}
// //       {/* Center 9 Buttons - fill remaining space evenly */}
// //       {/* <div className="flex-1 flex justify-center items-center gap-1.5">
// //         {Array.from({ length: 9 }, (_, i) => (
// //           <button key={i} className="footer-btn flex-1 max-w-[108px]" />
// //         ))}
// //       </div> */}
// //       {/* Right Edge Button - floats right */}
// //       {/* <button className="footer-btn flex-shrink-0" /> */}


// //     </div>
// //   );
// // };








// 'use client';

// import { 
//   mdiChartAreaspline, 
//   mdiCashSync, 
//   mdiAccessPoint, 
//   mdiGrid,  // Changed from mdiVectorGrid
//   mdiPulse, 
//   mdiVectorLine,  // Changed from mdiVectorPoint
//   mdiClipboardTextOutline,  // Changed from mdiClipboardText
//   mdiCheckDecagram, 
//   mdiFinance 
// } from "@mdi/js";
// import Icon from "@mdi/react";

// export const Footer = () => {
//   const buttons = [
//     { 
//       title: "Market Graph (Runner Select)", 
//       icon: mdiChartAreaspline 
//     },
//     { 
//       title: "Tote Pool Prospective Trades", 
//       icon: mdiCashSync 
//     },
//     { 
//       title: "Bet Stream Race", 
//       icon: mdiAccessPoint 
//     },
//     { 
//       title: "Speed Map / Matrix (Predicted)", 
//       icon: mdiGrid  // Using mdiGrid instead of mdiVectorGrid
//     },
//     { 
//       title: "Manual Trigger / Pulse / Market Status", 
//       icon: mdiPulse 
//     },
//     { 
//       title: "Speed Map / Matrix (Actual)", 
//       icon: mdiVectorLine  // Using mdiVectorLine instead of mdiVectorPoint
//     },
//     { 
//       title: "Market Intel Summary", 
//       icon: mdiClipboardTextOutline  // Using mdiClipboardTextOutline
//     },
//     { 
//       title: "Official Dividends / Starting Prices", 
//       icon: mdiCheckDecagram 
//     },
//     { 
//       title: "Aion Trading P & L Summary", 
//       icon: mdiFinance 
//     }
//   ];

//   return (
//     <div 
//       className="fixed bottom-2 left-2 right-2 h-9 flex items-center z-50 p-7 gap-1.5 rounded-xl shadow-lg"
//       style={{ background: 'hsl(var(--cockpit-footer))' }}
//     >
//       {/* Center 9 Buttons - fill remaining space evenly */}
//       <div className="flex-1 flex justify-center items-center gap-1.5">
//         {buttons.map((button, index) => (
//           <button 
//             key={index} 
//             className="footer-btn flex-1 max-w-[108px] flex items-center justify-center p-5"
//             title={button.title}
//           >
//             <Icon path={button.icon} size={1.5} />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };















'use client';

import { 
  mdiChartAreaspline, 
  mdiCashSync, 
  mdiAccessPoint, 
  mdiGrid,
  mdiPulse, 
  mdiVectorLine,
  mdiClipboardTextOutline,
  mdiCheckDecagram, 
  mdiFinance,
  mdiTowerFire, // For Control Tower
  mdiQrcode, // For QR Modelling Suite
  mdiMonitorDashboard,
  mdiTransmissionTower
} from "@mdi/js";
import Icon from "@mdi/react";
import { usePathname, useRouter } from "next/dist/client/components/navigation";

export const Footer = () => {

  const pathname = usePathname(); // Get current route
  const router = useRouter();    // Get router for navigation

  // Check if current route is control tower
  const isControlTower = pathname === '/control-tower';
  
  // Check if current route is QR Modeling Suite
  const isQRModelingSuite = pathname === '/qr-modeling-suite';
  // const isControlTower = pathname === '/control-tower';

  const buttons = [
    { 
      title: "Market Graph (Runner Select)", 
      icon: mdiChartAreaspline 
    },
    { 
      title: "Tote Pool Prospective Trades", 
      icon: mdiCashSync 
    },
    { 
      title: "Bet Stream Race", 
      icon: mdiAccessPoint 
    },
    { 
      title: "Speed Map / Matrix (Predicted)", 
      icon: mdiGrid
    },
    { 
      title: "Manual Trigger / Pulse / Market Status", 
      icon: mdiPulse 
    },
    { 
      title: "Speed Map / Matrix (Actual)", 
      icon: mdiVectorLine
    },
    { 
      title: "Market Intel Summary", 
      icon: mdiClipboardTextOutline
    },
    { 
      title: "Official Dividends / Starting Prices", 
      icon: mdiCheckDecagram 
    },
    { 
      title: "Aion Trading P & L Summary", 
      icon: mdiFinance 
    }
  ];

  return (
    <div 
      className="fixed bottom-2 left-2 right-2 flex items-center z-50 gap-3 rounded-xl shadow-lg"
      style={{ 
        background: 'hsl(var(--cockpit-footer))',
        height: '80px', // 36px × 1.5 = 54px
        padding: '0 40px' // 28px × 1.5 ≈ 40px
      }}
    >
      {/* Left Side Button A - Control Tower */}
      <button 
        className={`
          group /* 1. Tracks hover state */
          footer-btn 
          flex-shrink-0 
          flex items-center justify-center px-6 
          rounded-lg
          ${isControlTower 
            ? 'bg-primary text-white' 
            : 'bg-secondary hover:bg-primary' /* Added bg-secondary for default state */
          }
        `}
        title="Control Tower"
        style={{ height: '65px', width: '60px' }}
        onClick={() => window.location.href = '/control-tower'}
      >
        <img
          src="/control_tower_icon.png"
          alt="Control Tower"
          className={`
            w-13 h-13
            /* 2. Logic: If active OR if parent button is hovered, turn white */
            ${isControlTower 
                ? 'brightness-0 invert' 
                : 'group-hover:brightness-0 group-hover:invert'
            }
          `}
        />
      </button>
      
      {/* Center 9 Buttons - fill remaining space evenly */}
      <div className="flex-1 flex justify-center items-center gap-3">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            className="footer-btn flex-1 flex items-center justify-center"
            title={button.title}
            style={{ 
              maxWidth: '162px', // 108px × 1.5 = 162px
              height: '65px',
              padding: '0 20px'
            }}
          >
            <Icon path={button.icon} size={2.25} />
          </button>
        ))}
      </div>
      
      {/* Right Side Button Z - QR Modelling Suite */}
      <button 
        className={`
          group /* 1. Tracks hover state for the whole button */
          footer-btn 
          flex-shrink-0 
          flex items-center justify-center px-6 
          hover:bg-primary rounded-lg
          ${isQRModelingSuite ? 'bg-primary' : 'bg-secondary'}
        `}
        title="QR Modelling Suite"
        style={{ height: '65px', width: '60px' }}
        onClick={() => window.location.href = '/qr-modeling-suite'}
      >
        <img
          src="/qr_modeling_suite_icon.png"
          alt="QR Modelling Suite"
          className={`
            w-13 h-13
            /* 2. Logic: If active OR if parent button is hovered, turn white */
            ${isQRModelingSuite 
                ? 'brightness-0 invert' 
                : 'group-hover:brightness-0 group-hover:invert'
            }
          `}
        />
      </button>
    </div>
  );
};