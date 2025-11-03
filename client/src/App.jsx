import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.jsx'; 
import BottomNav from './Components/BottomNav.jsx';
import HeroSection from './Components/HeroSection.jsx';
import ContactForm from './Components/ContactForm.jsx';
import Projects from './Components/Projects.jsx';
import Experience from './Components/Experience.jsx';
import './App.css'; // This file will now control the padding

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
      
      {/* This <main> tag now wraps ALL your page content.
        We've removed the inline style.
      */}
      <main className="main-content-wrapper">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="experience">
          <Experience/>  
        </section>  
        
        <section id="project">
          <Projects />  
        </section>    
        
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      
      <BottomNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;
