import React from "react";
import Footer from "../Layout/Component/Footer";
import HomeCards from "../Layout/Component/HomeCards";
import NavBar from "../Layout/Component/NavBar";
import HomeCarousel from "../Layout/Component/HomeCarousel";

// import AuthHeader from "../../Authentication/Service/AuthHeader";


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <HomeCarousel/>
                <HomeCards/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;