import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo-box">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;