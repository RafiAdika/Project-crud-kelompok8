import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rPkZeFgxsKFpF1zzMALhX0o75Zn61gu25lBnPVLyPNI4WzA6giWD5nm673djkreslJ8&usqp=CAU" width="112" height="28" alt="logo" />
 
                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Home
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 
export default Navbar