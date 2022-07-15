import style from "./NavigateBtn.module.scss"

export const NavigateBtn = () => {
    return (
        <div className={style.navs}>
            <span className={style.prevBtn}>{'<'}</span>
            <span className={style.nextBtn}>{'>'}</span>
        </div>
    )
}