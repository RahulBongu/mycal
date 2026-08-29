import { type ReactNode } from 'react';

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  /** Scale the phone up/down via width */
  width?: number;
}

/**
 * A premium smartphone mockup frame. Children render inside the screen.
 */
export default function PhoneMockup({ children, className = '', width = 280 }: PhoneMockupProps) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width }}
      aria-hidden="false"
    >
      <div className="phone-screen relative" style={{ aspectRatio: '9 / 19.5' }}>
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-30 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        {children}
      </div>
    </div>
  );
}
