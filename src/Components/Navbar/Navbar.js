import React from "react";
import logo from  "../../logo.svg";
import "./Navbar.scss";

export default function Navbar() {
    return (
       
            <nav  className="Navbar">
                <img src={logo}  alt="City Tour" />   
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul> 
                <ul>
                    <li> <a href="/" className="nav-link">About</a>
                    </li>
                </ul> 
                <ul>
                    <li> <a href="/" className="nav-link active">Tours</a>
                    </li>
                </ul> 
            </nav>
    
    )
}
