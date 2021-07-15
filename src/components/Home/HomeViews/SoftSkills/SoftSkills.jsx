import React from 'react';

import './SoftSkills.css';
import './SoftSkillsResponsive.css';

export default function SoftSkills() {

    const softSkillsArray = [ 'Communication', 'Discipline', 'Teamwork', 'Adaptability', 'Problem-solving', 
    'Logical thinking', 'Work ethic', 'Critical thinking', 'Self-motivated', 'Eagerness to learn', ]

    return (
        <div className='sf_container'>
            <span className='sf_title'>Soft Skills</span>
            <div className='sf_content'>
                {
                    softSkillsArray.map((sf, i) => {
                        if(!(i % 2)) {
                            return (
                                <div className={`sf_content_first sf_item_hover_${i}`}> 
                                    <div id={`sf_content_item_color_div_${i}`}/>
                                    {sf}
                                </div>
                            )
                        }
                        return (
                            <div className={`sf_content_second  sf_item_hover_${i}`}> 
                                <div id={`sf_content_item_color_div_${i}`}/>
                                {sf}
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    );
};