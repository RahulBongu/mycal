import { Link } from 'react-router-dom';
import {
  Camera,
  Sparkles,
  Target,
  ChefHat,
  ScanLine,
  TrendingUp,
  Droplet,
  Award,
  Flame,
  MessageCircle,
  Download,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  FileDown,
  Settings,
} from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import Reveal from '@/components/Reveal';
import { useCountUp } from '@/hooks/useReveal';
import {
  HomeScreen,
  ScannerScreen,
  ScanResultScreen,
  CoachScreen,
  RecipesScreen,
  ProgressScreen,
  BarcodeScreen,
} from '@/components/AppScreens';
import {
  SITE_CONFIG,
  APK_DOWNLOAD_URL,
  STORES,
  FOOD_PHOTOS,
} from '@/config/site';

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-20">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-500 text-brand-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered nutrition companion
          </div>
          <h1 className="mt-6 font-display text-5xl font-800 leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Eat smarter.
            <br />
            <span className="text-gradient">Track effortlessly.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-600 lg:mx-0">
            Your AI-powered nutrition companion for understanding food, tracking calories and
            reaching your goals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#download"
              className="group flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-600 text-white shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/40"
            >
              <Download className="h-5 w-5" />
              Download My Calories
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-600 text-ink-700 transition-all hover:border-ink-300 hover:bg-ink-50"
            >
              Explore features
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            <Stat value={9} suffix="+" label="Smart features" />
            <div className="h-8 w-px bg-ink-200" />
            <Stat value={2} suffix=" platforms" label="Android & iOS" />
            <div className="h-8 w-px bg-ink-200" />
            <Stat value={100} suffix="%" label="Free to start" />
          </div>
        </div>

        {/* Phone visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-300/20 blur-3xl" />
            <PhoneMockup width={300}>
              <HomeScreen />
            </PhoneMockup>

            {/* Floating nutrition particles */}
            <div className="absolute -left-12 top-20 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-xl shadow-black/5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-100">
                <Flame className="h-4 w-4 text-brand-600" />
              </div>
              <div>
                <p className="text-[10px] font-600 text-ink-900">485 kcal</p>
                <p className="text-[8px] text-ink-400">Grilled chicken</p>
              </div>
            </div>
            <div
              className="absolute -right-8 bottom-32 flex items-center gap-2 rounded-2xl bg-white p-3 shadow-xl shadow-black/5"
              style={{ animation: 'float 7s ease-in-out infinite 1s' }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-100">
                <Droplet className="h-4 w-4 text-accent-500" />
              </div>
              <div>
                <p className="text-[10px] font-600 text-ink-900">1.8L water</p>
                <p className="text-[8px] text-ink-400">72% of goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: display } = useCountUp(value, 1200);
  return (
    <div>
      <p ref={ref} className="font-display text-2xl font-800 text-ink-900">
        {display}
        {suffix}
      </p>
      <p className="text-xs text-ink-500">{label}</p>
    </div>
  );
}

/* ── Section wrapper ───────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-xs font-600 uppercase tracking-wider text-ink-500">
      {children}
    </div>
  );
}

/* ── Section 2: AI Food Scanner ────────────────────────────── */
function ScannerSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone */}
          <Reveal variant="scale" className="order-2 flex justify-center lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-200/20 blur-3xl" />
              <PhoneMockup width={270}>
                <ScannerScreen foodImage={FOOD_PHOTOS.chicken} />
              </PhoneMockup>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2">
            <SectionLabel>
              <Camera className="h-3.5 w-3.5 text-brand-500" />
              AI Food Scanner
            </SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Know what's on your plate.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Take a photo and let My Calories turn your meal into an editable nutrition estimate.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Camera, title: 'Snap a photo', desc: 'Point your camera at any meal' },
                { icon: Sparkles, title: 'AI analysis', desc: 'Food name, calories & macros detected' },
                { icon: Target, title: 'Edit & adjust', desc: 'Fine-tune grams and portions' },
              ].map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-600 text-ink-900">{step.title}</p>
                    <p className="text-sm text-ink-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-ink-50 p-4">
              <ShieldCheck className="h-5 w-5 shrink-0 text-ink-400" />
              <p className="text-sm leading-relaxed text-ink-500">
                AI food recognition is an estimate and can be edited. Adjust any value to keep your
                diary accurate.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Smart Nutrition Tracking ───────────────────── */
function TrackingSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <Reveal>
            <SectionLabel>
              <Target className="h-3.5 w-3.5 text-brand-400" />
              Smart Tracking
            </SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-white sm:text-5xl">
              Your whole day,
              <br />
              at a glance.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              See calories consumed, calories remaining, protein, carbs, fat, meals and daily
              progress — all in one clean dashboard.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Calories consumed', value: '1,420', unit: 'kcal' },
                { label: 'Calories remaining', value: '780', unit: 'kcal' },
                { label: 'Protein', value: '88', unit: 'g' },
                { label: 'Daily progress', value: '64', unit: '%' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-sm text-ink-400">{item.label}</p>
                  <p className="mt-1 font-display text-2xl font-800 text-white">
                    {item.value}
                    <span className="ml-1 text-sm font-500 text-ink-400">{item.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal variant="scale" className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-500/20 blur-3xl" />
              <PhoneMockup width={290}>
                <HomeScreen />
              </PhoneMockup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4: AI Coach ───────────────────────────────────── */
function CoachSection() {
  return (
    <section id="coach" className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-white py-24">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone */}
          <Reveal variant="scale" className="order-2 flex justify-center lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-200/20 blur-3xl" />
              <PhoneMockup width={280}>
                <CoachScreen />
              </PhoneMockup>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2">
            <SectionLabel>
              <MessageCircle className="h-3.5 w-3.5 text-brand-500" />
              AI Coach
            </SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
              A coach that knows your numbers.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Get guidance based on your goals, meals, calorie targets, protein intake and progress.
            </p>

            {/* Chat preview */}
            <div className="mt-8 space-y-3">
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-brand-500 px-4 py-3 text-sm text-white shadow-sm">
                  What should I eat for dinner?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-ink-700 shadow-sm">
                  You have <span className="font-600 text-brand-600">780 kcal</span> and{' '}
                  <span className="font-600 text-brand-600">52g protein</span> remaining today. Here
                  are a few options that fit your target.
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-ink-50 p-4">
              <ShieldCheck className="h-5 w-5 shrink-0 text-ink-400" />
              <p className="text-sm leading-relaxed text-ink-500">
                AI guidance is informational and may contain errors. My Calories does not provide
                medical advice.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Smart Recipes ──────────────────────────────── */
function RecipesSection() {
  return (
    <section id="recipes" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <Reveal>
            <SectionLabel>
              <ChefHat className="h-3.5 w-3.5 text-brand-500" />
              Smart Recipes
            </SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Turn ingredients into a plan.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Create recipes, choose ingredients, calculate nutrition, generate recipes with AI,
              choose servings, and log a serving directly to your diary.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                'Create custom recipes',
                'AI recipe generation',
                'Auto-calculated nutrition',
                'Adjustable servings',
                'Log a serving instantly',
                'Choose your ingredients',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                  <span className="text-sm text-ink-700">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal variant="scale" className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent-200/20 blur-3xl" />
              <PhoneMockup width={280}>
                <RecipesScreen />
              </PhoneMockup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 6: Barcode Scanner ────────────────────────────── */
function BarcodeSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 h-72 w-96 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone */}
          <Reveal variant="scale" className="order-2 flex justify-center lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-500/20 blur-3xl" />
              <PhoneMockup width={270}>
                <BarcodeScreen />
              </PhoneMockup>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2">
            <SectionLabel>
              <ScanLine className="h-3.5 w-3.5 text-brand-400" />
              Barcode Scanner
            </SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-white sm:text-5xl">
              Scan it. Log it.
              <br />
              Move on.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Scan a packaged food, identify the product, choose your serving weight, and add it to
              your diary in seconds.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-600 text-white">Verified nutrition</p>
                  <p className="text-sm text-ink-400">
                    From product databases — not an AI estimate
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/20 text-accent-400">
                  <ScanLine className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-600 text-white">Instant logging</p>
                  <p className="text-sm text-ink-400">Pick serving weight and add to your diary</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 7: Progress ───────────────────────────────────── */
function ProgressSection() {
  return (
    <section id="progress" className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/30 py-24">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel>
            <TrendingUp className="h-3.5 w-3.5 text-brand-500" />
            Progress
          </SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
            See the progress, not just the numbers.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Track your weight, water, streaks, achievements and historical trends with beautiful,
            easy-to-read charts.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="scale" className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand-200/20 blur-3xl" />
              <PhoneMockup width={290}>
                <ProgressScreen />
              </PhoneMockup>
            </div>
          </Reveal>

          <Reveal variant="stagger" className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, title: 'Weight chart', desc: 'See trends over time' },
              { icon: Target, title: 'Goal progress', desc: 'Track your targets' },
              { icon: Droplet, title: 'Water tracking', desc: 'Stay hydrated daily' },
              { icon: Award, title: 'Streaks & badges', desc: 'Stay motivated' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 font-600 text-ink-900">{item.title}</p>
                <p className="text-sm text-ink-500">{item.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Section 8: How It Works ────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Take a photo', desc: 'Snap your meal or scan a barcode', icon: Camera },
    { num: '02', title: 'Understand your food', desc: 'AI identifies calories and macros', icon: Sparkles },
    { num: '03', title: 'Track your nutrition', desc: 'Log meals and monitor your day', icon: Target },
    { num: '04', title: 'Reach your goal', desc: 'Follow progress and stay on track', icon: Award },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel>
            <Smartphone className="h-3.5 w-3.5 text-brand-500" />
            How it works
          </SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Four steps to smarter eating.
          </h2>
        </Reveal>

        <Reveal variant="stagger" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
            >
              <div className="absolute -right-4 -top-4 font-display text-6xl font-800 text-ink-50 transition-colors group-hover:text-brand-50">
                {step.num}
              </div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-700 text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ── Section 9: Why My Calories ─────────────────────────────── */
function WhyUs() {
  const features = [
    { icon: Camera, title: 'AI Food Scanner', desc: 'Snap a photo, get instant nutrition' },
    { icon: Target, title: 'Smart Calorie Tracking', desc: 'Know your numbers at a glance' },
    { icon: Flame, title: 'Macro Tracking', desc: 'Protein, carbs and fat breakdown' },
    { icon: MessageCircle, title: 'AI Coach', desc: 'Personalized guidance anytime' },
    { icon: ChefHat, title: 'Recipe Maker', desc: 'Create and generate recipes with AI' },
    { icon: ScanLine, title: 'Barcode Scanner', desc: 'Log packaged foods instantly' },
    { icon: TrendingUp, title: 'Weight Tracking', desc: 'Monitor your progress over time' },
    { icon: Droplet, title: 'Water Tracking', desc: 'Stay on top of your hydration' },
    { icon: Award, title: 'Progress Insights', desc: 'Streaks, achievements and trends' },
  ];

  return (
    <section className="relative overflow-hidden bg-ink-50 py-24">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel>
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            Why My Calories
          </SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Everything you need to eat smarter.
          </h2>
        </Reveal>

        <Reveal variant="stagger" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-600 text-ink-900">{f.title}</p>
                <p className="text-sm text-ink-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ── Section 10: App Showcase ──────────────────────────────── */
function Showcase() {
  const screens = [
    { label: 'Home', component: <HomeScreen /> },
    { label: 'Scanner', component: <ScannerScreen foodImage={FOOD_PHOTOS.salad} /> },
    { label: 'Scan Result', component: <ScanResultScreen /> },
    { label: 'AI Coach', component: <CoachScreen /> },
    { label: 'Recipes', component: <RecipesScreen /> },
    { label: 'Progress', component: <ProgressScreen /> },
    { label: 'Barcode', component: <BarcodeScreen /> },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel>
            <Smartphone className="h-3.5 w-3.5 text-brand-500" />
            App Showcase
          </SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-800 leading-tight tracking-tight text-ink-900 sm:text-5xl">
            A look inside My Calories.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-600">
            Every screen designed to make tracking effortless.
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {screens.map((screen, i) => (
          <Reveal
            key={screen.label}
            variant="scale"
            className="flex shrink-0 snap-center flex-col items-center"
          >
            <div
              style={{
                animation: `float ${6 + (i % 3)}s ease-in-out infinite`,
              }}
            >
              <PhoneMockup width={220}>{screen.component}</PhoneMockup>
            </div>
            <p className="mt-4 text-sm font-600 text-ink-700">{screen.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Section 11: Download ──────────────────────────────────── */
function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-b from-brand-600 to-brand-800 py-24 text-white">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute -top-20 left-1/2 h-80 w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-800 leading-tight tracking-tight sm:text-5xl">
            Start tracking smarter today.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-brand-100">
            Download My Calories for Android and start your journey in minutes.
          </p>
        </Reveal>

        {/* Installation guide — above the download button, white styling */}
        <Reveal className="mt-10 rounded-3xl bg-white p-6 text-left shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2">
            <FileDown className="h-5 w-5 text-brand-600" />
            <h3 className="font-display text-lg font-700 text-ink-900">Installation Guide</h3>
          </div>
          <ol className="mt-4 space-y-3">
            {[
              'Download the APK file using the button below.',
              'Open the downloaded APK file on your Android device.',
              'If Android asks for permission to install from this source, enable the required permission in your settings.',
              'Install My Calories and open the app.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 font-700 text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 flex items-start gap-2 text-xs text-ink-500">
            <Settings className="h-4 w-4 shrink-0" />
            Android may show security warnings for apps installed outside official stores. This is
            normal — review the permissions and proceed if you trust the source.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-center gap-4">
          <a
            href={APK_DOWNLOAD_URL}
            download
            className="group flex items-center gap-3 rounded-2xl bg-accent-500 px-8 py-4 text-lg font-700 text-white shadow-2xl shadow-accent-500/30 transition-all hover:bg-accent-600 hover:scale-105"
          >
            <Download className="h-6 w-6" />
            Download My Calories for Android
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-brand-100">
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4" /> v{SITE_CONFIG.version}
            </span>
            <span className="text-brand-300">•</span>
            <span>{SITE_CONFIG.apkSize}</span>
            <span className="text-brand-300">•</span>
            <span>{SITE_CONFIG.androidVersion}</span>
          </div>
        </Reveal>

        {/* Store buttons */}
        <Reveal variant="stagger" className="mt-12">
          <p className="text-sm font-600 text-brand-100">Also available from these stores</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {STORES.map((store) => (
              <div
                key={store.name}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white px-5 py-3 text-sm font-600 text-ink-900 shadow-lg shadow-black/10 transition-all hover:bg-ink-50"
              >
                <span>{store.name}</span>
                {store.badge && (
                  <span className="rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-600 text-white">
                    {store.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Trust section ─────────────────────────────────────────── */
function TrustSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-ink-100 bg-ink-50 p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-500" />
                <h3 className="font-display font-700 text-ink-900">Your privacy matters</h3>
              </div>
              <p className="mt-2 text-sm text-ink-500">
                Your data is handled with care. Read our{' '}
                <Link to="/privacy" className="font-600 text-brand-600 hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="font-600 text-brand-600 hover:underline">
                  Terms
                </Link>
                .
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-brand-500" />
                <h3 className="font-display font-700 text-ink-900">We're here to help</h3>
              </div>
              <p className="mt-2 text-sm text-ink-500">
                Questions or feedback? Visit our{' '}
                <Link to="/support" className="font-600 text-brand-600 hover:underline">
                  Support page
                </Link>{' '}
                or email {SITE_CONFIG.supportEmail}.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-500" />
                <h3 className="font-display font-700 text-ink-900">About AI features</h3>
              </div>
              <p className="mt-2 text-sm text-ink-500">
                AI food recognition and coaching are informational and may contain errors. My
                Calories does not provide medical advice.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-1">
            <span className="font-display text-[10px] font-500 uppercase tracking-[0.3em] text-accent-500">
              A
            </span>
            <span className="font-display text-sm font-700 tracking-wide text-accent-600">
              Rahul Bongu
            </span>
            <span className="font-display text-[10px] font-500 uppercase tracking-[0.25em] text-accent-500">
              Production
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ScannerSection />
      <TrackingSection />
      <CoachSection />
      <RecipesSection />
      <BarcodeSection />
      <ProgressSection />
      <HowItWorks />
      <WhyUs />
      <Showcase />
      <DownloadSection />
      <TrustSection />
    </main>
  );
}
