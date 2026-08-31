import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            Privacy Policy — My Calories
          </h1>
          
          <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
            <p className="font-medium text-gray-900">Last updated: August 31, 2026</p>

            <p>
              My Calories (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the My Calories mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, and protect your information when you use our App.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-4">Account Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email address (when you create an account or sign in with Google)</li>
              <li>Name (when provided during signup or Google Sign-In)</li>
              <li>Profile photo (if you choose to upload one)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-4">Nutrition Data</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Meals you log (food names, quantities, nutrition information)</li>
              <li>Food scan photos (when you use the AI food scanner)</li>
              <li>Recipes you create or generate</li>
              <li>Water intake records</li>
              <li>Weight records</li>
              <li>Dietary preferences and allergens</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-4">AI Interactions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Messages you send to the my personal coach</li>
              <li>Food photos submitted for AI analysis</li>
              <li>AI-generated nutrition estimates and recommendations</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-4">Device Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Device type and operating system version</li>
              <li>App version</li>
              <li>Notification preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide nutrition tracking and AI-powered food analysis</li>
              <li>To sync your data across devices via secure cloud storage</li>
              <li>To send meal reminder notifications (if enabled)</li>
              <li>To improve our AI models and app functionality</li>
              <li>To provide customer support</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Data Storage and Security</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your data is stored securely using Supabase (a trusted cloud database provider)</li>
              <li>All data transmission is encrypted using HTTPS</li>
              <li>Your food photos are stored in private cloud storage accessible only by you</li>
              <li>We do not sell your personal data to third parties</li>
              <li>We do not share your data with advertisers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">AI Features</h2>
            <p>
              Our AI features use third-party AI providers to analyze food photos and provide nutrition estimates. When you use these features:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your food photo is sent to our secure server, then to an AI provider for analysis</li>
              <li>The AI provider processes the image and returns nutrition estimates</li>
              <li>We do not share your personal information with AI providers</li>
              <li>AI-generated nutrition estimates are approximations and should not be treated as medical advice</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Data Retention</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your account data is retained as long as your account is active</li>
              <li>You can delete your account and all associated data at any time from the app settings</li>
              <li>Deleted data is permanently removed within 30 days</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Supabase</strong> — Cloud database and authentication</li>
              <li><strong>Google Sign-In</strong> — Optional authentication method</li>
              <li><strong>Cloudflare</strong> — Secure API hosting for AI features</li>
            </ul>
            <p>Each third-party service has its own privacy policy governing their use of data.</p>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Children&apos;s Privacy</h2>
            <p>
              My Calories is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 pt-6 border-t">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:<br/>
              <strong>Email:</strong> support@mycalories.app
            </p>

            <div className="mt-8 pt-8 border-t text-sm text-gray-500 italic">
              *This Privacy Policy is effective as of August 31, 2026.*
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}