import React from "react";
import Footer from "../Layout/Component/Footer";
import HomeCards from "../Layout/Component/HomeCards";
import HomeCarouselLoggedIn from "../Layout/Component/HomeCarouselLoggedIn";
import NavBar from "../Layout/Component/NavBar";
import HomeCarousel from "../Layout/Component/HomeCarousel";
import NavBarLogout from "../Layout/Component/NavBarLogout";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {sessionStorage.getItem('currentUser')==null?<><NavBar /><HomeCarousel/></>:<><NavBarLogout/><HomeCarouselLoggedIn/></>}
                
                <HomeCards/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;