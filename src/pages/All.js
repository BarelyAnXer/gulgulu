import React, {useState} from 'react'
import Menu from '../components/Menu'
import styles from "./All.module.css"
import {AiOutlineDown} from "react-icons/ai";
import Footer from "../components/Footer";
import {accordionQnA} from "../data/accordionQnA"
import {results} from "../data/results";


function All() {

    const initAccordionState = () => {
        const obj = {};
        accordionQnA.forEach((item, index) => {
            obj[item.question] = false;
        });

        return obj;
    }

    const [selected, setSelected] = useState(initAccordionState());


    return (
        <>
            <Menu/>

            <p className={styles.resultCount}>About 18 results (0.67 seconds)</p>

            <div className={styles.results}>

                {results.map((item, index) => {
                    return (
                        <>
                            <div className={styles.card}>
                                <p className={styles.link}>{item.link}</p>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.details}>{item.content}</p>
                            </div>
                        </>
                    )
                })}

                <div className={styles.card}>
                    <p className={styles.peopleAsk}>People also ask</p>
                    {accordionQnA.map((item, index) => {
                        return (
                            <>
                                <div className={styles.accordion}>
                                    <div className={styles.accordionItem} onClick={() => {
                                        return setSelected(prevState => ({
                                            ...prevState,
                                            [item.question]: !prevState[item.question]
                                        }))
                                    }
                                    }>
                                        <p className={styles.accordionQuestion}>{item.question}</p>
                                        <AiOutlineDown
                                            className={`${selected[item.question] ? styles.outlineDownOpen : ""}`}/>
                                    </div>
                                    <div>
                                        <p className={`${styles.accordionContent} ${selected[item.question] ? styles.show : ""}`}>
                                            {item.answer}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>

                <div className={styles.card}>
                    <p className={styles.link}>https://test.com > test</p>
                    <p className={styles.title}>Me, Myself and I</p>
                    <p className={styles.details}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        debitis
                        distinctio dolore error esse inventore ipsa itaque iure minima nesciunt nobis obcaecati optio,
                        quae
                        qui quia ratione recusandae sit tenetur.</p>
                </div>


            </div>
            <Footer/>
        </>
    );
}

export default All
