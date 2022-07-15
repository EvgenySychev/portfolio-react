import {Title} from "../common/Components/title/Title";
import {Activity} from "../common/Components/activity/Activity";
import style from "./Experience.module.scss"
import styleContainer from "../common/styles/Container.module.css";

export const Experience = () => {
    return (
        <div className={style.experienceBlock}>
            <div className={`${styleContainer.container} ${style.experienceContainer}`}>
                <Title title={'Experience'}/>
                <div className={style.experienceTitle}>
                    <span> WORKING WITH</span>
                </div>
                <div className={style.activities}>
                    <Activity
                        date={'Present'}
                        placeName={'ASPEC-Otkrytie'}
                        placeLocation={'IZHEVSK'}
                        description={'description about same work place description about same work place description about same work place description about same work place description about same work place'}
                    />
                    <Activity
                        date={'2009-2018'}
                        placeName={'ASPEC-Drive'}
                        placeLocation={'IZHEVSK'}
                        description={'description about same work place description about same work place description about same work place description about same work place description about same work place'}
                    />
                </div>

            </div>
        </div>

    )
}