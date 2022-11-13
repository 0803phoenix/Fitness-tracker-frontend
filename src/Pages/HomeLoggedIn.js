import React from "react";
import NavBarLogout from "./../Layout/Component/NavBarLogout";
// import HomeCarousel from './../Layout/Component/HomeCarousel';
import HomeCards from "./../Layout/Component/HomeCards";
import Footer from "./../Layout/Component/Footer";
import HomeCarouselLoggedIn from "./../Layout/Component/HomeCarouselLoggedIn";

function HomeLoggedIn() {
  return (
    <React.Fragment >
      <NavBarLogout />
      <HomeCarouselLoggedIn />
      <HomeCards />
      <Footer />
    </React.Fragment>
  );
}

export default HomeLoggedIn;
