import styles from './Footer.module.css'

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
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Blog</a>
                    <a href="">Email</a>
                </div>
                <div className={styles.footerLinksSection}>
                    <a href="#">Github</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Email</a>
                </div>
            </div>
        </div>
    );
}

export default Footer
