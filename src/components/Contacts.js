import React, { useState } from "react";
import "./Mycomponent/contacts.css";
import Contactitems from "./Contactitems";
import Contactinfo from "./Contactinfo";

const Contacts = ({ data, setSelectedContact }) => {
  const [selectedContact, setSelectedContactLocal] = useState(null);

  const handleContactClick = (id) => {
    let selectedContact = data.find((contact) => contact.id === id);
    console.log("Selected Contact:", selectedContact); // Check if correct contact is selected
    setSelectedContactLocal(selectedContact);
    setSelectedContact(selectedContact);
  };

  return (
    <div className="left-container">
      <div className="head">
        <p className="h4">Search for a contact</p>
        <div className="h1">
          <h4>Name, email, or phone number</h4>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {data.map((element) => (
        <div className="list" key={element.id}>
          <Contactitems
            Name={element.first_name}
            designation="Developer"
            imgUrl={element.avatar}
            onClick={() => handleContactClick(element.id)}
          />
        </div>
      ))}
      <Contactinfo contact={selectedContact} />
    </div>
  );
};

export default Contacts;
