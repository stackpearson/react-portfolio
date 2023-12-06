import '../styles/Nav.css';

function Nav() {
  return (
 <nav className='nav-main'>
    <div className='nav-container'>
        <div className='nav-item'>
            <h2 className='nav-headers'>Home</h2>
        </div>
        <div className='nav-item'>
            <h2 className='nav-headers'>Projects</h2>
        </div>
        <div className='nav-item'>
            <h2 className='nav-headers'>Skills</h2>
        </div>
        <div className='nav-item'>
            <h2 className='nav-headers'>About</h2>
        </div>
        <div className='nav-item'>
            <h2 className='nav-headers'>Resume</h2>
        </div>
    </div>
 </nav>
  );
}

export default Nav;