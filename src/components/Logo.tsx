import { SITE_CONFIG } from '@/config/site';

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Brand logo for My Calories. Uses the supplied brand-logo.png.
 */
export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <img
      src="/brand-logo.png"
      alt={`${SITE_CONFIG.name} logo`}
      width={size}
      height={size}
      className={`rounded-xl object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
