import React from 'react';
import './intro.css';
// @ts-ignore
import profile from '../../assets/profile.jpg';

const Introduction = () => {
    return (
        <div className='intro-section'>
            <div className='info-box'>
                <div>
                    <h1 className='styled-title'>Hello, I'm Kunal,</h1>
                    <h1 className='skill-title'>frontend developer</h1>
                </div>
                <div>
                    <img src={profile} alt='profile' />
                </div>
            </div>
            <a href='https://drive.google.com/file/d/1j4b_-Wk3dWvOEJwbPxeRw9BhRIBVcKzY/view?usp=share_link' target='_blank' rel="noreferrer">View Resume</a>
        </div>
    );
};

export default Introduction;