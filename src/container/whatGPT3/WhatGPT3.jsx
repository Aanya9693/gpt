import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3?" text="GPT-3 is a powerful language model developed by OpenAI that can generate human-like text responses. It's versatile and adaptable, but has limitations and ethical concerns. It represents a major breakthrough in natural language processing that can transform the way we communicate and create content." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 powers chatbots that can generate human-like responses to customer inquiries, improving the customer experience and reducing the burden on customer service teams." />
      <Feature title="Knowledgebase" text="GPT-3 generates accurate and comprehensive content for knowledgebases, helping users find the information they need quickly and easily." />
      <Feature title="Education" text=" GPT-3 has the potential to transform teaching and learning, with applications in areas such as writing assistance, personalized learning, and language learning." />
    </div>
  </div>
);

export  default WhatGPT3;