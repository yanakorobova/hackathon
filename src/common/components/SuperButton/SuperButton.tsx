import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.scss';
import {StatusType} from "../../types/types";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: StatusType
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({xType, ...restProps}) => {
    const buttonStyle = s.button + (xType === 'completed' ? ' ' + s.completed : ' ')
    return (
        <button
            className={buttonStyle}
            {...restProps}
        />
    );
};
