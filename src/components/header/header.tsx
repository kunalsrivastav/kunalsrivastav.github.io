import React from 'react';
import './header.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='page-header'>
            <h2>K.S. portfolio</h2>
            {/* <div className='int-navigation'>
                <a href="#projects">Projects</a>
                <a href="#technologies">Technologies</a>
                <a href="#about">About me</a>
            </div> */}
            <div className='ext-navigation'>
                <a href="https://www.linkedin.com/in/kunalsrivastav/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/kunalsrivastav/" target='_blank' rel="noreferrer"><BsGithub /></a>
                <a href="https://www.instagram.com/i.m.kunalsrivastav/" target='_blank' rel="noreferrer"><BsInstagram /></a>
            </div>
        </div>
    );
};

export default Header;