import React, { useRef } from 'react';
import styles from './Projects.module.css';
import { projectData } from '../project_data';

const ProjectCard = ({ title, category, imageUrl }) => {
  return (
    <div className={styles.projectCard}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCategory}>{category}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h3 className={styles.sectionLabel}>WORK</h3>
      <h2 className={styles.sectionTitle}>Dig into my universe</h2>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={scrollLeft} aria-label="Scroll left">
          &lt;
        </button>

        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={scrollRight} aria-label="Scroll right">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
