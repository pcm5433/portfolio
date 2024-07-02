// import {useGSAP} from '@gsap/react';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
import {useState} from 'react';
import domino_monitor from '../../assets/domino_monitor.png'
import bizcar_monitor from '../../assets/bizcar_monitor.png'
import ktg_monitor from '../../assets/ktg_monitor.png'
import './webclone.css';

function Webclone(){

    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return(
        <section className="w100 web_sec wrapper">
            <h2 className='main_tit_l'>웹 클로닝</h2>
            <div className="slide_container">
                <ul className="slide_wrapper" onMouseEnter={onStop} onMouseLeave={onRun}>
                    <div className={"slide original" + (animate ? "" : " stop")}>
                        <li><p className='item'><img src={domino_monitor} alt="도미노 바로가기" /></p></li>
                        <li><p className='item'><img src={bizcar_monitor} alt="비즈카 바로가기" /></p></li>
                        <li><p className='item'><img src={ktg_monitor} alt="ktg 장학재단 바로가기" /></p></li>
                    </div>
                    <div className={"slide clone" + (animate ? "" : " stop")}>
                        <li><p className='item'><img src={domino_monitor} alt="도미노 바로가기" /></p></li>
                        <li><p className='item'><img src={bizcar_monitor} alt="비즈카 바로가기" /></p></li>
                        <li><p className='item'><img src={ktg_monitor} alt="ktg 장학재단 바로가기" /></p></li>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Webclone;