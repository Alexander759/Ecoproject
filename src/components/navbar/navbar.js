import React from "react";
import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar = (props) => {
	
	function toggleMenu(e) {
		const navbar = e.currentTarget.parentElement;
		const navbarMenu = navbar.querySelector(`.${styles["navbar__menu"]}`)

		const lines = navbar.querySelectorAll(`.${styles["navbar__toggle-menu-line"]}`)

		lines[0].classList.toggle(styles["transform-plus-45-degrees"])
		lines[1].classList.toggle(styles["opacity-zero"])
		lines[2].classList.toggle(styles["transform-minus-45-degrees"])

		if(navbarMenu.classList.contains(styles["visible"])){
			navbarMenu.classList.add(styles["disappear"])
			setTimeout(() => {
				navbarMenu.classList.remove(styles["disappear"])
			}, 1000)
		}

		navbarMenu.classList.toggle(styles["visible"])

	}
	
	return (
		<nav className={`${styles["navbar"]}${props.className ? ` ${props.className}` : ""}`}>
			<div className={styles["navbar__logo-holder"]}>
				<a href="/">
					<img className={styles["navbar__logo"]} src="./images/logo.png" alt="logo" />
				</a>
			</div>

			<button onClick={toggleMenu} className={styles["navbar__toggle-menu"]}>
				<div className={styles["navbar__toggle-menu-line"]}></div>
				<div className={styles["navbar__toggle-menu-line"]}></div>
				<div className={styles["navbar__toggle-menu-line"]}></div>
			</button>

			<div className={styles["navbar__menu"]}>
				<NavLink className={styles["navbar__link"]} to="/">
					Начало
				</NavLink>
				
				<NavLink className={styles["navbar__link"]} to="/solutions">
					Решения
				</NavLink>

				<NavLink className={styles["navbar__link"]} to="/services">
					Услуги
				</NavLink>

				<NavLink className={styles["navbar__link"]} to="/MBRAndMBBR">
					MBR & MBBR
				</NavLink>

				<NavLink className={styles["navbar__link"]} to="/about">
					За нас
				</NavLink>

				<NavLink className={styles["navbar__link"]} to="/completedProjects">
					Изпълнени обекти
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;