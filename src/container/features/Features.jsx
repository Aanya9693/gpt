import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Transform Communication and Content Creation',
    text: 'GPT-3 is a powerful tool for automating content creation and improving customer service. With its ability to generate human-like text, it can revolutionize the way you communicate and create content.',
  },
  {
    title: 'Unlock New Opportunities for Growth and Innovation',
    text: 'Early access to GPT-3 can help you stay ahead of the curve and unlock new possibilities for growth and innovation. By exploring this technology, you can improve your competitiveness and pave the way for future success.',
  },
  {
    title: 'Request Early Access and Get Started Today',
    text: 'Dont miss out on the potential of GPT-3.Request early access today and start experimenting with this powerful technology. Our team is here to help you get started and answer any questions you may have.',
  },
  {
    title: 'Maximize Efficiency and Productivity with GPT-3',
    text: 'GPT-3 can automate tasks and workflows, freeing up time and resources for more complex work. By automating content creation, customer service, and other tasks, you can maximize efficiency and productivity, improving your bottom line and freeing up time for innovation and growth..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;