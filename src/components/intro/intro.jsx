import cloud1 from '../../assets/cloud_1.png'
import cloud2 from '../../assets/cloud_2.png'
import './intro.css';

function Intro(){
    return(
        <section className="w100 intro_sec">
            <div><img src={cloud1} alt="cloud_img" className='cloud_1' /></div>
            <div><img src={cloud2} alt="cloud_img" className='cloud_2' /></div>
        </section>
    )
}

export default Intro;