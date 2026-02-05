'use client';

interface RaceButtonProps {
  number: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const RaceButton = ({ number, isActive, onClick }: RaceButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`race-btn ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
    >
      {number}
    </button>
  );
};