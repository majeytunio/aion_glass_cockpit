'use client';

export const RaceInfoHeaders = () => {
  return (
    <div className="mx-4 mt-2">
      {/* First Fixed Header Row */}
      <div 
        className="grid gap-3 py-3 px-4 bg-muted border border-border rounded-t-xl"
        style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}
      >
        <div className="font-bold text-sm text-muted-foreground">Race Details</div>
        <div className="font-bold text-sm text-muted-foreground text-center">Win</div>
        <div className="font-bold text-sm text-muted-foreground text-center">Place</div>
        <div className="font-bold text-sm text-muted-foreground text-center">Quinella</div>
        <div className="font-bold text-sm text-muted-foreground text-center">Quinella Place</div>
        <div className="font-bold text-sm text-muted-foreground text-center">Tierce</div>
      </div>
      
      {/* Second Fixed Header Row */}
      <div 
        className="grid gap-3 py-2 px-4 bg-muted/50 border-x border-b border-border rounded-b-xl mb-4"
        style={{ gridTemplateColumns: '120px 1fr 1fr 1fr 1fr 1fr' }}
      >
        <div className="text-xs text-muted-foreground">Runner Information</div>
        <div className="text-xs text-muted-foreground text-center">Pool Size</div>
        <div className="text-xs text-muted-foreground text-center">Pool Size</div>
        <div className="text-xs text-muted-foreground text-center">Pool Size</div>
        <div className="text-xs text-muted-foreground text-center">Pool Size</div>
        <div className="text-xs text-muted-foreground text-center">Pool Size</div>
      </div>
    </div>
  );
};