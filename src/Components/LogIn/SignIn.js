import "./SignIn.css";
import { useNavigate } from "react-router-dom"
import NavbarIn from "./NavbarIn";
export function SignIn() {
    const navigate = useNavigate();
    function up() {
        navigate("/SignUp")
    }
    return (
        <div>
            <NavbarIn />
            <div className="signupContainer">
                <div className="signupForm">
                    <h2 className="welcomeText">HELLO</h2>
                    <h2 className="welcomeSubText">WELCOME BACK</h2>
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
                    <div className="btn-wrapper">
                        <button className="btn btn-primary mb-3">
                            LOGIN
                        </button>
                    </div>
                    <span className="loginText" htmlFor="">
                        Don't have an account? &nbsp;&nbsp;
                        <a className="loginLink" onClick={up}>
                            Sign up now</a>
                    </span>
                </div>
            </div>
        </div>
    );
}