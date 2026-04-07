'use client';

import { useState } from 'react';
import { RunnerButton } from './RunnerButton';
import { useButtonContext } from './ButtonContext';
import { 
  getRightSideColumns, 
  BASE_REALM_LEFT_COLUMNS, 
  getRightColumnWidths 
} from './ColumnConfig';
import { runners } from '../mockup/MockupData';

export const ColumnRealm = () => {
  const { activeButton } = useButtonContext();
  
  const runnerData = runners;
  const [rowStates, setRowStates] = useState<{ [key: number]: number }>({});

  const handleRunnerClick = (runnerNum: number) => {
    setRowStates(prev => {
      const currentState = prev[runnerNum] || 0;
      const nextState = (currentState + 1) % 4;
      return {
        ...prev,
        [runnerNum]: nextState
      };
    });
  };

  const Cell = ({ children, align = 'center', cssClasses = '' }: { children?: React.ReactNode; align?: 'left' | 'center' | 'right'; cssClasses?: string }) => (
    <div className={`flex items-center justify-${align === 'left' ? 'start' : align === 'right' ? 'end' : 'center'} text-${align} h-full w-full px-2 ${cssClasses} overflow-hidden`}>
      {children || <span className="text-md text-muted-foreground"></span>}
    </div>
  );

  const getColumnBackgroundColor = (state: number) => {
    switch(state) {
      case 1: return 'rgb(14, 122, 77)';
      case 2: return 'rgb(255, 203, 31)';
      case 3: return 'rgb(227, 37, 34)';
      default: return 'transparent';
    }
  };

  const getBorderColor = (state: number) => {
    switch(state) {
      case 1: return 'rgb(14, 122, 77)';
      case 2: return 'rgb(255, 203, 31)';
      case 3: return 'rgb(227, 37, 34)';
      default: return 'transparent';
    }
  };

  const rightColumns = getRightSideColumns(activeButton);
  const rightWidths = getRightColumnWidths(activeButton);
  
  const gridTemplateColumns = `${BASE_REALM_LEFT_COLUMNS} ${rightWidths.realm}`;

  return (
    <div className="flex flex-col gap-0 w-full">
      {runnerData.map((runner, index) => {
        const rowState = rowStates[index] || 0;
        const isEvenRow = index % 2 === 1;
        const columnBgColor = getColumnBackgroundColor(rowState);
        const borderColor = getBorderColor(rowState);
        
        return (
          <div
            key={index}
            className="grid items-center transition-colors duration-300 w-full"
            style={{ 
              gridTemplateColumns,
              minHeight: '60px',
              maxHeight: '60px',
              height: '60px',
            }}
          >
            {/* Column 1: The Runner Number Button State Change */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                borderRight: `2px solid ${borderColor}`,
                background: columnBgColor || (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent')
              }}>
              <Cell align="left"
                // cssClasses="border border-[#333]"
              >
                <RunnerButton 
                  number={index+1} 
                  onClick={() => handleRunnerClick(index)}
                />
              </Cell>
            </div>
            
            
            {/* Column 2: Runner Column */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="left"

              // cssClasses="border border-[#333]"

              >
                {index === 0 && (
                  <>
                    {/* RUNNER {runnerNum} */}
                    <div className="flex items-center justify-start h-full w-full cursor-pointer"
                    onClick={() => window.location.href = '/runners/' + (runnerData[index]?.id || '')}
                    >
                      <img src={'/runner_placeholder.jpeg'} alt={`Runner ${index}`} className="w-10 h-10 rounded-full mr-2" />
                      {/* <img src={'/button_6.png'} alt={`Runner ${index}`} className="w-10 h-10 rounded-full mr-2" /> */}
                      {/* <span className="text-sm">{runnerData[index]?.name.toUpperCase() || `Runner ${index}`}</span> */}
                      <span className="
                      text-md font-semibold cursor-pointer hover:underline
                      "
                      
                      >
                        {/* {`RUNNER NAME`} */}
                        {runnerData[index]?.name ? ` ${runnerData[index].name}` : ''}
                      </span>
                    </div>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 3: BP Column */}
            <div className="flex items-center justify-center h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* BP */}
                  <span className="text-sm">{runnerData[index]?.bp || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 4: AGE */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* AGE */}
                  {/* <span className="text-sm">{runnerData[index]?.age || '—'}</span> */}
                  <div className='flex flex-col w-full'>
                    <span className="text-sm font-semibold">{runnerData[index]?.age || '—'}</span>
                    <span className="text-sm justify-right text-right">{runnerData[index]?.subAge || '—'}</span>
                  </div>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 5: OCR */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* OCR */}
                  <span className="text-sm">{runnerData[index]?.ocr || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 6: HWT */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* HWT */}
                  {/* <span className="text-sm">{runnerData[index]?.hwt || '—'}</span> */}

                  <div className='flex flex-col w-full'>
                    <span className="text-sm font-semibold">{runnerData[index]?.hwt || '—'}</span>
                    <span className="text-sm justify-right text-right">{runnerData[index]?.subHwt || '—'}</span>
                  </div>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 7: DLR */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* DLR */}
                  <span className="text-sm">{runnerData[index]?.dlr || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 8: MTX */}
            <div className="flex items-center justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* MTX */}
                  <span className="text-sm">{runnerData[index]?.mtx || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 8: MTX */}
            <div className="flex items-center justify-left h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
                // background: '#333 !important'
              }}>
              <Cell align="left"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* J&T */}
                  {/* <div className='w-full'>
                    <span className="text-sm">{runnerData[index]?.trainer || '—'}</span>
                  </div>
                  <div className=''>
                    <span className="text-sm">{runnerData[index]?.jockey || '—'}</span>
                  </div> */}
                  {/* <span className="text-sm">{runnerData[index]?.jandt || '—'}</span> */}
                  {/* <span className="text-sm">{runnerData[index]?.jandt || '—'}</span> */}

                  <div className='flex flex-col w-full'>
                    <span className="text-sm font-semibold cursor-pointer hover:underline"
                    onClick={() => window.location.href = '/jockey/' + (runnerData[index]?.id || '')}
                    >
                      {runnerData[index]?.jockey || '—'}
                    </span>
                    
                    <span className="text-xs text-muted-foreground/60 italic cursor-pointer hover:underline"
                    onClick={() => window.location.href = '/trainers/' + (runnerData[index]?.id || '')}
                    >
                      {runnerData[index]?.trainer || '—'}
                    </span>
                  </div>
                  </>
                )}
                
              </Cell>
            </div>
            
            {/* Column 9: FIN */}
            <div className="flex items-start justify-start h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}
              >
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* FIN */}
                  <span className="text-sm">{runnerData[index]?.fin || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 10: FINTIME */}
            <div className="flex items-center justify-center h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* MRG */}
                  <span className="text-sm">{runnerData[index]?.mrg || '—'}</span>
                  </>
                )}
              </Cell>
            </div>
            
            {/* Column 11: Add */}
            <div className="flex items-center justify-center h-full w-full"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}>
              <Cell align="center"
              
              // cssClasses="border border-[#333]"
              
              >
                {index === 0 && (
                  <>
                  {/* + */}
                  <span className="text-sm">{runnerData[index]?.add || '—'}</span>
                  </>
                )}
              </Cell>
            </div>


            {activeButton === 0 && (
              <div className="flex items-center justify-start h-full w-[1530]"
              style={{
                background: isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'
              }}
              >
                <Cell align="left"
                
                // cssClasses="border border-[#333]"
                
                >
                  {/* Right-side columns */}
                </Cell>
              </div>
            )}
            
            {/* DYNAMIC RIGHT SIDE DATA COLUMNS */}
            {rightColumns.map((col, idx) => (
              <div 
                key={`data-${idx}`} 
                className={`flex items-center h-full w-full overflow-hidden`}
                style={{
                  justifyContent: col.align === 'left' ? 'flex-start' : col.align === 'right' ? 'flex-end' : 'center',
                  backgroundColor: col.bgColor ? undefined : (isEvenRow ? 'rgba(0, 0, 0, 0.02)' : 'transparent'),
                  background: col.bgColor || undefined
                }}
              >
                <div className={`
                  border-b border-white/80
                  border-r border-white/80
                  h-full w-full flex items-center px-2
                  ${col.align === 'left' ? 'justify-start' : col.align === 'center' ? 'justify-center' : 'justify-end'}
                  ${isEvenRow && ![
                    'col_1_2', 'col_2_2', 'col_3_2', 'col_2_3', 'col_3_3', 'col_1_6', 
                    
                    'col_2_4', 'col_2_5', 'col_2_6', 'col_2_7', 'col_2_8', 'col_2_9', 'col_2_10', 'col_2_11',
                    
                    'col_3_4', 'col_3_5', 'col_3_6', 'col_3_7', 'col_3_8',
                    'col_3_9', 'col_3_10', 'col_3_11', 'col_1_7',


                    'col_11_1', 'col_11_2', 'col_11_3', 'col_11_4', 'col_11_5', 'col_11_6', 
                    'col_11_7', 'col_11_8', 'col_11_9', 'col_11_10', 'col_11_11',
                    
                    'col_12_1', 'col_12_2', 'col_12_3', 'col_12_4', 'col_12_5', 'col_12_6', 
                    'col_12_7', 'col_12_8', 'col_12_9', 'col_12_10', 'col_12_11',
                    
                    'col_13_1', 'col_13_2', 'col_13_3', 'col_13_4', 'col_13_5', 'col_13_6', 
                    'col_13_7', 'col_13_8', 'col_13_9', 'col_13_10', 'col_13_11', 'col_13_12', 'col_13_13',
                    'col_13_14', 'col_13_15', 'col_13_16', 'col_13_17',


                  ].includes(col.column_id ?? '') 
                    ? 'bg-secondary/20' 
                    : ''}
                  ${col.bgColor || ''}
                `}>
                  <span className="text-sm truncate">
                    {/* Your mock data here */}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};