import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Contactinfo from "./components/Contactinfo";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = async (page) => {
    let url = `https://reqres.in/api/users?page=${page}`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      let parsedData = await response.json();
      console.log("Fetched Data:", parsedData); // Check fetched data structure
      setData(parsedData.data);
      setTotalPages(parsedData.total_pages);
      setPage(page);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts(page);
  }, [page]);

  const handleLeft = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRight = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Navbar handleLeft={handleLeft} handleRight={handleRight} />
      <Contacts data={data} setSelectedContact={setSelectedContact} />
      <Contactinfo contact={selectedContact} />
    </>
  );
};

export default App;
