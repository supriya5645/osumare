import React from 'react'

function DigitalMistry() {
  return (
    <div>
      <div className="container my-5 py-5">
        {/* Section Heading */}
        <h3 className="text-center fw-bold mb-5">
          Real Estate-Focused Digital Mastery
        </h3>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="Home-img-two.png"
              alt="Digital Real Estate"
              className="img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">
              Unlock the Potential of Digital Real Estate Excellence
            </h4>
            <p className="text-muted mb-4">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <a
              href="#"
              className="btn btn-primary rounded-pill px-4 py-2"
              style={{ backgroundColor: "#007bff", border: "none" }}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMistry
