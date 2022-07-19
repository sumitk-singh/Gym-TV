
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="nav-bar">
                    <div className="brand-logo">
                        <Link to="/"><img id='logo' src={logo} alt="brand-logo" /></Link>
                    </div>
                   

                    <div className="nav-bar-icons">
                        <ul className="nav-bar-icons-list">
                            <li>
                                <Link to='/login'>Login</Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar;