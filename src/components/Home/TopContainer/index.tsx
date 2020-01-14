import React from "react";

const TopContainer = () => {
  return (
    <section className="top-container">
      <header className="showcase">
        <h1>I Hope This Looks Good</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          soluta fuga, accusantium veniam ullam autem.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </header>
      <div className="top-box top-box-a">
        <h4>Super Stuff</h4>
        <p className="price">$100</p>
        <a href="#" className="btn">
          Buy
        </a>
      </div>
      <div className="top-box top-box-b">
        <h4>Super Duper Stuff</h4>
        <p className="price">$9000</p>
        <a href="#" className="btn">
          Give Me
        </a>
      </div>
    </section>
  );
};

export default TopContainer;
