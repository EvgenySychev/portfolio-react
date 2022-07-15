import React from 'react'
import style from './Title.module.scss';



export function Title(props) {
    return (
                <h2 className={style.title}>
                    {props.title}
                </h2>
    );
}