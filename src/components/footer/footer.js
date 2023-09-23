import React from "react";
import styles from './footer.module.css'
import Heading from "../heading/heading";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>

                <Heading  
                className={styles["footer__header"]}
                headingClass={styles["footer__heading"]}
                hrClass={styles["footer__hr"]}
                title="За връзка с нас"
                />

                <div className={styles["footer__main"]}>
                    <div className={styles["footer__box"]}>
                        <p className={styles["footer__para"]}>
                            Адрес:&nbsp;
                            <a className={styles["footer__site-link"]} href="https://goo.gl/maps/V1YwNApEkXoWiK2r6" target="_blank">
                                гр. София, кв. Лозенец, ул. Димитър Хаджикоцев 114, офис 1
                            </a>
                        </p>
                    </div>

                    <div className={styles["footer__box"]}>
                        <p className={styles["footer__para"]}>
                            Имейл: <a className={styles["footer__email-link"]}  href="mailto:ivanov@ecoproject-bg.com">ivanov@ecoproject-bg.com</a>
                        </p>

                        <p className={styles["footer__para"]}>
                            Тел. <a className={styles["footer__phone-link"]} href="tel:+359899895162">+359 89 989 5162;</a>&nbsp;
                            <a  className={styles["footer__phone-link"]}href="tel:+359896630990">+359 89 663 0990;</a>
                        </p>
                    </div>


                    <div className={styles["footer__box"]}>
                        <p className={styles["footer__para"]}>
                            Имейл: <a className={styles["footer__email-link"]}  href="mailto:ivanov@ecoproject-bg.com">office@ecoproject-bg.com</a>
                        </p>

                        <p className={styles["footer__para"]}>
                            Тел. <a  className={styles["footer__phone-link"]} href="+359892444230">+359 89 244 4230;</a>&nbsp;
                            <a  className={styles["footer__phone-link"]} href="+359898489395">+359 89 848 9395</a>;
                        </p>
                    </div>
                </div>

        </footer>
    )
}

export default Footer;