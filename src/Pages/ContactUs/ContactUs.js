import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../ContactUs/ContactUs.css"

function ContactUs() {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    issue: "General Inquiry",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTextChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handleClear();
    setSubmitted(true)
  };

  const handleClear = () => {
    setContactInfo({
      name: "",
      phone: "",
      email: "",
      message: "",
      issue: "General Inquiry",
    });
  }

  return (
    <div className="NewContact" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Contact Us!</h2>
      {submitted ? ( // Show the thank-you message if the form is submitted
        <p style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
          Thank you for your message! Please allow time for our services to process it and to get back to you.
        </p>
      ) : (
        // Show the form if the form is not submitted
        <React.Fragment>
          <p>
            Thank you for visiting Access & Learn.
          </p>
          <p>
            Please fill out the following form to send us a message about our services. Please click on the “SUBMIT” button when you are ready to send your message.
          </p>
          <p>
            You may use this form to request more information or to provide feedback about this website.
          </p>
          {/* <p>Thank you for visiting Access & Learn. Please fill out the following form to send us a message about our services. Please click on the “SUBMIT” button when you are ready to send your message. You may use this form to request more information or to provide feedback about this website.</p> */}
          <div className="ContactUs">
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
                Name:
              </label>
              <br />
              <input
                className="form-control"
                id="name"
                type="text"
                onChange={handleTextChange}
                value={contactInfo.name}
                placeholder="Your name"
                required
              />
              <br />
              <label className="form-label" htmlFor="phone">
                Phone Number:
              </label>
              <br />
              <input
                className="form-control"
                id="phone"
                type="text"
                onChange={handleTextChange}
                value={contactInfo.phone}
                placeholder="(123) 456-7890"
                required
              />
              <br />
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <br />
              <input
                className="form-control"
                id="email"
                type="email"
                onChange={handleTextChange}
                value={contactInfo.email}
                placeholder="example@example.com"
                required
              />
              < br />
              <label className="form-label" htmlFor="message">
                Your Message:
              </label>
              <br />
              <textarea
                className="form-control"
                id="message"
                rows={5}
                style={{ width: '100%' }}
                onChange={handleTextChange}
                value={contactInfo.message}
                placeholder="Write your message here"
                required
              />

              <br />
              <label className="form-label" htmlFor="issue">
                Select an Issue:
              </label>
              <br />
              <select
                className="form-select"
                id="issue"
                onChange={handleSelectChange}
                value={contactInfo.issue}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
              <br />
              <input
                className="custom-button btn-primary"
                type="submit"
                value={"Submit"}
              />
              &nbsp;&nbsp;
              <button className="custom-button btn-primary" type="button" onClick={handleClear}>
                Clear Fields
              </button>
            </form>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default ContactUs;
