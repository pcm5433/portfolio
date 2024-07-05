import {useState, useRef} from 'react';
import logo from '../../assets/logo.png'
import './header.css'

function header({menuRef}){

    const header = useRef();

    const [scrolled, setScrolled] = useState(false);

    // 스크롤 시 헤더 배경색 변경
    window.addEventListener("scroll", function(){
        if(window.scrollY>500){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })

    // 메뉴 클릭 시 스크롤 이동
    function introduce(){
        const menuHeight = header.current.offsetHeight;
        const location = menuRef.current[0].offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function skill(){
        const menuHeight = header.current.offsetHeight;
        const location = menuRef.current[1].offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function project(){
        const menuHeight = header.current.offsetHeight;
        const location = menuRef.current[2].offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function webClone(){
        const menuHeight = header.current.offsetHeight;
        const location = menuRef.current[3].offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    function contact(){
        const menuHeight = header.current.offsetHeight;
        const location = menuRef.current[4].offsetTop;
        window.scrollTo({top: location - menuHeight, behavior: "smooth"})
    }

    return(
        <>
        <header ref={header} className={"w100" +(scrolled ? " scrolled" : " ")}>
            <div className='w1700 head_wrap'>
                <h1><a href="#"><img src={logo} alt="logo" /></a></h1>
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