import React from 'react'
import styles from './Menu.module.css'
import styles2 from "../Header/Header.module.css"

import {AiOutlineSearch} from 'react-icons/ai'
import {FaBriefcase, FaTimes} from 'react-icons/fa'
import {BsImages} from "react-icons/bs";
import {BiNews} from "react-icons/bi"

import TextLogo from '../TextLogo'
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.jpg";
import {HiUserAdd} from "react-icons/hi";
import {useState} from "react";
import {CgMenuGridO} from "react-icons/cg";
import {homeDropdownContent} from "../../data/homeDropdownContent";

const Menu = () => {

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

    const navLinks = [
        {
            name: "All",
            route: "/all",
            icon: AiOutlineSearch
        },
        {
            name: "Projects",
            route: "/projects",
            icon: FaBriefcase
        },
        {
            name: "Images",
            route: "/images",
            icon: BsImages
        },
        {
            name: "Blog",
            route: "/blog",
            icon: BiNews
        },
    ]


    return (
        <>
            <div className={styles.container}>
                <TextLogo fontSize="2rem"/>
                <div className={styles.search}>
                    <AiOutlineSearch className={styles.searchIcon}/>
                    <input className={styles.searchInput}
                           type="text"/>
                    <FaTimes className={styles.timesIcon}/>
                </div>


                <div className={styles.bentoProfileContainer}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px"
                    }}>
                        <div className={styles2.bentoMenuContainer}
                             onClick={onBentoClick}>
                            <CgMenuGridO className={styles2.bentoMenu}/>
                        </div>

                        <div className={styles2.logoContainer}
                             onClick={onProfileClick}>
                            <img src={logo}
                                 alt=""
                                 className={styles2.logo}/>
                            <div className={styles2.profileTooltip}>
                                <p>Google Account</p>
                                <p>Christian Gazzignan</p>
                                <p>christiangazzingan38@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    <div className={`${styles2.dropdown} ` +
                        (isBentoMenuClicked ? '' : styles2.dropdownOpen)}>
                        <div className={styles2.dropdownItems}>
                            {homeDropdownContent.map((item) => {
                                return (
                                    <a href={item.link}
                                       className={styles2.dropdownItem}>
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

                    <div className={styles2.profileDropdown}
                         style={{
                             visibility: isProfileClicked ? 'visible' : 'hidden',
                         }}>
                        <img src={logo}
                             alt=""
                             className={styles2.dropdownProfile}/>
                        <p className={styles2.dropdownName}>Christian Gazzingan</p>
                        <p className={styles2.dropdownEmail}>christiangazzingan38@gmail.com</p>
                        <a href="#"
                           className={styles2.contentLink}>View My Another Website</a>

                        <a href="#"
                           className={styles2.sectionTwoContainer}>
                            <HiUserAdd className={styles2.sectionTwoIcon}/>
                            <p className={styles2.sectionTwoLink}>More About me</p>
                        </a>

                        <div className={styles2.sectionThreeContainer}>
                            <a href="#"
                               className={styles2.sectionThreeButtonLink}>Github</a>
                        </div>

                        <div className={styles2.sectionFourContainer}>
                            <span><a className={styles2.sectionFourLink}>View code</a></span>
                            <span>&nbsp;•&nbsp;</span>
                            <span><a className={styles2.sectionFourLink}>Blog & news</a></span>
                        </div>
                    </div>


                </div>
            </div>


            <div className={styles.filterMenu}>
                <div className={styles.containerMenuItemsContainer}>
                    {navLinks.map(((item, index) => {
                        const Icon = navLinks[index].icon;
                        return (
                            <NavLink
                                key={item.route}
                                to={item.route}
                                className={({isActive}) => isActive
                                    ? `${styles.filterMenuItemContainer} ${styles.filterMenuItemContainerActive}`
                                    : styles.filterMenuItemContainer}>
                                {({isActive}) => (
                                    <>
                                        <Icon
                                            className={isActive ? `${styles.filterMenuItemIcon} ${styles.filterMenuItemIconActive}` : styles.filterMenuItemIcon}/>
                                        <p className={isActive ? `${styles.filterMenuItemLink} ${styles.filterMenuItemLinkActive}` : styles.filterMenuItemLink}>{item.name}</p>
                                    </>
                                )}
                            </NavLink>
                        )
                    }))}
                </div>
            </div>


        </>
    );
}

export default Menu
