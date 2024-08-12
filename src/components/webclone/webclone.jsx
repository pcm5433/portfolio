import {useState, forwardRef} from 'react';
import domino_monitor from '../../assets/domino_monitor.png';
import bizcar_monitor from '../../assets/bizcar_monitor.png';
import ktg_monitor from '../../assets/ktg_monitor.png';
import gongju_monitor from '../../assets/gongju_monitor.png';
import car_monitor from '../../assets/car_monitor.png';
import './webclone.css';

const Webclone = forwardRef((props, ref)=>{

    const [animate, setAnimate] = useState(true);
    const onStop = () => setAnimate(false);
    const onRun = () => setAnimate(true);

    return(
        <section ref={webRef => (ref.current[3] = webRef)} className="w100 web_sec wrapper">
            <h2 className='main_tit_l'>웹 클로닝</h2>
            <article className="slide_container">
                <div className="slide_wrapper" onMouseEnter={onStop} onMouseLeave={onRun}>
                    <div className={"slide original" + (animate ? "" : " stop")}>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/domino/" target="_blank"><img src={domino_monitor} alt="도미노 바로가기" /></a>
                            </p>
                            <h4>도미노</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/bizcar/" target="_blank"><img src={bizcar_monitor} alt="비즈카 바로가기" /></a>
                            </p>
                            <h4>롯데렌터카 비즈카</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/ktg/" target="_blank"><img src={ktg_monitor} alt="ktg 장학재단 바로가기" /></a>
                            </p>
                            <h4>KT&G 장학재단</h4>
                            <span>HTML / CSS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/gongju-museum/" target="_blank"><img src={gongju_monitor} alt="공주 박물관 바로가기" /></a>
                            </p>
                            <h4>공주박물관</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="" target="_blank"><img src={car_monitor} alt="쏘카 바로가기" /></a>
                            </p>
                            <h4>쏘카</h4>
                            <span>HTML / CSS</span>
                        </div>
                    </div>
                    <div className={"slide clone" + (animate ? "" : " stop")}>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/domino/" target="_blank"><img src={domino_monitor} alt="도미노 바로가기" /></a>
                            </p>
                            <h4>도미노</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/bizcar/" target="_blank"><img src={bizcar_monitor} alt="비즈카 바로가기" /></a>
                            </p>
                            <h4>롯데렌터카 비즈카</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/ktg/" target="_blank"><img src={ktg_monitor} alt="ktg 장학재단 바로가기" /></a>
                            </p>
                            <h4>KT&G 장학재단</h4>
                            <span>HTML / CSS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="https://pcm5433.github.io/gongju-museum/" target="_blank"><img src={gongju_monitor} alt="공주 박물관 바로가기" /></a>
                            </p>
                            <h4>공주박물관</h4>
                            <span>HTML / CSS / JS</span>
                        </div>
                        <div className='monitor_wrap'>
                            <p className='item'>
                                <a href="" target="_blank"><img src={car_monitor} alt="쏘카 바로가기" /></a>
                            </p>
                            <h4>쏘카</h4>
                            <span>HTML / CSS</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
})

export default Webclone;