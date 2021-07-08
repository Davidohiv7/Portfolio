import React from 'react';

import './TechSkills.css';

//Languages
import jsIcon from '../../../../utils/icons/techskills/javascript.png';
import tsIcon from '../../../../utils/icons/techskills/typescript.png';
//Front-end
import htmlIcon from '../../../../utils/icons/techskills/html.png';
import cssIcon from '../../../../utils/icons/techskills/css.png';
import reactIcon from '../../../../utils/icons/techskills/react.png';
import reduxIcon from '../../../../utils/icons/techskills/redux.png';
import angularIcon from '../../../../utils/icons/techskills/angular.png';
import ngrxIcon from '../../../../utils/icons/techskills/ngrx.png';
import materialUIIcon from '../../../../utils/icons/techskills/material-ui.png';
//Back-end
import nodeIcon from '../../../../utils/icons/techskills/node.png';
import expressIcon from '../../../../utils/icons/techskills/express.png';
import sqlIcon from '../../../../utils/icons/techskills/sql.png';
import postgresIcon from '../../../../utils/icons/techskills/postgres.png';
//Others
import gitIcon from '../../../../utils/icons/techskills/git.png';
import githubIcon from '../../../../utils/icons/techskills/github.png';
import scrumIcon from '../../../../utils/icons/techskills/scrum.png';

export default function TechSkills() {

    return (
        <div className='container'>
            <div className='left'/>
            <div className='right'>
                <span className='title'>Technologies</span>
                <div className='content'>
                    <div className='content_left'>
                        <span className='content_title'>Languages:</span>
                        
                        <div className='content_technologies'>

                            <div className='content_item'>
                                <img src={jsIcon} alt="JavaScript"/>
                                <span>JavaScript</span>
                            </div>

                            <div className='content_item'>
                                <img src={tsIcon} alt="TypeScript"/>
                                <span>TypeScript</span>
                            </div>
                        </div>

                        <span className='content_title'>Front-end:</span>

                        <div className='content_technologies'>

                            <div className='content_item'>
                                <img src={htmlIcon} alt="HTML" className='image_size'/>
                                <span className='span_size'>HTML</span>
                            </div>

                            <div className='content_item'>
                                <img src={cssIcon} alt="CSS"/>
                                <span>CSS</span>
                            </div>

                            <div className='content_item'>
                                <img src={reactIcon} alt="react"/>
                                <span>React</span>
                            </div>

                            <div className='content_item'>
                                <img src={reduxIcon} alt="Redux" className='image_size'/>
                                <span className='span_size'>Redux</span>
                            </div>

                            <div className='content_item'>
                                <img src={angularIcon} alt="Angular"/>
                                <span>Angular</span>
                            </div>

                            <div className='content_item'>
                                <img src={ngrxIcon} alt="NgRx" className='image_size'/>
                                <span className='span_size'>NgRx</span>
                            </div>

                            <div className='content_item'>
                                <img src={materialUIIcon} alt="Material" className='image_size'/>
                                <span className='span_size'>Material-UI</span>
                            </div>

                        </div>  

                    </div>

                    <div className='content_right'>
                        
                        <span className='content_title'>Back-end:</span>
                        
                        <div className='content_technologies'>

                            <div className='content_item'>
                                <img src={nodeIcon} alt="NodeJS"/>
                                <span>NodeJS</span>
                            </div>

                            <div className='content_item'>
                                <img src={expressIcon} alt="ExpressJS"/>
                                <span>ExpressJS</span>
                            </div>

                            <div className='content_item'>
                                <img src={sqlIcon} alt="SQL" className='image_size'/>
                                <span className='span_size'>SQL</span>
                            </div>

                            <div className='content_item'>
                                <img src={postgresIcon} alt="PostgresSQL" className='image_size'/>
                                <span className='span_size'>PostgresSQL</span>
                            </div>

                        </div>

                        <span className='content_title'>Others:</span>

                        <div className='content_technologies'>

                            <div className='content_item'>
                                <img src={gitIcon} alt="Git"/>
                                <span>Git</span>
                            </div>

                            <div className='content_item'>
                                <img src={githubIcon} alt="GitHub"/>
                                <span>GitHub</span>
                            </div>

                            <div className='content_item'>
                                <img src={scrumIcon} alt="Scrum"/>
                                <span>Scrum</span>
                            </div>

                        </div>  

                    </div>
                </div>
            </div>
        </div>
    );
};