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