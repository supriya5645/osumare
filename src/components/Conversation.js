import React from "react";

function Conversation() {
  return (
    <>
      <div className="container py-5">
        {/* Title and Subtitle */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Driving Property Inquiries to Conversions</h2>
          <p className="text-muted fs-5">
            Streamlined Strategies for Real Estate Success
          </p>
        </div>

        {/* Image + Content Section */}
        <div className="row align-items-center g-4">
          {/* Left Side - Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="optimized.png"
              alt="Property Search"
              className="img-fluid"
              style={{ maxHeight: "250px" }}
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h4 className="fw-bold mb-3">
              Optimized Path to Property Purchase
            </h4>
            <p className="mb-4">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <a href="#" className="btn btn-primary rounded-pill px-4 py-2">
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
