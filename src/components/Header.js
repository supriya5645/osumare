import React from "react";
import "./home.css"

function Header() {
  return (
    <div className="container py-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img src="logo.png" alt="Logo" height="50" />

        {/* Contact Us Button */}
        <button className="bg-blue-500 text-dark px-4 py-1 hover:bg-blue-500 hover:text-white hover:shadow-none button-contact">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Header;
