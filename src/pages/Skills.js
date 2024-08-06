import React from 'react';
import '../styles/Skills.css';
import {IconContext} from 'react-icons';
import eduBadge from '../img/education-badge.png';
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiCodeceptjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <>
        <div className='education-badge'>
            <div>
                <a href='https://www.credly.com/badges/7041ac56-b780-4003-b378-48b3251445d2/embedded' target='blank'>
                    <img src={eduBadge} alt='Lambda School Technical certificate'/>
                </a>
            </div>
            <div>
                <h2>Full-Stack Web Development</h2>
                <h3>Issued by <a href='https://www.credly.com/organizations/bloom-tech/badges' target='blank'>Bloom Institute of Technology</a></h3>
            </div>
        </div>


        <div className='skills-container'>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <FaReact/>
                </IconContext.Provider>
                <div>
                    React
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <SiJavascript/>
                </IconContext.Provider>
                <div>
                    JavaScript
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <FaNodeJs/>
                </IconContext.Provider>
                <div>
                    NodeJs
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <SiMongodb/>
                </IconContext.Provider>
                <div>
                    Mongo DB
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <SiCodeceptjs/>
                </IconContext.Provider>
                <div>
                    Codecept.js
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <IoLogoHtml5/>
                </IconContext.Provider>
                <div>
                    HTML5
                </div>
            </div>
            <div className='skill'>
                <IconContext.Provider value={{color: "black", size: "5em"}}>
                    <IoLogoCss3/>
                </IconContext.Provider>
                <div>
                    CSS
                </div>
            </div>
        </div>

        <div className='skillsText'>
            <div>
                <p>With 8 years in ecommerce, I've honed my collaborative skills across departments, mastering efficiency and adaptability. This journey exposed me to diverse tool suites and technologies, fostering a commitment to continuous learning. This multifaceted experience has taught me the art of efficiency, adaptability, and the invaluable ability to seamlessly integrate and thrive within cross-functional teams.</p>
            </div>
        </div>


        <div className='skillText-container'>
            <div className='skillText-items'>
                <h2>Front End</h2>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>HTML/CSS & Pre-processors</li>
                    <li>Wireframes</li>
                </ul>
            </div>
            <div className='skillText-items'>
                <h2>Back End</h2>
                <ul>
                    <li>Node.js with Knex</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                    <li>API Testing</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div className='skillText-items'>
                <h2>General</h2>
                <ul>
                    <li>iOS/Android Emulators</li>
                    <li>Version Control</li>
                    <li>Agile Methodologies</li>
                    <li>Manual/Autoamted QA</li>
                    <li>SEO</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Skills;