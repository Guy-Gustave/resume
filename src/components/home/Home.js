import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='intro'>
          <div className='intro-left'>
            <div class="left-wrapper">
              <h3>Hello,</h3>
              <h2 class="">I am Guy Gustave NIGABA. </h2>
              <h2>I am</h2>

              <div class="title">
                <div class="title-wrapper">
                  <div class="title-item">Web developer</div>
                  <div class="title-item">UI/UX Designer</div>
                  <div class="title-item"> backende developer</div>
                  <div class="title-item">Full stack web developer</div>
                </div>
              </div>
              <p className='desc'>I am a programmer who has a solid knowledge in HTML, CSS, JavaScript, React, Ruby on Rails, etc. I can help you build software suitable for your needs</p>
            </div>
            {/* <h2>left side</h2> */}
          </div>

          <div className='intro-left'>
            <h2>right side</h2>
          </div>
        </div>
    );
};

export default Home;