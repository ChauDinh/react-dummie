import React from "react";

import "./NavBar.style.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar__container">
        <a role="button" className="navbar__homeBtn" href="/">
          Home
        </a>
        <a role="button" href="/login" className="navbar__loginBtn">
          Login
        </a>
        <a role="button" href="/register" className="navbar__registerBtn">
          Register
        </a>
      </div>
    </>
  );
};
