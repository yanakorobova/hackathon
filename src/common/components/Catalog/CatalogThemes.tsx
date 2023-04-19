import React from 'react';
import s from "./CatalogThemes.module.scss";
import {List} from "../List/List";
import {catalogData} from "./CatalogData";

export const CatalogThemes = () => {
    const listThemes = catalogData.map(el => <List key={el.id} data={el}/>)
    return (
        <div className={s.container}>
            <p className={s.title}>Каталог тем</p>
            <div className={s.buttonsContainer}>
                <button>Все</button>
                <button>Рабочая среда</button>
                <button>Библиотеки</button>
                <button>Пройденные</button>
                <button>Не пройденные</button>
            </div>
            <div className={s.cards}>
                {listThemes}
            </div>
        </div>
    );
};

