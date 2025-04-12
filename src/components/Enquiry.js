import React from "react";
// import "/enquiry.css"
import "./Form.css"; 

function Enquiry() {


  return (
    <>
      <div className="container">
        <h2 className="d-flex justify-content-center">
          Driving Property Inquiries
        </h2>
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-5">
            Driving Property Inquiries to Conversions
          </h2>

          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6 mb-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="one.png"
                    alt="Call-to-Action Optimization"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-bold">Call-to-Action Optimization</h5>
                <p>
                  Our carefully crafted CTAs guide potential buyers through the
                  property journey, enhancing engagement and conversion rates.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6 mb-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="second.png"
                    alt="Landing Page Efficiency"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-bold">Landing Page Efficiency</h5>
                <p>
                  Tailored landing pages are designed for maximum property lead
                  conversion. They provide seamless user experiences and clear
                  pathways for inquiry submission.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Column 3 */}
            <div className="col-md-6 mb-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="third.png"
                    alt="Social Proof Utilization"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-bold">Social Proof Utilization</h5>
                <p>
                  Leverage the power of testimonials and success stories from
                  satisfied buyers to build trust and credibility, encouraging
                  hesitant prospects to take action.
                </p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-md-6 mb-4">
              <div className="h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="four.png"
                    alt="Mobile-Friendly Experience"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-bold">Mobile-Friendly Experience</h5>
                <p>
                  With a responsive design approach, our strategies ensure a
                  seamless browsing experience across all devices. This
                  responsiveness enhances engagement and conversions by
                  accommodating the preferences of on-the-go property seekers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="five.png"
                    alt="Call-to-Action Optimization"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Effective CTAs</h5>
                  <p className="card-text">
                    See how our strategic CTAs drove a significant increase in
                    property inquiries and accelerated sales for a real estate
                    agency.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="six.png"
                    alt="Landing Page Efficiency"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Conversion-Optimized Landing Pages
                  </h5>
                  <p className="card-text">
                    Explore a case study where our landing page optimization
                    increased property lead conversion rates by 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Column 3 */}
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="seveen.png"
                    alt="Landing Page Efficiency"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Trust Building with Social Proof
                  </h5>
                  <p className="card-text">
                    Discover how leveraging client testimonials boosted buyer
                    confidence, leading to higher conversion rates for a
                    property development project.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <div className="d-flex justify-content-center mb-3">
                  <img
                    src="eight.png"
                    alt="Landing Page Efficiency"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Mobile-First Success</h5>
                  <p className="card-text">
                    Learn how our mobile-responsive design approach resulted in
                    a 25% increase in inquiries from mobile users for a real
                    estate agency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="peace-section d-flex flex-column align-items-center justify-content-center text-center py-5">
            <div className="container">
              <h4 className="fw-bold mb-3">Your Peace of Mind</h4>
              <p className="text-muted mb-4">
                Through our conversion-focused strategies, we ensure that
                property seekers are not just visitors, but engaged prospects
                ready to make their next move in the real estate market
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Get started
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Enquiry;
