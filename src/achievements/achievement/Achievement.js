import style from './Achievement.module.scss'

export const Achievement = (props) => {
    return (
        <div className={style.achievementBlock}>
            <div className={style.item}>
                <div >
                    <span> {props.title} </span>
                </div>
                <div>
                    <div className={style.description}>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}