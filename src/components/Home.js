import React from "react";

function Home() {
  return React.createElement(
    "div",
    {
      className:
        "container d-flex flex-column justify-content-center align-items-center py-5 text-center",
    },
    [
      React.createElement(
        "h1",
        { className: "fw-medium fs-3", key: "title1" },
        React.createElement("span", {}, [
          "Elevate ",
          React.createElement(
            "span",
            { className: "text-primary fw-bold" },
            "Real Estate Success"
          ),
          " with",
        ])
      ),
      React.createElement(
        "h2",
        { className: "fw-semibold fs-4 mt-2", key: "title2" },
        "Osumare's Digital Expertise"
      ),
      React.createElement(
        "p",
        { className: "text-muted mt-3 mb-4", key: "desc" },
        "Tailored Solutions for Thriving in the Digital Real Estate Landscape"
      ),
      React.createElement(
        "a",
        {
          href: "#",
          className: "btn btn-primary rounded-pill px-4 py-2",
          key: "button",
        },
        "Get started"
      ),
      React.createElement(
        "div",
        { className: "mt-5", key: "image" },
        React.createElement("img", {
          src: "Home-img.png",
          alt: "Real Estate Hero",
          className: "img-fluid",
        })
      ),
    ]
  );
}

export default Home;
