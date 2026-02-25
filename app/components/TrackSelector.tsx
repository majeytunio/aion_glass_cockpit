'use client';

interface TrackSelectorProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}
export const TrackSelector = ({ label, value, size, onChange, placeholder }: TrackSelectorProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      {/* <label className="text-[10px] font-black tracking-wider text-muted-foreground uppercase"> */}
      <label className="text-[12px] font-black tracking-wider text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="control-input min-h-12"
      />
    </div>
  );
};