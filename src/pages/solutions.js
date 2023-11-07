import React from "react";
import Navbar from "../components/navbar/navbar";
import styles from "./css/solutions.module.css"
import Heading from "../components/heading/heading";
import Gallery from "../components/gallery/gallery";
import Footer from "../components/footer/footer";
import TermWithDefinition from "../components/termWithDefinition/termWithDefinition";
import GoToTop from "../components/goToTop/goToTop";

const Solutions = () => {
	return (
        <>
		<Navbar />
		<main>

			<section className={styles["biocon-introduction"]}>
				<Heading
				title="Модулни пречиствателни станции – Biocon Standart"
				className={styles["biocon-introduction__header"]}
				headingClass={styles["biocon-introduction__heading"]}
				hrClass={styles["biocon-introduction__hr"]}
				/>

				<div className={styles["biocon-introduction__main-content"]}>
					<div className={styles["biocon-introduction__text"]}>
						<p>
							Biocon Standart е нашето първо решение за Вас. То представлява модулна пречиствателна станция, лесно управляема 
							от табло на съоражението. Следва кратко описание на основните процеси:
							
						</p>
						<ul>
								<li>
									Отпадната вода преминава в аеробен&nbsp;
									<TermWithDefinition term="биобасейн (биореактор)" definition="Специално проектиран резервоар, в който се извършва биологично пречистване на водите използвайки се микроорганизми."/>&nbsp;
									съдържащ биорганизми. В него се подава кислород от&nbsp;
									<TermWithDefinition term="мембранни дифузори" definition="Специални устройства освобождаващи кислород в биобасейна. Контролират развитието на микроорганизмите и пречистването." /> &nbsp;
									разположени по дъното и&nbsp;
									<TermWithDefinition term="въздуходувка" definition="Устройство използвано за подаване на кислород към биобасейна." />&nbsp;
									разположена в машинното отделение. 
									Микроорганизмите разграждат органичните вещества във водата, след което водата е готова за следващата
									стъпка.
								</li>
								<li>
									След&nbsp;
									<TermWithDefinition term="биореакторът" definition="Специално проектиран резервоар, в който се извършва биологично пречистване на водите използвайки се микроорганизми."/>&nbsp;
									следва&nbsp;
									<TermWithDefinition term="вторичен ламелен утаител" definition="Пречиствателно устройство, което пречиства веществата получени след реакциите с микроорганизмите и пречиства водата." />.&nbsp;
									Негавата цел е да изведе два типа утайка –&nbsp;
									<TermWithDefinition term="активна" definition="Микроорганизмите използвани за пречистване на водата."/> и&nbsp;
									<TermWithDefinition term="излишна" definition="Отпадъчните вещества от водата"/>.&nbsp;
									Активната се състои от микроорганизмите използвани в&nbsp;
									<TermWithDefinition term="биореактора" definition="Специално проектиран резервоар, в който се извършва биологично пречистване на водите използвайки се микроорганизми."/>.&nbsp;
									Те биват изпращани отново към&nbsp;
									<TermWithDefinition term="биобасейна" definition="Специално проектиран резервоар, в който се извършва биологично пречистване на водите използвайки се микроорганизми."/>.&nbsp; 
									<TermWithDefinition term="Излишната утайка" definition="Отпадъчните вещества от водата"/>&nbsp;
									се изпраща към&nbsp;
									<TermWithDefinition term="аеробният стабилизатор" definition="Аеробният стабилизатор е вид оборудване, използван в пречиствателните станции за отпадъчни води с цел ускоряване на биологичния разграждащ процес на органичните вещества." />,&nbsp;
									откъдето след това може да бъде извозена.
								</li>
								<li>
									При последната стъпка водата преминава в в отделение за хлориране, където се инжектира хлорен разтвор 
									при необходимост от дезинфекция. За хлориране се използва веществото&nbsp;
									<TermWithDefinition term="натриев хипохлорит" definition="Това съединение е известно със своите дезинфекционни свойства и се използва широко в областта на обработката на водата." />&nbsp;
									(NaOCl). След това процесът е завършен.
								</li>
							</ul>

						<p>
							Параметрите на пречистената вода са:
						</p>
						<ol>
								<li>
									<TermWithDefinition term="БПК5" definition="Биохимично потребление на кислород за 5 дни" /> ≤ 25мг/л
								</li>
								<li>
									<TermWithDefinition term="НВ" definition="Нитрати и водородни вещества" /> ≤ 35мг/л
								</li>
								<li>
									<TermWithDefinition term="ХПК" definition="Химично потребление на кислород" /> ≤ 125мг/л
								</li>
						</ol>

					</div>

					<div className={styles["biocon-introduction__img-holder"]}>
						<img className={styles["biocon-introduction__img"]} src="./images/bioconStructure.jpg" alt="biocon structure" />
					</div>

				</div>
			</section>

			<section className={styles["biocon-advantages"]}>
				<Heading
				title="Предимства на BIOCON"
				className={styles["biocon-advantages__header"]}
				headingClass={styles["biocon-advantages__heading"]}
				hrClass={styles["biocon-advantages__hr"]} />
				
				<div className={styles["biocon-advantages__main"]}>

					<div className={styles["biocon-advantages__text"]}>
						<ul>
							<li>Висока степен на пречистване</li>
							<li>Компактни размери на съоръжението</li>
							<li>Цялото необходимо оборудване е разположено в модула и не се налага изграждането на обслужващи сгради</li>
							<li>Ниски разходи за строително-монтажни дейности</li>
							<li>Минимално количество на отделената утайка</li>
							<li>Възможност за  използване на утайката за наторяване</li>
							<li>Не се отделят неприятни миризми</li>
							<li>Пречистените води могат да се използват за напояване на тревни площи и декоративни насаждения</li>
							<li>Възможност за надземен или подземен монтаж.</li>
							<li>Лесно увеличаване на капацитета на пречистване чрез добавяне на допълнителни модули.</li>
						</ul>
					</div>

					<div className={styles["biocon-advantages__gallery-holder"]}>
						<Gallery imgNames={["27.jpg", "28.jpg", "29.jpg"]} />
					</div>

				</div>

			</section>

			<section className={styles["biocon-p-and-n-section"]}>
				<Heading
				title="Biocon – с пречистване на азот и фосфор"
				headingClass={styles["biocon-p-and-n-section__heading"]}
				hrClass={styles["biocon-p-and-n-section__hr"]}
				/>

				<div className={styles["biocon-p-and-n-section__main"]}>
					<div className={styles["biocon-p-and-n-section__text"]}>
						<p>
							Biocon P&N Removal е представлява усъвършенствана версия на Biocon Standart за пречистване на азот и фосфор.
							Процесът е подобен, но има няколко допълнителни стъпки. Ето и кратко описание на процеса:
						</p>

						<ul>
							<li>
								Водата преминава през&nbsp;
								<TermWithDefinition term="първичен утаител" definition="Елемент, който се използва за премахване на по-големите частици във водата." />,&nbsp;
								който представлява решетка за извеждане на неразтворените вещества.
							</li>
							<li>
								След това водата се влива в зоната за отстраняване на фосфор. В тази зона се
								дозира&nbsp;
								<TermWithDefinition term="дижелезен трихлорид" definition="В процеса на реакция между фосфатите във водата и дижелезния трихлорид се образуват фосфатна утайка, която лесно се пречиства от водата." />&nbsp;
								(FeCl<sub>3</sub>), който спомага за отдерянето на фосфора
							</li>
							<li>
								В следващата зона за&nbsp;
								<TermWithDefinition term="денитрификация" definition="Процес при който нитратите и нитритите се преобразуват обратно в азот." />&nbsp;
								се отстраняват част от азотните съединения, чрез микроорганизми.
							</li>
							<li>
								В зоната за&nbsp;
								<TermWithDefinition term="нитрификация" definition="Процес, при който амониеви съединения се превръщат в нитратни съединения." />
								/
								<TermWithDefinition term="денитрификация" definition="Процес при който нитратите и нитритите се преобразуват обратно в азот." />&nbsp;
								се извършва нитрификация на азотни съединения (главно амонячни съединения), 
								при което се получават нитрати които при денатрификацията стават обикновен азот, който се пуска в атмосферата.
								И за двата процеса отново се използват микроорганизми.
							</li>
							<li>
								В последната зона на&nbsp;
								<TermWithDefinition term="биореактора" definition="Специално проектиран резервоар, в който се извършва биологично пречистване на водите използвайки се микроорганизми."/>&nbsp;
								се извършва биологично пречистване, което представлява използването на микроорганизми за 
								преобразуване на замърсители в минерални съединения.
							</li>
							<li>
								Накрая водата преминава през&nbsp;
								<TermWithDefinition term="вторичен утаител" definition="Пречиствателно устройство, което пречиства веществата получени след реакциите с микроорганизмите и пречиства водата." />&nbsp;
								който извежда микроорганизмите и ги връща в биобасейна, а&nbsp;
								<TermWithDefinition term="излишната утайка" definition="Отпадъчните вещества от водата"/>&nbsp;
								изпраща към&nbsp;
								<TermWithDefinition term="аеробен стабилизатор" definition="Аеробният стабилизатор е вид оборудване, използван в пречиствателните станции за отпадъчни води с цел ускоряване на биологичния разграждащ процес на органичните вещества." />.&nbsp;
							</li>
							<li>
								Избистрената вода след утаителя постъпва в отделение за хлориране, където се инжектира хлорен разтвор
								при необходимост от дезинфекция.
							</li>
						</ul>

						<p>
							Параметрите на пречистената вода са:
						</p>
						<ol>
								<li>
									<TermWithDefinition term="БПК5" definition="Биохимично потребление на кислород за 5 дни" /> ≤ 25мг/л
								</li>
								<li>
									<TermWithDefinition term="НВ" definition="Нитрати и водородни вещества" /> ≤ 35мг/л
								</li>
								<li>
									<TermWithDefinition term="ХПК" definition="Химично потребление на кислород" /> ≤ 125мг/л
								</li>

								<li>
									<TermWithDefinition term="N" definition="Азот" /> oбщ &lt; 15мг/л
								</li>
								<li>
									<TermWithDefinition term="P" definition="Фосфор" /> oбщ &lt; 2мг/л
								</li>
						</ol>
					</div>

					<div className={styles["biocon-p-and-n-section__img-holder"]}>
						<img className={styles["biocon-p-and-n-section__img"]} src="./images/bioconPNRemovalStructure.jpg" alt="Biocon P and N removal structure" />
					</div>
				</div>
			</section>

			<section className={styles["advantages-biocon-p-and-n-section"]}>
				<Heading
				headingClass={styles["advantages-biocon-p-and-n-section__heading"]}
				hrClass={styles["advantages-biocon-p-and-n-section__hr"]}
				title="Предимства на Biocon – с пречистване на азот и фосфор"
				/>

				<div className={styles["advantages-biocon-p-and-n-section__main"]}>
					<div>
						<ul>
							<li>Висока степен на пречистване</li>
							<li>Компактни размери на съоръжението</li>
							<li>Подобрено пречистване на водата</li>
							<li>Фосфорно отстраняване</li>
							<li>Денитрификация и нитрификация</li>
							<li>Подобрени параметри на пречистената вода</li>
						</ul>
					</div>

					<div className={styles["advantages-biocon-p-and-n-section__gallery-holder"]}>

						<Gallery imgNames={["7.jpg", "8.jpg", "9.jpg"]}  />
					</div>
				</div>
			</section>
		</main>
		<Footer />
		<GoToTop />
        </>
	);
};

export default Solutions;