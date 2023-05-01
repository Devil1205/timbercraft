import React from 'react'
import {
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg stickyNav primary-font" data-bs-theme="dark">
  <div className="container-fluid custom-Fluid">
    <Link className="navbar-brand custom-Brand primary-font"  to="/" style={{textShadow: "3px 3px 2px black"}}>Timber</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item hoverNavbar">
          <Link className="nav-link custom-Link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item hoverNavbar">
          <Link className="nav-link custom-Link" to="/about">About</Link>
        </li>
        <li className="nav-item hoverNavbar">
          <Link className="nav-link custom-Link" to="/services">Services</Link>
        </li>
        <li className="nav-item hoverNavbar">
          <Link className="nav-link custom-Link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar