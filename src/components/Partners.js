import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TestimonialCarousel.css";

function Partners() {
  const testimonials = [
    {
      name: "Tabish Khan",
      videoThumbnail:
        "https://via.placeholder.com/300x300.png?text=Video+Thumbnail",
      profilePic: "https://via.placeholder.com/50",
      text: "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.",
    },
    {
      name: "Priya Sharma",
      videoThumbnail: "https://via.placeholder.com/300x300.png?text=Video+2",
      profilePic: "https://via.placeholder.com/50",
      text: "The results we achieved with Osumare's campaigns were amazing. Real pharma growth!",
    },
    {
      name: "Amit Desai",
      videoThumbnail: "https://via.placeholder.com/300x300.png?text=Video+3",
      profilePic: "https://via.placeholder.com/50",
      text: "We loved the personalized strategies and timely execution by Osumare. Highly recommended!",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container py-5">
           {" "}
      <div className="text-center mb-4">
                <h4 className="fw-bold">What Our Pharma Partners Say</h4>       {" "}
        <p className="text-muted">
          Driving Transformations, One Brand at a Time
        </p>
             {" "}
      </div>
           {" "}
      <div className="position-relative testimonial-carousel-wrapper">
       
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          interval={null}
        >
         
          {testimonials.map((item, idx) => (
            <Carousel.Item key={idx}>
             
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center bg-white p-4 shadow rounded-4">
                
                <div className="video-thumbnail me-md-4 mb-3 mb-md-0 position-relative">
                
                  <img
                    src="crausel-img.png"
                    className="img-fluid rounded-4"
                    alt="Video thumbnail"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                
                  <button
                    className="btn position-absolute top-50 start-50 translate-middle p-0 border-0"
                    style={{ background: "none" }}
                  >
                 
                    <i
                      className="bi bi-play-circle-fill text-white"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  
                  </button>
                 
                </div>
                
                <div className="testimonial-text text-center text-md-start">
                
                  <div className="d-flex align-items-center mb-2 justify-content-center justify-content-md-start">
                   
                    <img
                      src="crausel-img.png"
                      alt="Profile"
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                 
                    <strong className="text-dark">{item.name}</strong> 
                  
                    <i
                      className="bi bi-quote text-primary ms-2"
                      style={{ fontSize: "1.8rem" }}
                    ></i>
                  
                  </div>
                  <p className="mb-0">{item.text}</p>
                 
                </div>
              
              </div>
            
            </Carousel.Item>
          ))}
         
        </Carousel>
       
        <button
          className="carousel-control-prev custom-control"
          onClick={handlePrev}
        >
         <span className="carousel-control-prev-icon" />
        </button>
       
        <button
          className="carousel-control-next custom-control"
          onClick={handleNext}
        >
           <span className="carousel-control-next-icon" />
        </button>
      
      </div>
    
    </div>
  );
}

export default Partners;
