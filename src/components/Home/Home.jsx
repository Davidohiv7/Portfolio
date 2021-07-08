import React, {useState} from 'react';

import HomeIntro from './HomeIntro/HomeIntro'
import HomeOptions from './HomeOptions/HomeOptions'
import HomeViews from './HomeViews/HomeViews'

import './Home.css';


export default function Home() {

    const [option, setOption] = useState('techSkills');

    return (
        <div className='home_container'>
            <HomeIntro/>
            <HomeOptions option={option} setOption={setOption} />
            <HomeViews option={option} />
        </div>
    );
};