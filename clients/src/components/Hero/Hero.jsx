import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          'url("https://th.bing.com/th/id/OIP.eU5TGBtLbmW0jUJ7DrhSRgHaEO?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Our Shop</h1>
        <p>Discover the latest products and trends</p>
        <Link to="/products" className="btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
