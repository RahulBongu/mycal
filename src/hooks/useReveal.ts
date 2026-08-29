import { useEffect, useRef, useState } from 'react';

/**
 * Reveal an element when it scrolls into view.
 * Adds the `revealed` class to trigger CSS transitions.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (options?.once !== false) observer.unobserve(entry.target);
        } else if (options?.once === false) {
          setRevealed(false);
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, revealed };
}

/**
 * Count up to a target number when the element enters the viewport.
 */
export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
