import Menu from "../components/Menu";
import styles from "./Images.module.css"
import {projects} from "../data/projects";

const Images = () => {
    return (
        <>
            <Menu/>
            <div className={styles.imagesContents}>
                {projects.map(item => {
                    return (
                        <div className={styles.imagesCard}>
                            <a href={item.link}>
                                <img src={item.img}
                                     className={styles.image}
                                     alt=""/>
                            </a>
                            <a href={item.link}
                               className={styles.text}>
                                <p className={styles.textTitle}>{item.title}</p>
                                <p className={styles.textLink}>{item.link}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Images
