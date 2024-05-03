import React from "react";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>React Food</h1>
        </div>
        <nav>
          <button className="button">Cart(0)</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
