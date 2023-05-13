import React from "react";
import './project.css';
// @ts-ignore
import gradify from '../../assets/gradify_ss.png';
// @ts-ignore
import shibashow from '../../assets/shibashow_ss.png';

const PROJECT_INFO = [
    {
        img: gradify,
        imgAlt: 'gradify',
        title: 'Gradify Landing Page',
        description: 'Responsive gradient generater web app built in ReactJS',
        live: 'https://gradify.netlify.app',
        github: 'https://github.com/kunalsrivastav/gradify',
    },
    {
        img: shibashow,
        imgAlt: 'shibashow',
        title: 'Shibashow Landing Page',
        description: 'Responsive Online media streaming website built using HTML, CSS, Javascript, Bootstrap',
        live: 'https://kunalsrivastav.github.io/shibashow/',
        github: 'https://github.com/kunalsrivastav/shibashow',
    }
]

const ProjectInfo = () => {
    return (
        <div className="project-info">
            <h2>Projects</h2>
            <div className="projects">
                {
                    PROJECT_INFO?.map((project: any) => {
                        return <div className="project-card">
                            <div>
                                <img src={project?.img} alt={project?.imgAlt} />
                                <h3>{project?.title}</h3>
                                <span>{project?.description}</span>
                            </div>
                            <div className="btn-wrapper">
                                <a href={project?.live} target='_blank' rel="noreferrer">Live Preview</a>
                                <a href={project?.github} target='_blank' rel="noreferrer">Check on Github</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ProjectInfo;