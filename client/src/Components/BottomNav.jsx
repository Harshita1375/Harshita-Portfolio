import React from 'react';
import styles from './BottomNav.module.css';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const BottomNav = ({ activeLink, setActiveLink }) => {
  return (
    <nav className={styles.bottomNav}>
      {/* For each link:
        - Add an onClick handler to update the active state.
        - Conditionally apply the 'active' class.
      */}
      <a 
        href="#home" 
        onClick={() => setActiveLink('#home')} 
        className={activeLink === '#home' ? styles.active : ''}
        aria-label="Home"
      >
        <FaHome />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveLink('#about')} 
        className={activeLink === '#about' ? styles.active : ''}
        aria-label="About"
      >
        <FaUser />
      </a>
      <a 
        href="#skills" 
        onClick={() => setActiveLink('#skills')} 
        className={activeLink === '#skills' ? styles.active : ''}
        aria-label="Skills"
      >
        <FaCode />
      </a>
      <a 
        href="#projects" /* Fixed: lowercase 'p' */
        onClick={() => setActiveLink('#projects')} /* Fixed: lowercase 'p' */
        className={activeLink === '#projects' ? styles.active : ''}
        aria-label="Projects"
      >
        <FaBriefcase />
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveLink('#contact')} 
        className={activeLink === '#contact' ? styles.active : ''}
        aria-label="Contact"
      >
        <FaEnvelope />
      </a>
    </nav>
  );
};

export default BottomNav;