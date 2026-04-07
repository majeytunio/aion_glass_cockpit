'use client';

import { ColumnFooter } from './ColumnFooter';
import { ColumnHeader } from './ColumnHeader';
import { ColumnRealm } from './ColumnRealm';

export const RunnerRealm = () => {
  return (
    <div className="cockpit-runner-card mx-4 mt-4 p-0 overflow-x-auto"> {/* Added overflow-x-auto */}
      {/* CHECK CENTER */}
      {/* <div className="px-2 pt-3 pb-1 border-b border-border/30 justify-center flex">
        |
      </div> */}

      {/* Column Headers */}
      <ColumnHeader />
      
      {/* Runner Rows - NO GAP ABOVE */}
      <div className="px-2">
        <ColumnRealm />
      </div>
      
      {/* Column Headers */}
      
      {/* Total Bar */}
      {/* <div className="mx-4 mb-4 mt-2 h-12 bg-secondary/50 border border-border/50 rounded-xl flex items-center px-4 font-bold text-muted-foreground"> */}
        <ColumnFooter />
        {/* <div className="flex items-center justify-between w-full"> */}
          {/* Empty as per your code */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};