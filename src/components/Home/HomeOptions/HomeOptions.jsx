import React from 'react';

import './HomeOptions.css';
import './HomeOptionsResponsive.css';

import Selector from './Selector/Selector'

export default function HomeOptions( { option, setOption } ) {

    return (
        <div className='home_options_container'>
            <div className='home_options_title'>
                <span>Solutions, innovation, creation...</span>
            </div>
            <Selector option={option} setOption={setOption}/>
        </div>
    );
};