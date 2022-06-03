import React from 'react'
import style from './RemoteWork.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function RemoteWork() {
    return (
        <div className={style.remoteWork}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <h3> Рассматриваю варианты удаленной работы</h3>
                <button>Нанять меня</button>
            </div>

        </div>
    );
}