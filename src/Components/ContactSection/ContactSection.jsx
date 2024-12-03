import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      {/* <header className="contact-header">
        <h1>We’re Here to Help!</h1>
        <p>Get in touch with us for support, inquiries, or just to say hello!</p>
      </header> */}

      {/* WhatsApp Contact Section */}
      {/* <section className="whatsapp-section">
        <h2>Contact Us on WhatsApp</h2>
        <p>Click the button below to chat with us directly:</p>
        <button
          className="whatsapp-button"
          onClick={() => window.open('https://wa.me/YOUR_PHONE_NUMBER?text=Hello, I need assistance.', '_blank')}
        >
          Chat on WhatsApp
        </button>
      </section> */}

      {/* Alternative Contact Methods Section */}
      {/* <section className="alternative-contact">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: <a href="mailto:support@yourbusiness.com">support@yourbusiness.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        <p>Follow us on social media:</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section> */}

      {/* FAQs Section */}
      {/* <section className="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li><strong>What is your return policy?</strong> You can return products within 30 days of purchase.</li>
          <li><strong>Do you offer international shipping?</strong> Yes, we ship worldwide!</li>
          <li><strong>How can I track my order?</strong> Use the tracking link provided in your email after purchase.</li>
        </ul>
      </section> */}

      {/* Location/Map Section */}
      <section className="location-section">
        <h2>Our Location</h2>
        <p>123 Business Street, City, Country</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95373531531696!3d-37.816279379751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776d3df2b4b6c6!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1614061927455!5m2!1sen!2sau"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>

      {/* Operating Hours Section */}
      <section className="hours-section">
        <h2>Operating Hours</h2>
        <p>Monday to Friday: 9 AM - 5 PM</p>
        <p>Saturday: 9 AM - 5PM</p>
        <p>Sunday: Closed</p>
      </section>

    </div>
  );
};

export default ContactSection;
