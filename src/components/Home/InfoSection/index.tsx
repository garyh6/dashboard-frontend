import React from "react";
import showcase from "../../../images/showcase.jpg";

const InfoSection = () => {
  return (
    <section className="info">
      <img src={showcase} alt="" />
      <div>
        <h2>Look it's the same image!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          quia nesciunt. Natus tenetur saepe nemo fugiat et, facilis culpa nam
          repellat dolorem laudantium similique rerum perspiciatis iure minima.
          Numquam, quod.
        </p>
        <a href="#" className="btn">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
