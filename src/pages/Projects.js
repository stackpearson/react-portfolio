import React from 'react';
import '../styles/Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import garageGif from '../img/myGarage.gif';
import spotifyGif from '../img/spotify-live.gif';
import printProjectTemp from '../img/printProjectTemp.png';

const Projects = () => {
    return (
        <div className='project-container'>
            <Carousel>
                <div>
                    <div className='project-header'>
                        <h2>Vehicle Maintenance Tracker</h2>
                    </div>  
                    <img className='project-image' src={garageGif} />
                    <div className='project-link'>
                        <a href='https://github.com/stackpearson/mygarage-frontend' target='blank' className="legend">Check out the code here!</a>
                    </div>
                </div>
                <div>
                    <div className='project-header'>
                        <h2>Spotify Song Analyzer</h2>
                    </div> 
                    <img className='project-image' src={spotifyGif} />
                    <a href='https://github.com/stackpearson/spotify-live' target='blank' className="legend">Check out the code here!</a>
                </div>
                <div>
                    <div className='project-header'>
                        <h2>Coming soon!</h2>
                        <h2>3D Printing Job Tracker</h2>
                    </div> 
                    <img className='temp project-image' src={printProjectTemp} />
                    <a href='https://github.com/stackpearson/3d-printing-api' target='blank' className="legend">Check out the code here!</a>
                </div>
            </Carousel>
        </div>
        
    );
};

export default Projects;