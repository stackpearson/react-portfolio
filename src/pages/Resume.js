import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div className='resume-container'>
            <button className='download-button'><a href={require("../assets/sawyer_pearson_developer_resume.pdf")} download='sawyer_pearson_developer_resume' target='_blank'>Download Resume</a></button>
            <div className='resume-heading'>
                <h1>Full Stack Developer</h1><br/>
                <p>Ambitious developer with a passion for creating powerful, intuitive web sites & web-based tools. Eight years of experience in eCommerce has allowed me to expand my technical skill set while contributing to meaningful projects.</p>
            </div>
            <div className='resume-skills'>
                <h2>Skills</h2>
                <div className='skill-list-container'>
                    <div className='skill-list'>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <ul>
                            <li>iOS/Android emulators</li>
                            <li>CodeceptJS</li>
                            <li>QA Automation</li>
                            <li>PostgreSQL</li>
                            <li>Slack Integration</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <ul>
                            <li>Google Play Store</li>
                            <li>App Store Connect</li>
                            <li>Version Control</li>
                            <li>Jira & Trello</li>
                            <li>Agile Methodologies</li>
                            <li>Remote Communication</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='resume-experience'>
                    <h2>Experience</h2><br/>
                <div>
                    <h3>Mobile Pipeline Analyst |<span className='resume-job'> CommentSold - Remote | Feb 2021 – Present</span></h3>
                    <p>Primary roles include creating & maintaining 2,000+ iOS/Android apps for customers & partnering with QA to design and implement web and mobile QA automation testing for the full product suite.</p>
                    </div><br/>
                <div>
                    <h3>eCommerce Specialist |<span className='resume-job'> Bodybuilding.com - Boise, ID | Oct 2015 – Oct 2020</span></h3>
                    <p>Primary roles included building responsive custom product pages from vendor supplied PSDs, updating marketing landing pages, assisting with automation & updating styling sheets.</p>
                </div>
            </div>
            <div className='resume-achievements'>
                <h2>Achievements</h2><br/>
                <p><span className='achievement-title'>Mobile App Managment:</span> Worked with a team to create and maintain iOS/Android applications for 2,000+ customers</p><br/>
                <p><span className='achievement-title'>QA Automation:</span> Contributed to creating an automated test suite with over 220 unit tests</p><br/>
                <p><span className='achievement-title'>Can Tool:</span> Created the front & back end for a customer service tool designed to improve efficiency by allowing representatives to create and store custom templated replies they can copy/paste through a chat platform.</p><br/>
                <p><span className='achievement-title'>Ingredient Parsint Tool:</span> Created a lightweight app to strip ingredients off nutritional labels and assort them into an itemized list for faster product onboarding.</p><br/>
                <p style={{fontSize: '.75em', textAlign: 'left', marginBottom: '10px'}}>*References available upon request</p>
            </div>
        </div>
    );
};

export default Resume;