import React from 'react';
import {Themes} from "../Theme/Themes";
import './Main.module.scss'
import {PathDeveloper} from "../PathDeveloper/PathDeveloper";
import {CatalogThemes} from "../Catalog/CatalogThemes";

export const Main = () => {
    return (
        <main>
            <div>
                <Themes/>
                <PathDeveloper/>
                <CatalogThemes/>
            </div>
        </main>
    );
};

