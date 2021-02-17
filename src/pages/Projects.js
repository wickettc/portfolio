import React from 'react';
import FadeInItem from '../components/FadeInItem';
import ProjectCard from '../components/ProjectCard';
import projs from '../projectsData/projectsArray';
import '../css/Projects.css';

const Projects = () => {
    const renderProjs = projs.map((proj, index) => {
        const skills = (
            <ul className="proj-skills-list">
                {proj.skills.map((skill, index) => (
                    <li className="proj-skill" key={index}>
                        {skill}
                    </li>
                ))}
            </ul>
        );
        return (
            <FadeInItem key={index} divClass="project-card-container">
                <ProjectCard
                    name={proj.name}
                    img={proj.img}
                    prof={proj.prof}
                    skills={skills}
                    link={proj.link}
                    github={proj.github}
                />
            </FadeInItem>
        );
    });

    return (
        <div className="projects-page-container">
            <div className="projects-header-container">
                <h1>Projects</h1>
            </div>
            <div className="projs-container">{renderProjs}</div>
        </div>
    );
};

export default Projects;
