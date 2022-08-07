import Menu from "../components/Menu";
import styles from "./Projects.module.css"
import {projects} from "../data/projects";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Menu/>

            <p className={styles.resultCount}>About 11 results (0.84 seconds)</p>

            <div className={styles.projectsContent}>
                {projects.map((item) => {
                    return (
                        <div className={styles.projectCard}>
                            <a href={item.link}
                               className={styles.projectCardHeader}>
                                <p className={styles.projectLink}>{item.link}</p>
                                <h3 className={styles.projectTitle}>{item.title}</h3>
                            </a>

                            <div className={styles.projectDetails}>
                                <div className={styles.imgContainer}>
                                    <img src={item.img}
                                         className={styles.image}
                                         alt=""/>
                                </div>
                                <div className={styles.projectTextContainer}>
                                    <p className={styles.projectExcerpt}>{item.content}</p>
                                    <p className={styles.projectTechnology}>{item.technologyStack}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Footer/>
        </>
    );
}

export default Projects
