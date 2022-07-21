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
                    <input className={styles.searchInput} type="text"/>
                    <FaTimes className={styles.timesIcon}/>
                </div>
            </div>


            <div className={styles.filterMenu}>
                <div className={styles.containerMenuItemsContainer}>

                    <NavLink
                        exact
                        to="/all"
                        style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>
                        all
                    </NavLink>

                    <NavLink
                        exact
                        to="/projects"
                        style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}
                    >
                        projects
                    </NavLink>


                    <div className={styles.filterMenuItemContainer}>
                        <BsImages className={styles.filterMenuItemIcon}/>
                        <p className={styles.filterMenuItemLink}>Images</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Menu
