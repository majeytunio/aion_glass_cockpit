// // 'use client';

// // import { ColumnHeader } from './ColumnHeader';
// // import { ColumnRealm } from './ColumnRealm';
// // import { RunnerButton } from './RunnerButton';
// // export const RunnerRealm = () => {
// //   return (
// //     <div className="cockpit-runner-card mx-4 mt-4 p-0">
// //       <ColumnHeader />
// //       {/* Runner Rows */}
// //       <div className="px-2 pb-2">
// //         <ColumnRealm />
// //       </div>
// //       {/* Total Bar */}
// //       <div className="mx-3 mb-3 h-16 bg-secondary border border-border rounded-xl flex items-center px-3 font-bold text-muted-foreground sticky bottom-0 z-10">
// //         {/* Total content placeholder */}
// //       </div>
// //     </div>
// //   );
// // };







// 'use client';

// import { ColumnHeader } from './ColumnHeader';
// import { ColumnRealm } from './ColumnRealm';
// import { RaceDetailHeaders } from './RaceDetailHeaders';

// export const RunnerRealm = () => {
//   return (
//     <div className="cockpit-runner-card mx-4 mt-4 p-0">
//       <ColumnHeader />
      
//       {/* New Race Detail Headers - positioned above where runner rows start */}
//       <div className="px-2 pt-3 pb-1 border-b border-border/30">
//         <RaceDetailHeaders />
//       </div>
      
//       {/* Runner Rows */}
//       <div className="px-2 pb-2">
//         <ColumnRealm />
//       </div>
      
//       {/* Total Bar */}
//       <div className="mx-3 mb-3 h-16 bg-secondary border border-border rounded-xl flex items-center px-3 font-bold text-muted-foreground sticky bottom-0 z-10">
//         {/* Total content placeholder */}
//         <span className="text-xl font-bold">Total: 14 Runners</span>
//       </div>
//     </div>
//   );
// };






'use client';

import { ColumnHeader } from './ColumnHeader';
import { ColumnRealm } from './ColumnRealm';

export const RunnerRealm = () => {
  return (
    <div className="cockpit-runner-card mx-4 mt-4 p-0 overflow-hidden">
      {/* Column Headers */}
      <ColumnHeader />
      
      {/* Runner Rows - NO GAP ABOVE */}
      <div className="px-2"> {/* REMOVED py-2, pt-0 */}
        <ColumnRealm />
      </div>
      
      {/* Total Bar */}
      <div className="mx-4 mb-4 mt-2 h-12 bg-secondary/50 border border-border/50 rounded-xl flex items-center px-4 font-bold text-muted-foreground">
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold">Total: 14 Runners</span>
          <span className="text-sm text-primary">Last Updated: Just now</span>
        </div>
      </div>
    </div>
  );
};