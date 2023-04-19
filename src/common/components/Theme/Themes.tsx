import React from 'react';
import s from './Themes.module.scss'
import down from '../../../assets/down.svg'
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {SuperButton} from "../SuperButton/SuperButton";
export const styleBar = {
    pathColor: '#24C38E',
    strokeLinecap: 'butt',
    trailColor: 'rgba(0, 32, 51, 0.08)'
}

export const Themes = () => {
    return (
        <div className={s.container}>
            <p className={s.title}>Рекомендуемые темы</p>
            <div className={s.theme}>
                <CircularProgressbarWithChildren value={80} className={s.progressBar} styles={buildStyles(styleBar)}>
                    <div className={s.textBar}>
                        <p>8/10</p>
                        <span>заданий</span>
                    </div>
                </CircularProgressbarWithChildren>
                <div className={s.description}>
                    <div className={s.text}>
                        <span className={s.title}>Начало работы</span>
                        <ul>
                            Для новичка
                            <li>
                                Основы работы
                            </li>
                        </ul>
                        <span>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</span>
                    </div>
                    <SuperButton>Продолжить тему</SuperButton>
                </div>
            </div>
            <div className={s.button}>
                <div className={s.line}/>
                <button>
                    <span>Показать еще</span>
                    <img src={down} alt={'icon down'}/>
                </button>
                <div className={s.line}/>
            </div>
        </div>
    );
};

