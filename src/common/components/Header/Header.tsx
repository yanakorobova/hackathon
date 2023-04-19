import React from 'react';
import s from './Header.module.scss'
import call from '../../../assets/call.svg'
import filled from '../../../assets/filled.svg'
import question from '../../../assets/question.svg'
import avatar from '../../../assets/avatar.svg'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className={s.container}>
                <p className={s.title}>Портал Разработчика</p>
                <div className={s.block}>
                    <nav className={s.navBar}>
                        <NavLink to={'/'} className={({isActive}) => isActive ? s.active : ''}>
                            Мое обучение
                        </NavLink>
                        <NavLink to={'/link'} className={({isActive}) => isActive ? s.active : ''}>
                            Задачи
                        </NavLink>
                    </nav>
                    <div className={s.buttons}>
                        <button><img src={call} alt={'icon'}/></button>
                        <button><img src={question} alt={'icon'}/></button>
                        <button><img src={filled} alt={'icon'}/></button>
                    </div>

                </div>
                <div className={s.login}>
                    <img src={avatar} alt={'avatar'}/>
                    <p>Михаил Романов</p>
                </div>
            </div>
        </header>
    );
};

