import React from 'react'
import s from './FooterContacts.module.css'


export const FooterContacts = () => {
    return <div className={s.footer}>
        <div className={s.socials}>
            <a className={s.vk}>VK</a>
            <a className={s.insta}>Insta</a>
            <a className={s.git}>GIT</a>
        </div>
    </div>


}