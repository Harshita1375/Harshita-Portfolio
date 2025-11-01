import React from 'react';
import styles from './Experience.module.css';
import { experiences } from "../experience_data"

const Experience = () => {

  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2>My Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div className={styles.timelineItem} key={exp.id}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <span className={styles.timelineDate}>{exp.date}</span>
              <span className={styles.timelineCompany}>{exp.company}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;