import React from "react";
import Footer from "../Layout/Component/Footer";
import HeroImage from "../Layout/Component/HeroImage";
import ActivityCards from "../Activity/Component/ActivityCards";
import NavBarLogout from "../Layout/Component/NavBarLogout";
import ErrorLanding from "./ErrorLanding";



function Diet() {
  return (
    <>
      {sessionStorage.getItem('currentUser') == null ? <ErrorLanding message="You are not logged in"/> : 
      <>
      <NavBarLogout />
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
     }
    </>
  );
}

export default Diet;
