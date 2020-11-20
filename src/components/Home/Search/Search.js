import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <section className="mb-5 search">
      <div className="container text-center">
        <h3 className="allHeading">Get your design right, right now</h3>
        <p>Be the first know our latest offers and updates!</p>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6 ">
            <div className="searchInput mt-5 d-flex ">
              <input
                placeholder="Enter your email address"
                type="text"
                className="form-control"
              />
              <button
                style={{ height: "42px", width: "150px" }}
                className="btn"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
