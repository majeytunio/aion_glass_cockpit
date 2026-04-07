'use client';

interface RunnerButtonProps {
  number: number;
  onClick?: (state: number) => void;
  isActive?: boolean;
}

export const RunnerButton = ({ number, onClick, isActive = false }: RunnerButtonProps) => {
  const handleClick = () => {
    // Pass click event to parent with current state
    onClick?.(0); // Parent will manage the state cycling
  };

  return (
    <button
      onClick={handleClick}
      className="runner-btn transition-all duration-200 ease-in-out text-[11pt] bg-card text-foreground border-border hover:bg-muted"
      style={{
        minHeight: '45px',
        maxHeight: '45px',
        height: '45px',
        width: '45px'
      }}
    >
      {number}
    </button>
  );
};