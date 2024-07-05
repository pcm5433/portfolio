import {useRef, forwardRef, useEffect} from 'react';
import {motion, useInView} from 'framer-motion';
import AOS from 'aos';

import airplane from '../../assets/paper_airplane.png';
import paper1 from '../../assets/paper1.png';
import paper2 from '../../assets/paper2.png';
import telephone from '../../assets/telephone.png';
import email from '../../assets/email.png';
import github from '../../assets/github.png';

import 'aos/dist/aos.css';
import './contact.css';

const Contact = forwardRef((props, ref)=>{

    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, {once: true, amount: 1});

    useEffect(()=>{
        AOS.init();
    }, [])
    
    return(
        <>
            <section ref={scrollRef => (ref.current[4] = scrollRef)} className='w100 contact_sec'>
                <h2 className='main_tit'>연락처</h2>
                <div ref={scrollRef} data-aos="flip-right" data-aos-duration="3000" className='paper_wrap'>
                    <div className='name_cont'>
                        <div className='name_text'>
                            <h3>박채민</h3>
                            <p>감사합니다.</p>
                        </div>
                        <img src={paper1} alt="paper_name" />
                    </div>
                    <div className='contact_cont'>
                        <div>
                            <div className='contact_list'>
                                <img src={telephone} alt="telephone_icon" />
                                <div>
                                    <p>TELL</p>
                                    <h4>010-9899-5433</h4>
                                </div>
                            </div>
                            <div className='contact_list'>
                                <img src={email} alt="email_icon" />
                                <div>
                                    <p>EMAIL</p>
                                    <h4>pcm5433@naver.com</h4>
                                </div>
                            </div>
                            <div className='contact_list'>
                                <img src={github} alt="github_icon" />
                                <div>
                                    <p>GITHUB</p>
                                    <h4>pcm5433</h4>
                                </div>
                            </div>
                        </div>
                        <img src={paper2} alt="paper_contact" />
                    </div>
                </div>
                <motion.div
                    initial={{x: 2000, rotate: -30}}
                    animate={isInView ? {x: -2000, scale: 0, rotate: -50} : " "}
                    transition={{duration: 2}}
                    className='airplane_move'
                >
                    <img src={airplane} alt="paper_airplane" />
                </motion.div>
            </section>
        </>
    )
})

export default Contact;