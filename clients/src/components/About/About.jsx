import React from "react";
import "./About.css";

const AboutSection = () => {
  return (
    <>
      <h2>Our Shop</h2>
      <div className="about-section">
        <div className="product-image">
          <img
            src="https://th.bing.com/th/id/OIP.k0WHHEpWBf3BYBudT9OvwQHaE7?w=509&h=339&rs=1&pid=ImgDetMain"
            alt="Product"
          />
        </div>
        <div className="shop-info">
          <p>
            We offer a wide range of high-quality products to meet your needs.
          </p>
          <p>
            Explore our collection and find the perfect items for yourself or
            your loved ones.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
