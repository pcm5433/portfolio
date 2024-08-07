import {useState, useRef} from 'react';
import close from '../../assets/cross.png';
import './project.css';

function ProjectList({id, cls, img, title, tag, date, content, page, git, full_img}){

    // 팝업창
    const top = useRef();

    const [popUpOn, setPopUpOn] = useState(false);

    function onClickPopUp(){
        setPopUpOn(true)
        window.scrollTo({top: top.current.offsetTop, behavior: "smooth"})
    }

    function onClickPopUpOff(){
        setPopUpOn(false)
    }

    return(
        <article ref={top} className='w1700 pjt_wrap'>
            <div className='pjtClass'>
                <h3>{id}</h3>
                <p>{cls}</p>
            </div>
            <div className='pjtCont'>
                <img src={img} alt={`${title}`} className='pjtPhoto pjtPhoto-ellipse' />
                <div className='pjtTit'>
                    <h4>{title}</h4>
                    <button onClick={onClickPopUp} className='quick_btn'>VIEW MORE <span></span></button>
                </div>
                <div className={"pjtPopUp" + (popUpOn ? " on" : " ")}>
                    <div className='popUp_top'>
                        <h4>{title}</h4>
                        <button onClick={onClickPopUpOff}><img src={close} alt="close_icon" /></button>
                    </div>
                    <div className='popUp_middle'>
                        <a href={page} target="_blank">
                            <button className='quick_btn'>Page <span></span></button>
                        </a>
                        <a href={git} target="_blank">
                            <button className='quick_btn'>Github <span></span></button>
                        </a>
                    </div>
                    <div className='popUp_img'>
                        <img src={full_img} alt={`사이트 전체 이미지`} />
                    </div>
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