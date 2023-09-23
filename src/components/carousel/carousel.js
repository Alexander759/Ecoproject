import React from "react";
import CarouselSlide from "../carouselSlide/carouselSlide";
import styles from './carousel.module.css'


let currentCarouselNumber = 0

const Carousel = (props) => {

    const carouselNumber = currentCarouselNumber
    currentCarouselNumber++;

    let currentSlide = 0
    const numberOfSlides = props.namesAndTitlesOfImages.length

    let isChanging = false

    let timeoutHandle = setInterval(() => next(), 5000)

    function next() {
        
        if(isChanging) {
            return
        }

        isChanging = true

        clearTimeout(timeoutHandle)
        timeoutHandle = setInterval(() => next(), 5000)

        currentSlide++;

        if(currentSlide >= numberOfSlides){
            currentSlide = 0
        }

        const lastActive = document.querySelector(`#carousel-number-${carouselNumber} .${styles["active"]}`)
        const newActive = document.querySelectorAll(`#carousel-number-${carouselNumber} .${styles["slide"]}`)[currentSlide]

        if(!lastActive){
            isChanging = false
            return
        }

        lastActive.classList.remove(styles["active"])
        newActive.classList.add(styles["active"])
        newActive.classList.add(styles["appear-right"])
        lastActive.classList.add(styles["disappear-left"])

        setTimeout(() => {
            lastActive.classList.remove(styles["disappear-left"])
            newActive.classList.remove(styles["appear-right"])
            isChanging = false
        }, 1000)

    }

    function prev() {

        if(isChanging) {
            return
        }

        isChanging = true

        clearTimeout(timeoutHandle)
        timeoutHandle = setInterval(() => next(), 5000)

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = numberOfSlides - 1
        }

        const lastActive = document.querySelector(`#carousel-number-${carouselNumber} .${styles["active"]}`)
        const newActive = document.querySelectorAll(`#carousel-number-${carouselNumber} .${styles["slide"]}`)[currentSlide]

        if(!lastActive){
            isChanging = false
            return
        }

        lastActive.classList.remove(styles["active"])
        newActive.classList.add(styles["active"])
        newActive.classList.add(styles["appear-left"])
        lastActive.classList.add(styles["disappear-right"])

        setTimeout(() => {
            lastActive.classList.remove(styles["disappear-right"])
            newActive.classList.remove(styles["appear-left"])
            isChanging = false
        }, 1000)
    }

    return (
        <div className={`${styles["carousel"]}${props.className ? ` ${props.className}` : ""}`} id={`carousel-number-${carouselNumber}`}>
            <div className={styles["carousel__slides-holder"]}>
                {props.namesAndTitlesOfImages.map((item, i) => 
                <CarouselSlide
                    key={carouselNumber + " " + i}
                    nameOfImage={item.nameOfImage} 
                    alt = {`image number ${i + 1} of a carousel`}
                    title = {item.title}
                    dataNumber={i}
                    styles={styles}
                    />)}
            </div>

            <div className={styles["carousel__controllers-holder"]}>
                <div className={styles["carousel__prev"]} onClick={prev}>
                &#10094;
                </div>
                <div className={styles["carousel__next"]} onClick={next}>
                &#10095;
                </div>
            </div>

        </div>
    )
}

export default Carousel;