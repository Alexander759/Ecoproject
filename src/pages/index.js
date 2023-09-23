import React from 'react';
import { useState, useEffect } from 'react';
import Carousel from '../components/carousel/carousel';
import styles from './css/index.module.css'
import Navbar from '../components/navbar/navbar';
import Heading from '../components/heading/heading';
import Footer from '../components/footer/footer';
import { NavLink } from 'react-router-dom';
import GoToTop from '../components/goToTop/goToTop';

const Home = () => {

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Check the window's scroll position
			if (window.scrollY > 0) {
			setIsScrolled(true);
			} else {
			setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const navbarClassName = isScrolled ? styles["navbar-scrolled"] : styles["navbar"];

	return (
		<>
		<Navbar className={navbarClassName} />
		<main className={styles["main-content"]}>
			<Carousel 
			className = {styles.carousel} namesAndTitlesOfImages={[
			{nameOfImage: "1.jpg", title: "Работейки за опазването на природата, работим за бъдещето на всички нас!"}, 
			{nameOfImage: "2.jpg", title: "Модерни решения за пречистване на водите!"}, 
			{nameOfImage: "3.jpg", title: "Екологични услуги за вашата компания"}, 
			{nameOfImage: "4.jpg", title: "Нови технологии за опазване на природата!"}, 
			{nameOfImage: "5.jpg", title: "Екопроект – за по-добро бъдеще!"}]}/>
			
			<section className={styles["introductory-section"]}>
				<div className={styles["introductory-section__description"]}>
					<Heading
					 title="Екопроект"
					 headingClass={styles["introductory-section__heading"]}
					 hrClass={styles["introductory-section__hr"]}
					 />

					<p className={styles["introductory-section__text"]}>
						<span className={styles["marked"]}>Екопроект</span> е иновативна инженерингова компания с над <span className={styles["marked"]}>20 години</span> опит 
						в пречистването на води, изграждането на пречиствателни станции и разработването на иновативни технологии за 
						енергийно оползотворяване на неопасни отпадъци. Екипът на компанията е с богат опит в разработването и внедряването 
						на най-модерните и енергоефективни технологии. Мисията ни е да запазим природата чиста, с която сме изцяло свързани и зависими.
					</p>

					<NavLink to='/about#' className={`${styles["introductory-section__btn"]} ${styles["btn"]}`}>За нас ➔</NavLink>

				</div>
				<div className={styles["introductory-section__img-holder"]}>
					<img className={styles["introductory-section__img"]} src='./images/13.jpg' alt='image of a section' />
				</div>
			</section>

			<section className={styles["solutions-section"]}>
				<div className={styles["solutions-section__img-holder"]}>
					<img className={styles["solutions-section__img"]} src='./images/6.jpg' alt='image of section'/>
				</div>

				<div className={styles["solutions-section__description"]}>
					<Heading
					headingClass={styles["solutions-section__heading"]}
					hrClass={styles["solutions-section__hr"]}
					title="Бизнес решения"
					/>
					
					<p className={styles["solutions-section__text"]}>
						<span className={styles["marked"]}>Екопроект</span> е иновативна компания пионер в пречиствателната индустрия 
						на България. Нашият опит в проектирането и внедряването на авангардни модулни пречиствателни станции за вода, 
						трансформира начина, по който пречистваме и управляваме водните ресурси. Модулните системи на&nbsp;
						<span className={styles["marked"]}>Екопроект</span> са проектирани да бъдат високоефективни, рентабилни 
						и лесно приспособими. Разгледайте нашите решения за пречиствене на водите и се присъеденете към нашата мисия 
						за постигане на един по-чист свят.
					</p>

					<NavLink to='/solutions' className={`${styles["solutions-section__btn"]} ${styles["btn"]}`}>Решения ➔</NavLink>
				</div>
				
			</section>

			<section className={styles["services-section"]}>
				<div className={styles["services-section__description"]}>
					<Heading
					 title="Услуги"
					 headingClass={styles["services-section__heading"]}
					 hrClass={styles["services-section__hr"]}
					 />

					<p className={styles["services-section__text"]}>
						<span className={styles["marked"]}>Екопроект</span> предлага услуги в областта на пречистването на водите, възобновяемите енергийни източници,
						а скоро и в областта на допречистване на водите. Нашият иновативен подход позволява уникални и адаптивни 
						решения за всеки клиент. За <span className={styles["marked"]}>Екопроект</span> осигуряването на пречистване и чиста енергия е не само цел, а и 
						първостепенен ангажимент към нашата природа, към нашата планета и към живота.
					</p>

					<NavLink to='./services' className={`${styles["services-section__btn"]} ${styles["btn"]}`}>Услуги ➔</NavLink>

				</div>
				<div className={styles["services-section__img-holder"]}>
					<img className={styles["services-section__img"]} src='./images/12.jpg' alt='image of a section' />
				</div>
			</section>

			<section className={styles["completed-projects-section"]}>
				<div className={styles["completed-projects-section__img-holder"]}>
					<img className={styles["completed-projects-section__img"]} src='./images/14.jpg' alt='image of a section'/>
				</div>

				<div className={styles["completed-projects-section__description"]}>
					<Heading
					headingClass={styles["completed-projects-section__heading"]}
					hrClass={styles["completed-projects-section__hr"]}
					title="Завършени проекти"
					/>
					
					<p className={styles["completed-projects-section__text"]}>
						<span className={styles["marked"]}>Екопроект</span> е компания с повече от две десетилетия опит. През тези години компанията изпълнява множество проекти. 
						Може да проверите списък с нашите успешни истории и сами да се убедите защо нашата компания е правилният 
						избор за Вас. Вярваме че този списък от <span className={styles["marked"]}>над 100 обекта</span> е доказателство за нашата отдаденост към нашите клиенти 
						и към ангажимента ни към природата.
					</p>

					<NavLink to='./completedProjects' className={`${styles["completed-projects-section__btn"]} ${styles["btn"]}`}>Завършени проекти ➔</NavLink>
				</div>
				
			</section>
		</main>
		<Footer />
		<GoToTop />
		</>
	);
};

export default Home;