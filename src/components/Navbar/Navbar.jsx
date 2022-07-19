
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

import { useState } from "react";
import { useAuth } from "../../contexts/Authcontext";

const Navbar = () => {


    const { logoutHandler, token } = useAuth();
    const [appearModal, setAppearModal] = useState(false);

    return (
        <>
            <header className="header">
                <div className="nav-bar">
                    <div className="brand-logo">
                        <Link to="/"><img id='logo' src={logo} alt="brand-logo" /></Link>
                    </div>

                    <div className='logout-optn'>
                        <div className="nav-bar-icons">
                            {token && (
                                <i
                                    onClick={() => setAppearModal((prev) => !prev)}

                                    className="fas fa-user user"
                                ></i>

                            )}
                        </div>

                        {appearModal && (
                            <div
                                onClick={() => {
                                    logoutHandler();
                                    setAppearModal((prev) => !prev);
                                }}

                            >
                                <div >
                                    <p className='logout'>Logout</p>
                                </div>
                            </div>


                        )}

                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar;