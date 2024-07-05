import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import ProgressProvider from "./ProgressProvider";
import html from "../../assets/html.png";
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import ps from '../../assets/photoshop.png';
import ai from '../../assets/illustrator.png';
import node from '../../assets/nodejs.png';
import reactLogo from '../../assets/react.png';
import figma from '../../assets/figma.png';
import mysql from '../../assets/database.png';
import 'react-circular-progressbar/dist/styles.css';
import './skill.css';

function SkillList() {

  return (
    <article className="w1700 skill_wrap">
        <div className="skill_list" style={{width: 170, height: 170}}>
            {/* html */}
            <ProgressProvider valueStart={0} valueEnd={90}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 95}} src={html} alt="html" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>HTML</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* css */}
            <ProgressProvider valueStart={0} valueEnd={90}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 95}} src={css} alt="css" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>CSS</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* js */}
            <ProgressProvider valueStart={0} valueEnd={70}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 95}} src={js} alt="javascript" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>JavaScript</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* ps */}
            <ProgressProvider valueStart={0} valueEnd={60}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 80}} src={ps} alt="photoshop" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>Photoshop</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* ai */}
            <ProgressProvider valueStart={0} valueEnd={60}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 80}} src={ai} alt="illustrator" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>Illustrator</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
        </div>
        <div className="skill_list" style={{width: 170, height: 170}}>
            {/* node */}
            <ProgressProvider valueStart={0} valueEnd={40}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 100}} src={node} alt="node" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>Node.js</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* mysql */}
            <ProgressProvider valueStart={0} valueEnd={10}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 100}} src={mysql} alt="mysql" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>MySQL</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* react */}
            <ProgressProvider valueStart={0} valueEnd={40}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 100}} src={reactLogo} alt="react" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>React</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
            {/* figma */}
            <ProgressProvider valueStart={0} valueEnd={90}>
                {(value)=>
                    <CircularProgressbarWithChildren value={value}>
                        <img style={{width: 95}} src={figma} alt="figma" />
                        <div className='skill_txt_wrap'>
                            <h4 className='skill_txt'>Figma</h4>
                            <p className='percent_txt'>{value}%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                }
            </ProgressProvider>
        </div>
    </article>
  );
}

export default SkillList;