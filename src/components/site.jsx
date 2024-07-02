import {useContext} from 'react';
import {dataContext} from '../App';
import Header from './header/header';
import Intro from './intro/intro';
import AboutMe from './aboutMe/aboutMe';
import Skill from './skill/skill';
import Project from './project/project';

function Site(){

    return(
        <>
            <Header />
            <Intro />
            <AboutMe />
            <Skill />
            <Project />
        </>
    )
}

export default Site;