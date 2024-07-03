import {useState, useRef} from 'react';
import up from '../assets/up.png';
import Header from './header/header';
import Intro from './intro/intro';
import AboutMe from './aboutMe/aboutMe';
import Skill from './skill/skill';
import Project from './project/project';
import Webclone from './webclone/webclone';
import Contact from './contact/contact';
import '../index.css';

function Site(){

    // top 버튼
    const topBtn = useRef();

    const [topOn, setTopOn] = useState(false);

    window.addEventListener("scroll", function(){
        if(window.scrollY>824){
            setTopOn(true)
        }else{
            setTopOn(false)
        }
    })

    function top(){
        window.scrollTo({top: 0, behavior: "smooth"});
    }


    return(
        <>
            <Header />
            <Intro />
            <AboutMe />
            <Skill />
            <Project />
            <Webclone />
            <Contact />
            <button ref={topBtn} onClick={top} className={"top_btn" + (topOn ? " on" : " ")}>
                <img src={up} alt="top_button" />
            </button>
        </>
    )
}

export default Site;