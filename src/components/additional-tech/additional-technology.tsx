import React from 'react';
import './additional-technology.css';

const ADDITIONAL_TECHNOLGY_SKILLS = ['Git', 'Github', 'AWS Lambda', 'S3', 'Node JS', 'Express JS'];

const AdditionalTechnology = () => {
    return (
        <div className='additional-tech'>
            <h2>Additional Technology & Skills</h2>
            <ul>
                {
                    ADDITIONAL_TECHNOLGY_SKILLS?.map((skill: string) => <li>{skill}</li>)
                }
            </ul>
        </div>
    )
};

export default AdditionalTechnology;