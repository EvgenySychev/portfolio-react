import React from 'react'
import style from './Work.module.css';

export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button>Смотреть</button>
            </div>
            <div>
                <h3 className={style.header}> {props.title} </h3>
                <span className={style.text}> {props.description} </span>
            </div>
        </div>
    );
}