import React from "react";
import "./privacy.css";

const privacy = () => {
  return (
    <div class="privacy-container">
      <table className="privacy-table">
        <tr>
          <td>
            <h1>Privacy Policy</h1>
          </td>
        </tr>
      </table>

      <section className="privacy-section">
        <p class="custom-paragraph">
          At EnviroMine, accessible from{" "}
          <a href="https://enviromine.netlify.app" className="privacy-a">
            https://enviromine.netlify.app
          </a>
          We value your privacy and are committed to protecting your personal
          information. We want to assure you that we do not collect, store, or
          share any personal data from our users. This Privacy Policy outlines
          our practices regarding data protection and security.
        </p>

        <h2>1. No Data Collection</h2>
        <p class="custom-paragraph">
          EnviroMine does not collect any personal or sensitive information from
          users. You can use our website and its features without providing any
          personal details.
        </p>

        <h2>2. No Sharing of Data</h2>
        <p class="custom-paragraph">
          Since we do not collect any personal data, we do not share any
          information with third parties for marketing, analytics, or any other
          purposes.
        </p>

        <h2>3. Data Security</h2>
        <p class="custom-paragraph">
          While we do not collect or store user data, we prioritize the security
          of our website to ensure a safe and secure browsing experience for all
          visitors. Our website is hosted on a secure platform, and we take all
          necessary precautions to protect against unauthorized access or cyber
          threats.
        </p>

        <h2>4. External Links</h2>
        <p class="custom-paragraph">
          Our website may contain links to third-party websites. Please note
          that we are not responsible for the privacy practices or the content
          of these external sites. We encourage you to review the privacy
          policies of any third-party websites you visit.
        </p>

        <h2>5. Changes to this Policy</h2>
        <p class="custom-paragraph">
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be reflected on this page with an updated effective date.
        </p>

        <h2>6. Contact Us</h2>
        <p class="custom-paragraph">
          If you have any questions or concerns about our privacy practices,
          feel free to contact us at{" "}
          <a href="mailto:enviromine@gmail.com">enviromine@gmail.com</a>{" "}
        </p>
      </section>
    </div>
  );
};

export default privacy;
