import React from 'react';
import Calendar from '../components/Calendar';
import '../styles/Home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <>
        <Calendar />
        
        <article className='bio-container'>
          <div className="bio">
            <p>Hello there! 👋 I'm Sawyer, an engineer with a passion for crafting digital experiences through code. My journey into programming began in college when I wanted to learn how to create my own websites. I have experience with React, Node, and much more, just check out my <Link to='/skills'>skills page</Link> for a full list! I've had experience implementing & maintaining QA automation testing for one of the largest live selling platforms in the nation. I also enjoy creating personal projects in my spare time to advance my knowledge of both development & QA. You can check some of them out <Link to='/projects'>here</Link></p><br/>

            <p>Feel free to explore my portfolio to see some of my work, and let's <Link to='/contact'>connect</Link>! I'm always open to new opportunities and collaborations. Thanks for stopping by!</p><br/>
          </div>
        </article>
    </>
    );
};

export default Home;