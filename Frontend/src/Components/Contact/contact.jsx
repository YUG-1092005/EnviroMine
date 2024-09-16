import React, { useEffect } from 'react';
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      confirmationMessage.style.display = 'block';

      form.reset();
    });

    return () => {
      form.removeEventListener('submit', () => {});
    };
  }, []);

  return (
    <div className="contact-container">
      <table className='contact-table'>
        <tbody>
          <tr>
            <td>
              <h1>Contact Us</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <section className='contact-section'>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="custom-paragraph">
          If you have any questions or need further information, please feel free to reach out to us using the contact information provided below or by filling out the contact form. We are here to assist you!
        </p>

        <p className="custom-paragraph">
          Email: <a href="mailto:enviromine@gmail.com">enviromine@gmail.com</a>
        </p>

        <h2>Contact Form</h2>
        <form className="contact-form" id="contact-form">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subject" required>
            <option value="">Select a subject</option>
            <option value="information">Information</option>
            <option value="calculation">Calculation</option>
            <option value="website">Website</option>
            <option value="issue">Issue</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="confirmation-message" id="confirmation-message" style={{ display: 'none' }}>
          Your form has been submitted. Thank you for contacting us!
        </div>
      </section>
    </div>
  );
};

export default Contact;
