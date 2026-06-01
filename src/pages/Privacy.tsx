import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: 1 June 2026</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              AntarangAI ("we", "us", "our") provides an AI-powered idea-validation product for Indian founders. This Privacy Policy explains what information we collect, what we do with it, who we share it with, and your rights. We comply with the Indian Information Technology Act, 2000 (including the SPDI Rules, 2011), the Digital Personal Data Protection Act, 2023 (DPDP Act), the EU General Data Protection Regulation (GDPR) for users in the EU/EEA, and the California Consumer Privacy Act (CCPA/CPRA) for California residents.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">1. Information we collect</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account information:</strong> name (optional), email address, phone number, Apple/Google account identifier (if you use Sign in with Apple / Google), encrypted password hash, account creation date.</li>
              <li><strong>Idea content:</strong> the title, description, industry, business stage, budget range, and target region of every idea you submit; the personas selected for a Virtual Focus Group debate; the debate transcript; and the AI-generated analysis report. <strong>This text is sent to third-party AI providers (see Section 3) — read that section carefully if any of this content is sensitive or proprietary.</strong></li>
              <li><strong>Usage data:</strong> log lines, device type, OS version, app version, IP address, timestamps, crash reports. Used for debugging, abuse prevention, and improving reliability.</li>
              <li><strong>Payment information:</strong> if you subscribe to a paid tier, our payment processor (Razorpay) collects your payment instrument details. We never see or store full card numbers, UPI handles, or bank details.</li>
              <li><strong>Support communications:</strong> messages and attachments you send to our support team.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">2. How we use your information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide the core Service: persona generation, idea analysis, focus-group debate, and report synthesis.</li>
              <li>Maintain your account, authenticate sessions, and enforce usage limits (e.g. the free-tier analysis cap).</li>
              <li>Process payments via Razorpay for subscriptions.</li>
              <li>Respond to support requests, security incidents, and abuse reports.</li>
              <li>Improve the product through aggregated, de-identified usage analytics.</li>
              <li>Comply with applicable Indian, EU, and US legal obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">3. Who we share data with</h3>
            <p>
              We do <strong>not</strong> sell or rent your personal data. We do share data with the following categories of processors and providers, each bound by a data-processing agreement:
            </p>
            <p className="mt-3">
              <strong>AI providers (your idea content is sent to these):</strong> When you request idea analysis or a focus-group debate, your idea title, description, and the personas' conversation are routed through OpenRouter, which forwards the request to one of the following Large Language Model providers, depending on availability and the model selected for your tier:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>OpenRouter</strong> — API gateway (<a href="https://openrouter.ai/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>)</li>
              <li><strong>OpenAI</strong> — GPT-4o, GPT-4o-mini (<a href="https://openai.com/policies/privacy-policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>; API data is not used for training per OpenAI's published API data-usage policy)</li>
              <li><strong>Anthropic</strong> — Claude 3.5 Sonnet, Claude Haiku (<a href="https://www.anthropic.com/legal/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>; API data is not used for training)</li>
              <li><strong>Google</strong> — Gemini Flash, Gemini Pro (<a href="https://ai.google.dev/gemini-api/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">terms</a>)</li>
              <li><strong>Perplexity</strong> — Sonar Pro, Sonar Deep (<a href="https://www.perplexity.ai/hub/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">privacy policy</a>)</li>
              <li><strong>Meta</strong> — Llama 3.3</li>
              <li><strong>DeepSeek</strong></li>
              <li><strong>Qwen</strong> — Alibaba Cloud</li>
            </ul>
            <p className="mt-3">
              Each provider may retain prompts and responses for a short period for abuse detection. None of them use your data to train their models when accessed through their commercial API (the relevant policy for OpenAI, Anthropic, and Google explicitly disclaims training-on-API-data; we verify these policies quarterly). If a particular provider's policy changes such that they may use API data for training, we will update this list and notify users.
            </p>
            <p className="mt-3">
              <strong>Search providers (Deep Dive tier only):</strong> If you use the optional web-augmented "Deep Dive" analysis, your search query is sent to Tavily and/or DuckDuckGo to retrieve live market data.
            </p>
            <p className="mt-3">
              <strong>Other processors:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Razorpay</strong> — payment processing</li>
              <li><strong>MSG91 / Twilio</strong> — SMS OTP delivery (when phone login is offered)</li>
              <li><strong>Railway</strong> — application hosting (data primarily processed in their US region; we are evaluating an India-region option)</li>
              <li><strong>Sentry</strong> — crash and error reporting (no idea content is sent; only stack traces and session metadata)</li>
              <li><strong>Apple</strong> — Sign in with Apple authentication; Apple may receive your identifier when you sign in</li>
            </ul>
            <p className="mt-3">
              <strong>Legal disclosures:</strong> We may share data when required by valid Indian law, court order, or a comparable lawful request from another jurisdiction we are subject to.
            </p>
            <p className="mt-3">
              <strong>Business transfers:</strong> If we are acquired or merge with another entity, your data may transfer to the new owner under the same protections.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">4. Data security</h3>
            <p>
              We use HTTPS for all data in transit, bcrypt for password hashing, hardware-backed Apple Keychain on iOS for token storage, and access controls and audit logs on production systems. No method is 100% secure; in the event of a data breach we will notify affected users and the relevant authorities as required by the DPDP Act and GDPR.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">5. Data retention</h3>
            <p>
              We retain account information and idea content for as long as your account exists. If you delete your account (see Section 6), we delete or anonymise your personal data within 30 days. Backups containing your data are purged on a rolling 90-day cycle. Logs are retained for 90 days unless required longer for security investigations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">6. Your rights and choices</h3>
            <p>You have the following rights, regardless of where you live:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> update or correct inaccurate data via your profile, or by email request.</li>
              <li><strong>Deletion / "right to be forgotten":</strong> request deletion of your account and personal data. There is a "Delete Account" option inside the app; alternatively, email us at the address in Section 11.</li>
              <li><strong>Portability:</strong> request an export of your idea content and analyses in a structured machine-readable format.</li>
              <li><strong>Withdraw consent:</strong> for any processing where the legal basis is consent, you can withdraw it.</li>
              <li><strong>Object / restrict:</strong> object to processing for marketing or analytics; restrict processing while a dispute is resolved.</li>
              <li><strong>EU residents (GDPR):</strong> you may lodge a complaint with your local supervisory authority.</li>
              <li><strong>California residents (CCPA/CPRA):</strong> you may exercise the right to know, delete, correct, and limit; we do not sell personal information, and we do not engage in "share for cross-context behavioral advertising".</li>
              <li><strong>India (DPDP Act):</strong> you may contact our Grievance Officer (Section 11) for any concerns; the Officer will respond within the statutory window.</li>
            </ul>
            <p>
              We will respond to verifiable requests within 30 days. Requests must be sent from the email address registered on the account, or otherwise verified.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">7. Cookies and tracking</h3>
            <p>
              The web app uses essential cookies for authentication and functional cookies for user preferences. We do not use third-party advertising or cross-site tracking cookies. See our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a> for details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">8. Children's privacy</h3>
            <p>
              AntarangAI is intended for users aged 17 and older. We do not knowingly collect personal data from anyone under 17. If you believe a child has provided data to us, contact us and we will delete it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">9. International data transfers</h3>
            <p>
              Some processors (notably the AI providers in Section 3, Sentry, and Railway) operate from outside India. Where data is transferred internationally, we rely on (a) the processor's adequacy under the relevant law, or (b) contractual safeguards such as the EU Standard Contractual Clauses, or (c) explicit consent. By using the Service you acknowledge that your data may be processed in the United States, the European Union, and other regions where our providers are based.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">10. Updates to this policy</h3>
            <p>
              We may revise this policy as the product evolves. Material changes — for example, adding a new category of processor — will be announced via in-app notification or email at least 14 days before they take effect. The "Last updated" date at the top of this page reflects the most recent revision. Continued use after the effective date constitutes acceptance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">11. Contact us</h3>
            <p>
              For any privacy concerns, data-subject requests, or to reach our Grievance Officer, email <a href="mailto:privacy@antarang.ai" className="text-primary hover:underline">privacy@antarang.ai</a>. Postal address available on request.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
