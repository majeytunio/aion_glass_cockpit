'use client';

export const ColumnHeader = () => {
  const Cell = ({ children }: { children?: React.ReactNode }) => (
    <div className="flex items-center justify-center text-center h-full w-full">
      {children}
    </div>
  );
  return (
    <div 
      className="column-header grid gap-3 py-2 px-0"
      style={{ gridTemplateColumns: '56px 1.6fr 1fr 1fr 1fr 112px' }}
    >
      <Cell>#</Cell>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};