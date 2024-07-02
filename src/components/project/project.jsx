import {useContext} from 'react';
import {dataContext} from '../../App';
import ProjectList from './projectList';
import './project.css';

function Project(){

    const datas = useContext(dataContext);

    return(
        <section className='w100 pjt_sec'>
            <h2 className='main_tit_r'>프로젝트</h2>
            {datas.datas.map((data)=>
            <ProjectList key={data.id} {...data} />)}
        </section>
    )
}

export default Project;