import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About GadgetHub</h3>
          <p>
            Your one-stop destination for the latest and greatest in electronics gadgets.
            Explore cutting-edge technology at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Service</h3>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/products">Shop Now</a></li>  */}
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@gadgethub.com</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: Tech Street, Kolhapur, Ind</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 GadgetHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
