import React from 'react';

import { Zoom } from 'react-slideshow-image';

import './Projects.css'
import "react-slideshow-image/dist/styles.css";

import food_project_image from '../../../../utils/home/projects/food_project.png'
import onion_image from '../../../../utils/home/projects/onion.png'

export default function Projects() {


    const images = [ 
        { name: 'Food Project', image: food_project_image, url: 'http://157.245.138.252/' }, 
        { name: 'Onion Food Supplier', image: onion_image, url: 'http://onionfoodsupplier.xyz/' }
    ];

    const sliderProperties = {
        indicators: true,
        scale: 1.4,
        duration: 5000,
        transitionDuration: 400,
    }

    return (
        <div className='p_container'>
            <Zoom {...sliderProperties} className='slider_container'> 
                {images.map((image, index) => (
                    <div key={index} className={`slide_container`}>
                        <span className={image.name.split(' ').join('')}>{image.name}</span>
                        <a href={image.url} target='_blank' rel='nofollow noopener noreferrer'>
                            <img className='slider_image' src={image.image} alt={`image_${index}`}/>
                        </a>
                    </div>
                ))}
            </Zoom>
        </div>
    );
};