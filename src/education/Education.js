import {Title} from "../common/Components/title/Title";
import {Activity} from "../common/Components/activity/Activity";
import style from "./Education.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {NavigateBtn} from "../common/Components/navigateBtn/NavigateBtn";


export const Education = () => {
    return (
        <div className={style.educationBlock}>
            <div className={`${styleContainer.container} ${style.educationContainer}`}>

                <Title title={'Education'}/>
                <div className={style.educationTitle}>
                    <span> STUDIED AT</span>
                </div>
                <div className={style.carousel}>
                    <NavigateBtn/>
                </div>
                <div className={style.activities}>
                    <Activity
                        date={'2004-2009'}
                        placeName={'IzhGTU'}
                        placeLocation={'IZHEVSK'}
                        description={'description about same university description about same university description about same university description about same university description about same university description about same university description about same university'}
                    />
                    <Activity
                        date={'2010-2013'}
                        placeName={'IzhGSHA'}
                        placeLocation={'IZHEVSK'}
                        description={'description about same university description about same university description about same university description about same university description about same university description about same university'}
                    />
                </div>
            </div>
        </div>

    )
}