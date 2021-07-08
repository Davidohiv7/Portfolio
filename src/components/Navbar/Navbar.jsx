import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import davidIcon from '../../utils/icons/david.png'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function Navbar() {
    return (
        <div className='navbar_container'>
            <Link className='navbar_link' to={'/'}>
                <img src={davidIcon} alt='navbar_logo' className='navbar_logo'/>
            </Link>
            <div className='links_container'>
                <Link className='navbar_link' to={'/'}>
                    <IoHomeOutline className='navbar_link_icon'/> 
                    <span>Home</span>
                </Link>
                <a className='navbar_link' href="https://github.com/Davidohiv7/" target="_blank" rel="nofollow noopener noreferrer">
                    <AiOutlineGithub className='navbar_link_icon'/> 
                    <span>GitHub</span>
                </a>
                <a className='navbar_link' href="https://www.linkedin.com/in/christiandavidvivas/"  target="_blank" rel="nofollow noopener noreferrer">
                    <AiOutlineLinkedin className='navbar_link_icon'/> 
                    <span>LinkedIn</span>
                </a>
                <Link className='navbar_link' to={'/curriculum'}>
                    <HiOutlineDocumentReport className='navbar_link_icon'/> 
                    <span>Curriculum</span>
                </Link>
            </div>
        </div>
        );
  };