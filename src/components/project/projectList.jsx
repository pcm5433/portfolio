import {useRef} from 'react';
// 홈페이지 이미지 임포트하기
import './project.css'

function ProjectList({id, cls, img, title, tag, date, content}){

    const popUp = useRef();

    function popUpOn(){
        popUp.current.classList.add("on")
    }

    function popUpOff(){
        popUp.current.classList.remove("on")
    }

    return(
        <article className='w1440 pjt_wrap'>
            <div className='pjtClass'>
                <h3>{id}</h3>
                <p>{cls}</p>
            </div>
            <div className='pjtCont'>
                <div className='pjtPhoto pjtPhoto-ellipse'></div>
                <div className='pjtTit'>
                    <h4>{title}</h4>
                    <h5 onClick={popUpOn}>VIEW MORE <span></span></h5>
                </div>
                <div ref={popUp} className='pjtPopUp'>
                    test
                    <button onClick={popUpOff}>닫기</button>
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