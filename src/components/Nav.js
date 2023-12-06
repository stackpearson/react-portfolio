import '../styles/Nav.css';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
 <nav className='nav-main'>
    <ul className='nav-container'>
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
    </ul>
 </nav>
  );
}

export default Nav;