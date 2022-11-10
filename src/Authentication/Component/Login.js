import { useState } from "react";
import { useNavigate } from "react-router";
import UserService from "./../Service/UserService";
import JwtRequest from "./../Model/AppUser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from './../../Layout/Component/NavBar';
import Footer from './../../Layout/Component/Footer';

function Login() {
  const [user, setUser] = useState({ login: new JwtRequest() });
  const navigate = useNavigate();
  let service = new UserService();

  const myStyle = {
    backgroundImage:
      "url('https://source.unsplash.com/1400x500/?gym, exercise')",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
        <NavBar/>
        <div style={myStyle}>
        <div className="container w-25 float-left " >

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
                    // alert(JSON.stringify(result));
                    sessionStorage.setItem("currentUser", JSON.stringify(result));
                    console.log(sessionStorage.getItem("currentUser"));
                    // sessionStorage.setItem("username", user.login.username);
                    navigate("/customerDetails");
                })
                .catch((error) => {
                    //alert(error.message);
                    alert("Invalid Username/Password. Please try again!");
                });
            }}
            >
            Login
          </button>
        </div>

        <footer className="container-fluid bg-secondary text-white fixed-bottom py-1">
            <div className="mt-3">
                <p className="float-right">
                    <a href="#">Back to top</a>
                </p>
                <p>
                    © 2019-2022 iCoder, Inc. · <a href="#">Privacy</a> ·{" "}
                    <a href="#">Terms</a>
                </p>
            </div>
        </footer>
        </div>
    </>
  );
}
export default Login;
