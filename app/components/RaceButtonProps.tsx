'use client';

interface RaceButtonProps {
  className?: string;
  number: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const RaceButton = ({ className, number, isActive, onClick }: RaceButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`race-btn ${className || ''} ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
    >
      {number}
    </button>
  );
};