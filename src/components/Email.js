import React, { useState } from 'react';
import {IconContext} from 'react-icons';
import { MdOutlineMailOutline } from "react-icons/md";
import '../styles/ContactIcons.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Email() {

    const email = 'sawyer.pearson208@gmail.com';
    const notifyEmail = () => toast(`Email copied to clipboard, write me at ${email}`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(email);
          notifyEmail();
        } catch (error) {
          console.error('Unable to copy to clipboard', error);
        }
      };


  return (<>
    <div className="contact-icon-container" onClick={copyToClipboard}> 
        <div className='contact-icon'>
            <IconContext.Provider value={{color: "white", size: "2em"}}>
                <MdOutlineMailOutline/>
            </IconContext.Provider>
        </div>
    </div>
  </>);
}

export default Email;