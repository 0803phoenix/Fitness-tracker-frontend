import { useState } from "react";
import { useNavigate } from "react-router";
import UserService from './../Service/UserService';
import JwtRequest from './../Model/AppUser';
// import Header from './../../Layout/Component/Header';
import Navbar from "../../Layout/Component/NavBar";

function Login() {
    const [user, setUser] = useState({ login: new JwtRequest() });
    const navigate = useNavigate();
    let service = new UserService();
    return (
        <div>
            <Navbar/>
            <h1>Login Page</h1>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        placeholder="Enter User Name"
                        value={user.login.username}
                        onChange={(e) =>
                            setUser({ login: { ...user.login, username: e.target.value } })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        value={user.login.password}
                        onChange={(e) =>
                            setUser({ login: { ...user.login, password: e.target.value } })
                        }
                    />
                </div>
                <div>
                    <button
                        className="btn btn-outline-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            service
                                .login(user.login)
                                .then((result) => {
                                    alert(JSON.stringify(result));
                                    sessionStorage.setItem('currentUser',JSON.stringify(result));
                                    sessionStorage.setItem("username", user.login.username);
                                    navigate("/home");
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
            </form>
        </div>
    );
}
export default Login;
