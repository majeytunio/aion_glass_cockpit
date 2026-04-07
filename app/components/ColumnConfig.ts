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
  dataKey?: string;
}

// Universal right side column widths (for buttons 1-12 except 13)
export const BASE_HEADER_RIGHT_COLUMNS = '125px 130px 130px 125px 127px 127px 127px 130px 127px 127px 140px';
export const BASE_REALM_RIGHT_COLUMNS = '140px 140px 140px 140px 140px 140px 140px 140px 140px 140px 148px';

// Button 13 specific right side column widths (for 17 columns)
export const BASE_HEADER_RIGHT_COLUMNS_BUTTON_13 = '80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px';
export const BASE_REALM_RIGHT_COLUMNS_BUTTON_13 = '90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px 90px';

// Function to get the right column widths based on active button
export const getRightColumnWidths = (activeButton: number): { header: string, realm: string } => {
  switch(activeButton) {
    case 13:
      return {
        header: BASE_HEADER_RIGHT_COLUMNS_BUTTON_13,
        realm: BASE_REALM_RIGHT_COLUMNS_BUTTON_13
      };
    // Add more cases for other special buttons if needed
    // case 14:
    //   return {
    //     header: BASE_HEADER_RIGHT_COLUMNS_BUTTON_14,
    //     realm: BASE_REALM_RIGHT_COLUMNS_BUTTON_14
    //   };
    default:
      return {
        header: BASE_HEADER_RIGHT_COLUMNS,
        realm: BASE_REALM_RIGHT_COLUMNS
      };
  }
};

export const getRightSideColumns = (activeButton: number): RightColumn[] => {
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
        
        case 11:
            return [
                { column_id: 'col_11_1', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_2', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_3', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_4', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_5', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_6', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_7', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_8', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_9', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_10', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_11_11', label: 'STAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
            ];
        
        case 12:
            return [
                { column_id: 'col_12_1', label: 'POWRAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_2', label: 'MRKRAT', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_3', label: 'SPDRTG', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_4', label: 'TEMPO1', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_5', label: 'TEMPO2', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_6', label: 'TEMPO3', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_7', label: 'TEMPO4', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_8', label: 'VDL', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_9', label: 'VDL', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_10', label: 'VDL', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_12_11', label: 'VDL', width: '80px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
            ];
        
        case 13:
            // 17 columns for button 13
            // SA(X)	RAS	DUE	WNC	EXE	WHT	MMI	PAT	HAF	BIA	QRR	ESD	EOV	+	INJ	HDM	COM
            return [
                { column_id: 'col_13_1', label: 'SA(X)', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_2', label: 'RAS', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_3', label: 'DUE', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_4', label: 'WNC', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_5', label: 'EXE', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_6', label: 'WHT', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_7', label: 'MMI', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_8', label: 'PAT', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_9', label: 'HAF', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_10', label: 'BIA', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_11', label: 'QRR', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_12', label: 'ESD', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_13', label: 'EOV', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_14', label: '+', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_15', label: 'INJ', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_16', label: 'HDM', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
                { column_id: 'col_13_17', label: 'COM', width: '100px', align: 'right', bgColor: 'bg-gray-100 dark:bg-gray-100' },
            ];
        
        default:
            return [];
    }
};

export const BASE_HEADER_LEFT_COLUMNS = '60px 360px 80px 80px 80px 80px 100px 100px 300px 120px 60px 60px';
export const BASE_REALM_LEFT_COLUMNS = '60px 375px 90px 90px 90px 90px 115px 110px 320px 130px 75px 65px';