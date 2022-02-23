import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='about'>
          <div className="about-left">
            {/* <h3>about 1</h3> */}

            <h1 id='anim'>About me</h1>
            <h3 id='anim' className="full">Full stack Web developer</h3>
            <p id='anim'>Committed to bringing business success by deducing solutions to problems, I work on full-stack projects by using several technologies . Working remotely is my favorite option.</p>
          </div>
          <div className="about-right">
            <h3>about 2</h3>
            {/* <h3>Languages: JavaScript, Ruby, Html, CSS.</h3>
            <h3>Frameworks: Bootstrap, Ruby on Rails, React.</h3> 
            <h3>Skills: Git, Github, Heroku, Netlfy, Rspec, Jest.</h3>  */}
            <ul class="skills">
              {/* <li>Ruby</li>
              <li>rails</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>VueJs</li>
              <li>postgresql</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Netlfy</li>
              <li>Rspec</li>
              <li>Jest</li>
              <li>Html</li>
              <li>Css</li> */}
            </ul>
            <section>
              <img src="./assets/1.png" alt="1"/>
              <img src="./assets/2.png" alt="1"/>
              <img src="./assets/3.png" alt="1"/>
              <img src="./assets/4.png" alt="1"/>
              <img src="./assets/5.png" alt="1"/>
              <img src="./assets/5.png" alt="1"/>
              <img src="./assets/6.png" alt="1"/>
              <img src="./assets/7.png" alt="1"/>
              <img src="./assets/8.png" alt="1"/>
              <img src="./assets/9.png" alt="1"/>
              <img src="./assets/9.png" alt="1"/>
            </section>
          </div>
        </div>
    );
};

export default About;