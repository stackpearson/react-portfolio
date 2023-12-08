import React from 'react';
import '../styles/Footer.css';
import { MdLocalPhone } from "react-icons/md";
import {IconContext} from 'react-icons';
import '../styles/ContactIcons.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Phone() {

    const phone = '208-284-2019';
    const notifyPhone = () => toast(`Phone copied to clipboard, call me at ${phone}`, {
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
          await navigator.clipboard.writeText(phone);
          notifyPhone();
        } catch (error) {
          console.error('Unable to copy to clipboard', error);
        }
      };


  return (<>
    <div className="contact-icon-container" onClick={copyToClipboard}> 
        <div className='contact-icon'>
            <IconContext.Provider value={{color: "white", size: "1.75em"}}>
                <MdLocalPhone/>
            </IconContext.Provider>
        </div>
        
    </div>
  </>);
}

export default Phone;
