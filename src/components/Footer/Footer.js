import styles from './Footer.module.css'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div style={{
      marginTop: "auto",
    }}>
      <div className={`${styles.container} ${styles.underline} `}>
        <p className={styles.location}>Philippines</p>
      </div>

      <div className={`${styles.footerLinksContainer} ${styles.container}`}>
        <div className={styles.footerLinksSection}>
          <Link to="/all">All</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/images">Images</Link>
          <Link to="/blog">News</Link>
        </div>
        <div className={styles.footerLinksSection}>
          <Link target="_blank"
                to={"https://github.com/BarelyAnXer"}>Github</Link>
          <Link target="_blank"
                to={"//www.linkedin.com/in/christian-gazzingan//"}>LinkedIn</Link>
          <a href="mailto:christiangazzingan38@gmail.com">Email Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer
