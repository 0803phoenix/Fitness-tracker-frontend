import React from "react";
import Footer from "../Layout/Component/Footer";
import HeroImage from "../Layout/Component/HeroImage";

import ActivityCards from "../Activity/Component/ActivityCards";
import NavBarLogout from "../Layout/Component/NavBarLogout";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
import NavBar from "../Layout/Component/NavBar";



function Diet() {
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   onLoad();
  //  }, []);

  //  function onLoad() {
  //      sessionStorage.getItem('currentUser')==null?navigate("/login"):userHasAuthenticated(true);
  //    }

  return (
    <>
      {sessionStorage.getItem('currentUser')==null?<NavBar/>:<NavBarLogout/>}
      <HeroImage
        src="https://source.unsplash.com/1400x500/?running"
        title="Keep Track of Your Physical Activities"
        text=""
      />
      <div className="card p-5">
        <h1 className="display-4">Get your dream physique!</h1>
        <div className="card-body"></div>
      </div>
      <ActivityCards/>
      <Footer />
    </>
  );
}

export default Diet;
