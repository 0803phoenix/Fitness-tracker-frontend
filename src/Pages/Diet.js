import React from "react";

import Footer from "../Layout/Component/Footer";
import HeroImage from "../Layout/Component/HeroImage";
import NavBar from "../Layout/Component/NavBar";
import DietCards from './../Diet/Component/DietCards';


function Diet() {
  return (
    <>
      <NavBar />
      <HeroImage
        src="https://source.unsplash.com/1400x500/?meal"
        title="Keep Track of Your Diets"
        text=""
      />
      <div className="card p-5">
        <h1 className="display-4">Get Diet Recommendations!</h1>
        <div className="card-body">
          <p className="lead text-justify"></p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <DietCards />
      <Footer />
    </>
  );
}

export default Diet;
