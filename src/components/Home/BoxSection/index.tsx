import {
  faChartPie,
  faCog,
  faGlobe,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const BoxSection = () => {
  return (
    <section className="boxes">
      <div className="box">
        <FontAwesomeIcon icon={faChartPie} className="fa-4x" />
        <h3>Analytics</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faGlobe} className="fa-4x" />
        <h3>Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faCog} className="fa-4x" />
        <h3>Development</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faUsers} className="fa-4x" />
        <h3>Support</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          inventore?
        </p>
      </div>
    </section>
  );
};

export default BoxSection;
