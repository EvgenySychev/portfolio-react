import React from 'react'
import style from './Work.module.css';

export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.viewBtn} onClick={() => console.log('btn')}>Смотреть</button>
            </div>
            <div>
                <h3 className={style.header}> {props.title} </h3>
                <span className={style.description}> {props.description} </span>
            </div>
        </div>
    );
}