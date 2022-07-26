import Menu from "../components/Menu";
import styles from "./Blog.module.css"
import Footer from "../components/Footer";
import {news} from "../data/news";
import {Link} from "react-router-dom";

const Blog = () => {
    return (
        <>
            <Menu/>

            <div className={styles.blogs}>
                {news.map((item) => {
                    return (
                        <a className={styles.blogCard}
                           href={item.link}
                           target="_blank">
                            <div className={styles.blogTextContainer}>
                                <div className={styles.blogCategory}>
                                    <img src={item.icon}
                                         alt=""
                                         className={styles.blogIcon}/>
                                    <p className={styles.blogSource}>{item.provider}</p>
                                </div>
                                <p className={styles.blogTitle}>{item.title}</p>
                                <p className={styles.blogExcerpt}>{item.content}</p>
                                <p className={styles.blogDate}>{item.time}</p>
                            </div>
                            <div className={styles.blogImageContainer}>
                                <img src={item.image}
                                     className={styles.image}
                                     alt=""/>
                            </div>
                        </a>
                    )
                })}

            </div>


            <Footer/>

        </>
    );
}

export default Blog
