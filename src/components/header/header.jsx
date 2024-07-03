import {useState, useRef} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function header(){

    const header = useRef();

    const [scrolled, setScrolled] = useState(false);

    // 스크롤 시 헤더 배경색 변경
    window.addEventListener("scroll", function(){
        console.log(window.scrollY)
        if(window.scrollY>500){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })

    // 메뉴 클릭 시 스크롤 이동
    function introduce(){
        const menuHeight = header.current.offsetHeight;
        const location = document.querySelector(".about_sec").offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function skill(){
        const menuHeight = header.current.offsetHeight;
        const location = document.querySelector(".skill_sec").offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function project(){
        const menuHeight = header.current.offsetHeight;
        const location = document.querySelector(".pjt_sec").offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function webClone(){
        const menuHeight = header.current.offsetHeight;
        const location = document.querySelector(".web_sec").offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function contact(){
        const menuHeight = header.current.offsetHeight;
        const location = document.querySelector(".contact_sec").offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    return(
        <>
        <header ref={header} className={"w100" +(scrolled ? " scrolled" : " ")}>
            <div className='w1440 head_wrap'>
            <h1><Link to={"/"}><img src={logo} alt="logo" /></Link></h1>
            <nav className='top_menu'>
                <ul>
                    <li onClick={introduce}>소개</li>
                    <li onClick={skill}>스킬</li>
                    <li onClick={project}>프로젝트</li>
                    <li onClick={webClone}>웹 클로닝</li>
                    <li onClick={contact}>연락처</li>
                </ul>
            </nav>
            </div>
        </header>
        </>
    )
}

export default header;