// // // 'use client';

// // // import { useState, useEffect } from 'react';

// // // interface DateSelectorProps {
// // //   label: string;
// // //   value: string;
// // //   onChange?: (value: string) => void;
// // //   size?: 'small' | 'medium' | 'large';
// // // }

// // // export const DateSelector = ({ label, value, onChange, size }: DateSelectorProps) => {
// // //   const [selectedDate, setSelectedDate] = useState(() => {
// // //     // Initialize with current date if value is empty
// // //     if (!value) {
// // //       const today = new Date();
// // //       return {
// // //         year: today.getFullYear().toString(),
// // //         month: (today.getMonth() + 1).toString().padStart(2, '0'),
// // //         day: today.getDate().toString().padStart(2, '0')
// // //       };
// // //     }
// // //     // Parse existing value (assuming format YYYY-MM-DD)
// // //     const [year, month, day] = value.split('-');
// // //     return { year, month, day };
// // //   });

// // //   const [isOpen, setIsOpen] = useState(false);

// // //   // Generate years (current year -10 to current year +5)
// // //   const currentYear = new Date().getFullYear();
// // //   const years = Array.from({ length: 16 }, (_, i) => (currentYear - 10 + i).toString());
  
// // //   // Months
// // //   const months = [
// // //     { value: '01', label: 'Jan' },
// // //     { value: '02', label: 'Feb' },
// // //     { value: '03', label: 'Mar' },
// // //     { value: '04', label: 'Apr' },
// // //     { value: '05', label: 'May' },
// // //     { value: '06', label: 'Jun' },
// // //     { value: '07', label: 'Jul' },
// // //     { value: '08', label: 'Aug' },
// // //     { value: '09', label: 'Sep' },
// // //     { value: '10', label: 'Oct' },
// // //     { value: '11', label: 'Nov' },
// // //     { value: '12', label: 'Dec' },
// // //   ];

// // //   // Generate days based on selected year and month
// // //   const getDaysInMonth = (year: string, month: string) => {
// // //     if (!year || !month) return 31;
// // //     return new Date(parseInt(year), parseInt(month), 0).getDate();
// // //   };

// // //   const daysInMonth = getDaysInMonth(selectedDate.year, selectedDate.month);
// // //   const days = Array.from({ length: daysInMonth }, (_, i) => 
// // //     (i + 1).toString().padStart(2, '0')
// // //   );

// // //   // Update parent component when date changes
// // //   const updateParentValue = (newDate: typeof selectedDate) => {
// // //     const dateString = `${newDate.year}-${newDate.month}-${newDate.day}`;
// // //     onChange?.(dateString);
// // //   };

// // //   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// // //     const newDate = { ...selectedDate, year: e.target.value };
// // //     setSelectedDate(newDate);
// // //     updateParentValue(newDate);
// // //   };

// // //   const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// // //     const newMonth = e.target.value;
// // //     // Adjust day if current day exceeds days in new month
// // //     const maxDays = getDaysInMonth(selectedDate.year, newMonth);
// // //     const newDay = parseInt(selectedDate.day) > maxDays 
// // //       ? maxDays.toString().padStart(2, '0') 
// // //       : selectedDate.day;
    
// // //     const newDate = { year: selectedDate.year, month: newMonth, day: newDay };
// // //     setSelectedDate(newDate);
// // //     updateParentValue(newDate);
// // //   };

// // //   const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// // //     const newDate = { ...selectedDate, day: e.target.value };
// // //     setSelectedDate(newDate);
// // //     updateParentValue(newDate);
// // //   };

// // //   const handleTodayClick = () => {
// // //     const today = new Date();
// // //     const newDate = {
// // //       year: today.getFullYear().toString(),
// // //       month: (today.getMonth() + 1).toString().padStart(2, '0'),
// // //       day: today.getDate().toString().padStart(2, '0')
// // //     };
// // //     setSelectedDate(newDate);
// // //     updateParentValue(newDate);
// // //     setIsOpen(false);
// // //   };

// // //   // Format display date
// // //   const formatDisplayDate = () => {
// // //     const month = months.find(m => m.value === selectedDate.month)?.label;
// // //     return `${selectedDate.day} ${month} ${selectedDate.year}`;
// // //   };

// // //   // Check if current date is selected
// // //   const isCurrentDate = () => {
// // //     const today = new Date();
// // //     return selectedDate.year === today.getFullYear().toString() &&
// // //            selectedDate.month === (today.getMonth() + 1).toString().padStart(2, '0') &&
// // //            selectedDate.day === today.getDate().toString().padStart(2, '0');
// // //   };

// // //   return (
// // //     <div className="flex flex-col gap-1.5 relative">
// // //       <label className="text-[12px] font-black tracking-wider text-muted-foreground uppercase">
// // //         {label}
// // //       </label>
      
// // //       {/* Display/Trigger Button */}
// // //       <button
// // //         onClick={() => setIsOpen(!isOpen)}
// // //         className={`control-input text-left flex items-center justify-between w-full px-3 py-2 
// // //           ${isCurrentDate() ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
// // //           hover:border-primary transition-colors`}
// // //       >
// // //         <span className='text-[12px]'>{formatDisplayDate()}</span>
// // //         <span className="text-[9px] opacity-60">▼</span>
// // //       </button>

// // //       {/* Calendar Dropdown */}
// // //       {isOpen && (
// // //         <div className="absolute top-full left-0 mt-1 w-full bg-popover border border-border rounded-lg shadow-lg z-50 p-3">
// // //           {/* Year, Month, Day Selectors */}
// // //           <div className="grid grid-cols-3 gap-2 mb-3">
// // //             {/* Year Select */}
// // //             <select 
// // //               value={selectedDate.year} 
// // //               onChange={handleYearChange}
// // //               className="px-2 py-1 text-sm border border-border rounded bg-background"
// // //             >
// // //               {years.map(year => (
// // //                 <option key={year} value={year}>{year}</option>
// // //               ))}
// // //             </select>

// // //             {/* Month Select */}
// // //             <select 
// // //               value={selectedDate.month} 
// // //               onChange={handleMonthChange}
// // //               className="px-2 py-1 text-sm border border-border rounded bg-background"
// // //             >
// // //               {months.map(month => (
// // //                 <option key={month.value} value={month.value}>{month.label.slice(0,3)}</option>
// // //               ))}
// // //             </select>

// // //             {/* Day Select */}
// // //             <select 
// // //               value={selectedDate.day} 
// // //               onChange={handleDayChange}
// // //               className="px-2 py-1 text-sm border border-border rounded bg-background"
// // //             >
// // //               {days.map(day => (
// // //                 <option key={day} value={day}>{day}</option>
// // //               ))}
// // //             </select>
// // //           </div>

// // //           {/* Today Button */}
// // //           <button
// // //             onClick={handleTodayClick}
// // //             className="w-full px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors"
// // //           >
// // //             Today
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };













// // 'use client';

// // import { useState, useEffect } from 'react';

// // interface DateSelectorProps {
// //   label: string;
// //   value: string;
// //   onChange?: (value: string) => void;
// //   size?: 'small' | 'medium' | 'large';
// // }

// // export const DateSelector = ({ label, value, onChange, size }: DateSelectorProps) => {
// //   const [selectedDate, setSelectedDate] = useState(() => {
// //     // Initialize with current date if value is empty
// //     if (!value) {
// //       const today = new Date();
// //       return {
// //         year: today.getFullYear().toString(),
// //         month: (today.getMonth() + 1).toString().padStart(2, '0'),
// //         day: today.getDate().toString().padStart(2, '0')
// //       };
// //     }
// //     // Parse existing value (assuming format YYYY-MM-DD)
// //     const [year, month, day] = value.split('-');
// //     return { year, month, day };
// //   });

// //   const [isOpen, setIsOpen] = useState(false);

// //   // Generate years (current year -10 to current year +5)
// //   const currentYear = new Date().getFullYear();
// //   const years = Array.from({ length: 16 }, (_, i) => (currentYear - 10 + i).toString());
  
// //   // Months
// //   const months = [
// //     { value: '01', label: 'January' },
// //     { value: '02', label: 'February' },
// //     { value: '03', label: 'March' },
// //     { value: '04', label: 'April' },
// //     { value: '05', label: 'May' },
// //     { value: '06', label: 'June' },
// //     { value: '07', label: 'July' },
// //     { value: '08', label: 'August' },
// //     { value: '09', label: 'September' },
// //     { value: '10', label: 'October' },
// //     { value: '11', label: 'November' },
// //     { value: '12', label: 'December' },
// //   ];

// //   // Generate days based on selected year and month
// //   const getDaysInMonth = (year: string, month: string) => {
// //     if (!year || !month) return 31;
// //     return new Date(parseInt(year), parseInt(month), 0).getDate();
// //   };

// //   const daysInMonth = getDaysInMonth(selectedDate.year, selectedDate.month);
// //   const days = Array.from({ length: daysInMonth }, (_, i) => 
// //     (i + 1).toString().padStart(2, '0')
// //   );

// //   // Update parent component when date changes
// //   const updateParentValue = (newDate: typeof selectedDate) => {
// //     const dateString = `${newDate.year}-${newDate.month}-${newDate.day}`;
// //     onChange?.(dateString);
// //   };

// //   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const newDate = { ...selectedDate, year: e.target.value };
// //     setSelectedDate(newDate);
// //     updateParentValue(newDate);
// //   };

// //   const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const newMonth = e.target.value;
// //     // Adjust day if current day exceeds days in new month
// //     const maxDays = getDaysInMonth(selectedDate.year, newMonth);
// //     const newDay = parseInt(selectedDate.day) > maxDays 
// //       ? maxDays.toString().padStart(2, '0') 
// //       : selectedDate.day;
    
// //     const newDate = { year: selectedDate.year, month: newMonth, day: newDay };
// //     setSelectedDate(newDate);
// //     updateParentValue(newDate);
// //   };

// //   const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const newDate = { ...selectedDate, day: e.target.value };
// //     setSelectedDate(newDate);
// //     updateParentValue(newDate);
// //   };

// //   const handleTodayClick = () => {
// //     const today = new Date();
// //     const newDate = {
// //       year: today.getFullYear().toString(),
// //       month: (today.getMonth() + 1).toString().padStart(2, '0'),
// //       day: today.getDate().toString().padStart(2, '0')
// //     };
// //     setSelectedDate(newDate);
// //     updateParentValue(newDate);
// //     setIsOpen(false);
// //   };

// //   // Format display date
// //   const formatDisplayDate = () => {
// //     const month = months.find(m => m.value === selectedDate.month)?.label;
// //     return `${selectedDate.day} ${month?.slice(0,3)} ${selectedDate.year}`;
// //   };

// //   // Check if current date is selected
// //   const isCurrentDate = () => {
// //     const today = new Date();
// //     return selectedDate.year === today.getFullYear().toString() &&
// //            selectedDate.month === (today.getMonth() + 1).toString().padStart(2, '0') &&
// //            selectedDate.day === today.getDate().toString().padStart(2, '0');
// //   };

// //   return (
// //     <div className="flex flex-col gap-1 relative">
// //       <label className="text-[10px] font-black tracking-wider text-muted-foreground uppercase">
// //         {label}
// //       </label>
      
// //       {/* Display/Trigger Button - Smaller and more compact */}
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className={`control-input text-left flex items-center justify-between w-full px-2 py-1 text-xs
// //           ${isCurrentDate() ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
// //           hover:border-primary transition-colors rounded border border-border`}
// //       >
// //         <span className="truncate">{formatDisplayDate()}</span>
// //         <span className="text-[10px] opacity-60 ml-1">▼</span>
// //       </button>

// //       {/* Calendar Dropdown - Smaller and more compact */}
// //       {isOpen && (
// //         <div className="absolute top-full left-0 mt-1 w-full bg-popover border border-border rounded shadow-lg z-50 p-2">
// //           {/* Year, Month, Day Selectors - Smaller */}
// //           <div className="grid grid-cols-3 gap-1 mb-2">
// //             {/* Year Select */}
// //             <select 
// //               value={selectedDate.year} 
// //               onChange={handleYearChange}
// //               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
// //             >
// //               {years.map(year => (
// //                 <option key={year} value={year}>{year}</option>
// //               ))}
// //             </select>

// //             {/* Month Select */}
// //             <select 
// //               value={selectedDate.month} 
// //               onChange={handleMonthChange}
// //               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
// //             >
// //               {months.map(month => (
// //                 <option key={month.value} value={month.value}>{month.label.slice(0,3)}</option>
// //               ))}
// //             </select>

// //             {/* Day Select */}
// //             <select 
// //               value={selectedDate.day} 
// //               onChange={handleDayChange}
// //               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
// //             >
// //               {days.map(day => (
// //                 <option key={day} value={day}>{day}</option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Today Button - Smaller */}
// //           <button
// //             onClick={handleTodayClick}
// //             className="w-full px-2 py-1 text-[10px] font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors"
// //           >
// //             Today
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };


















// 'use client';

// import { useState, useEffect } from 'react';

// interface DateSelectorProps {
//   label: string;
//   value: string;
//   onChange?: (value: string) => void;
//   size?: 'small' | 'medium' | 'large';
// }

// export const DateSelector = ({ label, value, onChange, size }: DateSelectorProps) => {
//   const [selectedDate, setSelectedDate] = useState(() => {
//     // Initialize with current date if value is empty
//     if (!value) {
//       const today = new Date();
//       return {
//         year: today.getFullYear().toString(),
//         month: (today.getMonth() + 1).toString().padStart(2, '0'),
//         day: today.getDate().toString().padStart(2, '0')
//       };
//     }
//     // Parse existing value (assuming format YYYY-MM-DD)
//     const [year, month, day] = value.split('-');
//     return { year, month, day };
//   });

//   const [isOpen, setIsOpen] = useState(false);

//   // Generate years (current year -10 to current year +5)
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 16 }, (_, i) => (currentYear - 10 + i).toString());
  
//   // Months
//   const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     { value: '04', label: 'April' },
//     { value: '05', label: 'May' },
//     { value: '06', label: 'June' },
//     { value: '07', label: 'July' },
//     { value: '08', label: 'August' },
//     { value: '09', label: 'September' },
//     { value: '10', label: 'October' },
//     { value: '11', label: 'November' },
//     { value: '12', label: 'December' },
//   ];

//   // Generate days based on selected year and month
//   const getDaysInMonth = (year: string, month: string) => {
//     if (!year || !month) return 31;
//     return new Date(parseInt(year), parseInt(month), 0).getDate();
//   };

//   const daysInMonth = getDaysInMonth(selectedDate.year, selectedDate.month);
//   const days = Array.from({ length: daysInMonth }, (_, i) => 
//     (i + 1).toString().padStart(2, '0')
//   );

//   // Update parent component when date changes
//   const updateParentValue = (newDate: typeof selectedDate) => {
//     const dateString = `${newDate.year}-${newDate.month}-${newDate.day}`;
//     onChange?.(dateString);
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newDate = { ...selectedDate, year: e.target.value };
//     setSelectedDate(newDate);
//     updateParentValue(newDate);
//   };

//   const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newMonth = e.target.value;
//     // Adjust day if current day exceeds days in new month
//     const maxDays = getDaysInMonth(selectedDate.year, newMonth);
//     const newDay = parseInt(selectedDate.day) > maxDays 
//       ? maxDays.toString().padStart(2, '0') 
//       : selectedDate.day;
    
//     const newDate = { year: selectedDate.year, month: newMonth, day: newDay };
//     setSelectedDate(newDate);
//     updateParentValue(newDate);
//   };

//   const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newDate = { ...selectedDate, day: e.target.value };
//     setSelectedDate(newDate);
//     updateParentValue(newDate);
//   };

//   const handleTodayClick = () => {
//     const today = new Date();
//     const newDate = {
//       year: today.getFullYear().toString(),
//       month: (today.getMonth() + 1).toString().padStart(2, '0'),
//       day: today.getDate().toString().padStart(2, '0')
//     };
//     setSelectedDate(newDate);
//     updateParentValue(newDate);
//     setIsOpen(false);
//   };

//   // Format display date
//   const formatDisplayDate = () => {
//     const month = months.find(m => m.value === selectedDate.month)?.label;
//     return `${selectedDate.day} ${month?.slice(0,3)} ${selectedDate.year}`;
//   };

//   // Check if current date is selected
//   const isCurrentDate = () => {
//     const today = new Date();
//     return selectedDate.year === today.getFullYear().toString() &&
//            selectedDate.month === (today.getMonth() + 1).toString().padStart(2, '0') &&
//            selectedDate.day === today.getDate().toString().padStart(2, '0');
//   };

//   return (
//     <div className="flex flex-col gap-1 relative">
//       <label className="text-[10px] font-black tracking-wider text-muted-foreground uppercase">
//         {label}
//       </label>
      
//       {/* Display/Trigger Button - Compact with smaller icon */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`control-input text-left flex items-center justify-between w-full px-2 py-1 text-xs
//           ${isCurrentDate() ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
//           hover:border-primary transition-colors rounded border border-border`}
//       >
//         <span className="truncate">{formatDisplayDate()}</span>
//         <span className="text-[8px] opacity-60 ml-1">▼</span> {/* Reduced from text-[10px] to text-[8px] */}
//       </button>

//       {/* Calendar Dropdown - Smaller and more compact */}
//       {isOpen && (
//         <div className="absolute top-full left-0 mt-1 w-full bg-popover border border-border rounded shadow-lg z-50 p-2">
//           {/* Year, Month, Day Selectors - Smaller */}
//           <div className="grid grid-cols-3 gap-1 mb-2">
//             {/* Year Select */}
//             <select 
//               value={selectedDate.year} 
//               onChange={handleYearChange}
//               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
//             >
//               {years.map(year => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>

//             {/* Month Select */}
//             <select 
//               value={selectedDate.month} 
//               onChange={handleMonthChange}
//               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
//             >
//               {months.map(month => (
//                 <option key={month.value} value={month.value}>{month.label.slice(0,3)}</option>
//               ))}
//             </select>

//             {/* Day Select */}
//             <select 
//               value={selectedDate.day} 
//               onChange={handleDayChange}
//               className="px-1 py-0.5 text-[10px] border border-border rounded bg-background"
//             >
//               {days.map(day => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//           </div>

//           {/* Today Button - Smaller */}
//           <button
//             onClick={handleTodayClick}
//             className="w-full px-2 py-1 text-[10px] font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors"
//           >
//             Today
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };














'use client';

import { useState, useEffect } from 'react';
// Using MdChevronRight/Left or IoMdArrowDropup/Dropdown for the spinners
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

interface DateSelectorProps {
  label: string;
  value: string; // Expected: YYYY-MM-DD
  onChange?: (value: string) => void;
}

export const DateSelector = ({ label, value, onChange }: DateSelectorProps) => {

    const isCurrentDate = () => {
        const today = new Date();
        return date.year === today.getFullYear() &&
                date.month === today.getMonth() + 1 &&
                date.day === today.getDate();
    };

  const parseValue = (val: string) => {
    if (!val) {
      const today = new Date();
      return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
      };
    }
    const [y, m, d] = val.split('-').map(Number);
    return { year: y, month: m, day: d };
  };

  const [date, setDate] = useState(parseValue(value));

  useEffect(() => {
    setDate(parseValue(value));
  }, [value]);

  const updateDate = (newDate: typeof date) => {
    setDate(newDate);
    const dateString = `${newDate.year}-${String(newDate.month).padStart(2, '0')}-${String(newDate.day).padStart(2, '0')}`;
    onChange?.(dateString);
  };

  const adjust = (type: 'year' | 'month' | 'day', delta: number) => {
    const nextDate = { ...date };
    
    if (type === 'year') nextDate.year += delta;
    if (type === 'month') {
      nextDate.month += delta;
      if (nextDate.month > 12) nextDate.month = 1;
      else if (nextDate.month < 1) nextDate.month = 12;
    }
    if (type === 'day') {
      const maxDays = new Date(nextDate.year, nextDate.month, 0).getDate();
      nextDate.day += delta;
      if (nextDate.day > maxDays) nextDate.day = 1;
      else if (nextDate.day < 1) nextDate.day = maxDays;
    }

    // Safety check: ensure day is valid for new month/year (e.g. Feb 29 logic)
    const finalMaxDays = new Date(nextDate.year, nextDate.month, 0).getDate();
    if (nextDate.day > finalMaxDays) nextDate.day = finalMaxDays;

    updateDate(nextDate);
  };

  return (
    <div className={`flex flex-col gap-1.5 min-w-[100px] font-sans`}>
      {/* <label className="text-[10px] font-black tracking-widest text-blue-400/80 uppercase"> */}
      <label className="text-[12px] font-black tracking-wider text-muted-foreground uppercase">
        {label}
      </label>

      <div className={`flex items-center bg-[#dfdfdf] rounded-lg px-4 py-2 h-[48px] shadow-inner  ${isCurrentDate() ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}>
        {/* YEAR */}
        <SpinnerGroup 
          id="YR" 
          value={date.year} 
          onUp={() => adjust('year', 1)} 
          onDown={() => adjust('year', -1)} 
        />

        <div className="text-black mx-2 text-sm font-light">/</div>

        {/* MONTH */}
        <SpinnerGroup 
          id="MO"
          value={String(date.month).padStart(2, '0')} 
          onUp={() => adjust('month', 1)} 
          onDown={() => adjust('month', -1)} 
        />

        <div className="text-black mx-2 text-sm font-light">/</div>

        {/* DAY */}
        <SpinnerGroup 
          id="DY" 
          value={String(date.day).padStart(2, '0')} 
          onUp={() => adjust('day', 1)} 
          onDown={() => adjust('day', -1)} 
        />
      </div>
    </div>
  );
};

/* --- Sub-component for individual segments --- */

const SpinnerGroup = ({ id, value, onUp, onDown }: any) => (
  <div className="flex items-center gap-1">
    <div className="flex flex-col items-center min-w-[18px]">
      <span className="text-[9px] leading-none mb-1 select-none">{id}</span>
      <span className="text-[20px] font-bold tabular-nums tracking-tighter">{value}</span>
    </div>
    <div className="flex flex-col -space-y-1 justify-center">
      <button 
        type="button"
        onClick={onUp}
        className="text-black/30 hover:text-black transition-colors cursor-pointer"
      >
        <IoMdArrowDropup size={18} />
      </button>
      <button 
        type="button"
        onClick={onDown}
        className="text-black/30 hover:text-black transition-colors cursor-pointer"
      >
        <IoMdArrowDropdown size={18} />
      </button>
    </div>
  </div>
);