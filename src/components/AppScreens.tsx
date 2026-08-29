import { Flame, Camera, Plus, Send, ScanLine, Droplet, TrendingUp, Award, ChevronRight } from 'lucide-react';

/* ── Status bar ───────────────────────────────────────────── */
function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-5 pt-2.5 text-[10px] font-600 ${
        dark ? 'text-white' : 'text-ink-900'
      }`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="text-[8px]">●●●●</span>
        <span>5G</span>
        <span className="ml-1 inline-block h-2.5 w-5 rounded-[2px] border border-current">
          <span className="block h-full w-4/5 rounded-[1px] bg-current" />
        </span>
      </div>
    </div>
  );
}

/* ── Home / Dashboard screen ──────────────────────────────── */
export function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-brand-50 to-white">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-3">
        <div>
          <p className="text-[10px] text-ink-500">Good morning</p>
          <p className="font-display text-base font-700 text-ink-900">Today</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
          <Flame className="h-4 w-4" />
        </div>
      </div>

      {/* Calorie ring */}
      <div className="mt-4 flex flex-col items-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#d1fae5" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#10b981"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={327}
              strokeDashoffset={98}
            />
          </svg>
          <div className="text-center">
            <p className="font-display text-2xl font-800 text-ink-900">1,420</p>
            <p className="text-[9px] text-ink-500">of 2,200 kcal</p>
          </div>
        </div>
        <p className="mt-1 rounded-full bg-brand-100 px-3 py-0.5 text-[10px] font-600 text-brand-700">
          780 kcal remaining
        </p>
      </div>

      {/* Macros */}
      <div className="mt-4 grid grid-cols-3 gap-2 px-5">
        {[
          { label: 'Protein', val: '88g', total: '140g', color: 'bg-brand-500', pct: '63%' },
          { label: 'Carbs', val: '172g', total: '250g', color: 'bg-accent-500', pct: '69%' },
          { label: 'Fat', val: '48g', total: '70g', color: 'bg-ink-400', pct: '69%' },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl bg-white p-2.5 shadow-sm">
            <p className="text-[9px] text-ink-500">{m.label}</p>
            <p className="font-display text-sm font-700 text-ink-900">{m.val}</p>
            <div className="mt-1.5 h-1 w-full rounded-full bg-ink-100">
              <div className={`h-full rounded-full ${m.color}`} style={{ width: m.pct }} />
            </div>
            <p className="mt-1 text-[8px] text-ink-400">of {m.total}</p>
          </div>
        ))}
      </div>

      {/* Meals */}
      <div className="mt-4 flex-1 space-y-2 px-5">
        <p className="text-[10px] font-600 text-ink-600">Meals</p>
        {[
          { name: 'Breakfast', kcal: '420', items: 'Oats, banana, coffee' },
          { name: 'Lunch', kcal: '680', items: 'Grilled chicken salad' },
          { name: 'Snack', kcal: '320', items: 'Greek yogurt, almonds' },
        ].map((meal) => (
          <div
            key={meal.name}
            className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm"
          >
            <div>
              <p className="text-xs font-600 text-ink-900">{meal.name}</p>
              <p className="text-[9px] text-ink-400">{meal.items}</p>
            </div>
            <span className="font-display text-xs font-700 text-brand-600">{meal.kcal} kcal</span>
          </div>
        ))}
      </div>

      {/* FAB */}
      <div className="flex justify-center pb-4 pt-2">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ── Scanner screen ───────────────────────────────────────── */
export function ScannerScreen({ foodImage }: { foodImage: string }) {
  return (
    <div className="relative h-full bg-ink-950">
      <StatusBar dark />
      <div className="flex items-center gap-2 px-5 pt-2">
        <ChevronRight className="h-4 w-4 rotate-180 text-white" />
        <p className="font-display text-sm font-600 text-white">Scan Food</p>
      </div>

      {/* Camera viewfinder */}
      <div className="relative mx-5 mt-4 overflow-hidden rounded-3xl">
        <img src={foodImage} alt="Food being scanned" className="h-64 w-full object-cover" />
        {/* Scanner overlay */}
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-brand-400" />
          <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-brand-400" />
          <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-brand-400" />
          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-brand-400" />
          <div
            className="absolute left-4 right-4 h-0.5 bg-brand-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.6)]"
            style={{ animation: 'scanLine 2.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center px-5 pt-4">
        <p className="text-[10px] text-ink-400">Analyzing your meal...</p>
        <div className="mt-2 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-brand-400"
              style={{ animation: `float 1s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>

      {/* Capture button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 backdrop-blur">
          <Camera className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}

/* ── Scan result screen ───────────────────────────────────── */
export function ScanResultScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <ChevronRight className="h-4 w-4 rotate-180 text-ink-900" />
        <p className="font-display text-sm font-600 text-ink-900">Result</p>
        <span className="w-4" />
      </div>

      {/* Food image */}
      <div className="mx-5 mt-3 overflow-hidden rounded-2xl">
        <img
          src="https://images.pexels.com/photos/8743924/pexels-photo-8743924.jpeg?auto=compress&cs=tinysrgb&h=350&w=500"
          alt="Grilled chicken dish"
          className="h-32 w-full object-cover"
        />
      </div>

      {/* Food name */}
      <div className="px-5 pt-3">
        <p className="font-display text-base font-700 text-ink-900">Grilled Chicken Plate</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[9px] font-600 text-brand-700">
            AI Estimate
          </span>
          <span className="text-[9px] text-ink-400">Editable</span>
        </div>
      </div>

      {/* Weight */}
      <div className="mx-5 mt-3 flex items-center justify-between rounded-2xl bg-ink-50 p-3">
        <span className="text-xs text-ink-600">Weight</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            defaultValue="350"
            readOnly
            className="w-12 rounded-lg bg-white px-2 py-1 text-center text-xs font-700 text-ink-900 shadow-sm"
          />
          <span className="text-xs font-600 text-ink-500">g</span>
        </div>
      </div>

      {/* Nutrition */}
      <div className="mx-5 mt-3 grid grid-cols-2 gap-2">
        {[
          { label: 'Calories', val: '485', unit: 'kcal', color: 'text-brand-600' },
          { label: 'Protein', val: '42', unit: 'g', color: 'text-brand-600' },
          { label: 'Carbs', val: '28', unit: 'g', color: 'text-accent-500' },
          { label: 'Fat', val: '18', unit: 'g', color: 'text-ink-500' },
        ].map((n) => (
          <div key={n.label} className="rounded-2xl border border-ink-100 p-3">
            <p className="text-[9px] text-ink-400">{n.label}</p>
            <p className={`font-display text-lg font-800 ${n.color}`}>
              {n.val}
              <span className="ml-0.5 text-[10px] font-500 text-ink-400">{n.unit}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Add button */}
      <div className="mt-auto p-5">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 py-3 text-sm font-600 text-white shadow-lg shadow-brand-500/30">
          <Plus className="h-4 w-4" />
          Add to Diary
        </button>
      </div>
    </div>
  );
}

/* ── AI Coach chat screen ─────────────────────────────────── */
export function CoachScreen() {
  return (
    <div className="flex h-full flex-col bg-ink-50">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-2">
        <ChevronRight className="h-4 w-4 rotate-180 text-ink-900" />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white">
          <Flame className="h-4 w-4" />
        </div>
        <div>
          <p className="font-display text-sm font-700 text-ink-900">AI Coach</p>
          <p className="text-[9px] text-brand-600">● Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-br-md bg-brand-500 px-3.5 py-2.5 text-xs text-white shadow-sm">
            What should I eat for dinner?
          </div>
        </div>
        {/* Coach message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-xs text-ink-700 shadow-sm">
            You have <span className="font-600 text-brand-600">780 kcal</span> and{' '}
            <span className="font-600 text-brand-600">52g protein</span> remaining today. Here are a
            few options that fit your target:
          </div>
        </div>
        {/* Suggestion cards */}
        <div className="space-y-2">
          {[
            { name: 'Grilled salmon & quinoa', kcal: '620', protein: '44g' },
            { name: 'Chicken stir-fry with rice', kcal: '580', protein: '38g' },
            { name: 'Greek yogurt bowl', kcal: '340', protein: '28g' },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
              <div>
                <p className="text-[11px] font-600 text-ink-900">{s.name}</p>
                <p className="text-[9px] text-ink-400">
                  {s.kcal} kcal · {s.protein} protein
                </p>
              </div>
              <Plus className="h-3.5 w-3.5 text-brand-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-4">
        <div className="flex flex-1 items-center rounded-full bg-white px-4 py-2.5 shadow-sm">
          <input
            type="text"
            placeholder="Ask your coach..."
            readOnly
            className="flex-1 bg-transparent text-xs text-ink-700 placeholder:text-ink-400 focus:outline-none"
          />
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white shadow-md">
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ── Recipes screen ───────────────────────────────────────── */
export function RecipesScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <p className="font-display text-base font-700 text-ink-900">Recipes</p>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
          <Plus className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* AI generate banner */}
      <div className="mx-5 mt-3 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 p-3 text-white">
        <p className="text-[11px] font-600">Generate with AI</p>
        <p className="text-[9px] text-brand-100">Turn ingredients into a recipe</p>
      </div>

      {/* Recipe cards */}
      <div className="mt-4 flex-1 space-y-3 overflow-hidden px-5">
        {[
          { name: 'Mediterranean Bowl', kcal: '520', time: '20 min', servings: 2 },
          { name: 'Protein Smoothie', kcal: '340', time: '5 min', servings: 1 },
          { name: 'Avocado Toast Deluxe', kcal: '410', time: '10 min', servings: 1 },
        ].map((r) => (
          <div key={r.name} className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
            <div className="flex items-center justify-between p-3">
              <div>
                <p className="text-xs font-600 text-ink-900">{r.name}</p>
                <p className="text-[9px] text-ink-400">
                  {r.kcal} kcal · {r.time} · {r.servings} servings
                </p>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-ink-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Progress screen ──────────────────────────────────────── */
export function ProgressScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="px-5 pt-2">
        <p className="font-display text-base font-700 text-ink-900">Progress</p>
      </div>

      {/* Weight chart */}
      <div className="mx-5 mt-3 rounded-2xl border border-ink-100 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-600 text-ink-600">Weight</span>
          <span className="flex items-center gap-1 text-[9px] text-brand-600">
            <TrendingUp className="h-3 w-3" /> -2.4 kg
          </span>
        </div>
        <svg viewBox="0 0 240 80" className="mt-2 w-full">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C30,55 50,50 80,45 C110,40 140,48 170,35 C200,25 220,20 240,15"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0,60 C30,55 50,50 80,45 C110,40 140,48 170,35 C200,25 220,20 240,15 L240,80 L0,80 Z"
            fill="url(#chartGrad)"
          />
          {[
            [0, 60],
            [80, 45],
            [170, 35],
            [240, 15],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="2.5" fill="#10b981" />
          ))}
        </svg>
      </div>

      {/* Stats grid */}
      <div className="mx-5 mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-brand-50 p-3">
          <div className="flex items-center gap-1.5">
            <Droplet className="h-3.5 w-3.5 text-brand-500" />
            <span className="text-[9px] text-ink-500">Water</span>
          </div>
          <p className="mt-1 font-display text-base font-800 text-ink-900">1.8L</p>
          <p className="text-[8px] text-ink-400">of 2.5L goal</p>
        </div>
        <div className="rounded-2xl bg-accent-50 p-3">
          <div className="flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-accent-500" />
            <span className="text-[9px] text-ink-500">Streak</span>
          </div>
          <p className="mt-1 font-display text-base font-800 text-ink-900">12 days</p>
          <p className="text-[8px] text-ink-400">Personal best!</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="mx-5 mt-3 flex-1">
        <p className="text-[10px] font-600 text-ink-600">Achievements</p>
        <div className="mt-2 flex gap-2">
          {['🔥', '💧', '🎯', '⭐'].map((emoji, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-2xl text-base ${
                i < 3 ? 'bg-brand-50' : 'bg-ink-100 opacity-50'
              }`}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Barcode scanner screen ───────────────────────────────── */
export function BarcodeScreen() {
  return (
    <div className="relative flex h-full flex-col bg-ink-950">
      <StatusBar dark />
      <div className="flex items-center gap-2 px-5 pt-2">
        <ChevronRight className="h-4 w-4 rotate-180 text-white" />
        <p className="font-display text-sm font-600 text-white">Barcode Scanner</p>
      </div>

      {/* Scanner viewfinder */}
      <div className="relative mx-5 mt-6 flex h-48 items-center justify-center rounded-3xl bg-ink-900">
        <ScanLine className="h-6 w-6 text-ink-600" />
        <div className="absolute inset-0">
          <div className="absolute left-8 top-8 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-brand-400" />
          <div className="absolute right-8 top-8 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-brand-400" />
          <div className="absolute bottom-8 left-8 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-brand-400" />
          <div className="absolute bottom-8 right-8 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-brand-400" />
          <div
            className="absolute left-8 right-8 h-0.5 bg-brand-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.6)]"
            style={{ animation: 'scanLine 2.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <p className="mt-4 text-center text-[10px] text-ink-400">Point at a product barcode</p>

      {/* Verified badge */}
      <div className="mx-5 mt-4 rounded-2xl bg-white/5 p-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500">
            <ScanLine className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <p className="text-[11px] font-600 text-white">Verified nutrition</p>
            <p className="text-[9px] text-ink-400">From product databases</p>
          </div>
        </div>
      </div>
    </div>
  );
}
