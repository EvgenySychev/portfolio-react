import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function Contacts() {
    return (
        <div className={style.contacts}>
            <div className= {`${styleContainer.container} ${style.block}`}>
                <h3 className={style.title}>Контакты</h3>
                <form className={style.formBlock}>
                    <input />
                    <input />
                    <textarea></textarea>
                </form>
                <button>Отправить</button>
            </div>

        </div>
    );
}