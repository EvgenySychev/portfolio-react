import React from 'react'
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/Components/Title/Title";

export function Footer() {
    return (
        <div className={style.footer}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <Title title={'Evgeny Sychev'}/>
                <div className={style.iconBlock}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>2022 Все права защищены</span>
            </div>

        </div>
    );
}