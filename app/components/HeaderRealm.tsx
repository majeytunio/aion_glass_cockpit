// // // // import { RaceButton } from './RaceButtonProps';
// // // // import { UpcomingTile } from './UpComingTile';
// // // // import { ControlInput } from './ControlInput';

// // // // import Image from 'next/image';

// // // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';
// // // // const upcomingRaces = [
// // // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m' },
// // // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m' },
// // // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m' },
// // // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m' },
// // // //   { trackCode: 'SHATI', raceNo: 5, ttm: '120m' },
// // // //   { trackCode: '', raceNo: '', ttm: '', isEmpty: true },
// // // // ];
// // // // export const HeaderRealm = () => {
// // // //   const today = new Date().toISOString().slice(0, 10);
// // // //   return (
// // // //     <div className="cockpit-card p-5 mx-4 mt-4 relative">
// // // //       {/* Top Row */}
// // // //       <div className="flex items-center justify-between">
// // // //         {/* Left: Flag + Track + Race Buttons */}
// // // //         <div className="flex items-center gap-3">
// // // //           <img
// // // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // // //             alt="HK Flag"
// // // //             className="w-10 h-7 rounded-md shadow-md object-cover"
// // // //           />
// // // //           <span className="text-xl font-black tracking-tight min-w-[140px]">SHA TIN</span>
// // // //           <div className="flex gap-1.5">
// // // //             {Array.from({ length: 10 }, (_, i) => (
// // // //               <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Center: Controls Block */}
// // // //         <div className="flex flex-col gap-2.5 ml-8">
// // // //           {/* Row 1: Upcoming Tiles */}
// // // //           <div className="grid gap-2.5 " style={{ gridTemplateColumns: 'repeat(6, 114px)' }}>
// // // //             {upcomingRaces.map((race, i) => (
// // // //               <UpcomingTile
// // // //                 key={i}
// // // //                 trackCode={race.trackCode}
// // // //                 raceNo={race.raceNo}
// // // //                 ttm={race.ttm}
// // // //                 isEmpty={race.isEmpty}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           {/* Row 2: Action Tiles + Search */}
// // // //           <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 100px) 300px' }}>
// // // //             {Array.from({ length: 9 }, (_, i) => (
// // // //               <div key={i} className="h-9 rounded-xl bg-secondary" />
// // // //             ))}
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search…"
// // // //               className="h-9 rounded-xl border border-border px-3 font-semibold"
// // // //             />
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Right: Status + Version */}
// // // //         <div className="text-right ml-6">
// // // //           <>
// // // //           <Image
// // // //             src="/aion_logo.png"
// // // //             alt="Pulse Icon"
// // // //             width={50}
// // // //             height={50}
// // // //             className="mx-auto mb-1"
// // // //           />
// // // //           <div className="text-sm font-black tracking-[0.18em] text-primary text-center">PULSE</div>
// // // //           <div className="text-xs font-bold text-muted-foreground text-center">{UI_VERSION}</div>
// // // //           </>
// // // //         </div>
// // // //       </div>
// // // //       {/* 2x2 Input Grid */}
// // // //       <div className="grid gap-x-5 gap-y-3.5 mt-5" style={{ gridTemplateColumns: '220px 220px' }}>
// // // //         <ControlInput label="Territory" value="HK" />
// // // //         <ControlInput label="Date" value={today} />
// // // //         <ControlInput label="Code" value="RACE001" />
// // // //         <ControlInput label="Track" value="SHATIN" />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };






// // // 'use client';

// // // import { RaceButton } from './RaceButtonProps';
// // // import { UpcomingTile } from './UpComingTile';
// // // import { ControlInput } from './ControlInput';

// // // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // // const upcomingRaces = [
// // //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// // //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// // // ];

// // // export const HeaderRealm = () => {
// // //   const today = new Date().toISOString().slice(0, 10);

// // //   return (
// // //     <div className="cockpit-card p-5 mx-4 mt-4 relative h-60">
// // //       {/* Top Row - Everything aligned horizontally */}
// // //       <div className="flex items-start justify-between">
// // //         {/* Left Section: Flag + Track */}
// // //         <div className="flex items-center gap-3">
// // //           <img
// // //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// // //             alt="HK Flag"
// // //             className="w-10 h-7 rounded-md shadow-md object-cover"
// // //           />
// // //           <span className="text-xl font-black tracking-tight">SHA TIN</span>
// // //         </div>

// // //         {/* Center Section: Control Inputs (Territory/Date/Code/Track) */}
// // //         {/* <div className="absolute left-[27.5%] transform -translate-x-1/2 top-5"> */}
// // //         <div className="absolute left-5 top-18">
// // //           <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: '220px 220px' }}>
// // //             <ControlInput label="Territory" value="HK" />
// // //             <ControlInput label="Date" value={today} />
// // //             <ControlInput label="Code" value="RACE001" />
// // //             <ControlInput label="Track" value="SHATIN" />
// // //           </div>
// // //         </div>

// // //         {/* Right Section: Combined Upcoming Races, Buttons, and Logo */}
// // //         <div className="flex items-start gap-6">
// // //           {/* Upcoming Races and Buttons Column */}
// // //           <div className="flex flex-col gap-2.5">
// // //             {/* Row 1: Upcoming Tiles (6 tiles) */}
// // //             <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(6, 90px)', justifyContent: 'right' }}>
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

// // //             {/* Row 2: Race Buttons (10 buttons) */}
// // //             <div className="flex gap-1.5" style={{ justifyContent: 'right' }}>
// // //               {Array.from({ length: 10 }, (_, i) => (
// // //                 <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// // //               ))}
// // //             </div>

// // //             {/* Row 3: Action Buttons (5) + Search */}
// // //             <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(5, 65px) 220px', justifyContent: 'right' }}>
// // //               {Array.from({ length: 5 }, (_, i) => (
// // //                 <div key={i} className="h-9 rounded-xl bg-secondary" />
// // //               ))}
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search…"
// // //                 className="h-9 rounded-xl border border-border px-3 font-semibold"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Logo/Pulse/Version Column */}
// // //           <div className="text-right flex flex-col items-center">
// // //             <div className="text-sm font-black tracking-[0.18em] text-primary">PULSE</div>
// // //             <div className="text-xs font-bold text-muted-foreground mb-2">{UI_VERSION}</div>
// // //             {/* Aion Logo */}
// // //             <div className="flex items-center justify-center">
// // //               {/* <span className="text-sm font-bold text-muted-foreground">AION</span> */}
// // //               <img
// // //                 src="/aion_logo.png"
// // //                 alt="HK Flag"
// // //                 className="w-10 h-10 rounded-md shadow-md object-cover"
// // //               />
// // //             </div>
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

// // const UI_VERSION = new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// // const upcomingRaces = [
// //   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
// //   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
// // ];

// // export const HeaderRealm = () => {
// //   const today = new Date().toISOString().slice(0, 10);

// //   return (
// //     <div className="cockpit-card p-5 mx-4 mt-4 relative h-60">
// //       {/* Top Row - Everything aligned horizontally */}
// //       <div className="flex items-start justify-between">
// //         {/* Left Section: Flag + Track */}
// //         <div className="flex items-center gap-3">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
// //             alt="HK Flag"
// //             className="w-10 h-7 rounded-md shadow-md object-cover"
// //           />
// //           <span className="text-xl font-black tracking-tight">SHA TIN</span>
// //         </div>

// //         {/* Center Section: Control Inputs (Territory/Date/Code/Track) */}
// //         {/* <div className="absolute left-[27.5%] transform -translate-x-1/2 top-5"> */}
// //         <div className="absolute left-5 top-18">
// //           <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: '220px 220px' }}>
// //             <ControlInput label="Territory" value="HK" />
// //             <ControlInput label="Date" value={today} />
// //             <ControlInput label="Code" value="RACE001" />
// //             <ControlInput label="Track" value="SHATIN" />
// //           </div>
// //         </div>

// //         {/* Alteernative Design */}
// //         <div className="flex items-end gap-6">
// //           {/* Upcoming Races and Buttons Column */}
// //           <div className="flex flex-col gap-2.5">
// //             {/* Row 1: Upcoming Tiles (6 tiles) */}
            

// //             {/* Row 2: Race Buttons (10 buttons) */}
// //             <div className="flex gap-1.5" style={{ justifyContent: 'right' }}>
// //               {Array.from({ length: 10 }, (_, i) => (
// //                 <RaceButton key={i + 1} number={i + 1} isActive={i === 0} />
// //               ))}
// //             </div>

// //           </div>
// //         </div>

// //         {/* Right Section: Combined Upcoming Races, Buttons, and Logo */}
// //         <div className="flex items-start gap-6">
// //           {/* Upcoming Races and Buttons Column */}
// //           <div className="flex flex-col gap-2.5">
// //             {/* Row 1: Upcoming Tiles (6 tiles) */}
// //             <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(6, 90px)', justifyContent: 'right' }}>
// //               {upcomingRaces.map((race, i) => (
// //                 <UpcomingTile
// //                   key={i}
// //                   trackCode={race.trackCode}
// //                   raceNo={race.raceNo}
// //                   ttm={race.ttm}
// //                   countryCode={race.countryCode}
// //                   isEmpty={false}
// //                 />
// //               ))}
// //             </div>

// //             {/* Row 3: Action Buttons (5) + Search */}
// //             <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(5, 65px) 220px', justifyContent: 'right' }}>
// //               {Array.from({ length: 5 }, (_, i) => (
// //                 <div key={i} className="h-9 rounded-xl bg-secondary" />
// //               ))}
// //               <input
// //                 type="text"
// //                 placeholder="Search…"
// //                 className="h-9 rounded-xl border border-border px-3 font-semibold"
// //               />
// //             </div>
// //           </div>

// //           {/* Logo/Pulse/Version Column */}
// //           <div className="text-right flex flex-col items-center">
// //             <div className="text-sm font-black tracking-[0.18em] text-primary">PULSE</div>
// //             <div className="text-xs font-bold text-muted-foreground mb-2">{UI_VERSION}</div>
// //             {/* Aion Logo */}
// //             <div className="flex items-center justify-center">
// //               {/* <span className="text-sm font-bold text-muted-foreground">AION</span> */}
// //               <img
// //                 src="/aion_logo.png"
// //                 alt="HK Flag"
// //                 className="w-10 h-10 rounded-md shadow-md object-cover"
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

// const UI_VERSION =
//   new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

// const upcomingRaces = [
//   { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 7, ttm: '211m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 8, ttm: '246m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 9, ttm: '281m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 10, ttm: '316m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 11, ttm: '351m', countryCode: 'HK' },
//   { trackCode: 'SHATI', raceNo: 12, ttm: '386m', countryCode: 'HK' },
// ];

// export const HeaderRealm = () => {
//   const today = new Date().toISOString().slice(0, 10);

//   return (
//     <div className="cockpit-card p-5 mx-4 mt-4 relative">
//       {/* MAIN HEADER ROW */}
//       <div className="flex items-start justify-between">
//         {/* LEFT: FLAG + TRACK */}
//         <div className="flex items-center gap-3 self-center">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
//             alt="HK Flag"
//             className="w-15 h-15 rounded-md shadow-md object-cover"
//           />
//           <span className="text-xl font-black tracking-tight">
//             SHA TIN
//           </span>
//         </div>

//         {/* RIGHT: RACES + ACTIONS + BRAND */}
//         <div className="flex items-start gap-6">
//           {/* RACE & ACTION COLUMN */}
//           <div className="flex flex-col gap-3 mt-5">

//             {/* WEATHER + RACE BUTTONS */}
//             <div className="flex items-center justify-end gap-1.5">
//               {/* Weather Icon Placeholder */}
//               <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center">
//                 ☁️
//               </div>

//               {/* Race Number Buttons */}
//               <div className="flex gap-1.5">
//                 {Array.from({ length: 10 }, (_, i) => (
//                   <RaceButton
//                     key={i + 1}
//                     number={i + 1}
//                     isActive={i === 0}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CENTER: CONTROL INPUTS */}
//         <div className="flex items-start">
//           <div
//             className="grid gap-x-5 gap-y-3.5"
//             // style={{ gridTemplateColumns: '220px 220px' }}
//             style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
//           >
//             <ControlInput label="Territory" value="HK" />
//             <ControlInput label="Date" value={today} />
//             <ControlInput label="Code" value="RACE001" />
//             <ControlInput label="Track" value="SHATIN" />
//           </div>
//         </div>

//         {/* RIGHT: RACES + ACTIONS + BRAND */}
//         <div className="flex items-start gap-6">
//           {/* RACE & ACTION COLUMN */}
//           <div className="flex flex-col gap-3">
//             {/* UPCOMING RACES */}
//             <div
//               className="grid gap-2.5 justify-end"
//               style={{ gridTemplateColumns: 'repeat(12, 90px)' }}
//             >
//               {upcomingRaces.map((race, i) => (
//                 <UpcomingTile
//                   key={i}
//                   trackCode={race.trackCode}
//                   raceNo={race.raceNo}
//                   ttm={race.ttm}
//                   countryCode={race.countryCode}
//                   isEmpty={false}
//                 />
//               ))}
//             </div>

//             {/* ACTION BUTTONS + SEARCH */}
//             <div
//               className="grid gap-2 justify-end"
//               style={{ gridTemplateColumns: 'repeat(10, 112px)' }}
//             >
//               {Array.from({ length: 10 }, (_, i) => (
//                 <div
//                   key={i}
//                   className="h-9 rounded-xl bg-secondary"
//                 />
//               ))}
//             </div>
//             <div
//               className="grid gap-2 justify-end"
//               style={{ gridTemplateColumns: 'repeat(5, 112px) 592px' }}
//             >
//               {Array.from({ length: 5 }, (_, i) => (
//                 <div
//                   key={i}
//                   className="h-9 rounded-xl bg-secondary"
//                 />
//               ))}
//               <input
//                 type="text"
//                 placeholder="Search…"
//                 className="h-9 rounded-xl border border-border px-3 font-semibold"
//               />
//             </div>
//           </div>

//           {/* BRAND COLUMN */}
//           <div className="text-right flex flex-col items-center">
//             <div className="text-sm font-black tracking-[0.18em] text-primary">
//               PULSE
//             </div>
//             <div className="text-xs font-bold text-muted-foreground mb-2">
//               {UI_VERSION}
//             </div>
//             <img
//               src="/aion_logo.png"
//               alt="Aion Logo"
//               className="w-10 h-10 rounded-md shadow-md object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


















'use client';

import { RaceButton } from './RaceButtonProps';
import { UpcomingTile } from './UpComingTile';
import { ControlInput } from './ControlInput';

const UI_VERSION =
  new Date().toISOString().slice(0, 10).replace(/-/g, '') + '_V01';

const upcomingRaces = [
  { trackCode: 'SHATI', raceNo: 1, ttm: '1m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 2, ttm: '36m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 3, ttm: '71m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 4, ttm: '106m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 5, ttm: '141m', countryCode: 'HK' },
  { trackCode: 'SHATI', raceNo: 6, ttm: '176m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 7, ttm: '211m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 8, ttm: '246m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 9, ttm: '281m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 10, ttm: '316m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 11, ttm: '351m', countryCode: 'HK' },
  // { trackCode: 'SHATI', raceNo: 12, ttm: '386m', countryCode: 'HK' },
];

export const HeaderRealm = () => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="cockpit-card p-5 mx-4 mt-4 relative">
      {/* TOP ROW */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
            alt="HK Flag"
            className="w-10 h-7 rounded-md shadow-md object-cover"
          />
          <span className="text-xl font-black tracking-tight">
            SHA TIN
          </span>
        </div>

        {/* CENTER: FLAG + TRACK + WEATHER + 10 RACE BUTTONS */}
        <div className="flex flex-col items-center gap-3">          
          {/* 10 Race Buttons */}
          <div className="flex gap-1.5">
            {/* Weather Icon */}
            <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center ml-3">
              ☁️
            </div>
            {Array.from({ length: 12 }, (_, i) => (
              <RaceButton
                key={i + 1}
                number={i + 1}
                isActive={i === 0}
              />
            ))}
          </div>
        </div>


        {/* LEFT: CONTROL INPUTS (2x2 vertical) */}
        <div className="flex items-start gap-6">
          {/* Control Inputs Grid */}
          <div className="grid gap-x-5 gap-y-3.5" style={{ gridTemplateColumns: '200px 200px 200px 200px' }}>
            <ControlInput label="Territory" value="HK" />
            <ControlInput label="Date" value={today} />
            <ControlInput label="Code" value="RACE001" />
            <ControlInput label="Track" value="SHATIN" />
          </div>
        </div>

        {/* RIGHT: UPCOMING RACES + ACTION BUTTONS + BRAND */}
        <div className="flex items-start gap-6">
          {/* RACE & ACTION COLUMN */}
          <div className="flex flex-col gap-3">
            {/* UPCOMING RACES - Row 1 */}
            <div
              className="grid gap-2.5 justify-end"
              // style={{ gridTemplateColumns: 'repeat(6, 191px)' }}
              style={{ gridTemplateColumns: 'repeat(6, 104px)' }}
            >
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

            {/* ACTION BUTTONS - Row 2 (10 buttons) */}
            <div
              className="grid gap-2 justify-end"
              // style={{ gridTemplateColumns: 'repeat(10, 112px)' }}
              style={{ gridTemplateColumns: 'repeat(10, 60px)' }}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className="h-9 rounded-xl bg-secondary"
                />
              ))}
            </div>

            {/* ACTION BUTTONS + SEARCH - Row 3 (5 buttons + search) */}
            <div
              className="grid gap-2 justify-end"
              // style={{ gridTemplateColumns: 'repeat(5, 112px) 592px' }}
              style={{ gridTemplateColumns: 'repeat(5, 60px) 332px' }}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="h-9 rounded-xl bg-secondary"
                />
              ))}
              <input
                type="text"
                placeholder="Search…"
                className="h-9 rounded-xl border border-border px-3 font-semibold"
              />
            </div>
          </div>

          {/* BRAND COLUMN */}
          <div className="text-right flex flex-col items-center ps-10">
            <div className="text-sm font-black tracking-[0.18em] text-primary">
              PULSE
            </div>
            <div className="text-xs font-bold text-muted-foreground mb-2">
              {UI_VERSION}
            </div>
            <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center border border-border">
              <img
                src="/aion_logo.png"
                alt="Aion Logo"
                className="w-10 h-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2 ROWS OF RACE INFORMATION HEADERS (Client requested this to fill rest of header) */}
      {/* <div className="mt-6 pt-4 border-t border-border"> */}
        {/* Row 1: Race Details Header */}
        {/* <div className="grid gap-3 py-3 px-4 bg-muted border border-border rounded-t-xl"
          style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}>
          <div className="font-bold text-sm">Race Details</div>
          <div className="font-bold text-sm text-center">Win</div>
          <div className="font-bold text-sm text-center">Place</div>
          <div className="font-bold text-sm text-center">Quinella</div>
          <div className="font-bold text-sm text-center">Quinella Place</div>
          <div className="font-bold text-sm text-center">Tierce</div>
        </div> */}
        
        {/* Row 2: Pool Information */}
        {/* <div className="grid gap-3 py-2 px-4 bg-muted/50 border-x border-b border-border rounded-b-xl"
          style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}>
          <div className="text-xs text-muted-foreground">Runner Information</div>
          <div className="text-xs text-muted-foreground text-center">Pool Size</div>
          <div className="text-xs text-muted-foreground text-center">Pool Size</div>
          <div className="text-xs text-muted-foreground text-center">Pool Size</div>
          <div className="text-xs text-muted-foreground text-center">Pool Size</div>
          <div className="text-xs text-muted-foreground text-center">Pool Size</div>
        </div>
      </div> */}
    </div>
  );
};