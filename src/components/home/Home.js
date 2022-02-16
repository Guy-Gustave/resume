import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='intro'>
          <div className='intro-left'>
            <div className="left-wrapper">
              <h3>Hello,</h3>
              <h2 className="">I am Guy Gustave NIGABA. </h2>
              <h2>I am</h2>

              <div className="title">
                <div className="title-wrapper">
                  <div className="title-item">Web developer</div>
                  <div className="title-item">UI/UX Designer</div>
                  <div className="title-item"> backende developer</div>
                  <div className="title-item">Full stack web developer</div>
                </div>
              </div>
              <p className='desc'>I am a programmer who has a solid knowledge in HTML, CSS, JavaScript, React, Ruby on Rails, etc. I can help you build software suitable for your needs</p>
            </div>
            {/* <h2>left side</h2> */}
          </div>

          <div className='intro-right'>
            <h1>right side</h1>
            <div className="bg"></div>
            <img src="../../assets/WhatsApp Image 2022-02-13 at 12.52.55 PM.jpeg" alt=""/>
            {/* <img src="../../assets/istockphoto-1057506940-612x612.jpg" alt=""/> */}
          </div>
        </div>
    );
};

export default Home;