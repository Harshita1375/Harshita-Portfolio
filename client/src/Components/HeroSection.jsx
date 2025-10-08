// src/Components/HeroSection.jsx

import React from 'react';
import styles from './HeroSection.module.css';
import profileImg from '../assets/Profile.jpeg'; 
import hpdf from '../assets/Harshita Tiwary.pdf';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Aspiring <span className={styles.highlight}>Software Developer</span>  </h1>
        <h3>A final-year student blending a foundation in data analysis with a deep passion for AI/ML. I am driven to apply my skills in machine learning and full-stack development to build intelligent, high-impact software.</h3>
        <div className={styles.buttons}>
          <a href="#contact" className={`${styles.button} ${styles.secondary}`}>Get In Touch</a>
          <a href={hpdf} download className={`${styles.button} ${styles.secondary}`}>Download CV</a>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="Harshita Tiwary" className={styles.profileImage} />
          {/* Decorative shapes and stats as per your original design */}
          
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/harshita-tiwary-523739252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Harshita1375" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;