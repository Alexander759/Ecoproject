import React from "react";
import styles from "./carouselSlide.module.css"

const CarouselSlide = (props) => {
    return (
        <div className={`${props.styles["slide"]}${props.dataNumber === 0 ? ` ${props.styles["active"]}` : ""}`} data-number={props.dataNumber}>
            <img className={styles["slide__img"]} src={`./images/${props.nameOfImage}`} alt={props.alt} />
            
            <div className={styles["slide__title-holder"]}>
                <h1 className={styles["slide__title"]}>{props.title}</h1>
            </div>
        </div>
    )
}

export default CarouselSlide;