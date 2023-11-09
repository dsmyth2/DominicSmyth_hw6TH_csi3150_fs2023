import React from "react";
import "./hero.css";
import backgroundImage from "../../Assets/HeroSection-bg-image.jpg";

const Hero = () => {
  return (
    <div className="hero px-4 py-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Travel Blog</h1>
      <div className="w-75 d-inline-flex">
        <h2 className="my-4 px-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quia
          placeat quam voluptatum nisi architecto recusandae. Sint eveniet eum
          numquam delectus ipsa incidunt, ex beatae minus aperiam? Sunt,
          perspiciatis eius.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
