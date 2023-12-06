import '../styles/Nav.css';
import {NavLink} from 'react-router-dom';
import {RxDropdownMenu} from 'react-icons/rx';
import {IoMdCloseCircleOutline} from 'react-icons/io';
import {IconContext} from 'react-icons';
import {useState, useEffect} from 'react';

function Nav() {

    const [isNavVisible, setNavVisibility] = useState(true)

    const toggleNavVisibility = () => {
        setNavVisibility(!isNavVisible);
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 600) {
            setNavVisibility(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      }, []);


  return (
 <nav className='nav-main'>
    <ul className='nav-container'>
        {isNavVisible ? (<>
            <li className='nav-item'>
            <NavLink to="/" className='nav-button'>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="projects" className='nav-button'>Projects</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="skills" className='nav-button'>Skills</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="resume" className='nav-button'>Resume</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="contact" className='nav-button'>Contact</NavLink>
            </li>
            <IconContext.Provider value={{color: "white", size: "2em", className: "close-menu-icon"}}>
                <IoMdCloseCircleOutline onClick={toggleNavVisibility}/>
            </IconContext.Provider>
        </>
        ) : (
        <>
            <IconContext.Provider value={{color: "white", size: "2em", className: "open-menu-icon"}}>
                <RxDropdownMenu onClick={toggleNavVisibility}/>
            </IconContext.Provider>
        </>
        )}
    </ul>

 </nav>
 
  );
}

export default Nav;