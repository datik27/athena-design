import React from "react";
import logoFooter from "../../../images/logo.png";
import facebook from "../../../images/facebook-logo-in-circular-shape@2x.png";
import linkedIn from "../../../images/linkedin (2)@2x.png";
import twiter from "../../../images/twitter (4)@2x.png";
import dribbble from "../../../images/dribbble (1)@2x.png";
import behance from "../../../images/behance.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#FAFFFD"}} className="mt-5 pt-5 footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 text-center text-sm-left footerLogo">
            <img style={{ width: "130px" }} src={logoFooter} alt="" />
            <div className="socialIcon py-4">
              <ul className="d-flex w-100 justify-content-center justify-content-sm-start">
                <li>
                  <img className="img-fluid" src={facebook} alt="Facebook" />
                </li>
                <li>
                  <img className="img-fluid" src={twiter} alt="Twiter" />
                </li>
                <li>
                  <img className="img-fluid" src={linkedIn} alt="LinkedIn" />
                </li>
                <li>
                  <img className="img-fluid" src={dribbble} alt="Dribbble" />
                </li>
                <li>
                  <img className="img-fluid" src={behance} alt="Behance" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footerUL">
              <ul className="text-center text-md-left">
                <li>
                  <Link to='/'>Features</Link>
                </li>
                <li>
                  <Link to='/'>Enterprise</Link>
                </li>
                <li>
                  <Link to='/'>Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footerUL">
              <ul className="text-center text-md-left">
                <li>
                  <Link to='/'>Blog</Link>
                </li>
                <li>
                  <Link to='/'>Help Center</Link>
                </li>
                <li>
                  <Link to='/'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/'>Status</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footerUL">
              <ul className="text-center text-md-left">
                <li>
                  <Link to='/'>About Us</Link>
                </li>
                <li>
                  <Link to='/'>Terms of Service</Link>
                </li>
                <li>
                  <Link to='/'> Security</Link>
                </li>
                <li>
                  <Link to='/'>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
