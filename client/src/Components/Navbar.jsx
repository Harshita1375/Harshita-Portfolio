import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a 
        href="#home" 
        className={`${styles.logo} ${theme === 'light' ? styles.lightThemeLogo : ''}`}
      >
        Harshita Tiwary
      </a>

      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;