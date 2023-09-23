import React from "react";
import styles from "./heading.module.css"

const Heading = (props) => {
    return (
        <div className={`${styles["header"]}${props.className ? ` ${props.className}` : ""}`}>
            <h1 className={`${styles["heading"]}${props.headingClass ? ` ${props.headingClass}` : ""}`}>{props.title}</h1>
            <hr className={`${styles["heading-hr"]}${props.hrClass ? ` ${props.hrClass}` : ""}`}></hr>
        </div>
    )
}

export default Heading