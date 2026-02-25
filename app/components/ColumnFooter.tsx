// 'use client';

// import { mdiTriangleDown } from "@mdi/js";
// import { Icon } from "@mdi/react";
// import { useButtonContext } from './ButtonContext';
// import { getRightSideColumns, BASE_HEADER_LEFT_COLUMNS, BASE_HEADER_RIGHT_COLUMNS } from './ColumnConfig';

// export const ColumnFooter = () => {
//   const { activeButton } = useButtonContext();
  
//   const Cell = ({ children, cssClasses = '', align = 'center' }: { children?: React.ReactNode, cssClasses?: string, align?: string }) => (
//     <div className={`flex items-center justify-${align} text-${align} h-full w-full ${cssClasses}`}>
//       {children}
//     </div>
//   );

//   const rightColumns = getRightSideColumns(activeButton);
//   const rightColumnWidths = rightColumns.map(col => col.width).join(' ');
//   const gridTemplateColumns = `${BASE_HEADER_LEFT_COLUMNS} ${BASE_HEADER_RIGHT_COLUMNS} ${rightColumnWidths}`;

//   return (
//     <div 
//       className="column-header grid gap-3 py-4 px-0 text-[12pt] bg-secondary"
//       style={{ gridTemplateColumns }}
//     >
//       {/* Your EXISTING 12 columns - NO CHANGES */}
//       <Cell align="center">
//         {/* # <Icon path={mdiTriangleDown} size={0.5} className="text-muted-foreground" /> */}
//       </Cell>
//       <Cell align="center">
//         <div className="flex items-center justify-center"></div>
//       </Cell>
//       <Cell align="center">
//         {/* <div className="flex items-center justify-center">
//           <span className="font-bold">
//             (BP)
//           </span>
//         </div> */}
//       </Cell>
//       <Cell align="center">
//         {/* AGE */}
//       </Cell>
//       <Cell align="center">
//         {/* OCR */}
//       </Cell>
//       <Cell align="center">
//         {/* HWT */}
//       </Cell>
//       <Cell align="center">
//         {/* DLR */}
//       </Cell>
//       <Cell align="center">
//         {/* MTX */}
//       </Cell>
//       <Cell align="left" cssClasses="justify-start">
//         {/* <div className="flex items-start justify-start gap-1">J&T</div> */}
//       </Cell>
//       <Cell align="center">
//         {/* FINTIME */}
//       </Cell>
//       <Cell align="center">
//         {/* MRG */}
//       </Cell>
//       <Cell align="center">
//         {/* + */}
//       </Cell>
      
//       {/* DYNAMIC RIGHT SIDE COLUMNS - NO BACKGROUND COLORS HERE */}
//       {rightColumns.map((col, idx) => (
//         <Cell key={`header-${idx}`} align={'right'} cssClasses="align-end items-center justify-center">
//           <span className="font-bold text-[12pt] whitespace-nowrap">
//             {/* {col.label} */}
            
//             {/* {col.label === 'TOTE W | P' ? '0%' : ''}
//             {col.label === 'DIVPRE' ? '0%' : ''}
//             {col.label === 'A_l_Theo' ? '0%' : ''}
//             {col.label === 'A_cAlpha' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'BFXLPT' ? '0%' : ''}
//             {col.label === 'A_m_THEO' ? '0%' : ''}
//             {col.label === 'A_e_THEO' ? '0%' : ''} */}


            
//             {/* A_Theo	cAlpha	SBT	FXD	FXD	FXD	FXD	FXD	FXD	FXD */}
//             {/* {col.label === 'A_Theo' ? '0%' : ''}
//             {col.label === 'cAlpha' ? '0%' : ''}
//             {col.label === 'SBT' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''}
//             {col.label === 'FXD' ? '0%' : ''} */}


//             {/* A_Theo	cAlpha	B3	B2	B1	LPT	WAP	L1	L2	L3 */}
//             {/* {col.label === 'A_Theo' ? '0%' : ''}
//             {col.label === 'cAlpha' ? '0%' : ''}
//             {col.label === 'B3' ? '0%' : ''}
//             {col.label === 'B2' ? '0%' : ''}
//             {col.label === 'B1' ? '0%' : ''}
//             {col.label === 'LPT' ? '0%' : ''}
//             {col.label === 'WAP' ? '0%' : ''}
//             {col.label === 'L1' ? '0%' : ''}
//             {col.label === 'L2' ? '0%' : ''}
//             {col.label === 'L3' ? '0%' : ''} */}


//             {/* TOTE W | P DIVPRE */}
//             {col.column_id === 'col_1_2' ? '0%' : ''}  {/* TOTE W | P */}
//             {col.column_id === 'col_1_3' ? '0%' : ''}  {/* DIVPRE */}
//             {col.column_id === 'col_1_4' ? '0%' : ''}  {/* A_l_Theo */}
//             {col.column_id === 'col_1_5' ? '0%' : ''}  {/* A_cAlpha */}
//             {col.column_id === 'col_1_6' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_1_7' ? '0%' : ''}  {/* BFXLPT */}
//             {col.column_id === 'col_1_10' ? '0%' : ''} {/* A_m_THEO */}
//             {col.column_id === 'col_1_11' ? '0%' : ''} {/* A_e_THEO */}


//             {/* A_Theo	cAlpha	SBT	FXD	FXD	FXD	FXD	FXD	FXD	FXD */}
//             {col.column_id === 'col_2_2' ? '0%' : ''}  {/* A_Theo */}
//             {col.column_id === 'col_2_3' ? '0%' : ''}  {/* cAlpha */}
//             {col.column_id === 'col_2_4' ? '0%' : ''}  {/* SBT */}
//             {col.column_id === 'col_2_5' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_2_6' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_2_7' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_2_8' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_2_9' ? '0%' : ''}  {/* FXD */}
//             {col.column_id === 'col_2_10' ? '0%' : ''} {/* FXD */}
//             {col.column_id === 'col_2_11' ? '0%' : ''} {/* FXD */}


//             {/* A_Theo	cAlpha	B3	B2	B1	LPT	WAP	L1	L2	L3 */}
//             {col.column_id === 'col_3_2' ? '0%' : ''}  {/* A_Theo */}
//             {col.column_id === 'col_3_3' ? '0%' : ''}  {/* cAlpha */}
//             {col.column_id === 'col_3_4' ? '0%' : ''}  {/* B3 */}
//             {col.column_id === 'col_3_5' ? '0%' : ''}  {/* B2 */}
//             {col.column_id === 'col_3_6' ? '0%' : ''}  {/* B1 */}
//             {col.column_id === 'col_3_7' ? '0%' : ''}  {/* LPT */}
//             {col.column_id === 'col_3_8' ? '0%' : ''}  {/* WAP */}
//             {col.column_id === 'col_3_9' ? '0%' : ''}  {/* L1 */}
//             {col.column_id === 'col_3_10' ? '0%' : ''} {/* L2 */}
//             {col.column_id === 'col_3_11' ? '0%' : ''} {/* L3 */}







            

//           </span>
//         </Cell>
//       ))}
//     </div>
//   );
// };
































'use client';

import { useButtonContext } from './ButtonContext';
import { 
  getRightSideColumns, 
  BASE_HEADER_LEFT_COLUMNS, 
  getRightColumnWidths 
} from './ColumnConfig';

export const ColumnFooter = () => {
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
      className="column-footer grid gap-3 py-4 px-0 text-[12pt] bg-secondary w-full"
      style={{ gridTemplateColumns }}
    >
      {/* Left side cells (empty) */}
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="left" cssClasses="justify-start"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      <Cell align="center"></Cell>
      
      {/* DYNAMIC RIGHT SIDE COLUMNS */}
      {rightColumns.map((col, idx) => (
        <Cell 
          key={`footer-${idx}`} 
          align={'right'} 
          cssClasses="align-end items-center justify-center"
        >
          <span className="font-bold text-[12pt] whitespace-nowrap overflow-hidden text-ellipsis" title={col.label}>
            {/* Button 1 columns */}
            {col.column_id === 'col_1_2' ? '0%' : ''}  {/* TOTE W | P */}
            {col.column_id === 'col_1_3' ? '0%' : ''}  {/* DIVPRE */}
            {col.column_id === 'col_1_4' ? '0%' : ''}  {/* A_l_Theo */}
            {col.column_id === 'col_1_5' ? '0%' : ''}  {/* A_cAlpha */}
            {col.column_id === 'col_1_6' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_1_7' ? '0%' : ''}  {/* BFXLPT */}
            {col.column_id === 'col_1_10' ? '0%' : ''} {/* A_m_THEO */}
            {col.column_id === 'col_1_11' ? '0%' : ''} {/* A_e_THEO */}

            {/* Button 2 columns */}
            {col.column_id === 'col_2_2' ? '0%' : ''}  {/* A_Theo */}
            {col.column_id === 'col_2_3' ? '0%' : ''}  {/* cAlpha */}
            {col.column_id === 'col_2_4' ? '0%' : ''}  {/* SBT */}
            {col.column_id === 'col_2_5' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_2_6' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_2_7' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_2_8' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_2_9' ? '0%' : ''}  {/* FXD */}
            {col.column_id === 'col_2_10' ? '0%' : ''} {/* FXD */}
            {col.column_id === 'col_2_11' ? '0%' : ''} {/* FXD */}

            {/* Button 3 columns */}
            {col.column_id === 'col_3_2' ? '0%' : ''}  {/* A_Theo */}
            {col.column_id === 'col_3_3' ? '0%' : ''}  {/* cAlpha */}
            {col.column_id === 'col_3_4' ? '0%' : ''}  {/* B3 */}
            {col.column_id === 'col_3_5' ? '0%' : ''}  {/* B2 */}
            {col.column_id === 'col_3_6' ? '0%' : ''}  {/* B1 */}
            {col.column_id === 'col_3_7' ? '0%' : ''}  {/* LPT */}
            {col.column_id === 'col_3_8' ? '0%' : ''}  {/* WAP */}
            {col.column_id === 'col_3_9' ? '0%' : ''}  {/* L1 */}
            {col.column_id === 'col_3_10' ? '0%' : ''} {/* L2 */}
            {col.column_id === 'col_3_11' ? '0%' : ''} {/* L3 */}

            {/* Button 11 columns */}
            {col.column_id === 'col_11_1' ? 'STAT' : ''}
            {col.column_id === 'col_11_2' ? 'STAT' : ''}
            {col.column_id === 'col_11_3' ? 'STAT' : ''}
            {col.column_id === 'col_11_4' ? 'STAT' : ''}
            {col.column_id === 'col_11_5' ? 'STAT' : ''}
            {col.column_id === 'col_11_6' ? 'STAT' : ''}
            {col.column_id === 'col_11_7' ? 'STAT' : ''}
            {col.column_id === 'col_11_8' ? 'STAT' : ''}
            {col.column_id === 'col_11_9' ? 'STAT' : ''}
            {col.column_id === 'col_11_10' ? 'STAT' : ''}
            {col.column_id === 'col_11_11' ? 'STAT' : ''}

            {/* Button 12 columns */}
            {col.column_id === 'col_12_1' ? 'POWRAT' : ''}
            {col.column_id === 'col_12_2' ? 'MRKRAT' : ''}
            {col.column_id === 'col_12_3' ? 'SPDRTG' : ''}
            {col.column_id === 'col_12_4' ? 'TEMPO1' : ''}
            {col.column_id === 'col_12_5' ? 'TEMPO2' : ''}
            {col.column_id === 'col_12_6' ? 'TEMPO3' : ''}
            {col.column_id === 'col_12_7' ? 'TEMPO4' : ''}
            {col.column_id === 'col_12_8' ? 'VDL' : ''}
            {col.column_id === 'col_12_9' ? 'VDL' : ''}
            {col.column_id === 'col_12_10' ? 'VDL' : ''}
            {col.column_id === 'col_12_11' ? 'VDL' : ''}

            {/* Button 13 columns */}
            {col.column_id === 'col_13_1' ? 'SA(X)' : ''}
            {col.column_id === 'col_13_2' ? 'RAS' : ''}
            {col.column_id === 'col_13_3' ? 'DUE' : ''}
            {col.column_id === 'col_13_4' ? 'WNC' : ''}
            {col.column_id === 'col_13_5' ? 'EXE' : ''}
            {col.column_id === 'col_13_6' ? 'WHT' : ''}
            {col.column_id === 'col_13_7' ? 'MMI' : ''}
            {col.column_id === 'col_13_8' ? 'PAT' : ''}
            {col.column_id === 'col_13_9' ? 'HAF' : ''}
            {col.column_id === 'col_13_10' ? 'BIA' : ''}
            {col.column_id === 'col_13_11' ? 'QRR' : ''}
            {col.column_id === 'col_13_12' ? 'ESD' : ''}
            {col.column_id === 'col_13_13' ? 'EOV' : ''}
            {col.column_id === 'col_13_14' ? '+' : ''}
            {col.column_id === 'col_13_15' ? 'INJ' : ''}
            {col.column_id === 'col_13_16' ? 'HDM' : ''}
            {col.column_id === 'col_13_17' ? 'COM' : ''}
          </span>
        </Cell>
      ))}
    </div>
  );
};