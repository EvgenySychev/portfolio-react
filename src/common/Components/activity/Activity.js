import style from "./Activity.module.scss"

export const Activity = (props) => {
    return (
        <div>
            <div className={style.activityBlock}>
                <div className={style.item}>
                    <div className={style.date}>
                        <span>{props.date}</span>
                    </div>
                    <div className={style.name}>
                        <span>
                            {props.placeName}
                            <br/>
                            {props.placeLocation}
                        </span>
                    </div>
                    <div className={style.description}>
                        <div>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}