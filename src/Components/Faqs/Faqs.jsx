import React, { useState } from "react";
import "./Faqs.css";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null); // State to track open FAQ

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle the clicked FAQ
  };

  const faqData = [
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach out to us via our WhatsApp channel or email us at support@yourcompany.com.",
    },
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. The item must be in its original condition and packaging.",
    },
    // {
    //   question: "Do you offer international shipping?",
    //   answer:
    //     "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.",
    // },
    // {
    //   question: "How do I track my order?",
    //   answer:
    //     "Once your order is shipped, you will receive an email with a tracking number. Use this number to track your order on our website.",
    // },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash on delivery and mobile money payments.",
    },
    {
      question: "Can I update or cancel my order?",
      answer:
        "Yes, you can update or cancel your order within 24 hours of placing it by contacting our support team.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take your privacy seriously. Your information is protected by advanced encryption and secure servers.",
    },
    // {
    //   question: "How do I subscribe to your newsletter?",
    //   answer:
    //     "Scroll to the footer of the page and enter your email address in the subscription box to join our mailing list.",
    // },
  ];

  return (
    <div className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="faq-toggle">
                {openFaq === index ? "-" : "+"}
              </span>
            </button>
            {openFaq === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
