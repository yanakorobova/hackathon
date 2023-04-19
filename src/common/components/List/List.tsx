import React from 'react';
import s from './List.module.scss';
import {SuperButton} from "../SuperButton/SuperButton";
import {ButtonNameType, DataListType} from "../../types/types";
import iconCheck from '../../../assets/iconCheck.svg'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {styleBar} from "../Theme/Themes";

type ListTypeProps = {
    data: DataListType
}
export const List: React.FC<ListTypeProps> = ({data}) => {
    const {title, list, status, countTasks, countCompletedTasks} = data

    const nameButton: ButtonNameType = status === 'completed' ? 'Пройти заново' :
        status === 'start' ? 'Начать' : 'Продолжить тему'
    const progress = countCompletedTasks && countTasks && countCompletedTasks/countTasks*100;
    return (
        <div className={s.list}>
            <div className={s.description}>
                <div className={s.text}>
                    <span className={s.title}>{title}</span>
                    <ul>
                        {list[0]}
                        <li>
                            {list[1]}
                        </li>
                    </ul>
                    <span>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</span>
                </div>
                <div className={s.containerButton}>
                    <SuperButton xType={status}>{nameButton}</SuperButton>
                    <div className={s.check}>
                        {status === 'completed' ?
                            <>
                                <div className={s.completed}>
                                    <img src={iconCheck} alt={"chrckIcon"}/>
                                </div>
                            </> : status === 'start' ?
                                <>
                                    <span>{countTasks} <span className={s.z}>заданий</span></span>
                                </>
                                : <>
                                    <div>
                                        <span>{countCompletedTasks}/{countTasks} <span className={s.z}>заданий</span></span>
                                        <CircularProgressbar value={progress || 0}  className={s.progressBar} styles={buildStyles(styleBar)}/>
                                    </div>
                                </>
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

