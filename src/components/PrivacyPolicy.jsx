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
        <p className="privacy-paragraph">
          Geekskul may use cookies in the future to enhance user experience and
          session management. Any updates on cookie usage will be clearly
          communicated in this policy. Current analytics are handled via Google
          Analytics and do not include personally identifiable information.
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
