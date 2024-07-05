import {forwardRef} from 'react'
import Me from '../../assets/my_photo.jpg'
import Sign from '../../assets/sign.png'
import './aboutMe.css'

const AboutMe = forwardRef((props, ref)=>{

    return(
        <section ref={aboutRef => (ref.current[0] = aboutRef)} className='w100 about_sec'>
            <h2 className='main_tit'>소개</h2>
            <article className='w1700 about_wrap'>
                <div className='about_txt_l'>
                    <div>
                        <div className='about_txt_l1'>
                            <h3 className='text'>Park<br />　　Chaemin</h3>
                            <h4>박채민</h4>
                        </div>
                        <div className='about_txt_l2'>
                            <h5>2002. 02. 10
                                <br />포기하지 않고 도전해,
                                <br />끝까지 해결방안을 찾아내는 개발자입니다.
                            </h5>
                            <div>
                                <p>2024년 1월 23일부터 8월 9일까지
                                    <br />프론트엔드 개발자가 되기 위해 공부했습니다.
                                </p>
                                <h6>자신의 손으로 하나하나 코드를 완성해나가는 것과,
                                    <br />그 과정에서 이루어지는 사람들과의 소통이 즐거워 개발자를 지망하게 되었습니다.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about_txt_r'>
                    <div className='about_txt_r1'>
                        <p>제가 맡은 일에 대해 끈기를 가진 사람입니다.
                            <br />문제가 발생하면 포기하는 것이 아니라, 그 문제를 해결하기 위해 노력합니다.
                            <br />학원에서 프로젝트를 진행하는 동안 어려움이 많았으나, 검색과 영상, 질문을 통해 스스로 해냈습니다.
                        </p>
                    </div>
                    <div className='about_txt_r2'>
                        <img src={Me} alt="my_photo" />
                        <p>경민대학교 사회복지과 전공
                            <br />240400 웹디자인 기능사 필기 합격
                            <br />240809 그린컴퓨터아카데미 웹앱개발자 과정 수료 예정
                        </p>
                        <img src={Sign} alt="sign" />
                    </div>
                </div>
            </article>
        </section>
    )
})

export default AboutMe;