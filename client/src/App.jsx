import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx'; 
import BottomNav from './Components/BottomNav.jsx';
import HeroSection from './Components/HeroSection.jsx';
import ContactForm from './Components/ContactForm.jsx';
import Projects from './Components/Projects.jsx';
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
      
      <main style={{ padding: '2rem 5%' }}>
        <section id="home">
          <HeroSection />
        </section>
      </main>
      <section id="project">
        <Projects />  
      </section>       
      <section id="contact">
        <ContactForm />
      </section>
      <BottomNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;