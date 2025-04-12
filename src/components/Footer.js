import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterestP,
  FaYoutube,
  
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-light py-5">
      <div
        className="container rounded-4 p-5"
        style={{ backgroundColor: "#e9f2ff" }}
      >
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <h4 style={{ fontFamily: "cursive", color: "#3a3a3a" }}>
              <img
                src="footer-logo.png"
                alt="logo"
                className="img-fluid "
                style={{ height: "60px",marginTop:"-20px"}} // adjust height as needed
              />

              {/* <span>Osumare</span> */}
            </h4>
            <p className="text-muted mt-3">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
            <h6 className="fw-bold">Address</h6>
            <p className="mb-0">
              Survey No. 43, Pathare <br />
              Thube Nagar, Nagar Road, Kharadi, <br />
              Pune-14, Maharastra, India.
            </p>

            <h6 className="fw-bold mt-3">Contacts</h6>
            <p className="mb-1">
              <FaEnvelope className="me-2" />
              hello@osumare.in
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              +91 8459 8762 26
            </p>
          </div>

          {/* Menu */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Menu</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Social</h6>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaTwitter />
              </span>
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaFacebookF />
              </span>
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaYoutube />
              </span>
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaPinterestP />
              </span>
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaWhatsapp />
              </span>
              <span className="btn btn-light rounded-circle shadow-sm">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted mt-4">
        © 2023 Osumare. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
