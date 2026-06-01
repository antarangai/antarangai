import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: 1 June 2026</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              This Cookie Policy explains how AntarangAI uses cookies and similar tracking technologies on our website (antarang.ai) and web application. By using our Service, you consent to the use of cookies as described in this policy. If you do not agree, you can disable cookies via your browser settings, but note that staying logged in will not work without cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">1. What are cookies?</h3>
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the site to remember your actions or preferences over time. Cookies can be "session" cookies (temporary) or "persistent" cookies (remain until deleted).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">2. Cookies we set</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong><code>antarangai_token</code></strong> — essential authentication cookie set by the web app after sign-in. SameSite=Lax; Secure (HTTPS only); 30-day expiry. Required to stay logged in.</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> set targeting, advertising, or cross-site tracking cookies. We do not use Google Analytics or similar third-party analytics tags on the marketing site or web app.
            </p>
            <p className="mt-2">
              Importantly, we do not use targeting or advertising cookies on AntarangAI at this time. You will not receive third-party ads on our platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">3. Cookie Choices and Controls</h3>
            <p>
              You have the right to control cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Browser Settings:</strong> Modify your browser to decline cookies or alert you. Disabling essential cookies may impact login functionality.</li>
              <li><strong>Clearing Cookies:</strong> You can clear cookies from your browser at any time (this logs you out).</li>
              <li><strong>Do Not Track:</strong> We honor “Do Not Track” signals for analytics, though essential cookies remain.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">4. Third-Party Cookies</h3>
            <p>
              Some third-party services (like Razorpay or Google) may set their own cookies. This policy covers AntarangAI only. Please review third-party policies for their specific cookie use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 pt-4">5. Updates to this Policy</h3>
            <p>
              We may update our Cookie Policy. We will post changes here. Continued use implies acceptance.
            </p>
            <p>
              If you have questions, please contact us at <a href="mailto:hello@antarangai.in" className="text-primary hover:underline">hello@antarangai.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;

