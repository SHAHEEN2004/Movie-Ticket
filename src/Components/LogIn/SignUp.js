import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import NavbarIn from "./NavbarIn";
export function Signup() {
    const navigate = useNavigate();
    function Sign() {
        navigate("/SignIn")
    }
    return (
        <div>
            <NavbarIn />
            <div className="signupContainer">
                <div className="signupForm">
                    <h2 className="welcomeText">WELCOME</h2>
                    <h2 className="welcomeSubText">TO BOLETO</h2>
                    <div className="mb-3 form-control-group">
                        <label className="form-label">
                            Email
                        </label>
                        <input
                            placeholder="Enter your Email"
                            type="email" name="email" className="form-control">
                        </input>
                    </div>
                    <div className="mb-3 form-control-group">
                        <label className="form-label">
                            Password
                        </label>
                        <input
                            placeholder="Password"
                            type="password" name="password" className="form-control">
                        </input>
                    </div>
                    <div className="mb-3 form-control-group">
                        <label className="form-label">
                            Confirm Password
                        </label>
                        <input
                            placeholder="Password"
                            type="password" name="confirmPassword" className="form-control">
                        </input>
                    </div>
                    <div className="btn-wrapper">
                        <button className="btn btn-primary mb-3">
                            Sign Up
                        </button>
                    </div>

                    <span className="loginText" htmlFor="">
                        Already have an account?  &nbsp;&nbsp;
                        <a className="loginLink" onClick={Sign}>
                            Login  </a>
                    </span>
                </div>
            </div>
        </div>
    );
}