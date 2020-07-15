import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";


const Navstyle = {
    color: 'white',
}


function Navbar() {

    return (
        <div className="navbar">
            <Link style={Navstyle} to='/'><h3>Home</h3></Link>
            <Link style={Navstyle} to='/Data'><h3>Favorite Cities</h3></Link>
        </div>
    );
}

export default Navbar;
