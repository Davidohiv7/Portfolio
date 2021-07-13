import React, { useState } from 'react';

import './Selector.css';
import './SelectorResponsive.css';


export default function Selector( {option, setOption} ) {

    const [selectorClass, setSelectorClass] = useState('home_options_option_div_selected');

    function handleClick(e, newOption) {

        if(newOption === option) setSelectorClass('home_options_option_div_selectedNoAnim')
        if(newOption === 'techSkills' && option === 'projects') setSelectorClass('home_options_option_div_selectedInverted')
        if(newOption === 'projects' && option === 'techSkills') setSelectorClass('home_options_option_div_selected')
        if(newOption === 'projects' && option === 'softSkills') setSelectorClass('home_options_option_div_selectedInverted')
        if(newOption === 'softSkills' && option === 'projects') setSelectorClass('home_options_option_div_selected')
        if(newOption === 'techSkills' && option === 'softSkills') setSelectorClass('home_options_option_div_longSelectedInverted')
        if(newOption === 'softSkills' && option === 'techSkills') setSelectorClass('home_options_option_div_longSelected')
        setOption(newOption)
    }

    return (
        <div className='home_options_selector'>
            <div className='home_options_option'>
                <button onClick={e => handleClick(e, 'techSkills')}>
                    Tech Skills
                </button>
                <div className={option === 'techSkills' ? selectorClass : 'home_options_option_div_not_selected'}/>
            </div>
            <div className='home_options_option'>
                <button onClick={e => handleClick(e, 'projects')}>
                    Projects
                </button>
                <div className={option === 'projects' ? selectorClass : 'home_options_option_div_not_selected'}/>
            </div>
            <div className='home_options_option'>
                <button onClick={e => handleClick(e, 'softSkills')}>
                    Soft Skills
                </button>
                <div className={option === 'softSkills' ? selectorClass : 'home_options_option_div_not_selected'}/>
            </div>
        </div>
    );
};