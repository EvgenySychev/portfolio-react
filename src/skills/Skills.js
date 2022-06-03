import React from 'react'
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>
                    Skils
                </h2>
                <div className={style.skills}>
                    <Skill title = {"JS"} description={"1111111111111 1111111111111 1111111111111111"}/>
                    <Skill title = {"CSS"} description={"2222222222222222 22222222222222 222222222222"}/>
                    <Skill title = {"REACT"} description={"3333333333333333 33333333333333 333333333333"}/>
                    <Skill title = {"HTML"} description={"44444444444444444 44444444444444 44444444444"}/>
                    <Skill title = {"TS"} description={"55555555555555555 5555555555555 555555555555"}/>
                </div>
            </div>
        </div>
    );
}