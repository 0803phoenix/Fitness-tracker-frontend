import React from "react";
import Footer from "../Layout/Component/Footer";
import NavBar from "../Layout/Component/NavBar";
import HeroImage from "../Layout/Component/HeroImage";
import ActivityCards from './../Activity/Component/ActivityCards';


function Diet() {
  return (
    <>
      <NavBar />
      <HeroImage
        src="https://source.unsplash.com/1400x500/?running"
        title="Keep Track of Your Physical Activities"
        text=""
      />
      <div className="card p-5">
        <h1 className="display-4">Get your dream physique!</h1>
        <div className="card-body"></div>
      </div>
      <ActivityCards />
      <Footer />
    </>
  );
}

export default Diet;
