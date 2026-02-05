'use client';

import { ColumnHeader } from './ColumnHeader';
import { RunnerButton } from './RunnerButton';
export const RunnerRealm = () => {
  return (
    <div className="cockpit-runner-card mx-4 mt-4 p-0">
      <ColumnHeader />
      {/* Runner Rows */}
      <div className="px-2 pb-2">
        {Array.from({ length: 14 }, (_, i) => (
          <div
            key={i + 1}
            className="grid gap-1 py-1.5"
            style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
          >
            <div className="flex items-center justify-center">
              <RunnerButton number={i + 1} />
            </div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        ))}
      </div>
      {/* Total Bar */}
      <div className="mx-3 mb-3 h-16 bg-secondary border border-border rounded-xl flex items-center px-3 font-bold text-muted-foreground sticky bottom-0 z-10">
        {/* Total content placeholder */}
      </div>
    </div>
  );
};