// 'use client';

// import { mdiChartAreaspline } from "@mdi/js";
// import Icon from "@mdi/react";
// import { FaChartArea } from "react-icons/fa";

// export const Footer = () => {
//   return (
//     <div 
//       className="fixed bottom-2 left-2 right-2 h-9 flex items-center z-50 p-7 gap-1.5 rounded-xl shadow-lg"
//       style={{ background: 'hsl(var(--cockpit-footer))' }}
//     >
//       {/* Left Edge Button - floats left */}
//       <button className="footer-btn flex-shrink-0" title="Market Graph (Runner Select)">
//         <Icon path={mdiChartAreaspline} size={1} />
//       </button>
      
//       {/* Center 9 Buttons - fill remaining space evenly */}
//       <div className="flex-1 flex justify-center items-center gap-1.5">
//         {Array.from({ length: 9 }, (_, i) => (
//           <button key={i} className="footer-btn flex-1 max-w-[108px]" />
//         ))}
//       </div>
//       {/* Right Edge Button - floats right */}
//       <button className="footer-btn flex-shrink-0" />
      
      
      
//       {/* Left Edge Button - floats left */}
//       {/* <button className="footer-btn flex-shrink-0" /> */}
//       {/* Center 9 Buttons - fill remaining space evenly */}
//       {/* <div className="flex-1 flex justify-center items-center gap-1.5">
//         {Array.from({ length: 9 }, (_, i) => (
//           <button key={i} className="footer-btn flex-1 max-w-[108px]" />
//         ))}
//       </div> */}
//       {/* Right Edge Button - floats right */}
//       {/* <button className="footer-btn flex-shrink-0" /> */}


//     </div>
//   );
// };








'use client';

import { 
  mdiChartAreaspline, 
  mdiCashSync, 
  mdiAccessPoint, 
  mdiGrid,  // Changed from mdiVectorGrid
  mdiPulse, 
  mdiVectorLine,  // Changed from mdiVectorPoint
  mdiClipboardTextOutline,  // Changed from mdiClipboardText
  mdiCheckDecagram, 
  mdiFinance 
} from "@mdi/js";
import Icon from "@mdi/react";

export const Footer = () => {
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
      icon: mdiGrid  // Using mdiGrid instead of mdiVectorGrid
    },
    { 
      title: "Manual Trigger / Pulse / Market Status", 
      icon: mdiPulse 
    },
    { 
      title: "Speed Map / Matrix (Actual)", 
      icon: mdiVectorLine  // Using mdiVectorLine instead of mdiVectorPoint
    },
    { 
      title: "Market Intel Summary", 
      icon: mdiClipboardTextOutline  // Using mdiClipboardTextOutline
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
      className="fixed bottom-2 left-2 right-2 h-9 flex items-center z-50 p-7 gap-1.5 rounded-xl shadow-lg"
      style={{ background: 'hsl(var(--cockpit-footer))' }}
    >
      {/* Center 9 Buttons - fill remaining space evenly */}
      <div className="flex-1 flex justify-center items-center gap-1.5">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            className="footer-btn flex-1 max-w-[108px] flex items-center justify-center p-5"
            title={button.title}
          >
            <Icon path={button.icon} size={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
};