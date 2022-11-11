import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Authentication/Component/Login";
import Logout from "./Authentication/Component/Logout";
import CustomerList from "./Customer/Component/CustomerList";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HomeLoggedIn from "./Pages/HomeLoggedIn";
import Register from "./Authentication/Component/Register";
import CustomerDetails from "./Customer/Component/CustomerDetails";
import Diet from "./Pages/Diet";
import Activity from "./Pages/Activity";
import AddCardio from "./Activity/Component/AddCardio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/customerDetails" element={<CustomerDetails />} />
          <Route path="/homeLoggedIn" element={<HomeLoggedIn />} />
          <Route path="/activity" element={<Activity />} />

          <Route path="/addCardio" element={<AddCardio />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
