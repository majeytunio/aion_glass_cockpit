// // // Column configurations for each button state
// // export interface RightColumn {
// //   label: string;
// //   width: string;
// //   bgColor?: string;
// //   align?: 'left' | 'center' | 'right';
// // }

// // export const getRightSideColumns = (activeButton: number): RightColumn[] => {
// //   switch(activeButton) {
// //     case 1:
// //       return [
// //         { label: 'P & L', width: '80px', align: 'right' },
// //         { label: 'TOTE W | P', width: '90px', bgColor: 'bg-gray-100 dark:bg-gray-800/50', align: 'right' },
// //         { label: 'DIVPRE', width: '80px', align: 'right' },
// //         { label: 'A_l_Theo', width: '90px', align: 'right' },
// //         { label: 'A_cAlpha', width: '90px', align: 'right' },
// //         { label: 'FXD', width: '70px', bgColor: 'bg-blue-50 dark:bg-blue-900/20', align: 'right' },
// //         { label: 'BFXLPT', width: '80px', bgColor: 'bg-green-50 dark:bg-green-900/20', align: 'right' },
// //         { label: '< ___', width: '70px', align: 'center' },
// //         { label: '< _', width: '60px', align: 'center' },
// //         { label: 'A_m_THEO', width: '90px', align: 'right' },
// //         { label: 'A_e_THEO', width: '90px', align: 'right' }
// //       ];
// //     case 2:
// //       // TODO: Add columns for button 2
// //       return [
// //         { label: 'Column 2-1', width: '80px' },
// //         { label: 'Column 2-2', width: '90px' },
// //         { label: 'Column 2-3', width: '80px' }
// //       ];
// //     case 3:
// //       // TODO: Add columns for button 3
// //       return [
// //         { label: 'Column 3-1', width: '80px' },
// //         { label: 'Column 3-2', width: '90px' },
// //         { label: 'Column 3-3', width: '80px' }
// //       ];
// //     case 4:
// //     case 5:
// //     default:
// //       return [];
// //   }
// // };

// // // Base column widths (YOUR EXISTING COLUMNS - DO NOT CHANGE)
// // export const BASE_COLUMNS = '60px 300px 60px 60px 60px 60px 60px 60px 350px 100px 60px 60px';
// // export const BASE_REALM_COLUMNS = '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px';





// // Column configurations for each button state
// export interface RightColumn {
//   label: string;
//   width: string;
//   bgColor?: string;  // This is ONLY for data cells now
//   align?: 'left' | 'center' | 'right';
// }

// export const getRightSideColumns = (activeButton: number): RightColumn[] => {
//   switch(activeButton) {
//     case 1:
//       return [
//         { label: 'P & L', width: '80px', align: 'right' },
//         { label: 'TOTE W | P', width: '90px', bgColor: 'bg-gray-100 dark:bg-gray-800/50', align: 'right' },
//         { label: 'DIVPRE', width: '80px', align: 'right' },
//         { label: 'A_l_Theo', width: '90px', align: 'right' },
//         { label: 'A_cAlpha', width: '90px', align: 'right' },
//         { label: 'FXD', width: '70px', bgColor: 'bg-blue-50 dark:bg-blue-900/20', align: 'right' },
//         { label: 'BFXLPT', width: '80px', bgColor: 'bg-green-50 dark:bg-green-900/20', align: 'right' },
//         { label: '< ___', width: '70px', align: 'center' },
//         { label: '< _', width: '60px', align: 'center' },
//         { label: 'A_m_THEO', width: '90px', align: 'right' },
//         { label: 'A_e_THEO', width: '90px', align: 'right' }
//       ];
//     case 2:
//       // TODO: Add columns for button 2
//       return [
//         { label: 'Column 2-1', width: '80px', align: 'right' },
//         { label: 'Column 2-2', width: '90px', align: 'right' },
//         { label: 'Column 2-3', width: '80px', align: 'right' }
//       ];
//     case 3:
//       // TODO: Add columns for button 3
//       return [
//         { label: 'Column 3-1', width: '80px', align: 'right' },
//         { label: 'Column 3-2', width: '90px', align: 'right' },
//         { label: 'Column 3-3', width: '80px', align: 'right' }
//       ];
//     case 4:
//     case 5:
//     default:
//       return [];
//   }
// };

// // Base column widths (YOUR EXISTING COLUMNS - DO NOT CHANGE)
// export const BASE_COLUMNS = '60px 300px 60px 60px 60px 60px 60px 60px 350px 100px 60px 60px';
// export const BASE_REALM_COLUMNS = '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px 1865px';






// Column configurations for each button state
export interface RightColumn {
  label: string;
  width: string;
  bgColor?: string;
  column_id?: string;
  align?: 'left' | 'center' | 'right';
}


export interface RunnerRowData {
  id: number;
  number: number;
  runnerCol: string;
  bp: string;
  age: string;
  ocr: string;
  hwt: string;
  dlr: string;
  mtx: string;
  jandt: string;
  fin: string;
  mrg: string;
  add: string;
  // Right side dynamic data - can be any structure based on your needs
  rightSideData?: {
    [key: string]: string | number;
  };
}

export interface ColumnConfig {
  id: string;
  label: string;
  width: string;
  align?: 'left' | 'center' | 'right';
  bgColor?: string;
  dataKey?: string; // Key to access data from runner object
}


export const getRightSideColumns = (activeButton: number): RightColumn[] => {
//   switch(activeButton) {
//     case 1:
//       return [
//         {   label: 
//             'P & L', 
//             width: '80px', align: 'right' },
//         { 
//             label: 'TOTE W | P', 
//             width: '90px', 
//             bgColor: 'bg-gray-100 dark:bg-gray-100', 
//             align: 'right' 
//         },

//         { 
//             label: 'DIVPRE', 
//             width: '80px', 
//             align: 'right' 
//         },
//         { 
//             label: 'A_l_Theo', 
//             width: '90px', 
//             align: 'right' 
//         },
//         { 
//             label: 'A_cAlpha', 
//             width: '90px', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '70px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'BFXLPT', 
//             width: '80px', 
//             // bgColor: 'bg-green-50 dark:bg-green-900/20', 
//             bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]', 
//             align: 'right' 
//         },
//         { 
//             label: '< ___', 
//             width: '70px', 
//             align: 'center' 
//         },
//         { 
//             label: '< _', 
//             width: '60px', 
//             align: 'center' 
//         },
//         { 
//             label: 'A_m_THEO', 
//             width: '90px', 
//             align: 'right' 
//         },
//         { 
//             label: 'A_e_THEO', 
//             width: '90px', 
//             align: 'right' 
//         }
//       ];
//     case 2:
//       return [
//         { 
//             label: 'P & L', 
//             width: '80px', 
//             align: 'right' 
//         },
//         { 
//             label: 'A_Theo', 
//             width: '90px', 
//             bgColor: 'bg-gray-100 dark:bg-gray-100', 
//             align: 'right' 
//         },
//         { 
//             label: 'cAlpha', 
//             width: '90px', 
//             bgColor: 'bg-gray-100 dark:bg-gray-100', 
//             align: 'right' 
//         },
//         { 
//             label: 'SBT', 
//             width: '80px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '70px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '80px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '70px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'center' 
//         },
//         { 
//             label: 'FXD', 
//             width: '60px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'center' 
//         },
//         { 
//             label: 'FXD', 
//             width: '90px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '90px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         },
//         { 
//             label: 'FXD', 
//             width: '90px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
//             align: 'right' 
//         }
//     ];
//         // { label: 'Column 2-1', width: '80px', align: 'right' },
//         // { label: 'Column 2-2', width: '90px', align: 'right' },
//         // { label: 'Column 2-3', width: '80px', align: 'right' }
//     case 3:
//       return [
//         { 
//             label: 'P & L', 
//             width: '80px', 
//             align: 'right' 
//         },
//         { 
//             label: 'A_Theo', 
//             width: '90px', 
//             bgColor: 'bg-gray-100 dark:bg-gray-100',
//             align: 'right' 
//         },
//         { 
//             label: 'cAlpha', 
//             width: '90px', 
//             bgColor: 'bg-gray-100 dark:bg-gray-100',
//             align: 'right' 
//         },
//         { 
//             label: 'B3', 
//             width: '80px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
//             align: 'right' 
//         },
//         { 
//             label: 'B2', 
//             width: '80px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
//             align: 'right' 
//         },
//         { 
//             label: 'B1', 
//             width: '80px', 
//             bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
//             align: 'right' 
//         },
//         { 
//             label: 'LPT', 
//             width: '80px', 
//             bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]',
//             align: 'right' 
//         },
//         { 
//             label: 'WAP', 
//             width: '80px', 
//             bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]',
//             align: 'right' 
//         },
//         { 
//             label: 'L1', 
//             width: '80px', 
//             bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
//             align: 'right' 
//         },
//         { 
//             label: 'L2', 
//             width: '80px', 
//             bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
//             align: 'right' 
//         },
//         { 
//             label: 'L3', 
//             width: '80px', 
//             bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
//             align: 'right' 
//         }
//     ];
//         // { label: 'Column 3-1', width: '80px', align: 'right' },
//         // { label: 'Column 3-2', width: '90px', align: 'right' },
//         // { label: 'Column 3-3', width: '80px', align: 'right' }

//     case 4:
//         return [
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//         ];
//     case 5:
//         return [
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//             { label: '', width: '80px', align: 'right' },
//         ];
//     default:
//       return [];
//   }


    switch(activeButton) {
        case 1:
        return [
            {   column_id: 'col_1_1',
                label: 'P & L', 
                width: '80px', align: 'right' },
            {   column_id: 'col_1_2',
                label: 'TOTE W | P', 
                width: '90px', 
                bgColor: 'bg-gray-100 dark:bg-gray-100', 
                align: 'right' 
            },
            {   column_id: 'col_1_3',
                label: 'DIVPRE', 
                width: '80px', 
                align: 'right' 
            },
            {   column_id: 'col_1_4',
                label: 'A_l_Theo', 
                width: '90px', 
                align: 'right' 
            },
            {   column_id: 'col_1_5',
                label: 'A_cAlpha', 
                width: '90px', 
                align: 'right' 
            },
            {   column_id: 'col_1_6',
                label: 'FXD', 
                width: '70px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_1_7',
                label: 'BFXLPT', 
                width: '80px', 
                // bgColor: 'bg-green-50 dark:bg-green-900/20', 
                bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]', 
                align: 'right' 
            },
            {   column_id: 'col_1_8',
                label: '< ___', 
                width: '70px', 
                align: 'center' 
            },
            {   column_id: 'col_1_9',
                label: '< _', 
                width: '60px', 
                align: 'center' 
            },
            {   column_id: 'col_1_10',
                label: 'A_m_THEO', 
                width: '90px', 
                align: 'right' 
            },
            {   column_id: 'col_1_11',
                label: 'A_e_THEO', 
                width: '90px', 
                align: 'right' 
            }
        ];
        case 2:
        return [
            {   column_id: 'col_2_1',
                label: 'P & L', 
                width: '80px', 
                align: 'right' 
            },
            {   column_id: 'col_2_2',
                label: 'A_Theo', 
                width: '90px', 
                bgColor: 'bg-gray-100 dark:bg-gray-100', 
                align: 'right' 
            },
            {   column_id: 'col_2_3',
                label: 'cAlpha', 
                width: '90px', 
                bgColor: 'bg-gray-100 dark:bg-gray-100', 
                align: 'right' 
            },
            {   column_id: 'col_2_4',
                label: 'SBT', 
                width: '80px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_2_5',
                label: 'FXD', 
                width: '70px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_2_6',
                label: 'FXD', 
                width: '80px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_2_7',
                label: 'FXD', 
                width: '70px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'center' 
            },
            {   column_id: 'col_2_8',
                label: 'FXD', 
                width: '60px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'center' 
            },
            {   column_id: 'col_2_9',
                label: 'FXD', 
                width: '90px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_2_10',
                label: 'FXD', 
                width: '90px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            },
            {   column_id: 'col_2_11',
                label: 'FXD', 
                width: '90px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]', 
                align: 'right' 
            }
        ];
        case 3:
        return [
            {   column_id: 'col_3_1',
                label: 'P & L', 
                width: '80px', 
                align: 'right' 
            },
            {   column_id: 'col_3_2',
                label: 'A_Theo', 
                width: '90px', 
                bgColor: 'bg-gray-100 dark:bg-gray-100',
                align: 'right' 
            },
            {   column_id: 'col_3_3',
                label: 'cAlpha', 
                width: '90px', 
                bgColor: 'bg-gray-100 dark:bg-gray-100',
                align: 'right' 
            },
            {   column_id: 'col_3_4',
                label: 'B3', 
                width: '80px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
                align: 'right' 
            },
            {   column_id: 'col_3_5',
                label: 'B2', 
                width: '80px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
                align: 'right' 
            },
            {   column_id: 'col_3_6',
                label: 'B1', 
                width: '80px', 
                bgColor: 'bg-[#DAE9F8] dark:bg-[#DAE9F8]',
                align: 'right' 
            },
            {   column_id: 'col_3_7',
                label: 'LPT', 
                width: '80px', 
                bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]',
                align: 'right' 
            },
            {   column_id: 'col_3_8',
                label: 'WAP', 
                width: '80px', 
                bgColor: 'bg-[#F5FFC1] dark:bg-[#F5FFC1]',
                align: 'right' 
            },
            {   column_id: 'col_3_9',
                label: 'L1', 
                width: '80px', 
                bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
                align: 'right' 
            },
            {   column_id: 'col_3_10',
                label: 'L2', 
                width: '80px', 
                bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
                align: 'right' 
            },
            {   column_id: 'col_3_11',
                label: 'L3', 
                width: '80px', 
                bgColor: 'bg-[#FED1F2] dark:bg-[#FED1F2]',
                align: 'right' 
            }
        ];
        case 4:
            return [
                { column_id: 'col_4_1', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_2', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_3', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_4', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_5', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_6', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_7', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_8', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_9', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_10', label: '', width: '80px', align: 'right' },
                { column_id: 'col_4_11', label: '', width: '80px', align: 'right' },
            ];
        case 5:
            return [
                { column_id: 'col_5_1', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_2', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_3', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_4', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_5', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_6', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_7', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_8', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_9', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_10', label: '', width: '80px', align: 'right' },
                { column_id: 'col_5_11', label: '', width: '80px', align: 'right' },
            ];
        default:
            return [];
    }
};
// FIXED: Removed the 1865px extra column - now ends with '+'
// export const BASE_COLUMNS = '60px 300px 60px 60px 60px 60px 60px 60px 350px 100px 60px 60px';
// export const BASE_REALM_COLUMNS = '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px';


// export const BASE_HEADER_LEFT_COLUMNS = '60px 300px 80px 80px 80px 80px 100px 100px 245px 120px 60px 60px';
// export const BASE_REALM_LEFT_COLUMNS = '60px 315px 90px 90px 90px 90px 115px 110px 265px 130px 75px 65px';

export const BASE_HEADER_LEFT_COLUMNS = '60px 360px 80px 80px 80px 80px 100px 100px 300px 120px 60px 60px';
export const BASE_REALM_LEFT_COLUMNS = '60px 375px 90px 90px 90px 90px 115px 110px 320px 130px 75px 65px';

// export const BASE_HEADER_RIGHT_COLUMNS = '100px 125px 100px 100px 100px 100px 100px 100px 110px 100px 100px 100px';
// export const BASE_REALM_RIGHT_COLUMNS = '125px 130px 110px 115px 110px 110px 130px 100px 120px 110px 100px 100px';

export const BASE_HEADER_RIGHT_COLUMNS = '140px 120px 120px 120px 120px 130px 120px 100px 100px 150px 190px';
export const BASE_REALM_RIGHT_COLUMNS = '155px 135px 130px 130px 135px 135px 135px 105px 115px 160px 200px';