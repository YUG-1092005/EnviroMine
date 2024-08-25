import React from "react";
import "./Homepage.css";
import Card from "../Cards/Card";
import Whyus from "../Cards/Whyus";
import Whatwedo from "../Cards/Whatwedo";
import Testimonial from "../Testimonial/Testimonial";
import Faq from "../Faq/Faq.jsx";

const Homepage = () => {

  return (
    <div>
      <div className="text">
        <span className="typing-text">Welcome to EnviroMine</span>
        <h1 style={{ padding: "1.5rem" }}>
          Your Ultimate Guide to Sustainable Living and Environmental Awareness
        </h1>
      </div>
      <div className="getting-started">
        <button className="start-btn">
          Getting Started
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="about-btn">
          Learn More
        </button>
      </div>
      <Card />
      <Whyus />
      <Whatwedo />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Homepage;
