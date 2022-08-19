import styles from './Header.module.css'
import logo from '../../images/logos/logo.jpg'
import {CgMenuGridO} from 'react-icons/cg'
import {HiUserAdd} from 'react-icons/hi'
import {useState} from 'react'
import {homeDropdownContent} from '../../data/homeDropdownContent'
import {Link} from "react-router-dom";

const Header = () => {

  const [isBentoMenuClicked, setIsBentoMenuClicked] = useState(false)
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  const onBentoClick = () => {
    setIsBentoMenuClicked(prevState => !prevState)
    setIsProfileClicked(false)
  }

  const onProfileClick = () => {
    setIsProfileClicked(prevState => !prevState)
    setIsBentoMenuClicked(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Link to="#"
              className={styles.link}
              onClick={(e) => {
                window.location.href = "christiangazzingan38@gmail.com";
                e.preventDefault();
              }}>Email</Link>
        <Link target="_blank"
              className={styles.link}
              to={"//github.com/"}>Github</Link>
        <div className={styles.bentoMenuContainer}
             onClick={onBentoClick}>
          <CgMenuGridO className={styles.bentoMenu}/>
        </div>

        <div className={styles.logoContainer}
             onClick={onProfileClick}>
          <img src={logo}
               alt=""
               className={styles.logo}/>
          <div className={styles.profileTooltip}>
            <p>Google Account</p>
            <p>Christian Gazzignan</p>
            <p>christiangazzingan38@gmail.com</p>
          </div>
        </div>
      </div>

      <div className={`${styles.dropdown} ` +
        (isBentoMenuClicked ? '' : styles.dropdownOpen)}>
        <div className={styles.dropdownItems}>
          {homeDropdownContent.map((item) => {
            return (
              <a href={item.link}
                 className={styles.dropdownItem}>
                <img src={item.img}
                     alt=""
                     style={{
                       width: '40px',
                     }}/>
                {item.name}
              </a>
            )
          })}
        </div>
      </div>

      <div className={styles.profileDropdown}
           style={{
             visibility: isProfileClicked ? 'visible' : 'hidden',
           }}>
        <img src={logo}
             alt=""
             className={styles.dropdownProfile}/>
        <p className={styles.dropdownName}>Christian Gazzingan</p>
        <p className={styles.dropdownEmail}>christiangazzingan38@gmail.com</p>
        <a href="#"
           className={styles.contentLink}>View My Another Website</a>

        <a href="#"
           className={styles.sectionTwoContainer}>
          <HiUserAdd className={styles.sectionTwoIcon}/>
          <p className={styles.sectionTwoLink}>More About me</p>
        </a>

        <div className={styles.sectionThreeContainer}>
          <a href="#"
             className={styles.sectionThreeButtonLink}>Github</a>
        </div>

        <div className={styles.sectionFourContainer}>
          <span><a className={styles.sectionFourLink}>View code</a></span>
          <span>&nbsp;•&nbsp;</span>
          <span><a className={styles.sectionFourLink}>Blog & news</a></span>
        </div>
      </div>


    </div>
  )
}

export default Header
