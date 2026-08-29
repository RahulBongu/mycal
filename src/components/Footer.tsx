import { Link } from 'react-router-dom';
import { SITE_CONFIG, STORES, APK_DOWNLOAD_URL } from '@/config/site';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex justify-center">
          <span className="font-display text-sm font-600 tracking-widest uppercase text-brand-400">
            Powered by Rat Vision
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-display text-lg font-700 text-white">My Calories</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              {SITE_CONFIG.tagline}. Eat smarter, track effortlessly.
            </p>
            <p className="mt-4 text-xs text-ink-500">v{SITE_CONFIG.version}</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display text-sm font-600 text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/#features" className="text-ink-400 transition-colors hover:text-brand-400">
                  Features
                </a>
              </li>
              <li>
                <a href="/#download" className="text-ink-400 transition-colors hover:text-brand-400">
                  Download
                </a>
              </li>
              <li>
                <Link to="/support" className="text-ink-400 transition-colors hover:text-brand-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-600 text-white">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-ink-400 transition-colors hover:text-brand-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-ink-400 transition-colors hover:text-brand-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-ink-400 transition-colors hover:text-brand-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Stores */}
          <div>
            <h3 className="font-display text-sm font-600 text-white">Stores</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={APK_DOWNLOAD_URL}
                  className="text-ink-400 transition-colors hover:text-brand-400"
                >
                  Android APK
                </a>
              </li>
              {STORES.map((store) => (
                <li key={store.name}>
                  <span className="text-ink-400">
                    {store.name}
                    {store.badge && (
                      <span className="ml-2 text-xs text-ink-600">{store.badge}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-ink-600">
            AI guidance is informational and may contain errors. My Calories does not provide
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
