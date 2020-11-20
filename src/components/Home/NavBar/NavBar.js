import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import manuIcon from "../../../images/menuIcon.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <div>
            <img src={logo} alt="" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img src={manuIcon} alt="" />
          </span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ourTeam">
                Our Team
              </Link>
            </li>
            <li className="nav-item contactBtn">
              <button className="btn" to="/contactUs">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
