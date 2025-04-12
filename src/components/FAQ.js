import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
    {
      question: "How does Osumare measure campaign success?",
      answer:
        "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
    },
  ];

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "800px", fontFamily: "Arial, sans-serif" }}
    >
      <h2 className="text-center mb-3 fw-bold">Frequently Asked Questions</h2>
      <p className="text-center text-muted mb-4">
        Pinpoint your audience with precision, ensuring your marketing efforts
        reach those most likely to engage with your brand.
      </p>

      {faqItems.map((item, index) => (
        <div key={index} className="mb-2 border rounded shadow-sm">
          <button
            className={`w-100 text-start px-3 py-3 border-0 d-flex justify-content-between align-items-center ${
              activeIndex === index ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={() => toggleIndex(index)}
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              outline: "none",
            }}
          >
            {`${index + 1}. ${item.question}`}
            <i
              className={`bi ${
                activeIndex === index ? "bi-chevron-up" : "bi-chevron-down"
              } fs-5`}
            ></i>
          </button>

          {activeIndex === index && (
            <div className="px-3 pb-3 text-muted">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
