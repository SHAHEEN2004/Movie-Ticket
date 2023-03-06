import './Navbar.css'
import SignUp from './LogIn/SignUp'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    function nav(){
        navigate("/SignUp")
    }
    function details(){
        navigate("/movie/1")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">

            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src='http://pixner.net/boleto/demo/assets/images/logo/logo.png'></img>
                </a>
                <a className="navbar-brand" href="http://pixner.net/boleto/demo/assets/images/logo/logo.png"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                         <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Home One</a></li>
                                <li><a className="dropdown-item" href="#">Home Two</a></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movie
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Movie Grid</a></li>
                                <li><a className="dropdown-item" href="#">Movie List</a></li>
                                <li><a className="dropdown-item" onClick={details}>Movie Details</a></li>
    
                                <li><a className="dropdown-item" href="#">Movie Details 2</a></li>
                                <li><a className="dropdown-item" href="#">Movie Ticket Plan</a></li>
                                <li><a className="dropdown-item" href="#">Movie Seat Plan</a></li>
                                <li><a className="dropdown-item" href="#">Movie Checkout</a></li>
                                <li><a className="dropdown-item" href="#">Movie Food</a></li>
                               
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Contact</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                  <a className="btn btn-primary float-end" onClick={nav}>Join Us</a>
                </div>
            </div>
        </nav>
    )
}

