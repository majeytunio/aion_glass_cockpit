'use client';

export const Footer = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-9 flex items-center z-50"
      style={{ background: 'hsl(var(--cockpit-footer))' }}
    >
      {/* Left Edge Button - floats left */}
      <button className="footer-btn flex-shrink-0" />
      {/* Center 9 Buttons - fill remaining space evenly */}
      <div className="flex-1 flex justify-center items-center gap-1.5">
        {Array.from({ length: 9 }, (_, i) => (
          <button key={i} className="footer-btn flex-1 max-w-[108px]" />
        ))}
      </div>
      {/* Right Edge Button - floats right */}
      <button className="footer-btn flex-shrink-0" />
    </div>
  );
};