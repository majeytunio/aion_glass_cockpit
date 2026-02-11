// 'use client';

// interface RunnerButtonProps {
//   number: number;
//   onClick?: () => void;
// }
// export const RunnerButton = ({ number, onClick }: RunnerButtonProps) => {
//   return (
//     <button onClick={onClick} className="runner-btn">
//       {number}
//     </button>
//   );
// };














'use client';

import { useState } from 'react';

interface RunnerButtonProps {
  number: number;
  onClick?: () => void;
}

type ClickState = 0 | 1 | 2; // 0 = default, 1 = first click, 2 = second click

export const RunnerButton = ({ number, onClick }: RunnerButtonProps) => {
  const [clickState, setClickState] = useState<ClickState>(0);

  const handleClick = () => {
    // Cycle through states: 0 -> 1 -> 2 -> 0
    setClickState((prev) => ((prev + 1) % 4) as ClickState);
    onClick?.();
  };

  // Define colors for each state
  const stateColors = {
    0: 'bg-card text-foreground border-border hover:bg-muted',
    1: 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    2: 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
    3: 'bg-red-100 text-red-800 border-red-300 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
  };

  return (
    <button
      onClick={handleClick}
      className={`runner-btn transition-all duration-200 ease-in-out ${stateColors[clickState]}`}
    >
      {number}
    </button>
  );
};