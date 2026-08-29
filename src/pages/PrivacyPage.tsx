import PageLayout from '@/components/PageLayout';
import { SITE_CONFIG } from '@/config/site';

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy" subtitle={`Last updated: January ${SITE_CONFIG.copyrightYear}`}>
      <p>
        My Calories ("we", "our", or "us") respects your privacy. This policy explains what data we
        collect, how we use it, and the choices you have.
      </p>

      <Section title="Data we collect">
        <ul>
          <li>
            <strong>Account information:</strong> email address and authentication credentials
            managed through our backend provider.
          </li>
          <li>
            <strong>Health and nutrition data:</strong> meals, calories, macros, weight, water
            intake, and progress entries you create.
          </li>
          <li>
            <strong>Food photos:</strong> images you capture or upload for AI food recognition.
          </li>
          <li>
            <strong>Usage data:</strong> anonymous analytics about app performance and feature
            usage.
          </li>
        </ul>
      </Section>

      <Section title="How we use your data">
        <ul>
          <li>To provide calorie, macro, and nutrition tracking features.</li>
          <li>To power AI food recognition and AI coaching guidance.</li>
          <li>To display your progress, streaks, and achievements.</li>
          <li>To maintain and improve the app's features and performance.</li>
        </ul>
      </Section>

      <Section title="AI processing">
        <p>
          Food photos and coaching conversations are processed by AI providers to generate
          nutrition estimates and guidance. These outputs are estimates and may contain errors. AI
          features are informational and do not constitute medical advice.
        </p>
      </Section>

      <Section title="Data storage">
        <p>
          Your data is stored securely through our backend provider. We do not sell your personal
          data to third parties.
        </p>
      </Section>

      <Section title="Your rights">
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Delete your account and associated data at any time from within the app.</li>
        </ul>
      </Section>

      <Section title="Children's privacy">
        <p>
          My Calories is not intended for children under 13. We do not knowingly collect data from
          children under 13.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For privacy questions, contact us at {SITE_CONFIG.supportEmail}.
        </p>
      </Section>
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6">
      <h2 className="font-display text-xl font-700 text-ink-900">{title}</h2>
      <div className="mt-3 space-y-2 text-ink-600 [&>ul]:mt-2 [&>ul]:space-y-1.5 [&>ul]:pl-5 [&>ul]:list-disc">
        {children}
      </div>
    </div>
  );
}
