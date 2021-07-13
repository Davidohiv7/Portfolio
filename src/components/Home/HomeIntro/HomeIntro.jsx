import React from 'react';

import davidBanner from '../../../utils/home/davidhome.png'

import './HomeIntro.css';
import './HomeIntroResponsive.css';


export default function HomeIntro() {
    return (
        <div className='home_intro'>
            <div className='home_intro_left'>
                <span className='home_intro_title'> {'<Hi!, Im David Vivas/>'} </span>
                <p className='home_intro_subtitle'>Full stack developer, petroleum engineer
                    and environmental manager from Colombia. You are more than welcome
                </p>
            </div>
            <div className='home_intro_right'>
                <img className='home_banner' src={davidBanner} alt="davidBanner"/>
            </div>
        </div>
    );
};