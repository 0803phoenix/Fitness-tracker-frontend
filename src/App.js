import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Authentication/Component/Login';
import Logout from './Authentication/Component/Logout';
import CustomerList from './Customer/Component/CustomerList';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Diet from './Pages/Diet';
import Register from './Authentication/Component/Register';
import CustomerDetails from './Customer/Component/CustomerDetails';
import AddCardio from "./Activity/Component/AddCardio";
import Activity from "./Pages/Activity";
import AdminDashboard from './Admin/Components/AdminDashboard';
import AdminLogin from './Authentication/Component/AdminLogin';
import UploadFiles from "./Admin/Components/UploadFiles"
import DietReccommendation from './Diet/Component/DietReccommendations';
import ReportCard from './Report/Component/ReportCard';
//import { useState } from 'react';
import UserProfile from './UserProfile/Component/UserProfile';
import ErrorLanding from './Pages/ErrorLanding';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorLanding message="Page Not Found"/>}/>
          <Route path="/activity" element={<Activity />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/reccommendation" element={<DietReccommendation />} />
          <Route path="/report" element={<ReportCard/>} />
          <Route path="/userProfile" element ={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
