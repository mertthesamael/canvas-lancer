import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import FilterButton from '@/components/Buttons/FilterButton';
import { Filters } from './constants';

interface ProjectsSectionProps {
  
}

const ProjectsSection: FC<ProjectsSectionProps> = ({  }) => {
  return (
    <section className={styles.projectsSection}>
        <div className={styles.projectsSection__inner}>
            <div className={styles.projectsSection__inner__title}>
                <SectionTitle text='Our Portfolio' theme='dark' centered />
            </div>
            <div className={styles.projectsSection__inner__content}>
                <div className={styles.projectsSection__inner__content__title}>
                    <h1><span>Projects</span> We Have Completed</h1>
                </div>
                <div className={styles.projectsSection__inner__content__filters}>
                    {Filters.map((el,_i) => <FilterButton text={el.name} />)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection;