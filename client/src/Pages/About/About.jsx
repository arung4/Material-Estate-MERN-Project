import React from 'react';
import './About.scss'; // Import the Sass file

import { Mike} from '../../Images/images';
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to MaterialEstate, your trusted partner in finding the perfect property. We have a dedicated team committed to providing the best real estate services, ensuring a seamless experience for our clients.
      </p>
      <div className="founder-info">
        <img src={Mike} alt="Founder" className="founder-image" />
        <div className="description">
          <p>
            Our founder, [Arun Parihar], has over 20 years of experience in the real estate industry, bringing unparalleled expertise and a deep understanding of the market.
          </p>
        </div>
      </div>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
        At MaterialEstate, our mission is to redefine the real estate experience by providing exceptional service and building lasting relationships with our clients. We are committed to helping families find their dream homes with a seamless, stress-free process. Our team leverages cutting-edge technology and market insights to ensure the best outcomes for every client. We prioritize integrity and transparency in every transaction, fostering trust and satisfaction. By empowering our clients to make informed decisions, we aim to create a positive impact on their lives. We believe in going beyond the sale, offering continued support and guidance. Our passion drives us to excel in every aspect of real estate. Together, we strive to make property ownership accessible and rewarding. With a client-first approach, we turn real estate dreams into reality.
        </p>
      </div>

      <footer className="footer">
      <div className="footer-left">
        <span>© 2024 MaterialEstate</span>
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#cookies">Cookies</a>
      </div>
      <div className="footer-right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
        <a href="#places">Places</a>
        <a href="#resources">Resources</a>
      </div>
    </footer>
    </div>
  );
};

export default About;
