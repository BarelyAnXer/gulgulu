import React from 'react'
import styles from './Menu.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaBriefcase, FaTimes} from 'react-icons/fa'
import {BsImages} from "react-icons/bs";
import {BiNews} from "react-icons/bi"

import TextLogo from '../TextLogo'
import {NavLink} from "react-router-dom";
import {homeDropdownContent} from "../../data/homeDropdownContent";

const Menu = () => {

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
