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
      className="column-header grid gap-3 py-2 px-0 text-[12pt]"
      style={{ gridTemplateColumns: '60px 300px 60px 60px 60px 60px 60px 60px 60px 100px 60px 60px' }}
    >
      <Cell># <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" /></Cell>
      <Cell>
        <div className="flex items-center justify-center">
          {/* __SPACE__
          <span className="font-bold">Runner</span> */}
        </div>
      </Cell>
      <Cell>
        <div className="flex items-center justify-center">
          <span className="font-bold">(BP)</span>
        </div>
      </Cell>
      <Cell>AGE</Cell>
      <Cell>OCR</Cell>
      <Cell>HWT</Cell>
      <Cell>DLR</Cell>
      <Cell>MTX</Cell>
      <Cell>
        J&T
      </Cell>

      <Cell>FINTIME</Cell>
      <Cell>MRG</Cell>
      <Cell>+</Cell>

    </div>
  );
};