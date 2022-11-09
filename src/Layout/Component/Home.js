import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import AddStudent from "../../student/component/AddStudent";
// import DeleteStudent from "../../student/component/DeleteStudent";
// import UpdateStudent from "../../student/component/UpdateStudent";
// import ViewStudent from "../../student/component/ViewStudent";
import CustomerList from './../../Customer/Component/CustomerList';
import Login from './../../Authentication/Component/Login';
import Logout from './../../Authentication/Component/Logout';
// import AuthHeader from "../../Authentication/Service/AuthHeader";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                Home page
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/customerList" element={<CustomerList />} />
                        {/* <Route path="/student/home" element={<ViewStudent />} />
                        <Route path="/student/add" element={<AddStudent />} />
                        <Route path="/student/delete/:studentId" element={<DeleteStudent />} />
                        <Route path="/student/update/:studentId" element={<UpdateStudent />} /> */}
                    </Routes>
                </Router>
                {/* <AuthHeader/> */}
            </div>
        );
    }
}
export default Home;