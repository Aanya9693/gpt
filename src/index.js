import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
// React 18 introduces a new root API which provides better ergonomics for managing roots. The new root API also enables the new concurrent renderer, which allows you to opt-into concurrent features.

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);




