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
import AcitvityMain from "./Activity/Component/ActivityMain";
import GetActivity from "./Activity/Component/GetActivity";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/customerDetails" element={<CustomerDetails />} />
          <Route path="/homeLoggedIn" element={<HomeLoggedIn />} />
          <Route path="/mainActivity" element={<AcitvityMain />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/customerList" element={<CustomerList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
