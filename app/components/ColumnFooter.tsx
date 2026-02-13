'use client';

import { mdiTriangleDown } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useButtonContext } from './ButtonContext';
import { getRightSideColumns, BASE_HEADER_LEFT_COLUMNS, BASE_HEADER_RIGHT_COLUMNS } from './ColumnConfig';

export const ColumnFooter = () => {
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
      className="column-header grid gap-3 py-4 px-0 text-[12pt] bg-secondary"
      style={{ gridTemplateColumns }}
    >
      {/* Your EXISTING 12 columns - NO CHANGES */}
      <Cell align="center">
        {/* # <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" /> */}
      </Cell>
      <Cell align="center">
        <div className="flex items-center justify-center"></div>
      </Cell>
      <Cell align="center">
        {/* <div className="flex items-center justify-center">
          <span className="font-bold">
            (BP)
          </span>
        </div> */}
      </Cell>
      <Cell align="center">
        {/* AGE */}
      </Cell>
      <Cell align="center">
        {/* OCR */}
      </Cell>
      <Cell align="center">
        {/* HWT */}
      </Cell>
      <Cell align="center">
        {/* DLR */}
      </Cell>
      <Cell align="center">
        {/* MTX */}
      </Cell>
      <Cell align="left" cssClasses="justify-start">
        {/* <div className="flex items-start justify-start gap-1">J&T</div> */}
      </Cell>
      <Cell align="center">
        {/* FINTIME */}
      </Cell>
      <Cell align="center">
        {/* MRG */}
      </Cell>
      <Cell align="center">
        {/* + */}
      </Cell>
      
      {/* DYNAMIC RIGHT SIDE COLUMNS - NO BACKGROUND COLORS HERE */}
      {rightColumns.map((col, idx) => (
        <Cell key={`header-${idx}`} align={'right'} cssClasses="align-end items-center justify-center">
          <span className="font-bold text-[12pt] whitespace-nowrap">
            {/* {col.label} */}
            
            {col.label === 'TOTE W | P' ? '0%' : ''}
            {col.label === 'DIVPRE' ? '0%' : ''}
            {col.label === 'A_l_Theo' ? '0%' : ''}
            {col.label === 'A_cAlpha' ? '0%' : ''}
            {col.label === 'FXD' ? '0%' : ''}
            {col.label === 'BFXLPT' ? '0%' : ''}
            {col.label === 'A_m_THEO' ? '0%' : ''}
            {col.label === 'A_e_THEO' ? '0%' : ''}

            

          </span>
        </Cell>
      ))}
    </div>
  );
};