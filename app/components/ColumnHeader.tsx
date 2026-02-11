// 'use client';

// export const ColumnHeader = () => {
//   const Cell = ({ children }: { children?: React.ReactNode }) => (
//     <div className="flex items-center justify-center text-center h-full w-full">
//       {children}
//     </div>
//   );
//   return (
//     <div 
//       className="column-header grid gap-3 py-2 px-0"
//       style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
//     >
//       <Cell>
//         <span className="text-xl font-bold">#</span>
//       </Cell>
//       <Cell />
//       <Cell />
//       <Cell />
//       <Cell />
//       <Cell />
//     </div>
//   );
// };














'use client';

import { mdiArrowDown, mdiTriangleDown, mdiTriangleSmallUp } from "@mdi/js";
import { Icon } from "@mdi/react";

export const ColumnHeader = () => {
  const Cell = ({ children }: { children?: React.ReactNode }) => (
    <div className="flex items-center justify-center text-center h-full w-full">
      {children}
    </div>
  );

  return (
    <div 
      className="column-header grid gap-3 py-2 px-0 text-[14pt]"
      style={{ gridTemplateColumns: '100px 400px 60px 150px 150px 150px 150px 150px 150px 150px 300px 150px' }}
    >
      <Cell># <Icon path={mdiTriangleDown} size={0.8} className="text-muted-foreground" /></Cell>
      <Cell>
        <div className="flex items-center justify-center">
          <span className="font-bold">Runner</span>
        </div>
      </Cell>
      <Cell>
        <div className="flex items-center justify-center">
          <span className="font-bold">DR</span>
        </div>
      </Cell>
      <Cell>P</Cell>
      <Cell>AGE</Cell>
      <Cell>OR</Cell>
      <Cell>WGT</Cell>
      <Cell>MST</Cell>
      <Cell>SF<Icon path={mdiTriangleSmallUp} size={2.2} className="text-muted-foreground" /></Cell>
      <Cell>JOCKEY/TRAINER</Cell>
      <Cell>DSLR</Cell>

      {/* <Cell>BP</Cell>
      <Cell>Silks</Cell>
      <Cell>Runner</Cell>
      <Cell>Bar</Cell>
      <Cell>Wgt</Cell>
      <Cell>Rat</Cell>
      <Cell>π</Cell>
      <Cell>Ω</Cell>
      <Cell>β</Cell>
      <Cell>SP</Cell>
      <Cell>Win</Cell>
      <Cell>Plc</Cell>
      <Cell>Other Markets →</Cell> */}
    </div>
  );
};