import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";
import frontImg from './assets/image/SychFull — copy.jpg'
import s from './App.module.scss'
import {FooterContacts} from "./footerContacts/FooterContacts";
import {Story} from "./story/Story";
import {Experience} from "./experience/Experience";
import {Education} from "./education/Education";

function App() {

    return (
    <div className={s.container}>
        <header >
            <Header/>
        </header>
        <div className={s.wrapper}>
            <div className={s.frontImg}>
                <div className={s.circle}>
                    <img className={s.backgroundImg} src={frontImg}/>
                </div>

            </div>
            <div >
                <Main/>
                <Story/>
                <Skills/>
                <Works/>
                <Experience/>
                <Education/>
                {/*<RemoteWork/>*/}
                <Contacts/>
                <Footer/>
            </div>
        </div>

        <footer >
            <FooterContacts/>
        </footer>
    </div>

    );
}

export default App;
