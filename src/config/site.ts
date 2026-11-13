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
