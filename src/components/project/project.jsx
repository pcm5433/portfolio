import {useContext, forwardRef} from 'react';
import {dataContext} from '../../App';
import ProjectList from './projectList';
import './project.css';

const Project = forwardRef((props, ref)=>{

    const datas = useContext(dataContext);

    return(
        <section ref={pjtRef => (ref.current[2] = pjtRef)} className='w100 pjt_sec'>
            <h2 className='main_tit_r'>프로젝트</h2>
            {datas.datas.map((data)=>
            <ProjectList key={data.id} {...data} />)}
        </section>
    )
})

export default Project;