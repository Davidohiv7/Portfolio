import React, {useState} from 'react';

import './Curriculum.css';
import './CurriculumResponsive.css';

import { Zoom } from 'react-slideshow-image';

import cv1 from '../../utils/curriculum/cv_1.jpg'
import cv2 from '../../utils/curriculum/cv_2.jpg'

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';

export default function Curriculum() {

    const pages = [ 
        { name: 'Page1', image: cv1 }, 
        { name: 'Page2', image: cv2 }
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const sliderProperties = {
        indicators: false,
        autoplay: false,
        infinite: false,
        transitionDuration: 300,
        prevArrow: <div className='curriculum_slider_arrow_left'>
            <MdKeyboardArrowLeft onClick={e => handleLeftArrowClick()}/>
        </div>,
        nextArrow: <div className='curriculum_slider_arrow_right'>
            <MdKeyboardArrowRight onClick={e => handleRightArrowClick()}/>
        </div>,
    }

    function handleLeftArrowClick() {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function handleRightArrowClick() {
        if(currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='curriculum_container'>
            <div className='curriculum_viewer_container'>
                <div className='curriculum_viewer_title'>
                    <span>Page {currentPage} of {pages.length}</span>
                </div>
                <Zoom {...sliderProperties}> 

                    {
                    pages.map((page, index) => (
                        <div key={index} className={`curriculum_slide_container`}>

                            <img className='curriculum_slider_image' src={page.image} alt={`image_${index}`}/>

                        </div>

                    ))}
                </Zoom>

            </div>
            
        </div>
    );
};