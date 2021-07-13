import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './NavbaResponsive.css';

import Logo from './Logo/Logo'

import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function Navbar() {
    return (
        <div className='navbar_container'>
            <Link className='navbar_link' to={'/'}>
                <Logo svgClass='navbar_logo' fillColor='#0C294E'/>
                <Logo svgClass='navbar_logo_responsive' fillColor='#E8F0F2'/>
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