import React from "react";

const Contactdetails = ({ Name, job, email, image }) => {
  return (
    <div className="head">
      <div className="upper">
        <img src={image} alt="" />
        <div className="para">
          <h2>
            <strong>{Name}</strong>
          </h2>
          <p>{job}</p>
        </div>
        <div className="para2">
          <div className="button">
            <div className="icon">
              <i className="fa-solid fa-message"></i>
              <span>Message</span>
            </div>
          </div>
          <div className="button">
            <div className="icon">
              <i className="fa-solid fa-box-archive"></i>
              <span>Archive</span>
            </div>
          </div>
          <div className="button">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <span>Contact</span>
            </div>
          </div>
          <div className="button">
            <div className="icon">
              <i className="fa-solid fa-ellipsis"></i>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="bio">
          <p className="p1">
            <strong>Bio</strong>
          </p>
          <p className="p2">
            Ali is a skilled Front-End Developer with expertise in creating
            dynamic and responsive user interfaces. He excels in utilizing
            modern web technologies to deliver seamless user experiences.
          </p>
        </div>
        <div className="email">
          <p className="p1">
            <strong>Email</strong>
          </p>
          <p className="p2">
            {email}
          </p>
          <button>
            <b>Primary</b>
          </button>
        </div>
        <div className="dial">
          <p className="p1">
            <strong>Dial</strong>
          </p>
          <p className="p2">
            developer@example.com
          </p>
        </div>
        <div className="meeting">
          <p className="p1">
            <strong>Meeting</strong>
          </p>
          <p className="p2">
            https://meet.example.com/ali
          </p>
        </div>
        <div className="phone">
          <p className="p1">
            <strong>Phone</strong>
          </p>
          <p className="p2">+1 555 765 4321</p>
          <button>
            <b>Primary</b>
          </button>
        </div>
        <div className="social">
          <p className="p1">
            <strong>Social</strong>
          </p>
          <p className="p2">
            <i className="fa fa-facebook-f"></i>
            <i className="fa-brands fa-pinterest-p fa-fade"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in fa-bounce"></i>
            <i className="fa-brands fa-google"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactdetails;
