// // 'use client';

// // import { RaceButton } from './RaceButtonProps';
// // import { UpcomingTile } from './UpComingTile';
// // import { ControlInput } from './ControlInput';
// // import { RunnerButton } from './RunnerButton';
// // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
// // const upcomingRaces = [
// //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
// //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
// //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
// //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
// //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// // ];
// // export const ColumnRealm = () => {
// //   const today = new Date().toISOString().slice(0, 10);
// //   return (
// //     <>
// //     {Array.from({ length: 14 }, (_, i) => (
// //       <div
// //         key={i + 1}
// //         className="grid gap-1 py-1.5"
// //         style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
// //       >
// //         <div className="flex items-center justify-center">
// //           <RunnerButton number={i + 1} />
// //         </div>
// //         <div />
// //         <div />
// //         <div />
// //         <div />
// //         <div />
// //       </div>
// //     ))}
// //     </>
// //   );
// // };









// 'use client';

// import { RunnerButton } from './RunnerButton';

// export const ColumnRealm = () => {
//   // Mock data for runners
//   const runners = Array.from({ length: 14 }, (_, i) => i + 1);

//   const Cell = ({ children }: { children?: React.ReactNode }) => (
//     <div className="flex items-center justify-center text-center h-full w-full">
//       {children}
//     </div>
//   );

//   return (
//     <div className="flex flex-col gap-2">
//       {runners.map((runnerNum, index) => (
//         <div
//           key={runnerNum}
//           className={`grid gap-3 py-1 px-0 items-center ${
//             index % 2 === 1 ? 'bg-muted/30' : ''
//           }`}
//           style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px', minHeight: '88px' }}
//         >
//           <Cell>
//             <span className="text-sm font-bold text-muted-foreground">{runnerNum}</span>
//           </Cell>
//           <Cell>
//             <RunnerButton number={runnerNum} />
//           </Cell>
//           <Cell>
//             <span className="text-sm">—</span>
//           </Cell>
//           <Cell>
//             <span className="text-sm">—</span>
//           </Cell>
//           <Cell>
//             <span className="text-sm">—</span>
//           </Cell>
//           <Cell>
//             <span className="text-sm">—</span>
//           </Cell>
//         </div>
//       ))}
//     </div>
//   );
// };









'use client';

import { RunnerButton } from './RunnerButton';

export const ColumnRealm = () => {
  // Mock data for runners
  const runners = Array.from({ length: 9 }, (_, i) => i + 1);

  const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
    <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
      {children || <span className="text-sm text-muted-foreground">—</span>}
    </div>
  );

  // Mock data for runner details
  const runnerDetails = [
    { bp: 1, bar: 2, wgt: 58.5, rat: 112, pi: 4.2, omega: 3.8, beta: 2.1, sp: 5.5, win: 6.0, plc: 2.2 },
    { bp: 4, bar: 5, wgt: 56.0, rat: 108, pi: 5.1, omega: 4.2, beta: 1.9, sp: 8.0, win: 8.5, plc: 2.8 },
    // ... more mock data would go here
  ];

  return (
    <div className="flex flex-col gap-1">
      {runners.map((runnerNum, index) => {
        const details = runnerDetails[index % runnerDetails.length];
        
        return (
          <div
            key={runnerNum}
            className={`grid items-center py-1 rounded-lg transition-colors ${
              index % 2 === 1 ? 'bg-muted/20' : ''
            }`}
            style={{ 
              gridTemplateColumns: '100px 35px 45px 50px 45px 35px 40px 50px 50px 50px 60px 60px 60px 1fr',
              gap: '4px',
              minHeight: '82px'
            }}
          >
            
            {/* Runner - Runner button */}
            <Cell align="left">
              <RunnerButton number={runnerNum} />
            </Cell>
            
            {/* # - Runner number */}
            {/* <Cell align="left">
              <span className="text-sm font-bold">{runnerNum}</span>
            </Cell> */}
            
            {/* BP - Barrier Position */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.bp || runnerNum}</span>
            </Cell> */}
            
            {/* Silks - Placeholder for silk colors */}
            {/* <Cell align="left">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-blue-500 border border-border"></div>
            </Cell> */}
            
            {/* Bar */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.bar || '-'}</span>
            </Cell> */}
            
            {/* Wgt - Weight */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.wgt || '—'}</span>
            </Cell> */}
            
            {/* Rat - Rating */}
            {/* <Cell align="left">
              <span className="text-sm font-medium">{details?.rat || '—'}</span>
            </Cell> */}
            
            {/* π - Pi (rating) */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.pi || '—'}</span>
            </Cell> */}
            
            {/* Ω - Omega */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.omega || '—'}</span>
            </Cell> */}
            
            {/* β - Beta */}
            {/* <Cell align="left">
              <span className="text-sm">{details?.beta || '—'}</span>
            </Cell> */}
            
            {/* SP - Starting Price */}
            {/* <Cell align="right">
              <span className="text-sm font-bold text-primary">{details?.sp || '—'}</span>
            </Cell> */}
            
            {/* Win */}
            {/* <Cell align="right">
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{details?.win || '—'}</span>
            </Cell> */}
            
            {/* Plc - Place */}
            {/* <Cell align="right">
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{details?.plc || '—'}</span>
            </Cell> */}
            
            {/* Other Markets */}
            {/* <Cell align="left">
              <span className="text-xs text-muted-foreground">+8</span>
            </Cell> */}
          </div>
        );
      })}
    </div>
  );
};