import React from 'react';

export const VerticalBanner: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 md:w-24 bg-gradient-carbon border-r border-border/30 z-10">
      {/* Vertical Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="transform -rotate-90 whitespace-nowrap">
          <h1 className="text-base md:text-2xl font-f1 font-bold text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
            CODE . CREATE . CONQUER .
          </h1>
        </div>
      </div>

      {/* Racing Stripe Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-28 md:h-32 bg-gradient-to-b from-f1-red via-f1-orange to-f1-red animate-racing-pulse" />

      {/* Carbon Fiber Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
    </div>
  );
};
