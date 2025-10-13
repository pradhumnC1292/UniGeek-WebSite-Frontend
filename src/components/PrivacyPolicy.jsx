import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-effective-date">Effective Date: 15 April 2025</p>

      <div className="privacy-section">
        <p className="privacy-paragraph">
          Geekskul ("we," "us," or "our") is a product of Pultox Technologies
          Pvt. Ltd., a company registered in the Republic of India. This Privacy
          Policy outlines how we collect, use, share, and safeguard your
          information when you interact with our platform. By using Geekskul’s
          website, courses, or services, you consent to the data practices
          described herein.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">1. Information We Collect</h2>
        <ul className="privacy-list">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Educational Background (optional)</li>
          <li>Uploaded Documents (e.g., requirement docs, resumes)</li>
          <li>LinkedIn Profile (if submitted voluntarily)</li>
          <li>Payment details (processed via third-party)</li>
          <li>Usage Data (pages visited, time spent, etc.)</li>
        </ul>
        <p className="privacy-paragraph">
          We do not collect or store sensitive payment data directly.
          Payment-related information is handled securely by Paytm.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">
          2. Purpose of Data Collection
        </h2>
        <ul className="privacy-list">
          <li>Create and manage your account.</li>
          <li>
            Facilitate enrollment and participation in educational programs.
          </li>
          <li>
            Communicate via email, SMS, or phone regarding your application,
            updates, or promotional offers.
          </li>
          <li>Respond to inquiries and support requests.</li>
          <li>
            Improve our content, curriculum, and platform features based on
            aggregated analytics.
          </li>
          <li>
            Maintain compliance with legal and institutional requirements.
          </li>
        </ul>
        <p className="privacy-paragraph">
          You may opt-out of non-essential marketing communications at any time.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">
          3. Third-Party Services and Data Sharing
        </h2>
        <p className="privacy-paragraph">
          We do not sell or rent your personal data to third parties. However,
          we rely on the following third-party service providers to deliver a
          seamless experience:
        </p>
        <ul className="privacy-list">
          <li>
            <strong>Paytm:</strong> Used for secure payment processing. Paytm
            may collect payment information under its own policies. We do not
            access your card or bank details.
          </li>
          <li>
            <strong>Google Analytics:</strong> Helps us track website usage
            metrics (page visits, bounce rate, etc.) in an anonymized format to
            improve UX.
          </li>
          <li>
            <strong>Fermion:</strong> Used to conduct online classes, mentorship
            sessions, and live workshops. Participation may require name and
            email submission to access the virtual room.
          </li>
        </ul>
        <p className="privacy-paragraph">
          All third-party services adhere to their own privacy and data
          protection standards.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">4. Cookies and Tracking</h2>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          What Are Cookies?
        </h3>
        <p className="privacy-paragraph">
          Cookies are small text files placed on your device by websites you
          visit. They help us remember your preferences, understand how you use
          our site, and improve your overall experience. Cookies do not access
          or read other files on your device.
        </p>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Types of Cookies We Use
        </h3>
        <ul className="privacy-list">
          <li>
            <strong>Necessary Cookies (Always Active):</strong> These cookies
            are essential for the website to function properly. They enable core
            features like secure login sessions, load balancing, security
            protection, and maintaining your preferences during your visit.
            These cannot be disabled as the site would not work without them.
          </li>
          <li>
            <strong>Analytics Cookies (Optional):</strong> We use Google
            Analytics to understand how visitors interact with our site - which
            pages are viewed, how long users stay, and where they navigate. This
            helps us improve our content and user experience. These cookies
            collect data in an aggregated, anonymized format and do not identify
            you personally.
          </li>
          <li>
            <strong>Marketing Cookies (Optional):</strong> With your permission,
            we may use cookies to personalize content, remember your course
            interests, and show relevant information. These cookies help us
            provide you with a tailored experience based on your learning goals.
          </li>
        </ul>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Third-Party Cookies
        </h3>
        <p className="privacy-paragraph">
          Some of our trusted partners may also set cookies when you use our
          services:
        </p>
        <ul className="privacy-list">
          <li>
            <strong>Google Analytics:</strong> Sets cookies like _ga, _gid, and
            _gat to track website usage patterns. These cookies typically expire
            after 2 years (for _ga) or 24 hours (for _gid). Google's privacy
            policy applies to this data collection.
          </li>
          <li>
            <strong>Paytm Payment Gateway:</strong> May set cookies during the
            payment process to ensure secure transactions and prevent fraud.
            These are managed according to Paytm's privacy policy.
          </li>
          <li>
            <strong>Fermion (Video Classes):</strong> Our live class platform
            may use cookies to maintain your session during virtual classes and
            workshops.
          </li>
        </ul>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Managing Your Cookie Preferences
        </h3>
        <p className="privacy-paragraph">
          You have several options to manage cookies:
        </p>
        <ul className="privacy-list">
          <li>
            <strong>Browser Settings:</strong> Most web browsers allow you to
            control cookies through their settings. You can typically block or
            delete cookies, though this may impact website functionality. Visit
            your browser's help section for instructions.
          </li>
          <li>
            <strong>Opt-Out Tools:</strong> You can opt out of Google Analytics
            tracking by installing the Google Analytics Opt-out Browser Add-on.
          </li>
          <li>
            <strong>Mobile Devices:</strong> Mobile browsers also provide cookie
            management in their privacy settings. Check your device's browser
            settings to adjust cookie preferences.
          </li>
        </ul>
        <p className="privacy-paragraph">
          Please note that blocking necessary cookies will prevent core features
          like login and form submissions from working properly.
        </p>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Cookie Retention
        </h3>
        <p className="privacy-paragraph">
          Different cookies have different lifespans:
        </p>
        <ul className="privacy-list">
          <li>
            <strong>Session Cookies:</strong> Temporary cookies that expire when
            you close your browser.
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Remain on your device for a set
            period. Analytics cookies typically last 2 years, while consent
            records are stored for up to 12 months.
          </li>
        </ul>
        <p className="privacy-paragraph">
          You can clear all cookies from your browser at any time, though you
          may need to re-enter preferences and login credentials.
        </p>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Your Consent Rights
        </h3>
        <p className="privacy-paragraph">
          Regarding cookies and tracking, you have the right to:
        </p>
        <ul className="privacy-list">
          <li>Choose which optional cookies (analytics/marketing) to allow</li>
          <li>
            Withdraw your consent at any time by clearing cookies or adjusting
            browser settings
          </li>
          <li>Use our website with only necessary cookies enabled</li>
          <li>
            Request information about what data has been collected via cookies
          </li>
        </ul>
        <p className="privacy-paragraph">
          If you have questions about our cookie usage or wish to exercise your
          rights, please contact us using the information in the "Contact Us"
          section below.
        </p>

        <h3
          className="privacy-section-heading"
          style={{ fontSize: "1.1rem", marginTop: "1rem" }}
        >
          Updates to Cookie Usage
        </h3>
        <p className="privacy-paragraph">
          As we continue to improve our services, we may introduce new cookies
          or tracking tools. Any significant changes will be reflected in this
          Privacy Policy. We encourage you to review this section periodically.
          If we add new cookie categories that require consent, we will notify
          you and request your permission before activating them.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">5. Data Retention</h2>
        <p className="privacy-paragraph">
          We retain your personal data for the duration of your relationship
          with us or as long as necessary to comply with legal obligations. Once
          your account is deleted or inactive beyond a reasonable period, your
          personal data will be permanently deleted unless required for audit,
          legal, or dispute resolution purposes.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">6. Security Measures</h2>
        <ul className="privacy-list">
          <li>Encrypted storage of personal data</li>
          <li>Secure APIs and token-based authentication</li>
          <li>Access controls and firewalls</li>
          <li>
            Hosting via reputable cloud providers and protection via Cloudflare
            or similar services
          </li>
        </ul>
        <p className="privacy-paragraph">
          However, no internet transmission is 100% secure, and we cannot fully
          guarantee the absolute security of your data.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">7. Intellectual Property</h2>
        <p className="privacy-paragraph">
          All course materials, branding, codebases, videos, images, and text
          are the intellectual property of Pluto Technologies Pvt. Ltd. under
          applicable Indian and international copyright laws. You may not
          reproduce, distribute, or use the content for commercial purposes
          without written permission.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">
          8. Course, Pricing, and Placement Disclaimer
        </h2>
        <p className="privacy-paragraph">
          Geekskul provides educational services and placement assistance, not
          job guarantees. We facilitate resume-building, mock interviews, and
          introduce hiring opportunities. Job placement is influenced by
          external factors like individual performance and market conditions. We
          reserve the right to update course content, curriculum, mentors,
          schedules, and pricing without prior notice.
        </p>
        <p className="privacy-paragraph">
          All course-related decisions, including student batch allocation and
          mentorship, are at the sole discretion of Geekskul.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">9. User Rights</h2>
        <ul className="privacy-list">
          <li>Access and review your personal information</li>
          <li>Request data correction or deletion</li>
          <li>
            Withdraw consent to data processing (may impact service delivery)
          </li>
        </ul>
        <p className="privacy-paragraph">
          To exercise these rights, please contact us at the address provided
          below.
        </p>
      </div>

      <div className="privacy-section">
        <h2 className="privacy-section-heading">10. Changes to This Policy</h2>
        <p className="privacy-paragraph">
          We may update this Privacy Policy periodically to reflect legal,
          regulatory, or operational changes. You are encouraged to revisit this
          page regularly. Your continued use of Geekskul services after such
          updates implies your acceptance.
        </p>
      </div>

      <div className="privacy-section privacy-contact">
        <h2 className="privacy-section-heading">11. Contact Us</h2>
        <p className="privacy-paragraph">
          If you have questions or concerns about this Privacy Policy, please
          reach out to us:
        </p>
        <p className="privacy-paragraph">📧 hello@geekskul.com</p>
        <p className="privacy-paragraph">
          📝 Geekskul is a product of Pultox Technologies Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
