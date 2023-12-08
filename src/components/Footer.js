import React from 'react';
import '../styles/Footer.css';
import { NavLink } from 'react-router-dom';
import Phone from './Phone';
import Email from './Email';

function Footer() {
  return (<>
    <footer className="footer-main">
        <div className='footer-container'>
            <div className='footer-item'><span>© Sawyer Pearson 2023</span></div>
            <div className='footer-item'><NavLink to="contact" className='footer-button'>Contact</NavLink></div>
            <div className='contact-module'>
                <Phone />
                <Email />
            </div>

        </div>
    </footer>
  </>);
}

export default Footer;