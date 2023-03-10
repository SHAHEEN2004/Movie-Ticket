import './Navbar.css'
import SignUp from './LogIn/SignUp'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    function nav() {
        navigate("/SignUp")
    }
    function details() {
        navigate("/movie/1")
    }
    function Home() {
        navigate("/")
    }
    function Seats() {
        navigate("/Seats")
    }
    return (
        <div className="centre">

            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img onClick={Home} src='http://pixner.net/boleto/demo/assets/images/logo/logo.png'></img>
                    </a>
                    <a className="navbar-brand" href="http://pixner.net/boleto/demo/assets/images/logo/logo.png"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link " onClick={Home} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home &nbsp;
                                </a>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " onClick={details} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movie-Details &nbsp;
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Ticket-Plan &nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " onClick={Seats}>Seat-Plan &nbsp;</a>
                            </li>     <li className="nav-item">
                                <a className="nav-link ">Checkout &nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Food &nbsp;</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Contact</a>
                            </li>
                        </ul>
                        <a className="btn btn-primary float-end" onClick={nav}>Join Us</a>
                    </div>
                </div>

            </nav>
        </div>
    )
}