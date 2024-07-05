import {useState, useRef} from 'react';
import up from '../assets/up.png';

import Header from './header/header';
import Intro from './intro/intro';
import AboutMe from './aboutMe/aboutMe';
import Skill from './skill/skill';
import Project from './project/project';
import Webclone from './webclone/webclone';
import Contact from './contact/contact';
import Footer from './footer/footer';

import '../index.css';

function Site(){

    const menuRef = useRef([]);

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
            <Header menuRef={menuRef} />
            <main>
                <Intro />
                <AboutMe ref={menuRef} />
                <Skill ref={menuRef} />
                <Project ref={menuRef} />
                <Webclone ref={menuRef} />
                <Contact ref={menuRef} />
                <button ref={topBtn} onClick={top} className={"top_btn" + (topOn ? " on" : " ")}>
                    <img src={up} alt="top_button" />
                </button>
            </main>
            <Footer />
        </>
    )
}

export default Site;