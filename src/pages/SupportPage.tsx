import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { Mail, Download, MessageCircle, Smartphone, FileDown, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, APK_DOWNLOAD_URL } from '@/config/site';

export default function SupportPage() {
  return (
    <PageLayout title="Support" subtitle="We're here to help you get the most out of My Calories.">
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${SITE_CONFIG.supportEmail}`}
          className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-600 text-ink-900">Email us</p>
            <p className="text-sm text-ink-500">{SITE_CONFIG.supportEmail}</p>
          </div>
        </a>

        <a
          href={APK_DOWNLOAD_URL}
          className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Download className="h-5 w-5" />
          </div>
          <div>
            <p className="font-600 text-ink-900">Download the app</p>
            <p className="text-sm text-ink-500">Android APK · v{SITE_CONFIG.version}</p>
          </div>
        </a>
      </div>

      <div className="rounded-2xl border border-ink-100 bg-white p-6">
        <h2 className="font-display text-xl font-700 text-ink-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: 'Is My Calories free?',
              a: 'My Calories is free to download and start using. Core tracking features are available at no cost.',
            },
            {
              q: 'How accurate is the AI food scanner?',
              a: 'The AI provides a nutrition estimate based on the photo. You can edit the food name, weight, and macro values to keep your diary accurate. Barcode-scanned products use verified nutrition data from product databases.',
            },
            {
              q: 'Can I use My Calories offline?',
              a: 'Some features require an internet connection for AI processing and account sync, but previously logged data remains accessible.',
            },
            {
              q: 'Is the AI coach a medical professional?',
              a: 'No. AI guidance is informational and may contain errors. My Calories does not provide medical advice. Always consult a qualified professional for health-related decisions.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-ink-100 pb-4 last:border-0 last:pb-0">
              <p className="font-600 text-ink-900">{faq.q}</p>
              <p className="mt-1 text-sm text-ink-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-ink-100 bg-white p-6">
        <div className="flex items-center gap-2">
          <FileDown className="h-5 w-5 text-brand-500" />
          <h2 className="font-display text-xl font-700 text-ink-900">Installation help</h2>
        </div>
        <p className="mt-2 text-sm text-ink-500">
          Need help installing the APK? See the installation guide on the{' '}
          <Link
            to="/#download"
            className="inline-flex items-center font-600 text-brand-600 hover:underline"
          >
            download page <ChevronRight className="h-3.5 w-3.5" />
          </Link>
          .
        </p>
      </div>

      <div className="rounded-2xl bg-brand-50 p-6">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-brand-600" />
          <h2 className="font-display text-xl font-700 text-ink-900">Still need help?</h2>
        </div>
        <p className="mt-2 text-sm text-ink-600">
          Email {SITE_CONFIG.supportEmail} and our team will get back to you as soon as possible.
          Include your device model and Android version for faster support.
        </p>
      </div>
    </PageLayout>
  );
}
