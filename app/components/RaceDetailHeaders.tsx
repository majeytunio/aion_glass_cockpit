'use client';

interface RaceDetailHeadersProps {
  className?: string;
}

export const RaceDetailHeaders = ({ className }: RaceDetailHeadersProps) => {
  const HeaderCell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-start text-left h-full w-full px-2">
      <span className="text-[11px] font-black tracking-wider text-muted-foreground uppercase">
        {children}
      </span>
    </div>
  );

  return (
    <div 
      className={`w-full ${className || ''}`}
      style={{ 
        background: 'transparent',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
    >
      {/* Column Headers - No column lines, just defined widths */}
      <div 
        className="grid items-center py-2"
        style={{ 
          gridTemplateColumns: '40px 35px 45px 50px 45px 35px 40px 50px 50px 50px 60px 60px 60px 1fr',
          gap: '4px'
        }}
      >
        {/* <HeaderCell>#</HeaderCell> */}
        {/* <HeaderCell>BP</HeaderCell>
        <HeaderCell>Silks</HeaderCell>
        <HeaderCell>Runner</HeaderCell>
        <HeaderCell>Bar</HeaderCell>
        <HeaderCell>Wgt</HeaderCell>
        <HeaderCell>Rat</HeaderCell>
        <HeaderCell>π</HeaderCell>
        <HeaderCell>Ω</HeaderCell>
        <HeaderCell>β</HeaderCell>
        <HeaderCell>SP</HeaderCell>
        <HeaderCell>Win</HeaderCell>
        <HeaderCell>Plc</HeaderCell>
        <HeaderCell>Other Markets →</HeaderCell> */}
      </div>
    </div>
  );
};