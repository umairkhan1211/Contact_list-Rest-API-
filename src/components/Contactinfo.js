import React from "react";
import "./Mycomponent/contactinfo.css";
import Contactdetails from "./Contactdetails";

const Contactinfo = ({ contact }) => {
  console.log("Contact prop:", contact); // Check if contact prop is correctly received

  return (
    <div className="right-container">
      {contact && (
        <Contactdetails
          Name={contact.first_name}
          job="UI/UX Designer"
          email={contact.email}
          image={contact.avatar}
        />
      )}
    </div>
  );
};

export default Contactinfo;
