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
  align?: 'left' | 'center' | 'right';
}

export const getRightSideColumns = (activeButton: number): RightColumn[] => {
  switch(activeButton) {
    case 1:
      return [
        {   label: 
            'P & L', 
            width: '80px', align: 'right' },
        { 
            label: 'TOTE W | P', 
            width: '90px', 
            bgColor: 'bg-gray-100 dark:bg-gray-800/50', 
            align: 'right' 
        },

        { 
            label: 'DIVPRE', 
            width: '80px', 
            align: 'right' 
        },
        { 
            label: 'A_l_Theo', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_cAlpha', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'FXD', 
            width: '70px', 
            bgColor: 'bg-blue-50 dark:bg-blue-900/20', 
            align: 'right' 
        },
        { 
            label: 'BFXLPT', 
            width: '80px', 
            bgColor: 'bg-green-50 dark:bg-green-900/20', 
            align: 'right' 
        },
        { 
            label: '< ___', 
            width: '70px', 
            align: 'center' 
        },
        { 
            label: '< _', 
            width: '60px', 
            align: 'center' 
        },
        { 
            label: 'A_m_THEO', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_e_THEO', 
            width: '90px', 
            align: 'right' 
        }
      ];
    case 2:
      return [
        {   label: 
            'P & L', 
            width: '80px', align: 'right' },
        { 
            label: 'TOTE W | P', 
            width: '90px', 
            bgColor: 'bg-gray-100 dark:bg-gray-800/50', 
            align: 'right' 
        },

        { 
            label: 'DIVPRE', 
            width: '80px', 
            align: 'right' 
        },
        { 
            label: 'A_l_Theo', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_cAlpha', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'FXD', 
            width: '70px', 
            bgColor: 'bg-blue-50 dark:bg-blue-900/20', 
            align: 'right' 
        },
        { 
            label: 'BFXLPT', 
            width: '80px', 
            bgColor: 'bg-green-50 dark:bg-green-900/20', 
            align: 'right' 
        },
        { 
            label: '< ___', 
            width: '70px', 
            align: 'center' 
        },
        { 
            label: '< _', 
            width: '60px', 
            align: 'center' 
        },
        { 
            label: 'A_m_THEO', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_e_THEO', 
            width: '90px', 
            align: 'right' 
        }
        // { label: 'Column 2-1', width: '80px', align: 'right' },
        // { label: 'Column 2-2', width: '90px', align: 'right' },
        // { label: 'Column 2-3', width: '80px', align: 'right' }
      ];
    case 3:
      return [
        {   label: 
            'P & L', 
            width: '80px', align: 'right' },
        { 
            label: 'TOTE W | P', 
            width: '90px', 
            bgColor: 'bg-gray-100 dark:bg-gray-800/50', 
            align: 'right' 
        },

        { 
            label: 'DIVPRE', 
            width: '80px', 
            align: 'right' 
        },
        { 
            label: 'A_l_Theo', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_cAlpha', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'FXD', 
            width: '70px', 
            bgColor: 'bg-blue-50 dark:bg-blue-900/20', 
            align: 'right' 
        },
        { 
            label: 'BFXLPT', 
            width: '80px', 
            bgColor: 'bg-green-50 dark:bg-green-900/20', 
            align: 'right' 
        },
        { 
            label: '< ___', 
            width: '70px', 
            align: 'center' 
        },
        { 
            label: '< _', 
            width: '60px', 
            align: 'center' 
        },
        { 
            label: 'A_m_THEO', 
            width: '90px', 
            align: 'right' 
        },
        { 
            label: 'A_e_THEO', 
            width: '90px', 
            align: 'right' 
        }
        // { label: 'Column 3-1', width: '80px', align: 'right' },
        // { label: 'Column 3-2', width: '90px', align: 'right' },
        // { label: 'Column 3-3', width: '80px', align: 'right' }
      ];
    case 4:
    case 5:
    default:
      return [];
  }
};

// FIXED: Removed the 1865px extra column - now ends with '+'
// export const BASE_COLUMNS = '60px 300px 60px 60px 60px 60px 60px 60px 350px 100px 60px 60px';
// export const BASE_REALM_COLUMNS = '60px 300px 85px 70px 70px 70px 75px 70px 70px 120px 70px 70px';


export const BASE_HEADER_LEFT_COLUMNS = '60px 400px 60px 60px 60px 60px 60px 60px 360px 100px 60px 60px';
export const BASE_REALM_LEFT_COLUMNS = '60px 430px 70px 65px 75px 75px 63px 72px 385px 100px 85px 40px';

export const BASE_HEADER_RIGHT_COLUMNS = '100px 125px 100px 100px 100px 100px 100px 100px 110px 100px 100px 100px';
export const BASE_REALM_RIGHT_COLUMNS = '125px 130px 110px 115px 110px 110px 130px 100px 120px 110px 100px 100px';