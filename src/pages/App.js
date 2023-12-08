import '../styles/App.css';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import {Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Skills from './Skills.js';
import Contact from './Contact.js';

function App() {
  return (<>
    <Nav />
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    <Footer />
    
  </>);
}

export default App;
