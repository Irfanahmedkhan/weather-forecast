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
            <Link style={Navstyle} to='/Fav'><h3>Favorite</h3></Link>
        </div>
    );
}

export default Navbar;
