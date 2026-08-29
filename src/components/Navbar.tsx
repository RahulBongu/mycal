import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import Logo from '@/components/Logo';

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'AI Coach', href: '/#coach' },
  { label: 'Recipes', href: '/#recipes' },
  { label: 'Progress', href: '/#progress' },
  { label: 'Download', href: '/#download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm shadow-black/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="My Calories home">
          <Logo size={36} />
          <span className="font-display text-lg font-700 tracking-tight text-ink-900">
            My Calories
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-500 text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/#download"
          className="hidden items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-600 text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 lg:flex"
        >
          <Download className="h-4 w-4" />
          Download App
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/#download"
            className="flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-xs font-600 text-white shadow-md shadow-accent-500/25"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-50"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-ink-950 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="font-display font-700 text-white">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-300 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3.5 text-base font-500 text-ink-200 transition-colors hover:bg-brand-500/15 hover:text-brand-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.3s ease ${i * 50 + 100}ms, transform 0.3s ease ${i * 50 + 100}ms, background-color 0.2s, color 0.2s`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#download"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3.5 text-base font-600 text-white shadow-lg shadow-accent-500/25"
            >
              <Download className="h-4 w-4" />
              Download My Calories
            </a>
            <Link
              to="/support"
              className="mt-1 rounded-xl px-4 py-3 text-sm font-500 text-ink-400 hover:bg-white/5"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
