// // // // // // // // 'use client';

// // // // // // // // import { RaceButton } from './RaceButtonProps';
// // // // // // // // import { UpcomingTile } from './UpComingTile';
// // // // // // // // import { ControlInput } from './ControlInput';
// // // // // // // // import { RunnerButton } from './RunnerButton';
// // // // // // // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
// // // // // // // // const upcomingRaces = [
// // // // // // // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
// // // // // // // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
// // // // // // // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
// // // // // // // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
// // // // // // // //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// // // // // // // //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// // // // // // // // ];
// // // // // // // // export const ColumnRealm = () => {
// // // // // // // //   const today = new Date().toISOString().slice(0, 10);
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //     {Array.from({ length: 14 }, (_, i) => (
// // // // // // // //       <div
// // // // // // // //         key={i + 1}
// // // // // // // //         className="grid gap-1 py-1.5"
// // // // // // // //         style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
// // // // // // // //       >
// // // // // // // //         <div className="flex items-center justify-center">
// // // // // // // //           <RunnerButton number={i + 1} />
// // // // // // // //         </div>
// // // // // // // //         <div />
// // // // // // // //         <div />
// // // // // // // //         <div />
// // // // // // // //         <div />
// // // // // // // //         <div />
// // // // // // // //       </div>
// // // // // // // //     ))}
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };









// // // // // // // 'use client';

// // // // // // // import { RunnerButton } from './RunnerButton';

// // // // // // // export const ColumnRealm = () => {
// // // // // // //   // Mock data for runners
// // // // // // //   const runners = Array.from({ length: 14 }, (_, i) => i + 1);

// // // // // // //   const Cell = ({ children }: { children?: React.ReactNode }) => (
// // // // // // //     <div className="flex items-center justify-center text-center h-full w-full">
// // // // // // //       {children}
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col gap-2">
// // // // // // //       {runners.map((runnerNum, index) => (
// // // // // // //         <div
// // // // // // //           key={runnerNum}
// // // // // // //           className={`grid gap-3 py-1 px-0 items-center ${
// // // // // // //             index % 2 === 1 ? 'bg-muted/30' : ''
// // // // // // //           }`}
// // // // // // //           style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px', minHeight: '88px' }}
// // // // // // //         >
// // // // // // //           <Cell>
// // // // // // //             <span className="text-sm font-bold text-muted-foreground">{runnerNum}</span>
// // // // // // //           </Cell>
// // // // // // //           <Cell>
// // // // // // //             <RunnerButton number={runnerNum} />
// // // // // // //           </Cell>
// // // // // // //           <Cell>
// // // // // // //             <span className="text-sm">—</span>
// // // // // // //           </Cell>
// // // // // // //           <Cell>
// // // // // // //             <span className="text-sm">—</span>
// // // // // // //           </Cell>
// // // // // // //           <Cell>
// // // // // // //             <span className="text-sm">—</span>
// // // // // // //           </Cell>
// // // // // // //           <Cell>
// // // // // // //             <span className="text-sm">—</span>
// // // // // // //           </Cell>
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };









// // // // // // 'use client';

// // // // // // import { RunnerButton } from './RunnerButton';

// // // // // // export const ColumnRealm = () => {
// // // // // //   // Mock data for runners
// // // // // //   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

// // // // // //   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
// // // // // //     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
// // // // // //       {children || <span className="text-md text-muted-foreground">{/*—*/}</span>}
// // // // // //     </div>
// // // // // //   );

// // // // // //   // Mock data for runner details
// // // // // //   const runnerDetails = [
// // // // // //     { bp: 1, bar: 2, wgt: 58.5, rat: 112, pi: 4.2, omega: 3.8, beta: 2.1, sp: 5.5, win: 6.0, plc: 2.2 },
// // // // // //     { bp: 4, bar: 5, wgt: 56.0, rat: 108, pi: 5.1, omega: 4.2, beta: 1.9, sp: 8.0, win: 8.5, plc: 2.8 },
// // // // // //     // ... more mock data would go here
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="flex flex-col gap-1">
// // // // // //       {runners.map((runnerNum, index) => {
// // // // // //         const details = runnerDetails[index % runnerDetails.length];
        
// // // // // //         return (
// // // // // //           <div
// // // // // //             key={runnerNum}
// // // // // //             className={`grid items-center transition-colors`}
// // // // // //             style={{ 
// // // // // //               gridTemplateColumns: '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px',
// // // // // //               // gridTemplateColumns: '100px 35px 45px 50px 45px 35px 40px 50px 50px 50px 60px 60px 60px 1fr',
// // // // // //               minHeight: '50px',
// // // // // //               maxHeight: '50px',
// // // // // //               height: '50px',
// // // // // //               // background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Runner - Runner button */}
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //                 <RunnerButton number={runnerNum} />
// // // // // //               </Cell>
// // // // // //             </div>

// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>
            
// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 borderRight: '2px solid #ccc',
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>




// // // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // // //               style={{
// // // // // //                 background: index % 2 === 1 ? 'rgba(66, 66, 66, 0.25) !important' : 'transparent !important'
// // // // // //               }}>
              
// // // // // //               <Cell align="left">
// // // // // //               </Cell>
// // // // // //             </div>

// // // // // //         </div>
// // // // // //         );
// // // // // //       })}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

















// // // // // 'use client';

// // // // // import { useState } from 'react';
// // // // // import { RunnerButton } from './RunnerButton';

// // // // // export const ColumnRealm = () => {
// // // // //   // Mock data for runners
// // // // //   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

// // // // //   // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
// // // // //   const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

// // // // //   const handleRunnerClick = (runnerNum: number) => {
// // // // //     setRowStates(prev => {
// // // // //       const currentState = prev[runnerNum] || 0;
// // // // //       // Cycle: 0 -> 1 -> 2 -> 3 -> 0
// // // // //       const nextState = (currentState + 1) % 4;
// // // // //       return {
// // // // //         ...prev,
// // // // //         [runnerNum]: nextState
// // // // //       };
// // // // //     });
// // // // //   };

// // // // //   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
// // // // //     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
// // // // //       {children || <span className="text-md text-muted-foreground"></span>}
// // // // //     </div>
// // // // //   );

// // // // //   // Row background colors based on state
// // // // //   const getRowBackgroundColor = (state: number) => {
// // // // //     switch(state) {
// // // // //       case 1: // Medium Sea Green #0E7A4D
// // // // //         return 'rgba(14, 122, 77, 0.15)'; // 15% opacity
// // // // //       case 2: // Vibrant Yellow #FFCC1F
// // // // //         return 'rgba(255, 204, 31, 0.15)'; // 15% opacity
// // // // //       case 3: // Bright Red #E32422
// // // // //         return 'rgba(227, 36, 34, 0.15)'; // 15% opacity
// // // // //       default:
// // // // //         return 'transparent';
// // // // //     }
// // // // //   };

// // // // //   // Border colors for the right borders based on state
// // // // //   const getBorderColor = (state: number) => {
// // // // //     switch(state) {
// // // // //       case 1: // Medium Sea Green
// // // // //         return 'rgba(14, 122, 77, 0.3)';
// // // // //       case 2: // Vibrant Yellow
// // // // //         return 'rgba(255, 204, 31, 0.3)';
// // // // //       case 3: // Bright Red
// // // // //         return 'rgba(227, 36, 34, 0.3)';
// // // // //       default:
// // // // //         return '#ccc';
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col gap-1">
// // // // //       {runners.map((runnerNum, index) => {
// // // // //         const rowState = rowStates[runnerNum] || 0;
// // // // //         const isEvenRow = index % 2 === 1;
// // // // //         const tramtrackColor = isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent';
// // // // //         const rowBgColor = getRowBackgroundColor(rowState);
// // // // //         const borderColor = getBorderColor(rowState);
        
// // // // //         return (
// // // // //           <div
// // // // //             key={runnerNum}
// // // // //             className="grid items-center transition-colors duration-300"
// // // // //             style={{ 
// // // // //               gridTemplateColumns: '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px',
// // // // //               minHeight: '50px',
// // // // //               maxHeight: '50px',
// // // // //               height: '50px',
// // // // //               background: rowBgColor || (isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent')
// // // // //             }}
// // // // //           >
// // // // //             {/* Runner - Runner button */}
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left">
// // // // //                 <RunnerButton 
// // // // //                   number={runnerNum} 
// // // // //                   onClick={() => handleRunnerClick(runnerNum)}
// // // // //                 />
// // // // //               </Cell>
// // // // //             </div>

// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 borderRight: `2px solid ${borderColor}`,
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>

// // // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // // //               style={{
// // // // //                 background: isEvenRow && !rowBgColor ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // // //               }}>
// // // // //               <Cell align="left"></Cell>
// // // // //             </div>
// // // // //           </div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };












// // // // 'use client';

// // // // import { useState } from 'react';
// // // // import { RunnerButton } from './RunnerButton';

// // // // export const ColumnRealm = () => {
// // // //   // Mock data for runners
// // // //   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

// // // //   // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
// // // //   const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

// // // //   const handleRunnerClick = (runnerNum: number) => {
// // // //     setRowStates(prev => {
// // // //       const currentState = prev[runnerNum] || 0;
// // // //       // Cycle: 0 -> 1 -> 2 -> 3 -> 0
// // // //       const nextState = (currentState + 1) % 4;
// // // //       return {
// // // //         ...prev,
// // // //         [runnerNum]: nextState
// // // //       };
// // // //     });
// // // //   };

// // // //   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
// // // //     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
// // // //       {children || <span className="text-md text-muted-foreground"></span>}
// // // //     </div>
// // // //   );

// // // //   // Column background colors based on state (only for Runner column)
// // // //   const getColumnBackgroundColor = (state: number) => {
// // // //     switch(state) {
// // // //       case 1: // Medium Sea Green #0E7A4D
// // // //         return 'rgb(14, 122, 77)'; // 15% opacity
// // // //       case 2: // Vibrant Yellow #FFCC1F
// // // //         return 'rgb(255, 203, 31)'; // 15% opacity
// // // //       case 3: // Bright Red #E32422
// // // //         return 'rgb(227, 37, 34)'; // 15% opacity
// // // //       default:
// // // //         return 'transparent';
// // // //       // case 1: // Medium Sea Green #0E7A4D
// // // //       //   return 'rgba(14, 122, 77, 0.15)'; // 15% opacity
// // // //       // case 2: // Vibrant Yellow #FFCC1F
// // // //       //   return 'rgba(255, 204, 31, 0.15)'; // 15% opacity
// // // //       // case 3: // Bright Red #E32422
// // // //       //   return 'rgba(227, 36, 34, 0.15)'; // 15% opacity
// // // //       // default:
// // // //       //   return 'transparent';
// // // //     }
// // // //   };

// // // //   // Border colors for the right borders based on state
// // // //   const getBorderColor = (state: number) => {
// // // //     switch(state) {
// // // //       case 1: // Medium Sea Green
// // // //         return 'rgb(14, 122, 77)';
// // // //       case 2: // Vibrant Yellow
// // // //         return 'rgb(255, 203, 31)';
// // // //       case 3: // Bright Red
// // // //         return 'rgb(227, 37, 34)';
// // // //       default:
// // // //         return '#ccc';
// // // //       // case 1: // Medium Sea Green
// // // //       //   return 'rgba(14, 122, 77, 0.3)';
// // // //       // case 2: // Vibrant Yellow
// // // //       //   return 'rgba(255, 204, 31, 0.3)';
// // // //       // case 3: // Bright Red
// // // //       //   return 'rgba(227, 36, 34, 0.3)';
// // // //       // default:
// // // //       //   return '#ccc';
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col gap-1">
// // // //       {runners.map((runnerNum, index) => {
// // // //         const rowState = rowStates[runnerNum] || 0;
// // // //         const isEvenRow = index % 2 === 1;
// // // //         const tramtrackColor = isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent';
// // // //         const columnBgColor = getColumnBackgroundColor(rowState);
// // // //         const borderColor = getBorderColor(rowState);
        
// // // //         return (
// // // //           <div
// // // //             key={runnerNum}
// // // //             className="grid items-center transition-colors duration-300"
// // // //             style={{ 
// // // //               gridTemplateColumns: '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px',
// // // //               minHeight: '60px',
// // // //               maxHeight: '60px',
// // // //               height: '60px',
// // // //             }}
// // // //           >
// // // //             {/* Column 2: Runner button column - THIS GETS THE STATE COLOR */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: `2px solid ${borderColor}`,
// // // //                 background: columnBgColor || (isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent')
// // // //               }}>
// // // //               <Cell align="left">
// // // //                 <RunnerButton 
// // // //                   number={runnerNum} 
// // // //                   onClick={() => handleRunnerClick(runnerNum)}
// // // //                 />
// // // //               </Cell>
// // // //             </div>
            
// // // //             {/* Column 3: (BP) - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left">
// // // //                 <span className="text-sm"></span>
// // // //               </Cell>
// // // //             </div>
            
// // // //             {/* Column 4: AGE - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 5: OCR - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 6: HWT - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 7: DLR - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 8: MTX - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 9: J&T - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 10: FINTIME - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 11: MRG - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
            
// // // //             {/* Column 12: + - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 borderRight: '2px solid #ccc',
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>

// // // //             {/* Column 13: Extra column - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
           
           
// // // //             {/* Column 13: Extra column - no state color */}
// // // //             <div className="flex items-center justify-start border-border h-full w-full"
// // // //               style={{
// // // //                 background: isEvenRow ? 'rgba(66, 66, 66, 0.25)' : 'transparent'
// // // //               }}>
// // // //               <Cell align="left"></Cell>
// // // //             </div>
// // // //           </div>
// // // //         );
// // // //       })}
// // // //     </div>
// // // //   );
// // // // };















// // // 'use client';

// // // import { useState } from 'react';
// // // import { RunnerButton } from './RunnerButton';

// // // export const ColumnRealm = () => {
// // //   // Mock data for runners
// // //   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

// // //   // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
// // //   const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

// // //   const handleRunnerClick = (runnerNum: number) => {
// // //     setRowStates(prev => {
// // //       const currentState = prev[runnerNum] || 0;
// // //       // Cycle: 0 -> 1 -> 2 -> 3 -> 0
// // //       const nextState = (currentState + 1) % 4;
// // //       return {
// // //         ...prev,
// // //         [runnerNum]: nextState
// // //       };
// // //     });
// // //   };

// // //   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
// // //     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
// // //       {children || <span className="text-md text-muted-foreground"></span>}
// // //     </div>
// // //   );

// // //   // Column background colors based on state (only for Runner column)
// // //   const getColumnBackgroundColor = (state: number) => {
// // //     switch(state) {
// // //       case 1: // Medium Sea Green #0E7A4D
// // //         return 'rgb(14, 122, 77)';
// // //       case 2: // Vibrant Yellow #FFCC1F
// // //         return 'rgb(255, 203, 31)';
// // //       case 3: // Bright Red #E32422
// // //         return 'rgb(227, 37, 34)';
// // //       default:
// // //         return 'transparent';
// // //     }
// // //   };

// // //   // Border colors for the right borders based on state
// // //   const getBorderColor = (state: number) => {
// // //     switch(state) {
// // //       case 1: // Medium Sea Green
// // //         return 'rgb(14, 122, 77)';
// // //       case 2: // Vibrant Yellow
// // //         return 'rgb(255, 203, 31)';
// // //       case 3: // Bright Red
// // //         return 'rgb(227, 37, 34)';
// // //       default:
// // //         return 'transparent'; // REMOVED grey column lines
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col gap-0"> {/* CHANGED: gap-1 to gap-0 to remove top gap */}
// // //       {runners.map((runnerNum, index) => {
// // //         const rowState = rowStates[runnerNum] || 0;
// // //         const isEvenRow = index % 2 === 1;
// // //         // CHANGED: Super faint tramtrack - 2% opacity
// // //         const tramtrackColor = isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent';
// // //         const columnBgColor = getColumnBackgroundColor(rowState);
// // //         const borderColor = getBorderColor(rowState);
        
// // //         return (
// // //           <div
// // //             key={runnerNum}
// // //             className="grid items-center transition-colors duration-300"
// // //             style={{ 
// // //               gridTemplateColumns: '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px',
// // //               minHeight: '60px',
// // //               maxHeight: '60px',
// // //               height: '60px',
// // //             }}
// // //           >

// // //             {/* Column 2: Runner button column - THIS GETS THE STATE COLOR */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 borderRight: `2px solid ${borderColor}`,
// // //                 background: columnBgColor || (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
// // //               }}>
// // //               <Cell align="left">
// // //                 <RunnerButton 
// // //                   number={runnerNum} 
// // //                   onClick={() => handleRunnerClick(runnerNum)}
// // //                 />
// // //               </Cell>
// // //             </div>
            
// // //             {/* Column 3: (BP) - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left">
// // //                 <span className="text-sm"></span>
// // //               </Cell>
// // //             </div>
            
// // //             {/* Column 4: AGE - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 5: OCR - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 6: HWT - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 7: DLR - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 8: MTX - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 9: J&T - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 10: FINTIME - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 11: MRG - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
            
// // //             {/* Column 12: + - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>

// // //             {/* Column 13: Extra column - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>

// // //             {/* Column 14: Extra column - no state color */}
// // //             <div className="flex items-center justify-start h-full w-full"
// // //               style={{
// // //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// // //               }}>
// // //               <Cell align="left"></Cell>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

















// // 'use client';

// // import { useState } from 'react';
// // import { RunnerButton } from './RunnerButton';
// // import { useButtonContext } from './ButtonContext';
// // import { getRightSideColumns, BASE_REALM_COLUMNS } from './ColumnConfig';

// // export const ColumnRealm = () => {
// //   const { activeButton } = useButtonContext();
  
// //   // Mock data for runners
// //   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

// //   // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
// //   const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

// //   const handleRunnerClick = (runnerNum: number) => {
// //     setRowStates(prev => {
// //       const currentState = prev[runnerNum] || 0;
// //       const nextState = (currentState + 1) % 4;
// //       return {
// //         ...prev,
// //         [runnerNum]: nextState
// //       };
// //     });
// //   };

// //   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
// //     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
// //       {children || <span className="text-md text-muted-foreground">—</span>}
// //     </div>
// //   );

// //   const getColumnBackgroundColor = (state: number) => {
// //     switch(state) {
// //       case 1: return 'rgb(14, 122, 77)';
// //       case 2: return 'rgb(255, 203, 31)';
// //       case 3: return 'rgb(227, 37, 34)';
// //       default: return 'transparent';
// //     }
// //   };

// //   const getBorderColor = (state: number) => {
// //     switch(state) {
// //       case 1: return 'rgb(14, 122, 77)';
// //       case 2: return 'rgb(255, 203, 31)';
// //       case 3: return 'rgb(227, 37, 34)';
// //       default: return 'transparent';
// //     }
// //   };

// //   const rightColumns = getRightSideColumns(activeButton);
// //   const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
// //   const gridTemplateColumns = `${BASE_REALM_COLUMNS} ${rightColumnWidths}`;

// //   return (
// //     <div className="flex flex-col gap-0">
// //       {runners.map((runnerNum, index) => {
// //         const rowState = rowStates[runnerNum] || 0;
// //         const isEvenRow = index % 2 === 1;
// //         const columnBgColor = getColumnBackgroundColor(rowState);
// //         const borderColor = getBorderColor(rowState);
        
// //         return (
// //           <div
// //             key={runnerNum}
// //             className="grid items-center transition-colors duration-300"
// //             style={{ 
// //               gridTemplateColumns,
// //               minHeight: '60px',
// //               maxHeight: '60px',
// //               height: '60px',
// //             }}
// //           >
// //             {/* Column 1: # - Runner number */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left">
// //                 <span className="text-sm font-bold text-muted-foreground">{runnerNum}</span>
// //               </Cell>
// //             </div>

// //             {/* Column 2: Runner button column - GETS STATE COLOR */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 borderRight: `2px solid ${borderColor}`,
// //                 background: columnBgColor || (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
// //               }}>
// //               <Cell align="left">
// //                 <RunnerButton 
// //                   number={runnerNum} 
// //                   onClick={() => handleRunnerClick(runnerNum)}
// //                 />
// //               </Cell>
// //             </div>
            
// //             {/* Column 3: (BP) */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left">
// //                 <span className="text-sm">{runnerNum}</span>
// //               </Cell>
// //             </div>
            
// //             {/* Column 4: AGE */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 5: OCR */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 6: HWT */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 7: DLR */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 8: MTX */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 9: J&T */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 10: FINTIME */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 11: MRG */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>
            
// //             {/* Column 12: + */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>

// //             {/* Column 13: Extra column */}
// //             <div className="flex items-center justify-start h-full w-full"
// //               style={{
// //                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
// //               }}>
// //               <Cell align="left"></Cell>
// //             </div>

// //             {/* DYNAMIC RIGHT SIDE DATA COLUMNS */}
// //             {rightColumns.map((col, idx) => (
// //               <div 
// //                 key={`data-${idx}`} 
// //                 className={`flex items-center justify-${col.align === 'left' ? 'start' : col.align === 'right' ? 'end' : 'center'} h-full w-full ${col.bgColor || ''}`}
// //                 style={{
// //                   background: col.bgColor ? undefined : (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
// //                 }}
// //               >
// //                 <span className="text-sm px-2">
// //                   {col.align === 'right' ? '$0.00' : col.align === 'center' ? '—' : '—'}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };














// 'use client';

// import { useState } from 'react';
// import { RunnerButton } from './RunnerButton';
// import { useButtonContext } from './ButtonContext';
// import { getRightSideColumns, BASE_REALM_COLUMNS } from './ColumnConfig';

// export const ColumnRealm = () => {
//   const { activeButton } = useButtonContext();
  
//   // Mock data for runners
//   const runners = Array.from({ length: 15 }, (_, i) => i + 1);

//   // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
//   const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

//   const handleRunnerClick = (runnerNum: number) => {
//     setRowStates(prev => {
//       const currentState = prev[runnerNum] || 0;
//       const nextState = (currentState + 1) % 4;
//       return {
//         ...prev,
//         [runnerNum]: nextState
//       };
//     });
//   };

//   const Cell = ({ children, align = 'center' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right' }) => (
//     <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2`}>
//       {children || <span className="text-md text-muted-foreground">—</span>}
//     </div>
//   );

//   const getColumnBackgroundColor = (state: number) => {
//     switch(state) {
//       case 1: return 'rgb(14, 122, 77)';
//       case 2: return 'rgb(255, 203, 31)';
//       case 3: return 'rgb(227, 37, 34)';
//       default: return 'transparent';
//     }
//   };

//   const getBorderColor = (state: number) => {
//     switch(state) {
//       case 1: return 'rgb(14, 122, 77)';
//       case 2: return 'rgb(255, 203, 31)';
//       case 3: return 'rgb(227, 37, 34)';
//       default: return 'transparent';
//     }
//   };

//   const rightColumns = getRightSideColumns(activeButton);
//   const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
//   const gridTemplateColumns = `${BASE_REALM_COLUMNS} ${rightColumnWidths}`;

//   // Generate mock data for right side columns
//   const getMockData = (col: any, runnerNum: number) => {
//     if (col.align === 'right') {
//       return `$${(Math.random() * 10 + 1).toFixed(2)}`;
//     } else if (col.align === 'center') {
//       return ['—', '<', '>', '='][Math.floor(Math.random() * 4)];
//     } else {
//       return '—';
//     }
//   };

//   return (
//     <div className="flex flex-col gap-0">
//       {runners.map((runnerNum, index) => {
//         const rowState = rowStates[runnerNum] || 0;
//         const isEvenRow = index % 2 === 1;
//         const columnBgColor = getColumnBackgroundColor(rowState);
//         const borderColor = getBorderColor(rowState);
        
//         return (
//           <div
//             key={runnerNum}
//             className="grid items-center transition-colors duration-300"
//             style={{ 
//               gridTemplateColumns,
//               minHeight: '60px',
//               maxHeight: '60px',
//               height: '60px',
//             }}
//           >

//             {/* Column 2: Runner button column - GETS STATE COLOR */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 borderRight: `2px solid ${borderColor}`,
//                 background: columnBgColor || (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
//               }}>
//               <Cell align="left">
//                 <RunnerButton 
//                   number={runnerNum} 
//                   onClick={() => handleRunnerClick(runnerNum)}
//                 />
//               </Cell>
//             </div>
                        
//             {/* Column 4: AGE */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 5: OCR */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 6: HWT */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 7: DLR */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 8: MTX */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 9: J&T */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 10: FINTIME */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 11: MRG */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>
            
//             {/* Column 12: + */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>

//             {/* Column 13: Extra column */}
//             <div className="flex items-center justify-start h-full w-full"
//               style={{
//                 background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
//               }}>
//               <Cell align="left"></Cell>
//             </div>

//             {/* DYNAMIC RIGHT SIDE DATA COLUMNS - COLORS APPLIED HERE */}
//             {rightColumns.map((col, idx) => (
//               <div 
//                 key={`data-${idx}`} 
//                 className={`flex items-center justify-${col.align === 'left' ? 'start' : col.align === 'right' ? 'end' : 'center'} h-full w-full`}
//                 style={{
//                   backgroundColor: col.bgColor ? undefined : (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'),
//                   background: col.bgColor || undefined
//                 }}
//               >
//                 <div className={`h-full w-full flex items-center justify-${col.align === 'left' ? 'start' : col.align === 'right' ? 'end' : 'center'} px-2 ${col.bgColor || ''}`}>
//                   <span className="text-sm">
//                     {getMockData(col, runnerNum)}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// };






















'use client';

import { useState } from 'react';
import { RunnerButton } from './RunnerButton';
import { useButtonContext } from './ButtonContext';
import { getRightSideColumns, BASE_REALM_LEFT_COLUMNS, BASE_REALM_RIGHT_COLUMNS } from './ColumnConfig';

export const ColumnRealm = () => {
  const { activeButton } = useButtonContext();
  
  // Mock data for runners
  const runners = Array.from({ length: 15 }, (_, i) => i + 1);

  // Track click states for each runner row (0 = default, 1 = green, 2 = yellow, 3 = red)
  const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

  const handleRunnerClick = (runnerNum: number) => {
    setRowStates(prev => {
      const currentState = prev[runnerNum] || 0;
      const nextState = (currentState + 1) % 4;
      return {
        ...prev,
        [runnerNum]: nextState
      };
    });
  };

  const Cell = ({ children, align = 'center', cssClasses = '' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right'; cssClasses?: string }) => (
    <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2 ${cssClasses}`}>
      {children || <span className="text-md text-muted-foreground">
        {/* — */}
      </span>}
    </div>
  );

  const getColumnBackgroundColor = (state: number) => {
    switch(state) {
      case 1: return 'rgb(14, 122, 77)';
      case 2: return 'rgb(255, 203, 31)';
      case 3: return 'rgb(227, 37, 34)';
      default: return 'transparent';
    }
  };

  const getBorderColor = (state: number) => {
    switch(state) {
      case 1: return 'rgb(14, 122, 77)';
      case 2: return 'rgb(255, 203, 31)';
      case 3: return 'rgb(227, 37, 34)';
      default: return 'transparent';
    }
  };

  const rightColumns = getRightSideColumns(activeButton);
  const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
  const gridTemplateColumns = `${BASE_REALM_LEFT_COLUMNS} ${BASE_REALM_RIGHT_COLUMNS} ${rightColumnWidths}`;

  // Generate mock data for right side columns
  const getMockData = (col: any, runnerNum: number) => {
    if (col.align === 'right') {
      return `$${(Math.random() * 10 + 1).toFixed(2)}`;
    } else if (col.align === 'center') {
      return ['—', '<', '>', '='][Math.floor(Math.random() * 4)];
    } else {
      return '—';
    }
    return '';
  };

  return (
    <div className="flex flex-col gap-0">
      {runners.map((runnerNum, index) => {
        const rowState = rowStates[runnerNum] || 0;
        const isEvenRow = index % 2 === 1;
        const columnBgColor = getColumnBackgroundColor(rowState);
        const borderColor = getBorderColor(rowState);
        
        return (
          <div
            key={runnerNum}
            className="grid items-center transition-colors duration-300"
            style={{ 
              gridTemplateColumns,
              minHeight: '60px',
              maxHeight: '60px',
              height: '60px',
            }}
          >

            {/* Column 1: The Runner Number Button State Change */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                borderRight: `2px solid ${borderColor}`,
                background: columnBgColor || (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
              }}>
              <Cell align="left"
                // cssClasses="border border-[#333]"
              >
                <RunnerButton 
                  number={runnerNum} 
                  onClick={() => handleRunnerClick(runnerNum)}
                />
              </Cell>
            </div>
            
            
            {/* Column 2: Runner Column */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"

              // cssClasses="border border-[#333]"

              >
                {/* RUNNER COL */}
              </Cell>
            </div>
            
            {/* Column 3: BP Column */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* BP */}
              </Cell>
            </div>
            
            {/* Column 4: AGE */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* AGE */}
              </Cell>
            </div>
            
            {/* Column 5: OCR */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* OCR */}
              </Cell>
            </div>
            
            {/* Column 6: HWT */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* HWT */}
              </Cell>
            </div>
            
            {/* Column 7: DLR */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* DLR */}
              </Cell>
            </div>
            
            {/* Column 8: MTX */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* MTX */}
              </Cell>
            </div>
            
            {/* Column 8: MTX */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
                // background: '#333 !important'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* J&T */}
              </Cell>
            </div>
            
            {/* Column 9: J&T */}
            <div className="flex items-start justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}
              >
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* FIN */}
              </Cell>
            </div>
            
            {/* Column 10: FINTIME */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* MRG */}
              </Cell>
            </div>
            
            {/* Column 11: Add */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {/* + */}
              </Cell>
            </div>
            
            
            {activeButton === 0 && (
              <div className="flex items-center justify-start h-full w-[1530]"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}
              >
                <Cell align="left"
                
                // cssClasses="border border-[#333]"
                
                >
                  {/* Right-side columns */}
                </Cell>
              </div>
            )}

            {/* DYNAMIC RIGHT SIDE DATA COLUMNS */}
            {rightColumns.map((col, idx) => (
              <div 
                key={`data-${idx}`} 
                className={`flex items-center justify-${col.align === 'left' ? 'start' : col.align === 'right' ? 'end' : 'center'} h-full w-full`}
                style={{
                  backgroundColor: col.bgColor ? undefined : (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'),
                  background: col.bgColor || undefined
                }}
              >
                <div className={`
                    h-full w-full flex items-center px-2
                    
                    /* 1. Safe Alignment Logic */
                    ${col.align === 'left' ? 'justify-start' : col.align === 'center' ? 'justify-end' : 'justify-center'} 
                    
                    /* 2. Simplified Background Logic */
                    /*
                    
                      /* 2. Simplified Background Logic */
                      ${isEvenRow && ![
                        'col_1_2',  // TOTE W | P
                        'col_2_2',  // A_Theo (case 2)
                        'col_3_2',  // A_Theo (case 3)
                        'col_2_3',  // cAlpha (case 2)
                        'col_3_3',  // cAlpha (case 3)
                        'col_1_6',  // FXD (case 1)
                        'col_2_4',  // SBT (case 2)
                        'col_2_5', 'col_2_6', 'col_2_7', 'col_2_8', 'col_2_9', 'col_2_10', 'col_2_11',  // FXD columns (case 2)
                        'col_3_4', 'col_3_5', 'col_3_6',  // B3, B2, B1 (case 3)
                        'col_3_7', 'col_3_8',  // LPT, WAP (case 3)
                        'col_3_9', 'col_3_10', 'col_3_11',  // L1, L2, L3 (case 3)
                        'col_1_7'   // BFXLPT (case 1)
                      ].includes(col.column_id ?? '') 
                        ? 'bg-secondary/20' 
                        : ''}
                      
                    /* 3. External Custom Color */
                    ${col.bgColor || ''}
                  `}>
                    {/* ${isEvenRow && col.label !== 'TOTE W | P' ? 'bg-secondary/20' : 'transparent'}
                    ${isEvenRow && col.label !== 'FXD' ? 'bg-secondary/20' : 'transparent'}
                    ${isEvenRow && col.label !== 'BFXLPT' ? 'bg-secondary/20' : 'transparent'} */}
                  <span className="text-sm">
                    {/* {getMockData(col, runnerNum)} */}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};