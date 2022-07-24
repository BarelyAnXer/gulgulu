import Menu from "../components/Menu";
import styles from "./Blog.module.css"
import test from "../images/news/techCruch.webp"
import test2 from "../images/projects/1.webp"
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <>
            <Menu/>

            <div className={styles.blogs}>
                <a className={styles.blogCard}>
                    <div className={styles.blogTextContainer}>
                        <div className={styles.blogCategory}>
                            <img src={test}
                                 alt=""
                                 className={styles.blogIcon}/>
                            <p className={styles.blogSource}>Tech Crunch</p>
                        </div>
                        <p className={styles.blogTitle}>Some Fuckign Title Lorem ipsum dolor sit
                            amet.</p>
                        <p className={styles.blogExcerpt}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusantium architecto cupiditate dicta et facere
                            inventore nam nisi numquam quis voluptatem!</p>
                        <p className={styles.blogDate}>15 hrs ago</p>
                    </div>
                    <div className={styles.blogImageContainer}>
                        <img src={test2}
                             className={styles.image}
                             alt=""/>
                    </div>
                </a>

            </div>


            <Footer/>

        </>
    );
}

export default Blog
