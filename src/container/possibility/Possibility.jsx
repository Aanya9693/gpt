import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>GPT-3 offers endless possibilities for growth and innovation. By exploring its capabilities and applications, we can unlock new opportunities and transform the way we work and communicate, paving the way for a brighter future.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);


export default Possibility