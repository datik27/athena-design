import React from "react";
import NavBar from "../NavBar/NavBar";
import banner from "../../../images/banner.png";

const Header = () => {
  return (
    <section className="banner">
      <div className="navBg"></div>
      <div className="bgRight"></div>
      <div className="bgDot">
        <div className=" bgText">
          <div className="topDot">
            <div className="bottomDot">
              <div className="container">
                <NavBar></NavBar>
                <div className="row align-items-center mt-5">
                  <div className="col-md-5 header_info">
                    <div className="d-flex d-md-block justify-content-sm-start">
                      <h1 className="pr-2 pr-md-0">Florence</h1>
                      <h1> agency</h1>
                    </div>
                    <p className="my-3">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </p>
                    <button href="#pricing" className="customButton">
                      See Pricing
                    </button>
                  </div>
                  <div className="col-md-6 offset-md-1 pt-5 pt-md-0 headerImg">
                    <img className="img-fluid" src={banner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
