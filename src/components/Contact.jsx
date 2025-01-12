import React, { useState } from 'react';
import './Contact.css'; // Add custom styling if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Logs form data to the console
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      {!formSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>We'll get back to you shortly.</p>
          <button onClick={() => setFormSubmitted(false)}>Send Another Message</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
