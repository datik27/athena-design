import React from "react";
import NavBar from "../Home/NavBar/NavBar";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-5 pt-5">
        <h1>404</h1>
        <h2>Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
