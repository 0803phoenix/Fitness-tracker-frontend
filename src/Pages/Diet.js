import React from "react";

import Footer from "../Layout/Component/Footer";
import HeroImage from "../Layout/Component/HeroImage";
import DietCards from './../Diet/Component/DietCards';
import NavBarLogout from "../Layout/Component/NavBarLogout";
import { useNavigate } from "react-router-dom";


function Diet() {
  const navigate = useNavigate();
  return (
    <>
      {sessionStorage.getItem('currentUser') == null ? navigate("/login") : <NavBarLogout />}
      <HeroImage
        src="https://source.unsplash.com/1400x500/?meal"
        title="Keep Track of Your Diets"
        text=""
      />
      <DietCards />

      <div className="card bg-dark text-white m-1"
        onClick={() => navigate("/reccommendation")}>
        <img className="card-img" src="https://source.unsplash.com/1400x300/?menu" style={{ filter: "brightness(50%)" }} alt="Card image" />
        <div className="card-img-overlay" style={
          {
            position: "absolute",
            top: "20%",
            left: "0",
            width: "100%",
          }
        }>
          <h5 className="card-title" style={{ fontSize: "40px", fontWeight: "light" }}>Get Diet reccommendations!</h5>
          <p className="lead text-justify p-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* <div
        onClick={() => navigate("/reccommendation")}
        className="card p-5">
        <h1 className="display-4">Get Diet Recommendations!</h1>
        <div className="card-body">
          <p className="lead text-justify"></p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default Diet;
