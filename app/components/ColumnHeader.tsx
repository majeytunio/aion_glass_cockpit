'use client';

import { mdiTriangleDown } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useButtonContext } from './ButtonContext';
import { 
  getRightSideColumns, 
  BASE_HEADER_LEFT_COLUMNS, 
  getRightColumnWidths 
} from './ColumnConfig';

export const ColumnHeader = () => {
  const { activeButton } = useButtonContext();
  
  const Cell = ({ children, cssClasses = '', align = 'center' }: { children?: React.ReactNode, cssClasses?: string, align?: string }) => (
    <div className={`flex items-center justify-${align} text-${align} h-full w-full ${cssClasses}`}>
      {children}
    </div>
  );

  const rightColumns = getRightSideColumns(activeButton);
  const rightWidths = getRightColumnWidths(activeButton);
  
  // Combine all parts: left columns + right columns
  const gridTemplateColumns = `${BASE_HEADER_LEFT_COLUMNS} ${rightWidths.header}`;

  return (
    <div 
      className="column-header grid gap-3 py-2 px-0 text-[10pt] w-full"
      style={{ gridTemplateColumns }}
    >
      {/* Your EXISTING 12 columns - NO CHANGES */}
      <Cell align="center" cssClasses="border border-transparent">
        # <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" />
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        <div className="flex items-center justify-center"></div>
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        <div className="flex items-center justify-center">
          <span className="font-bold">(BP)</span>
        </div>
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        AGE
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        OCR
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        HWT
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        DLR
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        MTX
      </Cell>
      <Cell align="left" cssClasses="border border-transparent">
        <div className="flex items-start justify-start gap-1">
          J&T
        </div>
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        FINTIME
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        MRG
      </Cell>
      <Cell align="center" cssClasses="border border-transparent">
        +
      </Cell>
      
      {/* DYNAMIC RIGHT SIDE COLUMNS */}
      {rightColumns.map((col, idx) => (
        <Cell 
          key={`header-${idx}`} 
          align={col.align || 'center'}
          cssClasses="border border-transparent justify-center items-center"
        >
          <span className="font-bold text-[10pt] whitespace-nowrap overflow-hidden text-ellipsis" 
                title={col.label}>
            {col.label}
          </span>
        </Cell>
      ))}
    </div>
  );
};