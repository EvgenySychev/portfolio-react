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
                    <Skill title = {"JS"} description={"11111111111"}/>
                    <Skill title = {"CSS"} description={"222222222222"}/>
                    <Skill title = {"REACT"} description={"33333333333"}/>
                </div>
            </div>
        </div>
    );
}