import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='about'>
          <div className="about-left">
            <h3>about 1</h3>

            <h1>About me</h1>
            <h3 className="full">Full stack Web developer</h3>
            Committed to bringing business success by deducing solutions to problems, I work on full-stack projects by using several technologies . Working remotely is my favorite option.
          </div>
          <div className="about-right">
            <h3>about 2</h3>
            <h3>Languages: JavaScript, Ruby, Html, CSS.</h3>
            <h3>Frameworks: Bootstrap, Ruby on Rails, React.</h3> 
            <h3>Skills: Git, Github, Heroku, Netlfy, Rspec, Jest.</h3> 
          </div>
        </div>
    );
};

export default About;