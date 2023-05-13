import React from "react";
import './footer.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <span>Feel free to contact me</span>
            <a href="mailto:kunalsrivastav.work@gmail.com" target='_blank' rel="noreferrer">kunalsrivastav.work@gmail.com</a>
            <div className='ext-navigation'>
                <a href="https://www.linkedin.com/in/kunalsrivastav/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/kunalsrivastav/" target='_blank' rel="noreferrer"><BsGithub /></a>
                <a href="https://www.instagram.com/i.m.kunalsrivastav/" target='_blank' rel="noreferrer"><BsInstagram /></a>
            </div>
        </div>
    );
};

export default Footer;