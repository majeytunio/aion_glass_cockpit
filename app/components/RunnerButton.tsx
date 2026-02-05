'use client';

interface RunnerButtonProps {
  number: number;
  onClick?: () => void;
}
export const RunnerButton = ({ number, onClick }: RunnerButtonProps) => {
  return (
    <button onClick={onClick} className="runner-btn">
      {number}
    </button>
  );
};