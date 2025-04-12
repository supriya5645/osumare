import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are available
import "./Service.css"; // Custom styles (defined below)

function Service() {
  const cardData = [
    {
      icon: "bi-graph-up",
      title: "Automotive SEO",
      content:
        "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      icon: "bi-bullseye",
      title: "PPC Precision",
      content:
        "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      icon: "bi-people",
      title: "Social Acceleration",
      content:
        "Engage and influence your audience across social media platforms, amplifying your brand’s presence and connection.",
    },
    {
      icon: "bi-journal-text",
      title: "Content Excellence",
      content:
        "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      icon: "bi-display",
      title: "Web Design",
      content:
        "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      icon: "bi-bar-chart",
      title: "Data-Driven Insights",
      content:
        "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      icon: "bi-diagram-3",
      title: "End-to-End Solutions",
      content:
        "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      icon: "bi-camera-video",
      title: "Video marketing",
      content:
        "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Service Offerings</h2>
        <p className="text-muted fs-5">
          Strategies that Drive Property Market Excellence
        </p>
      </div>
      <div className="row g-4">
        {cardData.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 text-center shadow-sm border-0 p-3">
              <div className="card-body">
                <div className="icon-circle mx-auto mb-3">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p className="card-text text-muted small">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <a href="#" className="btn btn-primary rounded-pill px-4">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Service;
