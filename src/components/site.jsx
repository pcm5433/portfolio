import Header from './header/header';
import Intro from './intro/intro';
import AboutMe from './aboutMe/aboutMe';
import Skill from './skill/skill';
import Project from './project/project';
import Webclone from './webclone/webclone';

function Site(){

    return(
        <>
            <Header />
            <Intro />
            <AboutMe />
            <Skill />
            <Project />
            <Webclone />
        </>
    )
}

export default Site;