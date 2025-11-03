import React, { useState } from 'react';
import styles from './Experience.module.css';
import { experiences } from "../experience_data"; 

const TRUNCATE_LENGTH = 100;

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (expId) => {
    setExpandedCards(prev => ({
      ...prev,
      [expId]: !prev[expId]
    }));
  };

  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp) => {
          const isExpanded = !!expandedCards[exp.id];
          const fullDescriptionString = exp.desc.join(' ');
          const needsReadMore = fullDescriptionString.length > TRUNCATE_LENGTH;
          const previewText = `${fullDescriptionString.substring(0, TRUNCATE_LENGTH)}... `;

          return (
            <div className={styles.timelineItem} key={exp.id}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3> 
                
                <div className={styles.metaInfo}>
                  <span className={styles.timelineDate}>{exp.duration}</span> 
                  <span className={styles.timelineCompany}>{exp.company}</span> 
                </div>
                
                <div className={styles.descriptionContainer}>
                  {isExpanded ? (
                    // --- EXPANDED VIEW ---
                    <>
                      <ul className={styles.descriptionList}>
                        {exp.desc.map((point, index) => (
                          <li key={index} className={styles.descriptionListItem}>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => toggleExpanded(exp.id)}
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    // --- COLLAPSED VIEW ---
                    <p className={styles.descriptionPreview}>
                      {needsReadMore ? previewText : fullDescriptionString}
                      {needsReadMore && (
                        <button 
                          className={styles.readMoreButton}
                          onClick={() => toggleExpanded(exp.id)}
                        >
                          Read More
                        </button>
                      )}
                    </p>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;