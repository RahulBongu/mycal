// Central configuration for My Calories website.
// All download URLs and store listings live here so they can be updated in one place.

export const SITE_CONFIG = {
  name: 'My Calories',
  tagline: 'Your AI-powered nutrition companion',
  coreMessage: 'Eat smarter. Track effortlessly.',
  domain: 'https://mycalories.app',
  version: '1.8.0',
  apkSize: '70 MB',
  androidVersion: 'Android 8.0+',
  supportEmail: 'rahulbongu30@gmail.com',
  copyrightYear: 2026,
  builder: 'Rahul Bongu',
} as const;

// APK download — single source of truth.
// Replace this URL with the real APK distribution location when ready.
export const APK_DOWNLOAD_URL = 'https://github.com/RahulBongu/mycal/releases/download/v1.1.0/My-Calories.apk';

