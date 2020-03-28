/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./header.scss";
// import randomColorPair from "./randomColor.js";

function Header(props) {
  return (
    <>
      <nav style={{ backgroundColor: props[1] }} className="navbar">
        <span style={{ color: props[0] }}>Navbar</span>
      </nav>
    </>
  );
}

export default Header;
