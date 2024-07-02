import {useRef} from 'react';
import close from '../../assets/cross.png'
import './project.css'

function ProjectList({id, cls, img, title, tag, date, content, page, git, full_img}){

    // 팝업창
    const popUp = useRef();

    function popUpOn(){
        popUp.current.classList.add("on")
    }

    function popUpOff(){
        popUp.current.classList.remove("on")
    }

    // 팝업 탑버튼
    const top = useRef();

    function popUpTop(){
        const location = top.current.offsetTop;
        window.scrollTo({top: location, behavior: "smooth"});
    }

    return(
        <article ref={top} className='w1440 pjt_wrap'>
            <div className='pjtClass'>
                <h3>{id}</h3>
                <p>{cls}</p>
            </div>
            <div className='pjtCont'>
                <img src={img} alt={`${title}`} className='pjtPhoto pjtPhoto-ellipse' />
                <div className='pjtTit'>
                    <h4>{title}</h4>
                    <button onClick={popUpOn} className='quick_btn'>VIEW MORE <span></span></button>
                </div>
                <div ref={popUp} className='pjtPopUp'>
                    <div className='popUp_top'>
                        <h4>{title}</h4>
                        <button onClick={popUpOff}><img src={close} alt="close_icon" /></button>
                    </div>
                    <div className='popUp_middle'>
                        <a href={page} target="_blank">
                            <button className='quick_btn'>Page <span></span></button>
                        </a>
                        <a href={git} target="_blank">
                            <button className='quick_btn'>Github <span></span></button>
                        </a>
                    </div>
                    <img src={full_img} alt={`${title} 사이트 전체 이미지`} />
                    <button onClick={popUpTop} className='top_btn'>TOP</button>
                </div>
                <div className='pjtTag'>
                    <h6>{tag}</h6>
                    <h6>{date}</h6>
                </div>
                <p className='pjtTxt'>{content}</p>
            </div>
        </article>
    )
}

export default ProjectList;