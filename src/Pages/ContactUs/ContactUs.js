import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//const API = process.env.REACT_APP_API_URL;

function ContactUs() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    issue: "General Inquiry",
  });

  const handleTextChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //addContactInfo()
    handleClear();
  };

  // const addContactInfo = () => {
  //   axios
  //     .post(`${API}/contact`, contactInfo) // Replace `/contact` with the actual API endpoint to handle contact form submissions
  // .then(() => {
  // Handle success (e.g., show a thank you message)
  //   navigate('/thank-you'); // Replace this with the page where you want to redirect after form submission
  // })
  // .catch((error) => {
  // Handle error (e.g., display an error message)
  //   console.error("Error submitting contact form:", error);
  // });
  // }

  const handleClear = () => {
    setContactInfo({
      name: "",
      phone: "",
      email: "",
      issue: "General Inquiry",
    });
  }

  return (
    <div className="NewContact" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Contact Us!</h2>
      <p>Thank you for visiting Access & Learn. Please fill out the following form to send us a message about our services. Please click on the “SUBMIT” button when you are ready to send your message. You may use this form to request more information or to provide feedback about this website.</p>
      <div className="ContactUs">
       </div>
    </div>
  );
}

export default ContactUs;
