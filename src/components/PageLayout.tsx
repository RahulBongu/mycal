import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import Logo from '@/components/Logo';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50/30 to-white pt-16">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-600 text-ink-500 transition-colors hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8 flex items-center gap-2.5">
          <Logo size={36} />
          <span className="font-display text-lg font-700 text-ink-900">{SITE_CONFIG.name}</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-800 tracking-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-lg text-ink-500">{subtitle}</p>}

        <div className="mt-10 space-y-6 leading-relaxed text-ink-700">{children}</div>
      </div>
    </main>
  );
}
