// // // 'use client';

// // // export const ColumnHeader = () => {
// // //   const Cell = ({ children }: { children?: React.ReactNode }) => (
// // //     <div className="flex items-center justify-center text-center h-full w-full">
// // //       {children}
// // //     </div>
// // //   );
// // //   return (
// // //     <div 
// // //       className="column-header grid gap-3 py-2 px-0"
// // //       style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
// // //     >
// // //       <Cell>
// // //         <span className="text-xl font-bold">#</span>
// // //       </Cell>
// // //       <Cell />
// // //       <Cell />
// // //       <Cell />
// // //       <Cell />
// // //       <Cell />
// // //     </div>
// // //   );
// // // };














// // 'use client';

// // import { mdiArrowDown, mdiTriangleDown, mdiTriangleSmallUp } from "@mdi/js";
// // import { Icon } from "@mdi/react";

// // export const ColumnHeader = () => {
// //   const Cell = ({ children, cssClasses = '' }: { children?: React.ReactNode, cssClasses?: string }) => (
// //     <div className={`flex items-center justify-center text-center h-full w-full ${cssClasses}`}>
// //       {children}
// //     </div>
// //   );

// //   return (
// //     <div 
// //       className="column-header grid gap-3 py-2 px-0 text-[12pt]"
// //       style={{ gridTemplateColumns: '60px 300px 60px 60px 60px 60px 60px 60px 350px 100px 60px 60px' }}
// //     >
// //       <Cell># <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" /></Cell>
// //       <Cell>
// //         <div className="flex items-center justify-center">
// //           {/* __SPACE__
// //           <span className="font-bold">Runner</span> */}
// //         </div>
// //       </Cell>
// //       <Cell>
// //         <div className="flex items-center justify-center">
// //           <span className="font-bold">(BP)</span>
// //         </div>
// //       </Cell>
// //       <Cell>AGE</Cell>
// //       <Cell>OCR</Cell>
// //       <Cell>HWT</Cell>
// //       <Cell>DLR</Cell>
// //       <Cell>MTX</Cell>
// //       <Cell cssClasses="justify-start">
// //         <div className="flex items-start justify-start gap-1">
// //           {/* __SPACE__
// //           <span className="font-bold">Runner</span> */}
// //           J&T
// //         </div>
// //       </Cell>

// //       <Cell>FINTIME</Cell>
// //       <Cell>MRG</Cell>
// //       <Cell>+</Cell>

// //     </div>
// //   );
// // };
























// 'use client';

// import { mdiTriangleDown } from "@mdi/js";
// import { Icon } from "@mdi/react";
// import { useButtonContext } from './ButtonContext';
// import { getRightSideColumns, BASE_COLUMNS } from './ColumnConfig';

// export const ColumnHeader = () => {
//   const { activeButton } = useButtonContext();
  
//   const Cell = ({ children, cssClasses = '', align = 'center' }: { children?: React.ReactNode, cssClasses?: string, align?: string }) => (
//     <div className={`flex items-center justify-${align} text-${align} h-full w-full ${cssClasses}`}>
//       {children}
//     </div>
//   );

//   const rightColumns = getRightSideColumns(activeButton);
//   const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
//   const gridTemplateColumns = `${BASE_COLUMNS} ${rightColumnWidths}`;

//   return (
//     <div 
//       className="column-header grid gap-3 py-2 px-0 text-[12pt]"
//       style={{ gridTemplateColumns }}
//     >
//       {/* Your EXISTING 12 columns - NO CHANGES */}
//       <Cell align="center">
//         # <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" />
//       </Cell>
//       <Cell align="center">
//         <div className="flex items-center justify-center"></div>
//       </Cell>
//       <Cell align="center">
//         <div className="flex items-center justify-center">
//           <span className="font-bold">(BP)</span>
//         </div>
//       </Cell>
//       <Cell align="center">AGE</Cell>
//       <Cell align="center">OCR</Cell>
//       <Cell align="center">HWT</Cell>
//       <Cell align="center">DLR</Cell>
//       <Cell align="center">MTX</Cell>
//       <Cell align="left" cssClasses="justify-start">
//         <div className="flex items-start justify-start gap-1">J&T</div>
//       </Cell>
//       <Cell align="center">FINTIME</Cell>
//       <Cell align="center">MRG</Cell>
//       <Cell align="center">+</Cell>
      
//       {/* DYNAMIC RIGHT SIDE COLUMNS - Appear based on active button */}
//       {rightColumns.map((col, idx) => (
//         <Cell key={`header-${idx}`} align={col.align || 'center'} cssClasses={col.bgColor || ''}>
//           <span className="font-bold text-[11px] whitespace-nowrap">{col.label}</span>
//         </Cell>
//       ))}
//     </div>
//   );
// };











'use client';

import { mdiTriangleDown } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useButtonContext } from './ButtonContext';
import { getRightSideColumns, BASE_HEADER_LEFT_COLUMNS, BASE_HEADER_RIGHT_COLUMNS } from './ColumnConfig';

export const ColumnHeader = () => {
  const { activeButton } = useButtonContext();
  
  const Cell = ({ children, cssClasses = '', align = 'center' }: { children?: React.ReactNode, cssClasses?: string, align?: string }) => (
    <div className={`flex items-center justify-${align} text-${align} h-full w-full ${cssClasses}`}>
      {children}
    </div>
  );

  const rightColumns = getRightSideColumns(activeButton);
  const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
  const gridTemplateColumns = `${BASE_HEADER_LEFT_COLUMNS} ${BASE_HEADER_RIGHT_COLUMNS} ${rightColumnWidths}`;

  return (
    <div 
      className="column-header grid gap-3 py-2 px-0 text-[12pt]"
      style={{ gridTemplateColumns }}
    >
      {/* Your EXISTING 12 columns - NO CHANGES */}
      <Cell align="center" 
        
        cssClasses="border border-transparent"
        
        >
        
        # <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" />
      </Cell>
      <Cell align="center" 
        
        cssClasses="border border-transparent"
        
        >
        <div className="flex items-center justify-center"></div>
      </Cell>
      <Cell align="center" 
        
        cssClasses="border border-transparent"
        
        >
        <div className="flex items-center justify-center">
          <span className="font-bold">(BP)</span>
        </div>
      </Cell>
      <Cell 
        align="center" 
        
        cssClasses="border border-transparent"
        
        >
          AGE
      </Cell>
      <Cell align="center" 
      
        cssClasses="border border-transparent"
        
        >
          OCR
      </Cell>
      
      <Cell align="center" 
      
        cssClasses="border border-transparent"
        
        >
          HWT
      </Cell>
      <Cell align="center" 
      
      cssClasses="border border-transparent"
      
      >DLR</Cell>
      <Cell align="center" 
      
      cssClasses="border border-transparent"
      
      >MTX</Cell>
      <Cell align="left" 
      
        cssClasses="border border-transparent"
        
        >
        <div className="flex items-start justify-start gap-1">
          J&T
        </div>
      </Cell>
      <Cell align="center" 
        
        cssClasses="border border-transparent"
        
        >
          FINTIME
      </Cell>
      <Cell align="center" 
      
        cssClasses="border border-transparent"
        
        >
          MRG
      </Cell>

      <Cell align="center" 
        cssClasses="border border-transparent"
        
        >
          +
      </Cell>
      
      {/* DYNAMIC RIGHT SIDE COLUMNS - NO BACKGROUND COLORS HERE */}
      {rightColumns.map((col, idx) => (
        <Cell key={`header-${idx}`} align={col.align || 'center'}
          
        cssClasses="border border-transparent justify-center items-center"
        
        >
          <span className="font-bold text-[12pt] whitespace-nowrap">{col.label}</span>
        </Cell>
      ))}
    </div>
  );
};