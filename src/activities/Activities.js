import {Title} from "../common/Components/title/Title";
import style from "./Activities.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {NavigateBtn} from "../common/Components/navigateBtn/NavigateBtn";
import {ActivityBlock} from "../common/Components/activity/ActivityBlock";


export const Activities = (props) => {
    return (
        <div className={style.educationBlock}>
            <div className={`${styleContainer.container} ${style.educationContainer}`}>

                <Title title={props.title}
                       subTitle={props.subTitle}/>
                <div className={style.carousel}>
                    <NavigateBtn/>
                </div>
                <div >
                    <ActivityBlock title={props.title}/>
                </div>
            </div>
        </div>

    )
}