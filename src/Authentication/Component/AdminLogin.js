import { useState } from "react";
import { useNavigate } from "react-router";
import UserService from "./../Service/UserService";
import JwtRequest from "./../Model/AppUser";
import NavBar from "./../../Layout/Component/NavBar";
import Footer from './../../Layout/Component/Footer';

function AdminLogin() {
  const [user, setUser] = useState({ login: new JwtRequest() });
  const navigate = useNavigate();
  let service = new UserService();

  return (
    <>
      <div className="container">
        <NavBar />
      </div>

      <div style={{
        backgroundImage:
          "url('https://source.unsplash.com/2400x1000/?gym, exercise')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container w-25 float-center pt-5 " >
          <h1>Login</h1>

          <form>
            <div className="form-group ">
              <label>Username</label>
              <input
                className="form-control "
                type="text"
                id="username"
                placeholder="Enter User Name"
                value={user.login.username}
                onChange={(e) =>
                  setUser({
                    login: { ...user.login, username: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control "
                type="password"
                id="password"
                placeholder="Enter Password"
                value={user.login.password}
                onChange={(e) =>
                  setUser({
                    login: { ...user.login, password: e.target.value },
                  })
                }
              />
            </div>
          </form>
          <button
            className="btn btn-secondary py-2"
            onClick={(e) => {
              e.preventDefault();
              service
                .login(user.login)
                .then((result) => {
                  sessionStorage.setItem("currentUser", JSON.stringify(result));
                  console.log(sessionStorage.getItem("currentUser"));
                  navigate("/admin");
                })
                .catch((error) => {
                  alert("Invalid Username/Password. Please try again!");
                });
            }}
          >
            Login
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default AdminLogin;