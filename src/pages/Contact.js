import React from 'react';
import '../styles/Contact.css'
import {useForm, ValidationError} from '@formspree/react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Contact() {

  const [state, handleSubmit] = useForm('mleyqjbb')
  if (state.succeeded) {
    return <div className='success-message'><div><p>Thanks for reaching out, I'll be in touch shortly!</p></div></div>;
}
    return (
      <>

      <div className='contact-container'>
        <div className='social-container'>
          <div className='social-item'>
            <Link to='https://www.linkedin.com/in/sawyer-pearson/' target='blank'>
              <CiLinkedin/>
            </Link>
            
          </div>
          <div className='social-item'>
            <Link to='https://github.com/stackpearson' target='blank'>
            <FaGithub/>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='contact-header'>
              <h2>Let's get in touch!</h2>
          </div>

          <div className='contact-field'>
            <div className='contact-input'>
              <input id="email" type="email" name="email" placeholder='Your Email'/>
            </div>
            <ValidationError prefix="Email" field="email" errors={state.errors}/> 
          </div>

          <div className='contact-field'>
            <div className='contact-input'>
              <textarea id="message" name="message" placeholder='Please enter your message here'/>
            </div>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <div className='send-button'>
              <button type="submit" disabled={state.submitting}>Send</button>
            </div>
          </div>      
        </form>
      </div>
      </>
    );
};

export default Contact;