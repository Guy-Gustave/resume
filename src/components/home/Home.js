import React from 'react';
import './Home.css'

const Home = () => (
  <div className='intro'>
    <div className='intro-left'>
      <div className="left-wrapper">
        <h1>Hello,</h1>
        {/* <h1 data-text='I am Guy Gustave' className="">  Gustave ,</h1> */}
        <h2 data-text='I am Guy, Full stack web developer'>I am Guy, Full stack web developer</h2>

      </div>
    </div>

    {/* <p className='desc'>I am a programmer who has a solid knowledge in HTML, CSS, JavaScript, React, Ruby on Rails, etc. I can help you build software suitable for your needs</p> */}

    <div className='intro-right'>
      <h1>right side</h1>
      <div className="bg"></div>
      <img src="../../assets/WhatsApp Image 2022-02-13 at 12.52.55 PM.jpeg" alt="" />

    </div>
  </div>
);


export default Home;