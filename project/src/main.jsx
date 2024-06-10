import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import NavBar from './components/Navbar.jsx'; 
import { Hero } from './components/Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <App />
  </React.StrictMode>
);
