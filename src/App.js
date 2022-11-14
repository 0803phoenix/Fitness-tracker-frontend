import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Component/Login';
import Logout from './Authentication/Component/Logout';
// import CustomerList from './Customer/Component/CustomerList';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Diet from './Pages/Diet';
import Register from './Authentication/Component/Register';
import CustomerDetails from './Customer/Component/CustomerDetails';
// import AddCardio from "./Activity/Component/AddCardio";
import Activity from "./Pages/Activity";
import AdminDashboard from './Admin/Components/AdminDashboard';
import AdminLogin from './Authentication/Component/AdminLogin';
import UploadFiles from "./Admin/Components/UploadFiles"
import DietReccommendation from './Diet/Component/DietReccommendations';
import ReportCard from './Report/Component/ReportCard';
//import { useState } from 'react';
import UserProfile from './UserProfile/Component/UserProfile';



function App() {
  // const [isAuthenticated, userHasAuthenticated] = useState(false);

  // useEffect(() => {
  //   onLoad();
  // }, []);

  // function onLoad() {
  //   sessionStorage.getItem('currentUser')==null?userHasAuthenticated(false):userHasAuthenticated(true);
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <UnauthenticatedRoute
          path="/login"
          component={Login}
          appProps={{ isAuthenticated }}
        /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customerDetails" element={<CustomerDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/userProfile" element ={<UserProfile/>} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/report" element={<ReportCard/>} />
          <Route path="/reccommendation" element={<DietReccommendation />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/uploadFile" element={<UploadFiles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
