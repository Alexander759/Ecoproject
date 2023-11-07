import React, { useEffect, useRef, useState } from "react";
import styles from "./faqElement.module.css"

const FaqElement = (props) => {

    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const showAnswer = () => {
        setIsAnswerVisible(prev => !prev)
    }

    return (
        <div className={`${styles["faq-element"]}${props.className ? ` ${props.className}` : ""}`}>
            <div onClick={showAnswer} className={styles["faq-element__header"]}>
                <h2 className={styles["faq-element__question"]}>{props.question}</h2>
                <svg className={`${styles["faq-element__svg"]}${isAnswerVisible ? ` ${styles["faq-element__svg-active"]}` : ""}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            </div>

            <div className={`${styles["faq-element__answer"]}${isAnswerVisible ? ` ${styles["active"]}` : ""}`}>
                {props.answer}
            </div>
        </div>
    )
}

export default FaqElement;