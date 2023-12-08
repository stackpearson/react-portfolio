import React from 'react';
import '../styles/Footer.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { IconContext } from 'react-icons';

function Footer() {
  return (<>
    <footer className="footer-main">
        <div className='footer-container'>
            <div className='footer-item'><span>© Sawyer Pearson 2023</span></div>
            <div className='contact-module'>
              <div className='social-item'>
                <Link to='https://www.linkedin.com/in/sawyer-pearson/' target='blank'>
                  <IconContext.Provider value={{color: "white", size: "2em"}}>
                  <CiLinkedin />
                  </IconContext.Provider>
                </Link>
              </div>
              <div className='social-item'>
                <IconContext.Provider value={{color: "white", size: "2em"}}>
                  <Link to='https://www.linkedin.com/in/sawyer-pearson/' target='blank'>
                      <FaGithub />
                </Link>
                </IconContext.Provider>
              </div>
            </div>
        </div>
    </footer>
  </>);
}

export default Footer;