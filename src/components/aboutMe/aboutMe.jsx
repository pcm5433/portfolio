import Me from '../../assets/me.png'
import Sign from '../../assets/sign.png'
import './aboutMe.css'

function AboutMe(){

    return(
        <section className='w100 about_sec'>
            <h2 className='main_tit'>소개</h2>
            <article className='w1440 about_wrap'>
                <div className='about_txt_l'>
                    <div className='about_txt_l1'>
                        <h3 className='text'>Park<br />　　Chaemin</h3>
                        <h4>박채민</h4>
                    </div>
                    <div className='about_txt_l2'>
                        <h5>2002. 02. 10
                            <br />포기하지 않고 도전해,
                            <br />끝내 해결방안을 찾아내는 개발자입니다.
                        </h5>
                        <div>
                            <p>2024년 1월 23일부터 8월 9일까지
                                <br />프론트엔드 개발자가 되기 위해 공부했습니다.
                            </p>
                            <h6>프론트엔드 개발자 과정을 발견한 계기와 왜 프론트엔드 개발자가 되고 싶은지를
                                <br />간단하게 설명하는 공간. 여기 진짜 뭐라고 하지 곤란하네.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='about_txt_r'>
                    <div className='about_txt_r1'>
                        <p>저는 이런 성격을 가진 이러이러한 사람입니다.
                            <br />어쩌고저쩌고 대충 이런 내용의 설명이 여기에 들어가게 될 텐데 또 뭘 넣으면 좋지.
                            <br />지금은 전혀 모르겠네요? 어떻게 쓰면 좋을까요?
                        </p>
                    </div>
                    <div className='about_txt_r2'>
                        <img src={Me} alt="my_photo" />
                        <p>경민대학교 사회복지과 전공
                            <br />240000 웹디자인 기능사 필기 합격
                            <br />240809 그린컴퓨터아카데미 웹앱개발자 과정 수료 예정
                        </p>
                        <img src={Sign} alt="sign" />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default AboutMe;