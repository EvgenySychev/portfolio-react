import React from 'react'
import style from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1 className={style.hTitle}> I am Evgeny Sychev</h1>
                    <div>
                        <p>Frontend Developer</p>
                        <div className={style.description}>
                                Приветствие zcvzxcvzxcvzxcv zcxvzxcvzxcv zxcvzcvzxcvzxcv zxcvzxcvzxcvzx zxcvzxcvzxcv zxcvzxcvzxcv
                        </div>
                        <a>Contact me</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

