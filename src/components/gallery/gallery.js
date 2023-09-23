import React from "react";

import styles from "./gallery.module.css"

const Gallery = (props) => {
    
    function changeActive(e) {
        const gallery = e.currentTarget.parentElement.parentElement.parentElement
        const mainImg = gallery.querySelector(`.${styles["gallery__main-img"]}`)

        if(e.currentTarget.src === mainImg.src) {
            return
        }

        mainImg.classList.remove(styles["appear"])


        gallery.querySelector(`.${styles["active"]}`).classList.remove(styles["active"])
        e.currentTarget.classList.add(styles["active"])

        mainImg.src = e.currentTarget.src

        setTimeout(() => {
            mainImg.classList.add(styles["appear"]);
        }, 10);
    }

    return (
        <div className={styles["gallery"]}>
            <div className={styles["gallery__main-img-holder"]}>
                <img className={styles["gallery__main-img"]} src={`./images/${props.imgNames[0]}`} alt="main image of gallery" />
            </div>

            <div className={styles["gallery__imgs-holder"]}>
                {props.imgNames.map((imgName, i) => {
                    return (
                        <div key={i} className={styles["gallery__img-holder"]}>
                            <img onClick={changeActive} className={`${styles["gallery__img"]}${i === 0 ? ` ${styles["active"]}` : ""}`} src={`./images/${imgName}`} alt={`image number ${i} of the gallery`} />
                        </div>
                    )
                })} 
            </div>

        </div>
    )
}

export default Gallery