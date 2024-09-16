import React from "react";
import "./terms.css";

const terms = () => {
  return (
    <div class="terms-container">
      <table className="terms-table">
        <tr>
          <td>
            <h1>Terms and Conditions</h1>
          </td>
        </tr>
      </table>

      <section className="terms-section">
        <p class="custom-paragraph">
          Welcome to EnviroMine! By accessing or using{" "}
          <a href="https://enviromine.netlify.app" className="terms-a">
            https://enviromine.netlify.app
          </a>
          , you agree to comply with and be bound by the following terms and
          conditions.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p class="custom-paragraph">
          By using this website, you agree to these Terms and Conditions. If you
          do not agree with any part of these terms, please discontinue use of
          the site.
        </p>

        <h2>2. Use of the Website</h2>
        <p class="custom-paragraph">
          EnviroMine provides tools and resources related to carbon emission
          monitoring and reduction strategies. You agree to use the website only
          for lawful purposes and in accordance with these terms.
        </p>

        <h2>3. Intellectual Property</h2>
        <p class="custom-paragraph">
          All content on the EnviroMine website, including text, graphics,
          logos, and software, is the intellectual property of EnviroMine unless
          otherwise stated. You may not copy, reproduce, or distribute any
          content without explicit permission.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p class="custom-paragraph">
          EnviroMine is not liable for any damages arising from your use of the
          website, including but not limited to data loss, system failures, or
          unauthorized access. The website and its content are provided "as is"
          without any warranties of any kind.
        </p>

        <h2>5. External Links</h2>
        <p class="custom-paragraph">
          Our website may include links to third-party websites. EnviroMine is
          not responsible for the content or accuracy of these external sites,
          and the inclusion of such links does not imply endorsement.
        </p>

        <h2>6. Changes to the Terms</h2>
        <p class="custom-paragraph">
          EnviroMine reserves the right to update or modify these Terms and
          Conditions at any time without prior notice. Any changes will be
          posted on this page with the updated effective date.
        </p>

        <h2>7. Contact Us</h2>
        <p class="custom-paragraph">
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <a href="mailto:enviromine@gmail.com">enviromine@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default terms;
