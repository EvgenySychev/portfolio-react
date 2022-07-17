import React from 'react'
import style from './Main.module.scss';
import stylesContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={style.text}>
                    {/*<span>Hi There</span>*/}
                    <h1 className={style.hTitle}>
                        <span>
                            Evgeny
                        <br/>
                            Sychev
                        </span>
                    </h1>
                    <div className={style.startedContent}>
                        <p>Frontend Developer</p>
                        <div className={style.description}>
                            Приветствие zcvzxcvzxcvzxcv zcxvzxcvzxcv zxcvzcvzxcvzxcv zxcvzxcvzxcvzx zxcvzxcvzxcv
                            zxcvzxcvzxcv
                        </div>
                        <button className={style.btnContact}>
                            <span className={style.animatedBtn}>
                                <span>
                                    <em>C</em>
                                    <em>o</em>
                                    <em>n</em>
                                    <em>t</em>
                                    <em>a</em>
                                    <em>c</em>
                                    <em>t</em>
                                    <em> </em>
                                    <em>m</em>
                                    <em>e</em>
                                </span>
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
}

