import React from 'react';
import footerimage from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';
const FooterSection = () => {
  return (
    <div className='foot'>
              <div className='footer-item e'>
                <img src={footerimage}
                alt="Delicious restaurant food"
                />
              </div>
              <div className='footer-item f'>
                      <h1>Doormat Navigation</h1>
                      <ul className="footer-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/reservation">Reservation</Link></li>
                      </ul>
              </div>
              <div className="footer-item g">
                        <h1>Contact</h1>
                        <ul className="footer-nav">
                          <p>123 Street Name, City</p>
                          <p>(123) 456-7890</p>
                          <p>info@example.com</p>
                        </ul>
              </div>
              <div className="footer-item h">
                <h1>social media links</h1>
                <ul className="footer-nav">
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>
    </div>
  );
};

export default FooterSection;
