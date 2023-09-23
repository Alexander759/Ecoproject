import React from "react";
import Navbar from "../components/navbar/navbar";
import Heading from "../components/heading/heading";
import Footer from "../components/footer/footer";
import styles from "./css/about.module.css"
import GoToTop from "../components/goToTop/goToTop";

const About = () => {
	return (
        <>
        <Navbar/>
		<main className={styles["about"]}>
			<Heading
			headingClass={styles["about__heading"]}
			hrClass={styles["about__hr"]}
			title="Екопроект"
			/>

			<div className={styles["about__main"]}>
				<p className={styles["about__para"]}>
					„ЕКОПРОЕКТ“ е иновативна инженерингова компания с над 20 години опит в пречистването на води, изграждането на 
					пречиствателни станции и разработването на иновативни технологии за енергийно оползотворяване на неопасни отпадъци. 
					Една от малкото инсталации в България за производство на електрическа енергия от възобновяеми енергийни източници е в 
					изграждане и предстои да бъде въведена в експлоатация.
				</p>
				
				<p className={styles["about__para"]}>
					Фирмата предлага:
				</p>
				
				<ul>
					<li>Проектиране на пречиствателни станции</li>
					<li>Доставка на модулни пречиствателни станции</li>
					<li>Изграждане и въвеждане на нови пречиствателни станции</li>
					<li>Реновиране на остарели пречиствателни станции</li>
					<li>Инсталации за енергийно оползотворяване на неопасни отпадъци</li>
				</ul>

				<p className={styles["about__para"]}>
					Екипът на компанията е с богат опит в разработването и внедряването на най-модерните и енергоефективни технологии. 
					Оборудването, на което залагаме се осигурява от нашите качествени и надежни търговски партньори в Европа. В процеса 
					на нашата работа винаги залагаме на индивидуалното обслужване на всеки клиент, спрямо неговите специфични изисквания 
					и необходимости. Мисията ни е да запазим природата чиста, с която сме изцяло свързани и зависими. Опазването и, и 
					намаляването на вредните въздействия от дейността на хората и разрешаването на екологичните проблеми са отговорност 
					засягаща всички нас. Думата „ЕКО“ е съкращение от думата екология, идваща от древногръцките думи OIKOS, означаващо 
					ДОМ, КЪЩА и LOGOS, означаващо НАУКА. Науката за опазването на нашия дом (природата) е от първостепенно значение за 
					бъдещето на всички нас. Мисията на ЕКОПРОЕКТ е да съхрани природните водни ресурси и въздухът за да осигури 
					устойчива и здравословна околна среда за населението, чрез предлагането и внедряването на най-модерните и 
					енергоефективни технологии за пречистване на битови и промишлени отпадни води и производството на електическа 
					енергия от чисти възобновяеми енергийни източници. Чрез намаляване на замърсяването на водите и въздуха от човешката 
					дейност се постига устойчиво развитие и запазване на биологичното разнообразие на планетата.
				</p>	
			</div>

		</main>
		<Footer />
		<GoToTop />
        </>
	);
};

export default About;