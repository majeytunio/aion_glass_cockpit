// // // // // // import { RaceButton } from './RaceButtonProps';
// // // // // // import { UpcomingTile } from './UpComingTile';
// // // // // // import { ControlInput } from './ControlInput';

// // // // // // import Image from 'next/image';

// // // // // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
// // // // // // const upcomingRaces = [
// // // // // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
// // // // // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
// // // // // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
// // // // // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
// // // // // //   { trackCode: 'SHATI', raceNo: 5, ttm: '120m' },
// // // // // //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// // // // // // ];
// // // // // // export const HeaderRealm = () => {
// // // // // //   const today = new Date().toISOString().slice(0, 10);
// // // // // //   return (
// // // // // //     <div className="cockpit-card p-5 mx-4 mt-4 relative">
// // // // // //       {/* Top Row */}
// // // // // //       <div className="flex items-center justify-between">
// // // // // //         {/* Left: Flag + Track + Race Buttons */}
// // // // // //         <div className="flex items-center gap-3">
// // // // // //           <img
// // // // // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // // // // //             alt="HK Flag"
// // // // // //             className="w-10 h-7 rounded-md shadow-md object-cover"
// // // // // //           />
// // // // // //           <span className="text-xl font-black tracking-tight min-w-[140px]">SHA TIN</span>
// // // // // //           <div className="flex gap-1.5">
// // // // // //             {Array.from({ length: 10 }, (_, i) => (
// // // // // //               <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Center: Controls Block */}
// // // // // //         <div className="flex flex-col gap-2.5 ml-8">
// // // // // //           {/* Row 1: Upcoming Tiles */}
// // // // // //           <div className="grid gap-2.5 " style={{ gridTemplateColumns: 'repeat(6, 114px)' }}>
// // // // // //             {upcomingRaces.map((race, i) => (
// // // // // //               <UpcomingTile
// // // // // //                 key={i}
// // // // // //                 trackCode={race.trackCode}
// // // // // //                 raceNo={race.raceNo}
// // // // // //                 ttm={race.ttm}
// // // // // //                 isEmpty={race.isEmpty}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Row 2: Action Tiles + Search */}
// // // // // //           <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 100px) 300px' }}>
// // // // // //             {Array.from({ length: 9 }, (_, i) => (
// // // // // //               <div key={i} className="h-9 rounded-xl bg-secondary" />
// // // // // //             ))}
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Search…"
// // // // // //               className="h-9 rounded-xl border border-border px-3 font-semibold"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Right: Status + Version */}
// // // // // //         <div className="text-right ml-6">
// // // // // //           <>
// // // // // //           <Image
// // // // // //             src="/aion_logo.png"
// // // // // //             alt="Pulse Icon"
// // // // // //             width={50}
// // // // // //             height={50}
// // // // // //             className="mx-auto mb-1"
// // // // // //           />
// // // // // //           <div className="text-sm font-black tracking-[0.18em] text-primary text-center">PULSE</div>
// // // // // //           <div className="text-xs font-bold text-muted-foreground text-center">{UI_VERSION}</div>
// // // // // //           </>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       {/* 2x2 Input Grid */}
// // // // // //       <div className="grid gap-x-5 gap-y-3.5 mt-5" style={{ gridTemplateColumns: '220px 220px' }}>
// // // // // //         <ControlInput label="Territory" value="HK" />
// // // // // //         <ControlInput label="Date" value={today} />
// // // // // //         <ControlInput label="Code" value="RACE001" />
// // // // // //         <ControlInput label="Track" value="SHATIN" />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };






// // // // // 'use client';

// // // // // import { RaceButton } from './RaceButtonProps';
// // // // // import { UpcomingTile } from './UpComingTile';
// // // // // import { ControlInput } from './ControlInput';

// // // // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // // // // const upcomingRaces = [
// // // // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// // // // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// // // // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// // // // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// // // // //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// // // // //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// // // // // ];

// // // // // export const HeaderRealm = () => {
// // // // //   const today = new Date().toISOString().slice(0, 10);

// // // // //   return (
// // // // //     <div className="cockpit-card p-5 mx-4 mt-4 relative h-60">
// // // // //       {/* Top Row - Everything aligned horizontally */}
// // // // //       <div className="flex items-start justify-between">
// // // // //         {/* Left Section: Flag + Track */}
// // // // //         <div className="flex items-center gap-3">
// // // // //           <img
// // // // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // // // //             alt="HK Flag"
// // // // //             className="w-10 h-7 rounded-md shadow-md object-cover"
// // // // //           />
// // // // //           <span className="text-xl font-black tracking-tight">SHA TIN</span>
// // // // //         </div>

// // // // //         {/* Center Section: Control Inputs (Territory/Date/Code/Track) */}
// // // // //         {/* <div className="absolute left-[27.5%] transform -translate-x-1/2 top-5"> */}
// // // // //         <div className="absolute left-5 top-18">
// // // // //           <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: '220px 220px' }}>
// // // // //             <ControlInput label="Territory" value="HK" />
// // // // //             <ControlInput label="Date" value={today} />
// // // // //             <ControlInput label="Code" value="RACE001" />
// // // // //             <ControlInput label="Track" value="SHATIN" />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Section: Combined Upcoming Races, Buttons, and Logo */}
// // // // //         <div className="flex items-start gap-6">
// // // // //           {/* Upcoming Races and Buttons Column */}
// // // // //           <div className="flex flex-col gap-2.5">
// // // // //             {/* Row 1: Upcoming Tiles (6 tiles) */}
// // // // //             <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(6, 90px)', justifyContent: 'right' }}>
// // // // //               {upcomingRaces.map((race, i) => (
// // // // //                 <UpcomingTile
// // // // //                   key={i}
// // // // //                   trackCode={race.trackCode}
// // // // //                   raceNo={race.raceNo}
// // // // //                   ttm={race.ttm}
// // // // //                   countryCode={race.countryCode}
// // // // //                   isEmpty={false}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Row 2: Race Buttons (10 buttons) */}
// // // // //             <div className="flex gap-1.5" style={{ justifyContent: 'right' }}>
// // // // //               {Array.from({ length: 10 }, (_, i) => (
// // // // //                 <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Row 3: Action Buttons (5) + Search */}
// // // // //             <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(5, 65px) 220px', justifyContent: 'right' }}>
// // // // //               {Array.from({ length: 5 }, (_, i) => (
// // // // //                 <div key={i} className="h-9 rounded-xl bg-secondary" />
// // // // //               ))}
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search…"
// // // // //                 className="h-9 rounded-xl border border-border px-3 font-semibold"
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Logo/Pulse/Version Column */}
// // // // //           <div className="text-right flex flex-col items-center">
// // // // //             <div className="text-sm font-black tracking-[0.18em] text-primary">PULSE</div>
// // // // //             <div className="text-xs font-bold text-muted-foreground mb-2">{UI_VERSION}</div>
// // // // //             {/* Aion Logo */}
// // // // //             <div className="flex items-center justify-center">
// // // // //               {/* <span className="text-sm font-bold text-muted-foreground">AION</span> */}
// // // // //               <img
// // // // //                 src="/aion_logo.png"
// // // // //                 alt="HK Flag"
// // // // //                 className="w-10 h-10 rounded-md shadow-md object-cover"
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };







// // // // 'use client';

// // // // import { RaceButton } from './RaceButtonProps';
// // // // import { UpcomingTile } from './UpComingTile';
// // // // import { ControlInput } from './ControlInput';

// // // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // // // const upcomingRaces = [
// // // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// // // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// // // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// // // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// // // //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// // // //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// // // // ];

// // // // export const HeaderRealm = () => {
// // // //   const today = new Date().toISOString().slice(0, 10);

// // // //   return (
// // // //     <div className="cockpit-card p-5 mx-4 mt-4 relative h-60">
// // // //       {/* Top Row - Everything aligned horizontally */}
// // // //       <div className="flex items-start justify-between">
// // // //         {/* Left Section: Flag + Track */}
// // // //         <div className="flex items-center gap-3">
// // // //           <img
// // // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // // //             alt="HK Flag"
// // // //             className="w-10 h-7 rounded-md shadow-md object-cover"
// // // //           />
// // // //           <span className="text-xl font-black tracking-tight">SHA TIN</span>
// // // //         </div>

// // // //         {/* Center Section: Control Inputs (Territory/Date/Code/Track) */}
// // // //         {/* <div className="absolute left-[27.5%] transform -translate-x-1/2 top-5"> */}
// // // //         <div className="absolute left-5 top-18">
// // // //           <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: '220px 220px' }}>
// // // //             <ControlInput label="Territory" value="HK" />
// // // //             <ControlInput label="Date" value={today} />
// // // //             <ControlInput label="Code" value="RACE001" />
// // // //             <ControlInput label="Track" value="SHATIN" />
// // // //           </div>
// // // //         </div>

// // // //         {/* Alteernative Design */}
// // // //         <div className="flex items-end gap-6">
// // // //           {/* Upcoming Races and Buttons Column */}
// // // //           <div className="flex flex-col gap-2.5">
// // // //             {/* Row 1: Upcoming Tiles (6 tiles) */}
            

// // // //             {/* Row 2: Race Buttons (10 buttons) */}
// // // //             <div className="flex gap-1.5" style={{ justifyContent: 'right' }}>
// // // //               {Array.from({ length: 10 }, (_, i) => (
// // // //                 <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// // // //               ))}
// // // //             </div>

// // // //           </div>
// // // //         </div>

// // // //         {/* Right Section: Combined Upcoming Races, Buttons, and Logo */}
// // // //         <div className="flex items-start gap-6">
// // // //           {/* Upcoming Races and Buttons Column */}
// // // //           <div className="flex flex-col gap-2.5">
// // // //             {/* Row 1: Upcoming Tiles (6 tiles) */}
// // // //             <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(6, 90px)', justifyContent: 'right' }}>
// // // //               {upcomingRaces.map((race, i) => (
// // // //                 <UpcomingTile
// // // //                   key={i}
// // // //                   trackCode={race.trackCode}
// // // //                   raceNo={race.raceNo}
// // // //                   ttm={race.ttm}
// // // //                   countryCode={race.countryCode}
// // // //                   isEmpty={false}
// // // //                 />
// // // //               ))}
// // // //             </div>

// // // //             {/* Row 3: Action Buttons (5) + Search */}
// // // //             <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(5, 65px) 220px', justifyContent: 'right' }}>
// // // //               {Array.from({ length: 5 }, (_, i) => (
// // // //                 <div key={i} className="h-9 rounded-xl bg-secondary" />
// // // //               ))}
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search…"
// // // //                 className="h-9 rounded-xl border border-border px-3 font-semibold"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* Logo/Pulse/Version Column */}
// // // //           <div className="text-right flex flex-col items-center">
// // // //             <div className="text-sm font-black tracking-[0.18em] text-primary">PULSE</div>
// // // //             <div className="text-xs font-bold text-muted-foreground mb-2">{UI_VERSION}</div>
// // // //             {/* Aion Logo */}
// // // //             <div className="flex items-center justify-center">
// // // //               {/* <span className="text-sm font-bold text-muted-foreground">AION</span> */}
// // // //               <img
// // // //                 src="/aion_logo.png"
// // // //                 alt="HK Flag"
// // // //                 className="w-10 h-10 rounded-md shadow-md object-cover"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };










// // // 'use client';

// // // import { RaceButton } from './RaceButtonProps';
// // // import { UpcomingTile } from './UpComingTile';
// // // import { ControlInput } from './ControlInput';

// // // const UI_VERSION =
// // //   new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // // const upcomingRaces = [
// // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 7, ttm: '211m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 8, ttm: '246m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 9, ttm: '281m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 10, ttm: '316m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 11, ttm: '351m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 12, ttm: '386m', countryCode: 'HK' },
// // // ];

// // // export const HeaderRealm = () => {
// // //   const today = new Date().toISOString().slice(0, 10);

// // //   return (
// // //     <div className="cockpit-card p-5 mx-4 mt-4 relative">
// // //       {/* MAIN HEADER ROW */}
// // //       <div className="flex items-start justify-between">
// // //         {/* LEFT: FLAG + TRACK */}
// // //         <div className="flex items-center gap-3 self-center">
// // //           <img
// // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // //             alt="HK Flag"
// // //             className="w-15 h-15 rounded-md shadow-md object-cover"
// // //           />
// // //           <span className="text-xl font-black tracking-tight">
// // //             SHA TIN
// // //           </span>
// // //         </div>

// // //         {/* RIGHT: RACES + ACTIONS + BRAND */}
// // //         <div className="flex items-start gap-6">
// // //           {/* RACE & ACTION COLUMN */}
// // //           <div className="flex flex-col gap-3 mt-5">

// // //             {/* WEATHER + RACE BUTTONS */}
// // //             <div className="flex items-center justify-end gap-1.5">
// // //               {/* Weather Icon Placeholder */}
// // //               <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center">
// // //                 ☁️
// // //               </div>

// // //               {/* Race Number Buttons */}
// // //               <div className="flex gap-1.5">
// // //                 {Array.from({ length: 10 }, (_, i) => (
// // //                   <RaceButton
// // //                     key={i + 1}
// // //                     number={i + 1}
// // //                     isActive={i === 0}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* CENTER: CONTROL INPUTS */}
// // //         <div className="flex items-start">
// // //           <div
// // //             className="grid gap-x-5 gap-y-3.5"
// // //             // style={{ gridTemplateColumns: '220px 220px' }}
// // //             style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
// // //           >
// // //             <ControlInput label="Territory" value="HK" />
// // //             <ControlInput label="Date" value={today} />
// // //             <ControlInput label="Code" value="RACE001" />
// // //             <ControlInput label="Track" value="SHATIN" />
// // //           </div>
// // //         </div>

// // //         {/* RIGHT: RACES + ACTIONS + BRAND */}
// // //         <div className="flex items-start gap-6">
// // //           {/* RACE & ACTION COLUMN */}
// // //           <div className="flex flex-col gap-3">
// // //             {/* UPCOMING RACES */}
// // //             <div
// // //               className="grid gap-2.5 justify-end"
// // //               style={{ gridTemplateColumns: 'repeat(12, 90px)' }}
// // //             >
// // //               {upcomingRaces.map((race, i) => (
// // //                 <UpcomingTile
// // //                   key={i}
// // //                   trackCode={race.trackCode}
// // //                   raceNo={race.raceNo}
// // //                   ttm={race.ttm}
// // //                   countryCode={race.countryCode}
// // //                   isEmpty={false}
// // //                 />
// // //               ))}
// // //             </div>

// // //             {/* ACTION BUTTONS + SEARCH */}
// // //             <div
// // //               className="grid gap-2 justify-end"
// // //               style={{ gridTemplateColumns: 'repeat(10, 112px)' }}
// // //             >
// // //               {Array.from({ length: 10 }, (_, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="h-9 rounded-xl bg-secondary"
// // //                 />
// // //               ))}
// // //             </div>
// // //             <div
// // //               className="grid gap-2 justify-end"
// // //               style={{ gridTemplateColumns: 'repeat(5, 112px) 592px' }}
// // //             >
// // //               {Array.from({ length: 5 }, (_, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="h-9 rounded-xl bg-secondary"
// // //                 />
// // //               ))}
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search…"
// // //                 className="h-9 rounded-xl border border-border px-3 font-semibold"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* BRAND COLUMN */}
// // //           <div className="text-right flex flex-col items-center">
// // //             <div className="text-sm font-black tracking-[0.18em] text-primary">
// // //               PULSE
// // //             </div>
// // //             <div className="text-xs font-bold text-muted-foreground mb-2">
// // //               {UI_VERSION}
// // //             </div>
// // //             <img
// // //               src="/aion_logo.png"
// // //               alt="Aion Logo"
// // //               className="w-10 h-10 rounded-md shadow-md object-cover"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };


















// // 'use client';

// // import { RaceButton } from './RaceButtonProps';
// // import { UpcomingTile } from './UpComingTile';
// // import { ControlInput } from './ControlInput';

// // const UI_VERSION =
// //   new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // const upcomingRaces = [
// //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 7, ttm: '211m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 8, ttm: '246m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 9, ttm: '281m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 10, ttm: '316m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 11, ttm: '351m', countryCode: 'HK' },
// //   // { trackCode: 'SHATI', raceNo: 12, ttm: '386m', countryCode: 'HK' },
// // ];

// // export const HeaderRealm = () => {
// //   const today = new Date().toISOString().slice(0, 10);

// //   // return (
// //   //   <div className="cockpit-card p-5 mx-4 mt-4 relative">
// //   //     {/* TOP ROW */}
// //   //     <div className="flex items-start justify-between">
        
// //   //       {/* HEADER SECTION ROW 1 */}
// //   //       <div className='flex items-start gap-3'>
// //   //         <div className="flex items-start gap-3">
// //   //           <img
// //   //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //   //             alt="HK Flag"
// //   //             className="w-10 h-7 rounded-md shadow-md object-cover"
// //   //           />
// //   //           <span className="text-xl font-black tracking-tight">
// //   //             SHA TIN
// //   //           </span>
// //   //         </div>

// //   //         {/* CENTER: FLAG + TRACK + WEATHER + 10 RACE BUTTONS */}
// //   //         <div className="flex flex-col items-center gap-3">          
// //   //           {/* 10 Race Buttons */}
// //   //           <div className="flex gap-1.5 text-[20pt]">
// //   //             {/* Weather Icon */}
// //   //             <div className="w-15 h-15 rounded-md bg-muted flex items-center justify-center ml-3 text-[25pt]">
// //   //               {/* ☁️ */}
// //   //               <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //   //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
// //   //               </svg>

// //   //             </div>
// //   //             {Array.from({ length: 12 }, (_, i) => (
// //   //               <RaceButton
// //   //                 className="w-15 h-15 text-[14pt]"
// //   //                 key={i + 1}
// //   //                 number={i + 1}
// //   //                 isActive={i === 0}
// //   //               />
// //   //             ))}
// //   //           </div>


            
// //   //         </div>


// //   //         {/* LEFT: CONTROL INPUTS (2x2 vertical) */}
// //   //         <div className="flex items-start gap-6">
// //   //           {/* Control Inputs Grid */}
// //   //           <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: 'repeat(4, 150px)' }}>
// //   //             <ControlInput label="Territory" value="HK" />
// //   //             <ControlInput label="Date" value={today} />
// //   //             <ControlInput label="Code" value="RACE001" />
// //   //             <ControlInput label="Track" value="SHATIN" />
// //   //           </div>
// //   //         </div>
// //   //       </div>
        
        
// //   //       {/* Header Section ROW 2 */}
// //   //       <div className='flex items-start gap-3'>
// //   //         {/* RACE DETAILS SECTION - Separate row below everything */}
// //   //         <div className="pt-5 mt-4">
// //   //           {/* Row 1: 7 controls */}
// //   //           <div className="grid grid-cols-8 gap-3 mb-3" style={{ gridTemplateColumns: 'repeat(7, 170px)' }}>
// //   //             <ControlInput label="Post Time" value="14:00" size="small" />
// //   //             <ControlInput label="Surface" value="TURF" size="small" />
// //   //             <ControlInput label="Distance" value="1600m" size="small" />
// //   //             <ControlInput label="Rail Pos" value="A" size="small" />
// //   //             <ControlInput label="Going" value="GOOD" size="small" />
// //   //             <ControlInput label="Grade" value="3" size="small" />
// //   //             <ControlInput label="Prize Money" value="$1,200,000" size="small" />
// //   //           </div>
            
// //   //           {/* Row 2: 14 controls - using flex wrap for responsiveness */}
// //   //           <div className="grid grid-cols-8 gap-3 mb-3" style={{ gridTemplateColumns: 'repeat(14, 80px)' }}>
// //   //             <ControlInput label="Benchmark" value="80" size="small" />
// //   //             <ControlInput label="Level" value="3" size="small" />
// //   //             <ControlInput label="RQ" value="115" size="small" />
// //   //             <ControlInput label="STD Time" value="1:34.5" size="small" />
// //   //             <ControlInput label="FIN Time" value="1:33.8" size="small" />
// //   //             <ControlInput label="RSPD" value="+0.7" size="small" />
// //   //             <ControlInput label="TRKSPD" value="+0.5" size="small" />
// //   //             <ControlInput label="+/- STD" value="+0.2" size="small" />
// //   //             <ControlInput label="Tempo" value="SLOW" size="small" />
// //   //             <ControlInput label="QR2" value="23.5" size="small" />
// //   //             <ControlInput label="QR3" value="34.8" size="small" />
// //   //             <ControlInput label="QR4" value="24.2" size="small" />
// //   //             <ControlInput label="$ENT" value="2.5M" size="small" />
// //   //             <ControlInput label="$ELA" value="1.8M" size="small" />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* RIGHT: UPCOMING RACES + ACTION BUTTONS + BRAND */}
// //   //       {/* THIS SECTION SHOULD BE AT RIGHT AND ROWSPAN 2 ROWS */}
// //   //       <div className="flex items-start gap-6">
// //   //         {/* RACE & ACTION COLUMN */}
// //   //         <div className="flex flex-col gap-3">
// //   //           {/* UPCOMING RACES - Row 1 */}
// //   //           <div
// //   //             className="grid gap-2.5 justify-end"
// //   //             // style={{ gridTemplateColumns: 'repeat(6, 191px)' }}
// //   //             style={{ gridTemplateColumns: 'repeat(6, 104px)' }}
// //   //           >
// //   //             {upcomingRaces.map((race, i) => (
// //   //               <UpcomingTile
// //   //                 key={i}
// //   //                 trackCode={race.trackCode}
// //   //                 raceNo={race.raceNo}
// //   //                 ttm={race.ttm}
// //   //                 countryCode={race.countryCode}
// //   //                 isEmpty={false}
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS - Row 2 (10 buttons) */}
// //   //           <div
// //   //             className="grid gap-2 justify-end"
// //   //             // style={{ gridTemplateColumns: 'repeat(10, 112px)' }}
// //   //             style={{ gridTemplateColumns: 'repeat(10, 60px)' }}
// //   //           >
// //   //             {Array.from({ length: 10 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-9 rounded-xl bg-secondary"
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS + SEARCH - Row 3 (5 buttons + search) */}
// //   //           <div
// //   //             className="grid gap-2 justify-end"
// //   //             // style={{ gridTemplateColumns: 'repeat(5, 112px) 592px' }}
// //   //             style={{ gridTemplateColumns: 'repeat(5, 60px) 332px' }}
// //   //           >
// //   //             {Array.from({ length: 5 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-9 rounded-xl bg-secondary"
// //   //               />
// //   //             ))}
// //   //             <input
// //   //               type="text"
// //   //               placeholder="Search…"
// //   //               className="h-9 rounded-xl border border-border px-3 font-semibold"
// //   //             />
// //   //           </div>
// //   //         </div>

// //   //         {/* BRAND COLUMN */}
// //   //         <div className="text-right flex flex-col items-center ps-10">
// //   //           <div className="text-sm font-black tracking-[0.18em] text-primary">
// //   //             PULSE
// //   //           </div>
// //   //           <div className="text-xs font-bold text-muted-foreground mb-2">
// //   //             {UI_VERSION}
// //   //           </div>
// //   //           <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
// //   //             <img
// //   //               src="/aion_logo.png"
// //   //               alt="Aion Logo"
// //   //               className="w-10 h-10 object-cover"
// //   //             />
// //   //           </div>
// //   //         </div>
// //   //       </div>
// //   //     </div>

// //   //     {/* 2 ROWS OF RACE INFORMATION HEADERS (Client requested this to fill rest of header) */}
// //   //     {/* <div className="mt-6 pt-4 border-t border-border"> */}
// //   //       {/* Row 1: Race Details Header */}
// //   //       {/* <div className="grid gap-3 py-3 px-4 bg-muted border border-border rounded-t-xl"
// //   //         style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}>
// //   //         <div className="font-bold text-sm">Race Details</div>
// //   //         <div className="font-bold text-sm text-center">Win</div>
// //   //         <div className="font-bold text-sm text-center">Place</div>
// //   //         <div className="font-bold text-sm text-center">Quinella</div>
// //   //         <div className="font-bold text-sm text-center">Quinella Place</div>
// //   //         <div className="font-bold text-sm text-center">Tierce</div>
// //   //       </div> */}
        
// //   //       {/* Row 2: Pool Information */}
// //   //       {/* <div className="grid gap-3 py-2 px-4 bg-muted/50 border-x border-b border-border rounded-b-xl"
// //   //         style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}>
// //   //         <div className="text-xs text-muted-foreground">Runner Information</div>
// //   //         <div className="text-xs text-muted-foreground text-center">Pool Size</div>
// //   //         <div className="text-xs text-muted-foreground text-center">Pool Size</div>
// //   //         <div className="text-xs text-muted-foreground text-center">Pool Size</div>
// //   //         <div className="text-xs text-muted-foreground text-center">Pool Size</div>
// //   //         <div className="text-xs text-muted-foreground text-center">Pool Size</div>
// //   //       </div>
// //   //     </div> */}
// //   //   </div>
// //   // );


// //   // return (
// //   //   <div className="cockpit-card p-5 mx-4 mt-4 relative">
// //   //     {/* TOP ROW */}
// //   //     <div className="grid grid-cols-12 gap-4 items-start">
        
// //   //       {/* LEFT COLUMN (COLSPAN 9) - Contains Header Row 1 and Header Row 2 */}
// //   //       <div className="col-span-9 flex flex-col gap-4">
          
// //   //         {/* HEADER ROW 1 */}
// //   //         <div className='flex items-start justify-between'>
// //   //           <div className="flex items-start gap-3">
// //   //             <img
// //   //               src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //   //               alt="HK Flag"
// //   //               className="w-10 h-7 rounded-md shadow-md object-cover"
// //   //             />
// //   //             <span className="text-xl font-black tracking-tight">
// //   //               SHA TIN
// //   //             </span>
// //   //           </div>

// //   //           {/* CENTER: WEATHER + RACE BUTTONS */}
// //   //           <div className="flex flex-col items-center gap-3">          
// //   //             <div className="flex gap-1.5 text-[20pt]">
// //   //               {/* Weather Icon */}
// //   //               <div className="w-15 h-15 rounded-md bg-muted flex items-center justify-center ml-3 text-[25pt]">
// //   //                 <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //   //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
// //   //                 </svg>
// //   //               </div>
// //   //               {Array.from({ length: 12 }, (_, i) => (
// //   //                 <RaceButton
// //   //                   className="w-15 h-15 text-[14pt]"
// //   //                   key={i + 1}
// //   //                   number={i + 1}
// //   //                   isActive={i === 0}
// //   //                 />
// //   //               ))}
// //   //             </div>
// //   //           </div>

// //   //           {/* CONTROL INPUTS */}
// //   //           <div className="flex items-start gap-6">
// //   //             <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: 'repeat(4, 150px)' }}>
// //   //               <ControlInput label="Territory" value="HK" />
// //   //               <ControlInput label="Date" value={today} />
// //   //               <ControlInput label="Code" value="RACE001" />
// //   //               <ControlInput label="Track" value="SHATIN" />
// //   //             </div>
// //   //           </div>
// //   //         </div>
          
// //   //         {/* HEADER ROW 2 - RACE DETAILS */}
// //   //         <div className='w-full'>
// //   //           <div className="pt-4">
// //   //             {/* Row 1: 7 controls */}
// //   //             <div className="grid grid-cols-7 gap-3 mb-3">
// //   //               <ControlInput label="Post Time" value="14:00" size="small" />
// //   //               <ControlInput label="Surface" value="TURF" size="small" />
// //   //               <ControlInput label="Distance" value="1600m" size="small" />
// //   //               <ControlInput label="Rail Pos" value="A" size="small" />
// //   //               <ControlInput label="Going" value="GOOD" size="small" />
// //   //               <ControlInput label="Grade" value="3" size="small" />
// //   //               <ControlInput label="Prize Money" value="$1,200,000" size="small" />
// //   //             </div>
              
// //   //             {/* Row 2: First 7 of 14 controls */}
// //   //             <div className="grid grid-cols-14 gap-3 mb-3">
// //   //               <ControlInput label="Benchmark" value="80" size="small" />
// //   //               <ControlInput label="Level" value="3" size="small" />
// //   //               <ControlInput label="RQ" value="115" size="small" />
// //   //               <ControlInput label="STD Time" value="1:34.5" size="small" />
// //   //               <ControlInput label="FIN Time" value="1:33.8" size="small" />
// //   //               <ControlInput label="RSPD" value="+0.7" size="small" />
// //   //               <ControlInput label="TRKSPD" value="+0.5" size="small" />

// //   //               <ControlInput label="+/- STD" value="+0.2" size="small" />
// //   //               <ControlInput label="Tempo" value="SLOW" size="small" />
// //   //               <ControlInput label="QR2" value="23.5" size="small" />
// //   //               <ControlInput label="QR3" value="34.8" size="small" />
// //   //               <ControlInput label="QR4" value="24.2" size="small" />
// //   //               <ControlInput label="$ENT" value="2.5M" size="small" />
// //   //               <ControlInput label="$ELA" value="1.8M" size="small" />
// //   //             </div>
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* RIGHT COLUMN (COLSPAN 3) - Rowspan 2 */}
// //   //       <div className="col-span-3 row-span-2">
// //   //         <div className="flex flex-col gap-3 h-full">
// //   //           {/* UPCOMING RACES */}
// //   //           <div
// //   //             className="grid gap-2.5"
// //   //             style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
// //   //           >
// //   //             {upcomingRaces.map((race, i) => (
// //   //               <UpcomingTile
// //   //                 key={i}
// //   //                 trackCode={race.trackCode}
// //   //                 raceNo={race.raceNo}
// //   //                 ttm={race.ttm}
// //   //                 countryCode={race.countryCode}
// //   //                 isEmpty={false}
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS - Row 2 (10 buttons) */}
// //   //           <div
// //   //             className="grid gap-2"
// //   //             style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}
// //   //           >
// //   //             {Array.from({ length: 10 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-9 rounded-xl bg-secondary"
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS + SEARCH */}
// //   //           <div
// //   //             className="grid gap-2"
// //   //             style={{ gridTemplateColumns: 'repeat(5, 1fr) 3fr' }}
// //   //           >
// //   //             {Array.from({ length: 5 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-9 rounded-xl bg-secondary"
// //   //               />
// //   //             ))}
// //   //             <input
// //   //               type="text"
// //   //               placeholder="Search…"
// //   //               className="h-9 rounded-xl border border-border px-3 font-semibold"
// //   //             />
// //   //           </div>

// //   //           {/* BRAND SECTION */}
// //   //           <div className="text-right mt-auto pt-4">
// //   //             <div className="flex items-center justify-end gap-4">
// //   //               <div className="text-right">
// //   //                 <div className="text-sm font-black tracking-[0.18em] text-primary">
// //   //                   PULSE
// //   //                 </div>
// //   //                 <div className="text-xs font-bold text-muted-foreground mb-2">
// //   //                   {UI_VERSION}
// //   //                 </div>
// //   //               </div>
// //   //               <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
// //   //                 <img
// //   //                   src="/aion_logo.png"
// //   //                   alt="Aion Logo"
// //   //                   className="w-10 h-10 object-cover"
// //   //                 />
// //   //               </div>
// //   //             </div>
// //   //           </div>
// //   //         </div>
// //   //       </div>
// //   //     </div>
// //   //   </div>
// //   // );


// //   // return (
// //   //   <div className="cockpit-card p-5 mx-4 mt-4 relative">
// //   //     {/* TOP ROW - Using 12 column grid */}
// //   //     <div className="grid grid-cols-12 gap-4 items-start">
        
// //   //       {/* COLUMN 1: FLAG + TRACK NAME */}
// //   //       <div className="col-span-1 flex items-start">
// //   //         <div className="flex items-center gap-3">
// //   //           <img
// //   //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //   //             alt="HK Flag"
// //   //             className="w-10 h-7 rounded-md shadow-md object-cover"
// //   //           />
// //   //           <span className="text-xl font-black tracking-tight whitespace-nowrap">
// //   //             SHA TIN
// //   //           </span>
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 2-4: WEATHER + RACE BUTTONS */}
// //   //       <div className="col-span-3">
// //   //         <div className="flex items-center gap-2">
// //   //           {/* Weather Icon */}
// //   //           <div className="w-14 h-14 rounded-md bg-muted flex items-center justify-center shrink-0">
// //   //             <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //   //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
// //   //             </svg>
// //   //           </div>
// //   //           {/* Race Buttons Grid */}
// //   //           <div className="grid grid-cols-6 gap-1.5 flex-grow">
// //   //             {Array.from({ length: 12 }, (_, i) => (
// //   //               <RaceButton
// //   //                 key={i + 1}
// //   //                 number={i + 1}
// //   //                 isActive={i === 0}
// //   //                 className="w-10 h-10 text-sm"
// //   //               />
// //   //             ))}
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 5-7: CONTROL INPUTS */}
// //   //       <div className="col-span-3">
// //   //         <div className="grid grid-cols-2 gap-3">
// //   //           <ControlInput label="Territory" value="HK" size="medium" />
// //   //           <ControlInput label="Date" value={today} size="medium" />
// //   //           <ControlInput label="Code" value="RACE001" size="medium" />
// //   //           <ControlInput label="Track" value="SHATIN" size="medium" />
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 8-11: UPCOMING RACES + ACTION BUTTONS */}
// //   //       <div className="col-span-4">
// //   //         <div className="flex flex-col gap-3">
// //   //           {/* UPCOMING RACES - 1 row of 6 */}
// //   //           <div className="grid grid-cols-6 gap-2">
// //   //             {upcomingRaces.map((race, i) => (
// //   //               <UpcomingTile
// //   //                 key={i}
// //   //                 trackCode={race.trackCode}
// //   //                 raceNo={race.raceNo}
// //   //                 ttm={race.ttm}
// //   //                 countryCode={race.countryCode}
// //   //                 isEmpty={false}
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS - Row 1 (10 buttons) */}
// //   //           <div className="grid grid-cols-10 gap-1.5">
// //   //             {Array.from({ length: 10 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-8 rounded-lg bg-secondary"
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* ACTION BUTTONS + SEARCH - Row 2 (5 buttons + search) */}
// //   //           <div className="grid grid-cols-6 gap-1.5">
// //   //             {Array.from({ length: 5 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-8 rounded-lg bg-secondary"
// //   //               />
// //   //             ))}
// //   //             <input
// //   //               type="text"
// //   //               placeholder="Search…"
// //   //               className="h-8 rounded-lg border border-border px-3 font-semibold col-span-1"
// //   //             />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 12: BRAND/LOGO - Far right column */}
// //   //       <div className="col-span-1">
// //   //         <div className="flex flex-col items-center h-full">
// //   //           <div className="text-sm font-black tracking-[0.18em] text-primary mb-1">
// //   //             PULSE
// //   //           </div>
// //   //           <div className="text-xs font-bold text-muted-foreground mb-3">
// //   //             {UI_VERSION}
// //   //           </div>
// //   //           <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
// //   //             <img
// //   //               src="/aion_logo.png"
// //   //               alt="Aion Logo"
// //   //               className="w-10 h-10 object-cover"
// //   //             />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //     </div>

// //   //     {/* BOTTOM ROW - RACE DETAILS (Full width) */}
// //   //     <div className="mt-6 pt-4 border-t border-border">
// //   //       {/* Row 1: 7 controls */}
// //   //       <div className="grid grid-cols-7 gap-3 mb-3">
// //   //         <ControlInput label="Post Time" value="14:00" size="small" />
// //   //         <ControlInput label="Surface" value="TURF" size="small" />
// //   //         <ControlInput label="Distance" value="1600m" size="small" />
// //   //         <ControlInput label="Rail Pos" value="A" size="small" />
// //   //         <ControlInput label="Going" value="GOOD" size="small" />
// //   //         <ControlInput label="Grade" value="3" size="small" />
// //   //         <ControlInput label="Prize Money" value="$1,200,000" size="small" />
// //   //       </div>
        
// //   //       {/* Row 2: 14 controls */}
// //   //       <div className="grid grid-cols-14 gap-3">
// //   //         <ControlInput label="Benchmark" value="80" size="small" />
// //   //         <ControlInput label="Level" value="3" size="small" />
// //   //         <ControlInput label="RQ" value="115" size="small" />
// //   //         <ControlInput label="STD Time" value="1:34.5" size="small" />
// //   //         <ControlInput label="FIN Time" value="1:33.8" size="small" />
// //   //         <ControlInput label="RSPD" value="+0.7" size="small" />
// //   //         <ControlInput label="TRKSPD" value="+0.5" size="small" />
// //   //         <ControlInput label="+/- STD" value="+0.2" size="small" />
// //   //         <ControlInput label="Tempo" value="SLOW" size="small" />
// //   //         <ControlInput label="QR2" value="23.5" size="small" />
// //   //         <ControlInput label="QR3" value="34.8" size="small" />
// //   //         <ControlInput label="QR4" value="24.2" size="small" />
// //   //         <ControlInput label="$ENT" value="2.5M" size="small" />
// //   //         <ControlInput label="$ELA" value="1.8M" size="small" />
// //   //       </div>
// //   //     </div>
// //   //   </div>
// //   // );








// //   // return (
// //   //   <div className="cockpit-card p-5 mx-4 mt-4 relative">
// //   //     {/* MAIN GRID - 3 columns */}
// //   //     <div className="grid grid-cols-12 gap-4 items-start">
        
// //   //       {/* COLUMN 1 - Takes 6 columns */}
// //   //       <div className="col-span-6 flex flex-col gap-4">
          
// //   //         {/* ROW 1 OF COLUMN 1 */}
// //   //         <div className="grid grid-cols-12 gap-4 items-start">
// //   //           {/* Flag + SHA TIN - Column 1-2 */}
// //   //           <div className="col-span-2 flex items-center gap-3">
// //   //             <img
// //   //               src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //   //               alt="HK Flag"
// //   //               className="w-10 h-7 rounded-md shadow-md object-cover"
// //   //             />
// //   //             <span className="text-xl font-black tracking-tight whitespace-nowrap">
// //   //               SHA TIN
// //   //             </span>
// //   //           </div>

// //   //           {/* Weather + Race Buttons - Column 3-6 */}
// //   //           <div className="col-span-4 flex items-center gap-2">
// //   //             {/* Weather Icon */}
// //   //             <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center shrink-0">
// //   //               <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //   //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
// //   //               </svg>
// //   //             </div>
// //   //             {/* Race Buttons Grid - 2 rows of 6 */}
// //   //             <div className="grid grid-cols-6 gap-1 flex-grow">
// //   //               {Array.from({ length: 12 }, (_, i) => (
// //   //                 <RaceButton
// //   //                   key={i + 1}
// //   //                   number={i + 1}
// //   //                   isActive={i === 0}
// //   //                   className="w-9 h-9 text-xs"
// //   //                 />
// //   //               ))}
// //   //             </div>
// //   //           </div>

// //   //           {/* 4 Control Inputs - Column 7-12 */}
// //   //           <div className="col-span-6">
// //   //             <div className="grid grid-cols-2 gap-3">
// //   //               <ControlInput label="Territory" value="HK" size="medium" />
// //   //               <ControlInput label="Date" value={today} size="medium" />
// //   //               <ControlInput label="Code" value="RACE001" size="medium" />
// //   //               <ControlInput label="Track" value="SHATIN" size="medium" />
// //   //             </div>
// //   //           </div>
// //   //         </div>

// //   //         {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
// //   //         <div className="border-t border-border pt-4">
// //   //           {/* Row 1: 7 controls */}
// //   //           <div className="grid grid-cols-7 gap-2 mb-3">
// //   //             <ControlInput label="Post Time" value="14:00" size="small" />
// //   //             <ControlInput label="Surface" value="TURF" size="small" />
// //   //             <ControlInput label="Distance" value="1600m" size="small" />
// //   //             <ControlInput label="Rail Pos" value="A" size="small" />
// //   //             <ControlInput label="Going" value="GOOD" size="small" />
// //   //             <ControlInput label="Grade" value="3" size="small" />
// //   //             <ControlInput label="Prize Money" value="$1,200,000" size="small" />
// //   //           </div>
            
// //   //           {/* Row 2: 14 controls */}
// //   //           <div className="grid grid-cols-14 gap-2">
// //   //             <ControlInput label="Benchmark" value="80" size="small" />
// //   //             <ControlInput label="Level" value="3" size="small" />
// //   //             <ControlInput label="RQ" value="115" size="small" />
// //   //             <ControlInput label="STD Time" value="1:34.5" size="small" />
// //   //             <ControlInput label="FIN Time" value="1:33.8" size="small" />
// //   //             <ControlInput label="RSPD" value="+0.7" size="small" />
// //   //             <ControlInput label="TRKSPD" value="+0.5" size="small" />
// //   //             <ControlInput label="+/- STD" value="+0.2" size="small" />
// //   //             <ControlInput label="Tempo" value="SLOW" size="small" />
// //   //             <ControlInput label="QR2" value="23.5" size="small" />
// //   //             <ControlInput label="QR3" value="34.8" size="small" />
// //   //             <ControlInput label="QR4" value="24.2" size="small" />
// //   //             <ControlInput label="$ENT" value="2.5M" size="small" />
// //   //             <ControlInput label="$ELA" value="1.8M" size="small" />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 2 - Takes 5 columns */}
// //   //       <div className="col-span-5 flex flex-col gap-4">
          
// //   //         {/* ROW 1 OF COLUMN 2 - Upcoming Races */}
// //   //         <div>
// //   //           <div className="grid grid-cols-6 gap-2">
// //   //             {upcomingRaces.map((race, i) => (
// //   //               <UpcomingTile
// //   //                 key={i}
// //   //                 trackCode={race.trackCode}
// //   //                 raceNo={race.raceNo}
// //   //                 ttm={race.ttm}
// //   //                 countryCode={race.countryCode}
// //   //                 isEmpty={false}
// //   //               />
// //   //             ))}
// //   //           </div>
// //   //         </div>

// //   //         {/* ROW 2 OF COLUMN 2 - Action Buttons + Search */}
// //   //         <div className="border-t border-border pt-4">
// //   //           {/* 10 Action Buttons */}
// //   //           <div className="grid grid-cols-10 gap-1.5 mb-3">
// //   //             {Array.from({ length: 10 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-8 rounded-lg bg-secondary"
// //   //               />
// //   //             ))}
// //   //           </div>

// //   //           {/* 5 Action Buttons + Search */}
// //   //           <div className="grid grid-cols-6 gap-1.5">
// //   //             {Array.from({ length: 5 }, (_, i) => (
// //   //               <div
// //   //                 key={i}
// //   //                 className="h-8 rounded-lg bg-secondary"
// //   //               />
// //   //             ))}
// //   //             <input
// //   //               type="text"
// //   //               placeholder="Search…"
// //   //               className="h-8 rounded-lg border border-border px-3 font-semibold col-span-1"
// //   //             />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //       {/* COLUMN 3 - Takes 1 column for PULSE Logo */}
// //   //       <div className="col-span-1">
// //   //         <div className="flex flex-col items-center justify-start h-full">
// //   //           <div className="text-sm font-black tracking-[0.18em] text-primary mb-1">
// //   //             PULSE
// //   //           </div>
// //   //           <div className="text-xs font-bold text-muted-foreground mb-3">
// //   //             {UI_VERSION}
// //   //           </div>
// //   //           <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
// //   //             <img
// //   //               src="/aion_logo.png"
// //   //               alt="Aion Logo"
// //   //               className="w-10 h-10 object-cover"
// //   //             />
// //   //           </div>
// //   //         </div>
// //   //       </div>

// //   //     </div>
// //   //   </div>
// //   // );



// //   return (
// //     <div className="cockpit-card p-5 mx-4 mt-4 relative">
// //       {/* MAIN GRID - 3 columns */}
// //       <div className="grid grid-cols-12 gap-4 items-start">
        
// //         {/* COLUMN 1 - Takes 6 columns */}
// //         <div className="col-span-7 flex flex-col gap-4">
          
// //           {/* ROW 1 OF COLUMN 1 */}
// //           <div className="grid grid-cols-12 gap-4 items-start">
// //             {/* Flag + SHA TIN - Column 1-2 */}
// //             <div className="col-span-1 flex items-center gap-3">
// //               <img
// //                 src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //                 alt="HK Flag"
// //                 className="w-10 h-7 rounded-md shadow-md object-cover"
// //               />
// //               <span className="text-xl font-black tracking-tight whitespace-nowrap">
// //                 SHA TIN
// //               </span>
// //             </div>

// //             {/* Weather + Race Buttons - Column 3-6 */}
// //             <div className="col-span-6 flex items-center gap-2 ms-6">
// //               {/* Weather Icon */}
// //               <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center shrink-0">
// //                 <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
// //                 </svg>
// //               </div>
// //               {/* Race Buttons Grid - 2 rows of 6 */}
// //               <div className="grid grid-cols-12 gap-2 flex-grow">
// //                 {Array.from({ length: 12 }, (_, i) => (
// //                   <RaceButton
// //                     key={i + 1}
// //                     number={i + 1}
// //                     isActive={i === 0}
// //                     className="w-12 h-12 text-[12pt]"
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //             {/* 4 Control Inputs - Column 7-12 */}
// //             <div className="col-span-5">
// //               <div className="grid grid-cols-4 gap-3">
// //                 {/* <ControlInput label="Territory" value="HK" size="medium" />
// //                 <ControlInput label="Date" value={today} size="medium" />
// //                 <ControlInput label="Code" value="RACE001" size="medium" />
// //                 <ControlInput label="Track" value="SHATIN" size="medium" /> */}

// //                 <ControlInput label="Territory" value="" size="medium" />
// //                 <ControlInput label="Date" value="" size="medium" />
// //                 <ControlInput label="Code" value="" size="medium" />
// //                 <ControlInput label="Track" value="" size="medium" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
// //           <div className="pt-4">
// //             {/* Row 1: 7 controls */}
// //             <div className="grid grid-cols-7 gap-2 mb-3">
// //               <ControlInput label="Post Time" value="" size="small" />
// //               <ControlInput label="Surface" value="" size="small" />
// //               <ControlInput label="Distance" value="" size="small" />
// //               <ControlInput label="Rail Pos" value="" size="small" />
// //               <ControlInput label="Going" value="" size="small" />
// //               <ControlInput label="Grade" value="" size="small" />
// //               <ControlInput label="Prize Money" value="" size="small" />
// //               {/* <ControlInput label="Post Time" value="14:00" size="small" />
// //               <ControlInput label="Surface" value="TURF" size="small" />
// //               <ControlInput label="Distance" value="1600m" size="small" />
// //               <ControlInput label="Rail Pos" value="A" size="small" />
// //               <ControlInput label="Going" value="GOOD" size="small" />
// //               <ControlInput label="Grade" value="3" size="small" />
// //               <ControlInput label="Prize Money" value="$1,200,000" size="small" /> */}
// //             </div>
            
// //             {/* Row 2: 14 controls */}
// //             <div className="grid grid-cols-14 gap-2">
// //               <ControlInput label="Benchmark" value="" size="small" />
// //               <ControlInput label="Level" value="" size="small" />
// //               <ControlInput label="RQ" value="" size="small" />
// //               <ControlInput label="STD Time" value="" size="small" />
// //               <ControlInput label="FIN Time" value="" size="small" />
// //               <ControlInput label="RSPD" value="" size="small" />
// //               <ControlInput label="TRKSPD" value="" size="small" />
// //               <ControlInput label="+/- STD" value="" size="small" />
// //               <ControlInput label="Tempo" value="" size="small" />
// //               <ControlInput label="QR2" value="" size="small" />
// //               <ControlInput label="QR3" value="" size="small" />
// //               <ControlInput label="QR4" value="" size="small" />
// //               <ControlInput label="$ENT" value="" size="small" />
// //               <ControlInput label="$ELA" value="" size="small" />
// //               {/* <ControlInput label="Benchmark" value="80" size="small" />
// //               <ControlInput label="Level" value="3" size="small" />
// //               <ControlInput label="RQ" value="115" size="small" />
// //               <ControlInput label="STD Time" value="1:34.5" size="small" />
// //               <ControlInput label="FIN Time" value="1:33.8" size="small" />
// //               <ControlInput label="RSPD" value="+0.7" size="small" />
// //               <ControlInput label="TRKSPD" value="+0.5" size="small" />
// //               <ControlInput label="+/- STD" value="+0.2" size="small" />
// //               <ControlInput label="Tempo" value="SLOW" size="small" />
// //               <ControlInput label="QR2" value="23.5" size="small" />
// //               <ControlInput label="QR3" value="34.8" size="small" />
// //               <ControlInput label="QR4" value="24.2" size="small" />
// //               <ControlInput label="$ENT" value="2.5M" size="small" />
// //               <ControlInput label="$ELA" value="1.8M" size="small" /> */}
// //             </div>
// //           </div>
// //         </div>

// //         {/* COLUMN 2 - Takes 5 columns, Rowspan 2 */}
// //         <div className="col-span-4 row-span-2 h-full ms-4">
// //           <div className="flex flex-col gap-4 h-full">
// //             {/* ROW 1 CONTENT - Upcoming Races */}
// //             <div>
// //               <div className="grid grid-cols-6 gap-2 mt-4">
// //                 {upcomingRaces.map((race, i) => (
// //                   <UpcomingTile
// //                     key={i}
// //                     trackCode={race.trackCode}
// //                     raceNo={race.raceNo}
// //                     ttm={race.ttm}
// //                     countryCode={race.countryCode}
// //                     isEmpty={false}
// //                   />
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ROW 2 CONTENT - Action Buttons + Search */}
// //             <div className="flex-grow">
// //               {/* 10 Action Buttons */}
// //               <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
// //                 {Array.from({ length: 10 }, (_, i) => (
// //                   <div
// //                     key={i}
// //                     className="h-8 rounded-lg bg-secondary"
// //                   />
// //                 ))}
// //               </div>

// //               {/* 5 Action Buttons + Search */}
// //               <div className="grid grid-cols-10 gap-1.5 mt-10">
// //                 {Array.from({ length: 5 }, (_, i) => (
// //                   <div
// //                     key={i}
// //                     className="h-8 rounded-lg bg-secondary"
// //                   />
// //                 ))}
// //                 <input
// //                   type="text"
// //                   placeholder="Search…"
// //                   className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* COLUMN 3 - Takes 1 column for PULSE Logo, Rowspan 2 */}
// //         <div className="col-span-1 row-span-2">
// //           <div className="flex flex-col items-center justify-start h-full">
// //             <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">
// //               PULSE
// //             </div>
// //             <div className="text-[12pt] font-bold text-muted-foreground mb-3">
// //               {UI_VERSION}
// //             </div>
// //             <div className="w-25 h-25 flex items-center justify-center">
// //               <img
// //                 src="/aion_logo.png"
// //                 alt="Aion Logo"
// //                 className="w-23 h-23 object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );

// // };









// 'use client';

// import { RaceButton } from './RaceButtonProps';
// import { UpcomingTile } from './UpComingTile';
// import { ControlInput } from './ControlInput';
// import { 
//   mdiCashMultiple, 
//   mdiTicketPercent, 
//   mdiSwapHorizontal, 
//   mdiSwapHorizontalVariant, 
//   mdiSlotMachine,
//   mdiHorseVariantFast,
//   mdiHorseshoe,
//   mdiDogSide,
//   mdiMotorbike,
//   mdiBicycle,
//   mdiFlash,
//   mdiChartLine,
//   mdiVideo,
//   mdiTimerOutline,
//   mdiFileChart,
//   mdiRadar
// } from "@mdi/js";
// import Icon from "@mdi/react";

// const UI_VERSION =
//   new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// const upcomingRaces = [
//   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// ];

// export const HeaderRealm = () => {
//   const today = new Date().toISOString().slice(0, 10);

//   // Market Buttons (1-5)
//   const marketButtons = [
//     { title: "Tote Pool Market", icon: mdiCashMultiple },
//     { title: "Fixed Odds Markets", icon: mdiTicketPercent },
//     { title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
//     { title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
//     { title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
//   ];

//   // Search Filter Buttons (6-10)
//   const searchButtons = [
//     { title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
//     { title: "Harness (Search)", icon: mdiHorseshoe },
//     { title: "Greyhound (Search)", icon: mdiDogSide },
//     { title: "Kyotei (Search)", icon: mdiMotorbike },
//     { title: "Keirin (Search)", icon: mdiBicycle }
//   ];

//   // Status Buttons (11-15)
//   const statusButtons = [
//     { title: "Pre-Race Features", icon: mdiFlash },
//     { title: "Post Race Performance Measurement", icon: mdiChartLine },
//     { title: "VDL (Video Data Labelling)", icon: mdiVideo },
//     { title: "Sectional Times (Search)", icon: mdiTimerOutline },
//     { title: "Meeting Analysis", icon: mdiFileChart }
//   ];

//   return (
//     <div className="cockpit-card p-5 mx-4 mt-4 relative">
//       {/* MAIN GRID - 3 columns */}
//       <div className="grid grid-cols-12 gap-4 items-start">
        
//         {/* COLUMN 1 - Takes 7 columns */}
//         <div className="col-span-7 flex flex-col gap-4">
          
//           {/* ROW 1 OF COLUMN 1 */}
//           <div className="grid grid-cols-12 gap-4 items-start">
//             {/* Flag + SHA TIN - Column 1-2 */}
//             {/* <div className="col-span-1 flex items-center gap-3">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
//                 alt="HK Flag"
//                 className="w-10 h-7 rounded-md shadow-md object-cover"
//               />
//               <span className="text-xl font-black tracking-tight whitespace-nowrap">
//                 SHA TIN
//               </span>
//             </div> */}

//             {/* Flag + SHA TIN - Column 1-2 */}
//             <div className="col-span-1 flex flex-col gap-1">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
//                   alt="HK Flag"
//                   className="w-10 h-7 rounded-md shadow-md object-cover"
//                 />
//                 <span className="text-xl font-black tracking-tight whitespace-nowrap">
//                   SHA TIN
//                 </span>
//               </div>
//               {/* Weather Icon moved below and left-aligned */}
//               {/* <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center mt-4">
//                 <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
//                 </svg>
//               </div> */}
//             </div>

//             {/* Weather + Race Buttons - Column 3-6 */}
//             <div className="col-span-6 flex items-center gap-2 ms-6">
//               {/* Race Buttons Grid - 2 rows of 6 */}
//               <div className="grid grid-cols-12 gap-2 flex-grow">
//                 {Array.from({ length: 12 }, (_, i) => (
//                   <RaceButton
//                     key={i + 1}
//                     number={i + 1}
//                     isActive={i === 0}
//                     className="w-12 h-12 text-[12pt]"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* 4 Control Inputs - Column 7-12 */}
//             <div className="col-span-5">
//               <div className="grid grid-cols-4 gap-3">
//                 <ControlInput label="Territory" value="" size="medium" />
//                 <ControlInput label="Date" value="" size="medium" />
//                 <ControlInput label="Code" value="" size="medium" />
//                 <ControlInput label="Track" value="" size="medium" />
//               </div>
//             </div>
//           </div>

//           {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
//           <div className="pt-4">
//             {/* Row 1: 7 controls */}
//             <div className="grid grid-cols-7 gap-2 mb-3">
//               <ControlInput label="Post Time" value="" size="small" />
//               <ControlInput label="Surface" value="" size="small" />
//               <ControlInput label="Distance" value="" size="small" />
//               <ControlInput label="Rail Pos" value="" size="small" />
//               <ControlInput label="Going" value="" size="small" />
//               <ControlInput label="Grade" value="" size="small" />
//               <ControlInput label="Prize Money" value="" size="small" />
//             </div>
            
//             {/* Row 2: 14 controls */}
//             <div className="grid grid-cols-14 gap-2">
//               <ControlInput label="Benchmark" value="" size="small" />
//               <ControlInput label="Level" value="" size="small" />
//               <ControlInput label="RQ" value="" size="small" />
//               <ControlInput label="STD Time" value="" size="small" />
//               <ControlInput label="FIN Time" value="" size="small" />
//               <ControlInput label="RSPD" value="" size="small" />
//               <ControlInput label="TRKSPD" value="" size="small" />
//               <ControlInput label="+/- STD" value="" size="small" />
//               <ControlInput label="Tempo" value="" size="small" />
//               <ControlInput label="QR2" value="" size="small" />
//               <ControlInput label="QR3" value="" size="small" />
//               <ControlInput label="QR4" value="" size="small" />
//               <ControlInput label="$ENT" value="" size="small" />
//               <ControlInput label="$ELA" value="" size="small" />
//             </div>
//           </div>
//         </div>

//         {/* COLUMN 2 - Takes 4 columns, Rowspan 2 */}
//         <div className="col-span-4 row-span-2 h-full ms-4">
//           <div className="flex flex-col gap-4 h-full">
//             {/* ROW 1 CONTENT - Upcoming Races */}
//             <div>
//               <div className="grid grid-cols-6 gap-2">
//                 {upcomingRaces.map((race, i) => (
//                   <UpcomingTile
//                     key={i}
//                     trackCode={race.trackCode}
//                     raceNo={race.raceNo}
//                     ttm={race.ttm}
//                     countryCode={race.countryCode}
//                     isEmpty={false}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* ROW 2 CONTENT - Action Buttons + Search */}
//             <div className="flex-grow">
//               {/* Market Buttons (1-5) */}
//               <div className="grid grid-cols-10 gap-1.5 mb-2 mt-14">
//                 {marketButtons.map((button, index) => (
//                   <button
//                     key={index}
//                     className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
//                     title={button.title}
//                   >
//                     <Icon path={button.icon} size={1} />
//                   </button>
//                 ))}

//                 {searchButtons.map((button, index) => (
//                   <button
//                     key={index}
//                     className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
//                     title={button.title}
//                   >
//                     <Icon path={button.icon} size={1} />
//                   </button>
//                 ))}
//               </div>

//               {/* Status Buttons (11-15) */}
//               <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
//                 {statusButtons.map((button, index) => (
//                   <button
//                     key={index}
//                     className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
//                     title={button.title}
//                   >
//                     <Icon path={button.icon} size={1} />
//                   </button>
//                 ))}
//                 <input
//                   type="text"
//                   placeholder="Search…"
//                   className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5"
//                 />
//               </div>

//               {/* Search Input */}
//               <div className="mt-2">
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COLUMN 3 - Takes 1 column for PULSE Logo, Rowspan 2 */}
//         {/* COLUMN 3 - Takes 1 column for PULSE Logo + Radar Icon, Rowspan 2 */}
//         <div className="col-span-1 row-span-2">
//           <div className="flex flex-col items-center justify-start h-full">
//             <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">
//               PULSE
//             </div>
//             <div className="text-[12pt] font-bold text-muted-foreground mb-3">
//               {UI_VERSION}
//             </div>
//             <div className="w-25 h-25 flex items-center justify-center mb-3">
//               <img
//                 src="/aion_logo.png"
//                 alt="Aion Logo"
//                 className="w-23 h-23 object-cover"
//               />
//             </div>
//             {/* New Radar Icon */}
//             <div className="flex items-center justify-center">
//               <Icon path={mdiRadar} size={3} className="text-primary" />
//             </div>
//           </div>
//         </div>
//       </div>


//       {/* CHECK THE CENTER POINT */}
//       {/* <div className="grid grid-cols-12 gap-4 items-center justify-center mt-4 bg-red-100">
//         <div className="col-span-12 flex flex-col gap-4 justify-center items-center">
//           <div className="grid grid-cols-12 gap-4 items-center justify-center">
//             |
//           </div>
//         </div>
//       </div> */}


//     </div>
//   );
// };














'use client';

import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';
import { useButtonContext } from './ButtonContext';
import { 
  mdiCashMultiple, 
  mdiTicketPercent, 
  mdiSwapHorizontal, 
  mdiSwapHorizontalVariant, 
  mdiSlotMachine,
  mdiHorseVariantFast,
  mdiHorseshoe,
  mdiDogSide,
  mdiMotorbike,
  mdiBicycle,
  mdiFlash,
  mdiChartLine,
  mdiVideo,
  mdiTimerOutline,
  mdiFileChart,
  mdiRadar
} from "@mdi/js";
import Icon from "@mdi/react";

const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

const upcomingRaces = [
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
];

export const HeaderRealm = () => {
  const { activeButton, setActiveButton } = useButtonContext();

  // Market Buttons (1-5) - NOW CLICKABLE
  const marketButtons = [
    { id: 1, title: "Tote Pool Market", icon: mdiCashMultiple },
    { id: 2, title: "Fixed Odds Markets", icon: mdiTicketPercent },
    { id: 3, title: "Betfair Exchange Market", icon: mdiSwapHorizontal },
    { id: 4, title: "Asian Exchange Market", icon: mdiSwapHorizontalVariant },
    { id: 5, title: "Multi Race / Jackpot Market", icon: mdiSlotMachine }
  ];

  // Search Filter Buttons (6-10)
  const searchButtons = [
    { title: "Thoroughbred (Search)", icon: mdiHorseVariantFast },
    { title: "Harness (Search)", icon: mdiHorseshoe },
    { title: "Greyhound (Search)", icon: mdiDogSide },
    { title: "Kyotei (Search)", icon: mdiMotorbike },
    { title: "Keirin (Search)", icon: mdiBicycle }
  ];

  // Status Buttons (11-15)
  const statusButtons = [
    { title: "Pre-Race Features", icon: mdiFlash },
    { title: "Post Race Performance Measurement", icon: mdiChartLine },
    { title: "VDL (Video Data Labelling)", icon: mdiVideo },
    { title: "Sectional Times (Search)", icon: mdiTimerOutline },
    { title: "Meeting Analysis", icon: mdiFileChart }
  ];

  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative">
      {/* MAIN GRID - 3 columns */}
      <div className="grid grid-cols-12 gap-4 items-start">
        
        {/* COLUMN 1 - Takes 7 columns */}
        <div className="col-span-7 flex flex-col gap-4">
          
          {/* ROW 1 OF COLUMN 1 */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* Flag + SHA TIN - Column 1-2 */}
            <div className="col-span-1 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
                  alt="HK Flag"
                  className="w-10 h-7 rounded-md shadow-md object-cover"
                />
                <span className="text-xl font-black tracking-tight whitespace-nowrap">
                  SHA TIN
                </span>
              </div>
            </div>

            {/* Weather + Race Buttons - Column 3-6 */}
            <div className="col-span-6 flex items-center gap-2 ms-6">
              {/* Race Buttons Grid - 2 rows of 6 */}
              <div className="grid grid-cols-12 gap-2 flex-grow">
                {Array.from({ length: 12 }, (_, i) => (
                  <RaceButton
                    key={i + 1}
                    number={i + 1}
                    isActive={i === 0}
                    className="w-12 h-12 text-[12pt]"
                  />
                ))}
              </div>
            </div>

            {/* 4 Control Inputs - Column 7-12 */}
            <div className="col-span-5">
              <div className="grid grid-cols-4 gap-3">
                <ControlInput label="Territory" value="" size="medium" />
                <ControlInput label="Date" value="" size="medium" />
                <ControlInput label="Code" value="" size="medium" />
                <ControlInput label="Track" value="" size="medium" />
              </div>
            </div>
          </div>

          {/* ROW 2 OF COLUMN 1 - Race Details Inputs */}
          <div className="pt-4">
            {/* Row 1: 7 controls */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              <ControlInput label="Post Time" value="" size="small" />
              <ControlInput label="Surface" value="" size="small" />
              <ControlInput label="Distance" value="" size="small" />
              <ControlInput label="Rail Pos" value="" size="small" />
              <ControlInput label="Going" value="" size="small" />
              <ControlInput label="Grade" value="" size="small" />
              <ControlInput label="Prize Money" value="" size="small" />
            </div>
            
            {/* Row 2: 14 controls */}
            <div className="grid grid-cols-14 gap-2">
              <ControlInput label="Benchmark" value="" size="small" />
              <ControlInput label="Level" value="" size="small" />
              <ControlInput label="RQ" value="" size="small" />
              <ControlInput label="STD Time" value="" size="small" />
              <ControlInput label="FIN Time" value="" size="small" />
              <ControlInput label="RSPD" value="" size="small" />
              <ControlInput label="TRKSPD" value="" size="small" />
              <ControlInput label="+/- STD" value="" size="small" />
              <ControlInput label="Tempo" value="" size="small" />
              <ControlInput label="QR2" value="" size="small" />
              <ControlInput label="QR3" value="" size="small" />
              <ControlInput label="QR4" value="" size="small" />
              <ControlInput label="$ENT" value="" size="small" />
              <ControlInput label="$ELA" value="" size="small" />
            </div>
          </div>
        </div>

        {/* COLUMN 2 - Takes 4 columns, Rowspan 2 */}
        <div className="col-span-4 row-span-2 h-full ms-4">
          <div className="flex flex-col gap-4 h-full">
            {/* ROW 1 CONTENT - Upcoming Races */}
            <div>
              <div className="grid grid-cols-6 gap-2">
                {upcomingRaces.map((race, i) => (
                  <UpcomingTile
                    key={i}
                    trackCode={race.trackCode}
                    raceNo={race.raceNo}
                    ttm={race.ttm}
                    countryCode={race.countryCode}
                    isEmpty={false}
                  />
                ))}
              </div>
            </div>

            {/* ROW 2 CONTENT - Action Buttons + Search */}
            <div className="flex-grow">
              {/* Market Buttons (1-5) - NOW CLICKABLE WITH ACTIVE STATE */}
              <div className="grid grid-cols-10 gap-1.5 mb-2 mt-14">
                {marketButtons.map((button) => (
                  <button
                    key={button.id}
                    onClick={() => setActiveButton(button.id)}
                    className={`h-8 rounded-lg flex items-center justify-center transition-colors ${
                      activeButton === button.id 
                        ? 'bg-blue-600 hover:bg-blue-300 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/50'
                    }`}
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}

                {searchButtons.map((button, index) => (
                  <button
                    key={index}
                    className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
              </div>

              {/* Status Buttons (11-15) */}
              <div className="grid grid-cols-10 gap-1.5 mb-3 mt-10">
                {statusButtons.map((button, index) => (
                  <button
                    key={index}
                    className="h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                    title={button.title}
                  >
                    <Icon path={button.icon} size={1} />
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="Search…"
                  className="h-8 rounded-lg border border-border px-3 font-semibold col-span-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3 - Takes 1 column for PULSE Logo, Rowspan 2 */}
        <div className="col-span-1 row-span-2">
          <div className="flex flex-col items-center justify-start h-full">
            <div className="text-[18pt] font-black tracking-[0.18em] text-primary mb-1">
              PULSE
            </div>
            <div className="text-[12pt] font-bold text-muted-foreground mb-3">
              {UI_VERSION}
            </div>
            <div className="w-25 h-25 flex items-center justify-center mb-3">
              <img
                src="/aion_logo.png"
                alt="Aion Logo"
                className="w-23 h-23 object-cover"
              />
            </div>
            <div className="flex items-center justify-center">
              <Icon path={mdiRadar} size={3} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};