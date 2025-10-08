import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx'; 
import BottomNav from './Components/BottomNav.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeLink, setActiveLink] = useState('#home');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Other portfolio content goes here */}
      <main style={{ padding: '2rem 5%' }}>
        <h1>Hello there!!</h1>
      </main>
      <BottomNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;