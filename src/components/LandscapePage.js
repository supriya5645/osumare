import React from "react";
import { FaBolt, FaBullseye, FaShieldAlt, FaCamera } from "react-icons/fa";
import "./LandscapePage.css";

const features = [
  {
    icon: <FaBolt />,
    title: "Market Trends Analysis",
    desc: "Predictive insights to guide real estate strategies.",
  },
  {
    icon: <FaBullseye />,
    title: "Targeted Buyer Persona",
    desc: "Understand and connect with your ideal property buyers.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Competitor Insights",
    desc: "Stand out in the property market with informed strategies.",
  },
  {
    icon: <FaCamera />,
    title: "Visual Content Appeal",
    desc: "Captivate buyers with appealing visuals and immersive experiences.",
  },
];

function LandscapePage() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-2">
        Navigating Real Estate's Digital Landscape
      </h2>
      <p className="text-center text-muted mb-5">
        Insights for Real Estate Marketing Advantage
      </p>

      <div className="row align-items-center">
        {/* Left Side - Cards */}
        <div className="col-md-6">
          {features.map((item, index) => (
            <div
              className="feature-card d-flex align-items-start mb-4"
              key={index}
            >
              <div className="icon-wrapper me-3">{item.icon}</div>
              <div>
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
          <img
            src="landscape.png"
            alt="We Are Expert"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LandscapePage;
