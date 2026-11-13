import PageLayout from '@/components/PageLayout';
import { SITE_CONFIG } from '@/config/site';

export default function PrivacyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Last updated: August 31, 2026"
    >
      <p>
        My Calories ("we", "us", or "our") operates the My Calories mobile application (the
        "App"). This Privacy Policy explains how we collect, use, and protect your information
        when you use our App.
      </p>

      <Section title="Information We Collect">
        <Subsection title="Account Information">
          <List>
            <li>Email address (when you create an account or sign in with Google)</li>
            <li>Name (when provided during signup or Google Sign-In)</li>
            <li>Profile photo (if you choose to upload one)</li>
          </List>
        </Subsection>

        <Subsection title="Nutrition Data">
          <List>
            <li>Meals you log (food names, quantities, nutrition information)</li>
            <li>Food scan photos (when you use the AI food scanner)</li>
            <li>Recipes you create or generate</li>
            <li>Water intake records</li>
            <li>Weight records</li>
            <li>Dietary preferences and allergens</li>
          </List>
        </Subsection>

        <Subsection title="AI Interactions">
          <List>
            <li>Messages you send to your personal coach</li>
            <li>Food photos submitted for AI analysis</li>
            <li>AI-generated nutrition estimates and recommendations</li>
          </List>
        </Subsection>

        <Subsection title="Device Information">
          <List>
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>Notification preferences</li>
          </List>
        </Subsection>
      </Section>

      <Section title="How We Use Your Information">
        <List>
          <li>To provide nutrition tracking and AI-powered food analysis</li>
          <li>To sync your data across devices via secure cloud storage</li>
          <li>To send meal reminder notifications (if enabled)</li>
          <li>To improve our AI models and app functionality</li>
          <li>To provide customer support</li>
        </List>
      </Section>

      <Section title="Data Storage and Security">
        <List>
          <li>Your data is stored securely using Supabase (a trusted cloud database provider)</li>
          <li>All data transmission is encrypted using HTTPS</li>
          <li>Your food photos are stored in private cloud storage accessible only by you</li>
          <li>We do not sell your personal data to third parties</li>
          <li>We do not share your data with advertisers</li>
        </List>
      </Section>

      <Section title="AI Features">
        <p>
          Our AI features use third-party AI providers to analyze food photos and provide
          nutrition estimates. When you use these features:
        </p>
        <List>
          <li>Your food photo is sent to our secure server, then to an AI provider for analysis</li>
          <li>The AI provider processes the image and returns nutrition estimates</li>
          <li>We do not share your personal information with AI providers</li>
          <li>AI-generated nutrition estimates are approximations and should not be treated as
            medical advice</li>
        </List>
      </Section>

      <Section title="Data Retention">
        <List>
          <li>Your account data is retained as long as your account is active</li>
          <li>You can delete your account and all associated data at any time from the app
            settings</li>
          <li>Deleted data is permanently removed within 30 days</li>
        </List>
      </Section>

      <Section title="Third-Party Services">
        <p>We use the following third-party services:</p>
        <List>
          <li>
            <strong>Supabase</strong> — Cloud database and authentication
          </li>
          <li>
            <strong>Google Sign-In</strong> — Optional authentication method
          </li>
          <li>
            <strong>Cloudflare</strong> — Secure API hosting for AI features
          </li>
        </List>
        <p>
          Each third-party service has its own privacy policy governing their use of data.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          My Calories is not intended for children under 13 years of age. We do not knowingly
          collect personal information from children under 13.
        </p>
      </Section>

      <Section title="Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy in the app and updating the "Last updated" date.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="font-600 text-brand-600 hover:underline"
          >
            {SITE_CONFIG.supportEmail}
          </a>
          .
        </p>
      </Section>

      <p className="text-sm text-ink-500 italic">
        *This Privacy Policy is effective as of August 31, 2026.*
      </p>
    </PageLayout>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-brand-400">{children}</ul>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6">
      <h2 className="font-display text-xl font-700 text-ink-900">{title}</h2>
      <div className="mt-3 space-y-3 text-ink-600">{children}</div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-600 text-ink-800">{title}</h3>
      <div className="mt-2 space-y-2 text-ink-600">{children}</div>
    </div>
  );
}
