'use client';

interface UpcomingTileProps {
  trackCode: string;
  raceNo: number | string;
  ttm: string;
  countryCode?: string;
  isEmpty?: boolean;
  racingCode?: string;
  isActive?: boolean; // Used to trigger the Red border/highlight seen in your image
}

export const UpcomingTile = ({ 
  trackCode, 
  raceNo, 
  ttm, 
  countryCode = 'HK', 
  isEmpty,
  racingCode = 'TH',
  isActive = false 
}: UpcomingTileProps) => {

  if (isEmpty) {
    return (
      <div className="w-44 h-24 bg-gray-100 border border-gray-200 rounded-md shadow-sm" />
    );
  }

  // YOUR SPECIFIC FLAG LOGIC RESTORED
  // const getFlagUrl = (code: string) => {
  //   switch (code) {
  //     case 'HK':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
  //     case 'AU':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg';
  //     case 'UK':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_England.svg';
  //     case 'US':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
  //     case 'JP':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
  //     case 'ZA':
  //       return 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg';
  //     default:
  //       return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
  //   }
  // };

  const getFlagUrl = (code: string) => {
    // Handle empty or null codes
    if (!code) {
      return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
    }
    
    const countryCode = code.toUpperCase().trim();
    
    // Complete flag mapping for all countries/regions
    const flagMap: Record<string, string> = {
      // ========== ASIA ==========
      'HK': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
      'HKG': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
      'CN': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      'CHN': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      'TW': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
      'TWN': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
      'JP': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
      'JPN': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
      'KR': 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
      'KOR': 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
      'KP': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
      'PRK': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
      'IN': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg',
      'IND': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg',
      'PK': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
      'PAK': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
      'BD': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
      'BGD': 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
      'LK': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
      'LKA': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
      'NP': 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
      'NPL': 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
      'BT': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
      'BTN': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
      'MM': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
      'MMR': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
      'TH': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
      'THA': 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
      'VN': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
      'VNM': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
      'MY': 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
      'MYS': 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
      'SG': 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
      'SGP': 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
      'ID': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
      'IDN': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
      'PH': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
      'PHL': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
      'KH': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
      'KHM': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
      'LA': 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
      'LAO': 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
      'BN': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
      'BRN': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
      'TL': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
      'TLS': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
      
      // ========== MIDDLE EAST ==========
      'AE': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
      'ARE': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
      'CFD': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg', // CFD related to UAE
      'SA': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
      'SAU': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
      'QA': 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
      'QAT': 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
      'OM': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
      'OMN': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
      'KW': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
      'KWT': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
      'BH': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
      'BHR': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
      'TR': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
      'TUR': 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
      'IR': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
      'IRN': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
      'IQ': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
      'IRQ': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
      'JO': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
      'JOR': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
      'LB': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
      'LBN': 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
      'YE': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
      'YEM': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
      'SY': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
      'SYR': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
      'IL': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
      'ISR': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
      'PS': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg',
      'PSE': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg',
      'CY': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
      'CYP': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
      
      // ========== OCEANIA ==========
      'AU': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
      'AUS': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
      'NZ': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
      'NZL': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
      'FJ': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
      'FJI': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
      'PG': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
      'PNG': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
      'SB': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_the_Solomon_Islands.svg',
      'SLB': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_the_Solomon_Islands.svg',
      'VU': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
      'VUT': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
      'NC': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_New_Caledonia.svg',
      'NCL': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_New_Caledonia.svg',
      
      // ========== EUROPE ==========
      'GB': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
      'GBR': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
      'UK': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
      'FR': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
      'FRA': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
      'DE': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
      'DEU': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
      'IT': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
      'ITA': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
      'ES': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
      'ESP': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
      'PT': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
      'PRT': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
      'NL': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
      'NLD': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
      'BE': 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
      'BEL': 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
      'LU': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
      'LUX': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
      'CH': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
      'CHE': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
      'AT': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
      'AUT': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
      'IE': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
      'IRL': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
      'SE': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg',
      'SWE': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg',
      'NO': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
      'NOR': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
      'DK': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
      'DNK': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
      'FI': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
      'FIN': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
      'IS': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
      'ISL': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
      'PL': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg',
      'POL': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg',
      'CZ': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
      'CZE': 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
      'SK': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
      'SVK': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
      'HU': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
      'HUN': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
      'RO': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
      'ROU': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
      'BG': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
      'BGR': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
      'GR': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
      'GRC': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
      'AL': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
      'ALB': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
      'HR': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
      'HRV': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
      'RS': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
      'SRB': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
      'BA': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
      'BIH': 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
      'SI': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
      'SVN': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
      'ME': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
      'MNE': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
      'MK': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg',
      'MKD': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg',
      'LT': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
      'LTU': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
      'LV': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
      'LVA': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
      'EE': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
      'EST': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
      'BY': 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Flag_of_Belarus.svg',
      'BLR': 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Flag_of_Belarus.svg',
      'UA': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
      'UKR': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
      'MD': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
      'MDA': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
      'GE': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
      'GEO': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
      'AM': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
      'ARM': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
      'AZ': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
      'AZE': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
      'RU': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
      'RUS': 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
      
      // ========== NORTH AMERICA ==========
      'US': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      'USA': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      'CA': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
      'CAN': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg',
      'MX': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      'MEX': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      'GT': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guatemala.svg',
      'GTM': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guatemala.svg',
      'BZ': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
      'BLZ': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
      'SV': 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
      'SLV': 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
      'HN': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
      'HND': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
      'NI': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Nicaragua.svg',
      'NIC': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Nicaragua.svg',
      'CR': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg',
      'CRI': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg',
      'PA': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
      'PAN': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
      'CU': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
      'CUB': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
      'JM': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
      'JAM': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
      'HT': 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
      'HTI': 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
      'DO': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
      'DOM': 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
      'PR': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
      'PRI': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
      'BS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
      'BHS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
      'TT': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
      'TTO': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
      
      // ========== SOUTH AMERICA ==========
      'BR': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
      'BRA': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
      'AR': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
      'ARG': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
      'CL': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
      'CHL': 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
      'UY': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
      'URY': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
      'PY': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
      'PRY': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
      'BO': 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg',
      'BOL': 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg',
      'PE': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
      'PER': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
      'EC': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
      'ECU': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
      'CO': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
      'COL': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
      'VE': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg',
      'VEN': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg',
      'GY': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
      'GUY': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
      'SR': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
      'SUR': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
      
      // ========== AFRICA ==========
      'ZA': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
      'ZAF': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
      'EG': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
      'EGY': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
      'MA': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
      'MAR': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
      'TN': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
      'TUN': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
      'DZ': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
      'DZA': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
      'LY': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg',
      'LBY': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg',
      'SD': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
      'SDN': 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
      'SS': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
      'SSD': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
      'ET': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
      'ETH': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
      'KE': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
      'KEN': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
      'UG': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
      'UGA': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
      'TZ': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg',
      'TZA': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg',
      'RW': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
      'RWA': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
      'BI': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
      'BDI': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
      'CD': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
      'COD': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
      'CG': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
      'COG': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
      'GA': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
      'GAB': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
      'CM': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
      'CMR': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
      'NG': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
      'NGA': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
      'GH': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
      'GHA': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
      'CI': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg',
      'CIV': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg',
      'SN': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
      'SEN': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
      'ML': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
      'MLI': 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
      'BF': 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
      'BFA': 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
      'NE': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
      'NER': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
      'TD': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
      'TCD': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
      'CF': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
      'CAF': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
      'AO': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
      'AGO': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
      'NA': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
      'NAM': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
      'ZM': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
      'ZMB': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
      'ZW': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
      'ZWE': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
      'MW': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
      'MWI': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
      'MZ': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
      'MOZ': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
      'MG': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
      'MDG': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
      'MU': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
      'MUS': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
      'RE': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_R%C3%A9union.svg',
      'REU': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_R%C3%A9union.svg',
    };
    
    // Return mapped flag or default HK flag for unknown codes
    return flagMap[countryCode] || 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg';
  };

  const getRacingCodeIcon = (code: string) => {
    const iconClass = "h-5 w-5 object-contain opacity-90"; 
    switch (code) {
      case 'TH':
        return <img src="/button_6.png" alt="Thoroughbred" className={iconClass} />;
      case 'HN':
        return <img src="/button_7.png" alt="Harness" className={iconClass} />;
      case 'GR':
        return <img src="/button_8.png" alt="Greyhound" className={iconClass} />;
      case 'KY':
        return <img src="/Kyotei_Icon_96x96.png" alt="Kyotei" className={iconClass} />;
      case 'KE':
        return <img src="/Keirin_Icon_96x96.png" alt="Keirin" className={iconClass} />;
      default:
        return <img src="/button_6.png" alt="Racing" className={iconClass} />;
    }
  };

  /**
   * Layout Logic to match image:
   * - Red border if isActive (like the Sha Tin R2 tile)
   * - Red text for urgent time, Blue for standard
   */
  const isUrgent = isActive || ttm.startsWith('0') || ttm.includes('s');
  const textColor = isUrgent ? "text-red-600" : "text-blue-700";
  const borderColor = isActive ? "border-red-500 ring-1 ring-red-500" : "border-gray-300";

  return (
    <div className={`
      relative w-40 h-24 p-3 flex flex-col justify-between 
      bg-white border-2 rounded-lg transition-all shadow-sm ${borderColor}
      me-3
    `}>
      
      {/* TOP ROW: Track Name (Left) and Flag (Right) */}
      <div className="flex justify-between items-start">
        <span className="font-extrabold text-[13px] uppercase tracking-tighter text-gray-900 truncate pr-2">
          {trackCode}
        </span>
        <div className="w-8 h-5 flex-shrink-0 border border-gray-100 shadow-sm overflow-hidden rounded-sm">
          <img
            src={getFlagUrl(countryCode)}
            alt={`${countryCode} Flag`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* MIDDLE ROW: The Racing Type Icon */}
      <div className="flex items-center">
        {getRacingCodeIcon(racingCode)}
      </div>

      {/* BOTTOM ROW: Time Remaining (Left) and Race Number (Right) */}
      <div className="flex justify-between items-end">
        <div className={`text-sm font-black italic tracking-tighter leading-none ${textColor}`}>
          {ttm}
        </div>
        <div className="text-lg font-extrabold text-gray-800 leading-none">
          R{raceNo}
        </div>
      </div>
    </div>
  );
};