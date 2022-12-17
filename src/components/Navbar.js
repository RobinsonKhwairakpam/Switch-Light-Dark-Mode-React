import React from 'react'
import "../css/navbar.css"
import logo from "../images/react-logo.png"

function Navbar(props) {
    const {mode, toggleMode} = props
    return ( 
        <nav className = {mode ? "dark" : ""} >
            <img src = {logo} alt = "hmm" className = "react-logo" />
            <h3>Switch Light/Dark Mode</h3>
            <div className = "toggler" >
                <p className = "toggler--light">Light</p>
                <div className = "toggler--slider" onClick = {toggleMode} >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className = "toggler--dark">Dark</p>
            </div>
        </nav>
     );
}

export default Navbar;