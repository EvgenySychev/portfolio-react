import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/Components/Title/Title";

export function Contacts() {
    return (
        <div className={style.contacts}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <Title title={'Contacts'}/>
                <form className={style.contactForm}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button type={'submit'} className={style.submitBtn}>Отправить</button>
                </form>

            </div>

        </div>
    );
}