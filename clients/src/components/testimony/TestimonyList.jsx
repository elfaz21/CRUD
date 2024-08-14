import React from "react";
import Testimony from "./Testimony";
import "./Testimony.css";

const testimonies = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, tristique senectus.",
    imgSrc:
      "https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?w=145&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Jane Smith",
    text: "Pellentesque habitant morbi tristique senectus et",
    imgSrc:
      "https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Alice Johnson",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat",
    imgSrc:
      "https://th.bing.com/th/id/OIP.tZ98LGTSsnsCvhdGp6Ll3wHaE8?w=279&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const TestimonyList = () => {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="testimony-container">
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            name={testimony.name}
            text={testimony.text}
            imgSrc={testimony.imgSrc}
          />
        ))}
      </div>
    </>
  );
};

export default TestimonyList;
