import React from 'react'
import style from './Title.module.scss';



export function Title(props) {
    return (
        <div>
            <h2 className={style.title}>
                {props.title}
            </h2>
            <div className={style.subTitle}>
                <span> {props.subTitle}</span>
            </div>
        </div>

    );
}