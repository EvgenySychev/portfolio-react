import React from 'react'
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function Footer() {
    return (
        <div className={style.footer}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <h3 className={style.title}>Evgeny Sychev</h3>
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