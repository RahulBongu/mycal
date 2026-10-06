# 🍽️ My Calories

> **AI-powered nutrition tracking, food analysis, and personalized calorie management.**

**My Calories** is a modern nutrition and calorie-tracking application designed to make food logging simple, intelligent, and personalized.

Instead of manually searching through large food databases, the goal is to make nutrition tracking feel effortless — from understanding what is on your plate to tracking calories, macros, meals, progress, and daily goals.

---

## ✨ Features

### 📸 AI Food Scanning

Analyze food using images and turn meals into structured nutrition data.

* Food image analysis
* Automatic food identification
* Estimated serving size
* Calorie estimation
* Protein, carbohydrate, and fat estimation
* Editable food quantities
* Nutrition information per serving

### 🧮 Personalized Calorie Goals

Calculate personalized daily nutrition targets based on your profile and goals.

* Daily calorie target
* BMR calculation
* TDEE estimation
* Weight-loss targets
* Weight-gain targets
* Maintenance calories
* Protein targets
* Macro distribution

### 📖 Food Diary

Keep track of everything you eat throughout the day.

* Breakfast
* Lunch
* Dinner
* Snacks
* Daily calorie totals
* Macro tracking
* Meal history
* Individual food editing

### 🤖 AI Nutrition Coach

Get personalized guidance based on your nutrition data and goals.

The AI coach can help with:

* Calorie questions
* Macro questions
* Meal suggestions
* Weight-management guidance
* Nutrition recommendations
* Daily progress analysis

### 🍳 Recipe Maker

Create recipes based on the ingredients you have.

* Add ingredients
* Specify quantities
* Calculate recipe nutrition
* Generate recipes with AI
* Track calories per serving
* Log recipes directly into your diary

### 📊 Progress Tracking

Understand your progress over time.

* Weight tracking
* Weight history
* Goal progress
* Calorie history
* Water tracking
* Streaks
* Achievements

### 💧 Water Tracking

Track daily hydration alongside nutrition.

* Daily water goal
* Water intake logging
* Progress tracking
* Hydration history

### 🔐 Authentication & Cloud Sync

Built with Supabase for secure account management and data persistence.

* User authentication
* Secure database access
* Cloud-synced nutrition data
* Persistent user profiles

---

## 🎯 Why My Calories?

Traditional calorie trackers often require users to manually search for foods, enter serving sizes, and calculate nutrition.

**My Calories is built around a simpler workflow:**

```text
Take a photo
     ↓
AI understands the food
     ↓
Nutrition is estimated
     ↓
Review / edit the serving
     ↓
Log the meal
     ↓
Track daily progress
     ↓
Get personalized guidance
```

The goal is to make calorie tracking **fast enough to actually use every day.**

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Lucide React**

### Backend / Data

* **Supabase**
* PostgreSQL
* Supabase Authentication

### AI Architecture

The application is designed around provider-independent AI services, allowing food analysis, coaching, and recipe generation to evolve independently from the frontend.

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │     My Calories     │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       ┌──────────┐      ┌──────────┐      ┌──────────┐
       │ Supabase │      │ AI Layer │      │ Nutrition│
       │   Auth   │      │          │      │  Engine  │
       └────┬─────┘      └────┬─────┘      └──────────┘
            │                 │
            ▼          ┌──────┼───────┐
       ┌──────────┐    │      │       │
       │PostgreSQL│    ▼      ▼       ▼
       └──────────┘  Food   Coach   Recipes
                     Vision
```

The separation between the UI, nutrition calculations, data layer, and AI services makes the project easier to maintain and extend.

---

## 📁 Project Structure

```text
mycal/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   └── ...
│
├── .bolt/
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* A Supabase project

---

### 1. Clone the repository

```bash
git clone https://github.com/RahulBongu/mycal.git
cd mycal
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Never commit private API keys or service-role keys to GitHub.

---

### 4. Start the development server

```bash
npm run dev
```

Vite will start the local development server.

---

## 🧪 Development Commands

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Type checking

```bash
npm run typecheck
```

---

## 🔐 Security

My Calories is designed to keep sensitive credentials out of the client application.

### Never expose

```text
SUPABASE_SERVICE_ROLE_KEY
Private AI API keys
Server-side secrets
Database credentials
```

Only public client-side configuration should be exposed through `VITE_*` environment variables.

Supabase Row Level Security should be enabled for user-owned data.

---

## 📱 Core Experience

### Home

A quick overview of your day:

* Calories consumed
* Remaining calories
* Protein
* Carbs
* Fat
* Water
* Daily progress
* Recent meals

### Diary

A detailed breakdown of your meals and nutrition.

### Scan

The fastest way to log food using an image.

### Progress

Track your body-weight and nutrition journey.

### Coach

Ask questions and receive personalized nutrition guidance.

### Profile

Manage:

* Personal information
* Nutrition goals
* Weight goals
* Preferences
* Account settings

---

## 🧠 Nutrition Engine

The application uses a deterministic nutrition calculation layer rather than relying entirely on AI for important calculations.

A typical calorie calculation flow is:

```text
User Profile
     ↓
BMR
     ↓
Activity Level
     ↓
TDEE
     ↓
Goal Adjustment
     ↓
Daily Calorie Target
     ↓
Macro Targets
```

AI can provide estimates and recommendations, while deterministic calculations remain responsible for core nutrition logic wherever possible.

---

## 🤖 AI Food Analysis

Food recognition is treated as an estimation system rather than a medical-grade measurement system.

A typical scan produces structured information such as:

```json
{
  "food": "Chicken Rice Bowl",
  "estimatedWeight": 350,
  "calories": 620,
  "protein": 42,
  "carbohydrates": 65,
  "fat": 18,
  "confidence": 0.87
}
```

Users can review and modify the estimated serving size before logging the meal.

---

## 🗺️ Roadmap

### Completed / Core

* [x] Modern nutrition dashboard
* [x] Food diary
* [x] Calorie tracking
* [x] Macro tracking
* [x] Personalized calorie calculations
* [x] Weight tracking
* [x] Water tracking
* [x] Progress tracking
* [x] Recipe functionality
* [x] AI-oriented food scanning architecture
* [x] Supabase integration
* [x] Authentication architecture

### Future

* [ ] More accurate food vision models
* [ ] Barcode database expansion
* [ ] Larger food database
* [ ] Improved serving-size detection
* [ ] Meal recommendations
* [ ] Weekly AI nutrition reports
* [ ] Advanced progress analytics
* [ ] Wearable integrations
* [ ] Apple Health integration
* [ ] Google Health Connect integration
* [ ] Native mobile application
* [ ] Offline-first logging

---

## ⚠️ Disclaimer

My Calories is intended for **general nutrition tracking and educational purposes**.

AI-generated food recognition and calorie estimates may not always be accurate. Nutrition information should be treated as an estimate and verified when accuracy is important.

My Calories is **not a medical device** and does not replace professional medical or dietary advice.

---

## 👨‍💻 Author

### Rahul Bongu

Building products at the intersection of **AI, software, and ambitious ideas.**

GitHub:
[RahulBongu](https://github.com/RahulBongu)

---

## ⭐ Support

If you find the project interesting, consider giving the repository a ⭐.

It helps the project get discovered and motivates further development.

---

## 📄 License

This project currently does not specify a public open-source license.

If you plan to make the project open source, consider adding an appropriate license such as MIT, Apache-2.0, or GPL-3.0.
