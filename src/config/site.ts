// Central configuration for My Calories website.
// All download URLs and store listings live here so they can be updated in one place.

export const SITE_CONFIG = {
  name: 'My Calories',
  tagline: 'Your AI-powered nutrition companion',
  coreMessage: 'Eat smarter. Track effortlessly.',
  domain: 'https://mycalories.app',
  version: '1.8.0',
  apkSize: '24 MB',
  androidVersion: 'Android 8.0+',
  supportEmail: 'rahulbongu30@gmail.com',
  copyrightYear: 2026,
  builder: 'Rahul Bongu',
} as const;

// APK download — single source of truth.
// Replace this URL with the real APK distribution location when ready.
export const APK_DOWNLOAD_URL = 'https://mycalories.app/downloads/my-calories-v1.8.0.apk';

export interface StoreListing {
  name: string;
  url: string | null;
  available: boolean;
  region?: string;
  /** Custom badge text shown instead of the default "Coming soon" */
  badge?: string;
}

// Store distribution — add new stores here without touching components.
export const STORES: StoreListing[] = [
  { name: 'Google Play Store', url: null, available: false, badge: 'Coming in 14 days' },
  { name: 'APKPure', url: null, available: false },
  { name: 'Vivo Store', url: null, available: false },
  { name: 'OPPO Store', url: null, available: false },
  { name: 'Xiaomi GetApps', url: null, available: false },
  { name: 'Aptoide', url: null, available: false },
];

// Food photos used in the scanner showcase (Pexels, license-free).
export const FOOD_PHOTOS = {
  salad:
    'https://images.pexels.com/photos/6895775/pexels-photo-6895775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  chicken:
    'https://images.pexels.com/photos/8743924/pexels-photo-8743924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  breakfast:
    'https://images.pexels.com/photos/16119652/pexels-photo-16119652.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  salmon:
    'https://images.pexels.com/photos/28128244/pexels-photo-28128244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
