import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'scale' | 'stagger';
  threshold?: number;
  once?: boolean;
}

/**
 * Scroll-reveal wrapper. Applies reveal classes and toggles `revealed`
 * when the element enters the viewport.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up',
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold, once });
  const base =
    variant === 'scale' ? 'reveal-scale' : variant === 'stagger' ? 'reveal-stagger' : 'reveal';
  return (
    <div ref={ref} className={`${base} ${revealed ? 'revealed' : ''} ${className}`}>
      {children}
    </div>
  );
}
