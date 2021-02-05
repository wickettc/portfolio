import React from 'react';
import FlipCard from '../components/FlipCard';
import projs from '../projectsData/projectsArray';
import '../css/Projects.css';

const Projects = () => {
    const renderProjs = projs.map((proj, index) => {
        const skills = (
            <div>
                <ul className="proj-skills-list">
                    {proj.skills.map((skill, index) => (
                        <li className="proj-skill" key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
                <a
                    className="proj-button-link"
                    href={proj.link}
                    target="__blank"
                >
                    Check It Out!
                </a>
            </div>
        );
        return (
            <FlipCard
                key={index}
                name={proj.name}
                prof={proj.prof}
                img={proj.img}
                back={skills}
            />
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
