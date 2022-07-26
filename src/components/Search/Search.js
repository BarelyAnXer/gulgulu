import React, {useState} from 'react'
import styles from './Search.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import {BiHistory} from 'react-icons/bi'
import {Link} from "react-router-dom";

function Search() {

    const [isFocused, setIsFocused] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const onFocusSearchInput = () => {
        setIsFocused(true)
    }
    const onBlurSearchInput = () => {
        // links will not work if no delay since nawawala kagad yung links
        // bago mag redirect
        setTimeout(function () {
            setIsFocused(false)
        }, 100);
    };

    const links = [
        {
            name: "All",
            route: "/all",
        },
        {
            name: "Projects",
            route: "/projects",
        },
        {
            name: "Images",
            route: "/images",
        },
        {
            name: "News",
            route: "/blog",
        }
    ];

    return (
        <>
            <div
                style={{
                    height: isFocused ? 'auto' : '50px',
                }}
                className={styles.search}>
                <div className={styles.searchInputContainer}>
                    <AiOutlineSearch className={styles.searchIcon}/>
                    <input type="text"
                           className={styles.searchInput}
                           onChange={(event) => setSearchValue(event.target.value)}
                           onFocus={onFocusSearchInput}
                           onBlur={onBlurSearchInput}
                           value={searchValue}/>
                    <FaTimes style={{
                        visibility: (searchValue === '') ? 'hidden' : 'visible',
                    }}
                             className={styles.removeIcon}
                             onClick={() => setSearchValue('')}/>
                </div>

                {/*<hr style={{*/}
                {/*  display: isFocused ? 'block' : 'none',*/}
                {/*}}/>*/}

                <div style={{
                    display: isFocused ? 'block' : 'none',
                }}>
                    {
                        links.map((item) => {
                            return (<>
                                <Link to={item.route}
                                      onFocus={onFocusSearchInput}
                                      className={styles.searchOptionContainer}>
                                    <BiHistory/>
                                    <p className={styles.searchOptionName}>{item.name}</p>
                                    <p className={styles.remove}>Remove</p>
                                </Link>
                            </>)
                        })
                    }
                    <div className={styles.searchButtonsContainer}>
                        <div className={styles.searchButton}>Search Website</div>
                        <div className={styles.searchButton}>I'm Feeling Lucky</div>
                    </div>
                </div>
            </div>

            <div className={styles.searchButtonsContainer}
                 style={{
                     display: isFocused ? 'none' : 'flex',
                 }}>
                <div className={styles.searchButton}>Search Website</div>
                <div className={styles.searchButton}>I'm Feeling Lucky</div>
            </div>

        </>
    )
}

export default Search
