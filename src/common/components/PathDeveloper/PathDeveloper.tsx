import React from 'react';
import s from './PathDeveloper.module.scss';
import left from '../../../assets/left.svg'
import right from '../../../assets/right.svg';
import {pathData} from "./Data";
import {List} from "../List/List";

export const PathDeveloper = () => {
    const listThemes = pathData.map(el=> <List key={el.id} data={el}/>)
    return (
        <div className={s.container}>
            <div className={s.tools}>
                <span className={s.title}>Путь Front End Developer</span>
                <button>
                    <span>Скрыть пройденные</span>
                </button>
                <div className={s.sliderButtons}>
                    <button><img src={left} alt={"leftIcon"}/></button>
                    <button><img src={right} alt={"rightIcon"}/></button>
                </div>
            </div>
            <div className={s.cards}>
                <div>
                    {listThemes}
                </div>
            </div>
        </div>
    );
};

