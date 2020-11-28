import React from "react";
import { useCookies } from "react-cookie";

import "./NavBar.style.css";

export const NavBar = () => {
  const [cookies] = useCookies();

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
        {cookies.username ? <p>{cookies.username}</p> : null}
      </div>
    </>
  );
};
