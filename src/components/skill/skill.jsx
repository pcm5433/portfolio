import {forwardRef} from "react";
import SkillList from "./skillList";
import './skill.css';

const Skill = forwardRef((props, ref)=>{
    return(
        <section ref={skillRef => (ref.current[1] = skillRef)} className='w100 skill_sec'>
            <h2 className='main_tit'>스킬</h2>
            <SkillList />
        </section>
    )
})

export default Skill;