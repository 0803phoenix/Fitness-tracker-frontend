import React from "react";
import Footer from "../Layout/Component/Footer";
import HomeCards from "../Layout/Component/HomeCards";
import NavBar from "../Layout/Component/NavBar";




class Home extends React.Component {
    render() {
        return (
            <React.Fragment className="container-fluid">
                <NavBar/>
                <HomeCards/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;