import React from 'react';
import './Contact.scss'; // Import the Sass file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Email: materialestate123@gmail.com</p>
        <p>Phone: +91 9302481268</p>
        <p>Address: 123 Main Street, Indore, India</p>
      </div>
      <h2>Send Us a Message</h2>
      <form className="contact-form">

        <div className="form-group"> 
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <div className='send'>
        <button type="submit">Send Message</button>
        </div>
     
      </form>
    </div>
  );
};

export default Contact;
