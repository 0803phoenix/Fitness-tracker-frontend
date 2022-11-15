import React from "react";
import Footer from "../Layout/Component/Footer";
import HeroImage from "../Layout/Component/HeroImage";
import DietCards from './../Diet/Component/DietCards';
import NavBarLogout from "../Layout/Component/NavBarLogout";
import { useNavigate } from "react-router-dom";
import ErrorLanding from "./ErrorLanding";


function Diet() {
  const navigate = useNavigate();
  return (
    <>  
    {sessionStorage.getItem('currentUser') == null ? <ErrorLanding message="You are not logged in"/> :
    <> 
      <NavBarLogout /> 
        <HeroImage
          src="https://source.unsplash.com/1400x500/?meal"
          title="Keep Track of Your Diets"
          text=""
        />
        <div
          onClick={() => navigate("/reccommendation")}
          className="card p-5">
          <h1 className="display-4">Get Diet Recommendations!</h1>
          <div className="card-body">
            <p className="lead text-justify"></p>
            Fitness Tracker creates personalized meal plans based on your body type can see food preferences,
              and schedule. Reach your diet and nutritional goals with our
              calorie calculator, weekly meal plans and more.
          </div>
        </div>
        <DietCards />
        <Footer />
      </>}  
    </>
  );
}

export default Diet;
