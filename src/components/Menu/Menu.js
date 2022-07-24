import React from 'react'
import styles from './Menu.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaBriefcase, FaTimes} from 'react-icons/fa'
import {BsImages} from "react-icons/bs";
import {BiNews} from "react-icons/bi"

import TextLogo from '../TextLogo'
import {NavLink} from "react-router-dom";

const Menu = () => {
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
                    <NavLink exact
                             to='/all'
                             className={({isActive}) => isActive ? `${styles.filterMenuItemContainer} ${styles.filterMenuItemContainerActive}` : styles.filterMenuItemContainer}>
                        {({isActive}) => (
                            <>
                                <AiOutlineSearch
                                    className={isActive ? `${styles.filterMenuItemIcon} ${styles.filterMenuItemIconActive}` : styles.filterMenuItemIcon}/>
                                <p className={isActive ? `${styles.filterMenuItemLink} ${styles.filterMenuItemLinkActive}` : styles.filterMenuItemLink}>All</p>
                            </>
                        )}
                    </NavLink>
                    <NavLink exact
                             to='/projects'
                             className={({isActive}) => isActive ? `${styles.filterMenuItemContainer} ${styles.filterMenuItemContainerActive}` : styles.filterMenuItemContainer}>
                        {({isActive}) => (
                            <>
                                <FaBriefcase
                                    className={isActive ? `${styles.filterMenuItemIcon} ${styles.filterMenuItemIconActive}` : styles.filterMenuItemIcon}/>
                                <p className={isActive ? `${styles.filterMenuItemLink} ${styles.filterMenuItemLinkActive}` : styles.filterMenuItemLink}>Projects</p>
                            </>
                        )}
                    </NavLink>
                    <NavLink exact
                             to='/images'
                             className={({isActive}) => isActive ? `${styles.filterMenuItemContainer} ${styles.filterMenuItemContainerActive}` : styles.filterMenuItemContainer}>
                        {({isActive}) => (
                            <>
                                <BsImages
                                    className={isActive ? `${styles.filterMenuItemIcon} ${styles.filterMenuItemIconActive}` : styles.filterMenuItemIcon}/>
                                <p className={isActive ? `${styles.filterMenuItemLink} ${styles.filterMenuItemLinkActive}` : styles.filterMenuItemLink}>Images</p>
                            </>
                        )}
                    </NavLink>
                    <NavLink exact
                             to='/blog'
                             className={({isActive}) => isActive ? `${styles.filterMenuItemContainer} ${styles.filterMenuItemContainerActive}` : styles.filterMenuItemContainer}>
                        {({isActive}) => (
                            <>
                                <BiNews

                                    className={isActive ? `${styles.filterMenuItemIcon} ${styles.filterMenuItemIconActive}` : styles.filterMenuItemIcon}/>
                                <p className={isActive ? `${styles.filterMenuItemLink} ${styles.filterMenuItemLinkActive}` : styles.filterMenuItemLink}>Blog</p>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Menu
