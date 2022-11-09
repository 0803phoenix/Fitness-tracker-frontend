import React from "react";
import Footer from "../Layout/Component/Footer";
import HomeCarousel from "../Layout/Component/HomeCarousel";


// import AddStudent from "../../student/component/AddStudent";
// import DeleteStudent from "../../student/component/DeleteStudent";
// import UpdateStudent from "../../student/component/UpdateStudent";
// import ViewStudent from "../../student/component/ViewStudent";

import NavBar from "../Layout/Component/NavBar";
// import AuthHeader from "../../Authentication/Service/AuthHeader";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment className="container-fluid">
                <NavBar/>
                <HomeCarousel/>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;