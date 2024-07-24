import React from "react";

const Contactitems = ({ Name, designation, imgUrl, onClick }) => {
  return (
    <div className="contact" onClick={onClick}>
      <img src={imgUrl} alt="" />
      <div className="contact-body">
        <div className="contact-body-text">
          <h5>{Name}</h5>
          <p>{designation}</p>
        </div>
        <div className="icons">
          <a href="#csdcsdc"><i className="fa-solid fa-message"></i></a>
          <a href="#dcds"><i className="fa-solid fa-phone"></i></a>
          <a href="#csc"><i className="fa-solid fa-ellipsis"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Contactitems;
