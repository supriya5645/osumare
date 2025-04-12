import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-wrapper d-flex flex-column align-items-center justify-content-center py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold title">
          Connect with Our Digital Marketing Experts
        </h2>
        <p className="subtitle">
          Reach Out for Tailored Strategies and Results-Driven Solutions.
        </p>
        <p className="subtitle">Let's Elevate Your Online Presence Together</p>
      </div>

      <div className="form-box shadow-lg rounded p-4">
        <form>
          <div className="row">
            <div className="col-md-6 pe-md-3">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Total No of Vehicles:"
                />
              </div>
            </div>
            <div className="col-md-6 ps-md-3">
              <div className="mb-3 h-100 d-flex flex-column">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control flex-grow-1"
                  placeholder="Enter your Message."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <button
              type="submit"
              className="btn btn-primary rounded-pill px-5 px-5 py-2 fw-semibold"
            >
              Get started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
