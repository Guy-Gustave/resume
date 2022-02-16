import React from 'react';
import './works.css'
import Carousel from 'react-bootstrap/Carousel';

const Works = () => {
  return (
    <div>
      <h1 className="portfolio">Portofolio</h1>
      <div className="w-list">
        <div className="port html">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="/assets/fire.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="/assets/Screenshot.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/fire.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="port ruby">ruby</div>
        <div className="port rails">Rails</div>
        <div className="port javascript">JavaScript</div>
        <div className="port react">React</div>
      </div>
    </div>
  );
};

export default Works;