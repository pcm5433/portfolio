import {useRef} from 'react';
import {motion} from 'framer-motion';
import airplane from '../../assets/paper_airplane.png'
import './contact.css'

function Contact(){

    const scrollRef = useRef(null);

    return(
        <section ref={scrollRef} className='w100 contact_sec'>
            <h2 className='main_tit'>연락처</h2>
            <motion.article
                initial={{x: 2000, rotate: -30}}
                animate={{x: -2000, scale: 0, rotate: -50}}
                transition={{duration: 2}}
                // 뷰포트안먹음
                whileInView="onscreen"
                viewport={{root: scrollRef, once: true}}
                className='contact_wrap'
            >
                <img src={airplane} alt="종이비행기" />
            </motion.article>
        </section>
    )
}

export default Contact;