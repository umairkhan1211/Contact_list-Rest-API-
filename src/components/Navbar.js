import React from "react";
import "./Mycomponent/navbar.css";

const Navbar = ({ handleLeft, handleRight }) => {
  const myFunction = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <div className="topnav">
      <a href="#!" className="iconss" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="#home" className="active">
        <h3>Contacts</h3>
      </a>
      <div className="arrows">
        <div className="leftarrow">
          <button className="btn" onClick={handleLeft}>
            <i className="arrow left"></i>
          </button>
        </div>
        <div className="rightarrow">
          <button className="btn" onClick={handleRight}>
            <i className="arrow right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
