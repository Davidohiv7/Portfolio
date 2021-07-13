import React from 'react';

import './HomeViews.css';
import './HomeViewsResponsive.css';

import TechSkills from './TechSkills/TechSkills'
import SoftSkills from './SoftSkills/SoftSkills'
import Projects from './Projects/Projects'

export default function HomeViews({ option }) {

    function renderView(option) {
        if( option === 'techSkills') return <TechSkills/>
        if( option === 'projects') return <Projects/>
        if( option === 'softSkills') return <SoftSkills/>
    }

    return (
        <div className='views_container'>
            <div className='views_option_container'>
                {renderView(option)}
            </div>
        </div>
    );
};