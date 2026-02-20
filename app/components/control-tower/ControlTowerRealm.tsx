// 'use client';


// export const ControlTowerRealm = () => {

//   return (
//     <div className="cockpit-card p-5 mx-4 mt-4 relative">
//       {/* MAIN GRID - 3 columns */}
//       <div className="grid grid-cols-12 gap-4 items-start">
//       </div>
//     </div>
//   );
// };









'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiViewDashboardOutline, mdiCircleSmall } from '@mdi/js';

export const ControlTowerRealm = () => {
  const router = useRouter();

  const subModules = [
    "Bet Stream (Global)",
    "Open Position Array",
    "Racing Admin / Track Guide",
    "Systems Diagnostics (Grafana)",
    "Process Control / Scheduler",
    "AWACS"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* MAIN CONTENT AREA */}
      <main className="p-6">
        <div className="cockpit-card p-8 border border-border rounded-lg bg-card/50 shadow-inner">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6 border-b border-border pb-2">
            Future Sub-Modules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {subModules.map((module, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <Icon 
                  path={mdiCircleSmall} 
                  size={1} 
                  className="text-primary group-hover:scale-150 transition-transform" 
                />
                <span className="text-lg font-medium tracking-tight text-foreground/80 group-hover:text-primary transition-colors">
                  {module}
                </span>
              </div>
            ))}
          </div>

          {/* PLACEHOLDER VISUAL FOR CONTENT AREA */}
          <div className="mt-12 p-20 border-2 border-dashed border-muted rounded-xl flex items-center justify-center">
            <span className="text-muted-foreground italic text-sm">
              Module Content Placeholder
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};