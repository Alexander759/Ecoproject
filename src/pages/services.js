import Footer from "../components/footer/footer"
import Gallery from "../components/gallery/gallery";
import GoToTop from "../components/goToTop/goToTop";
import Heading from "../components/heading/heading";
import Navbar from "../components/navbar/navbar"
import styles from "./css/services.module.css"

const Services = () => {
    return (
        <>
        <Navbar />
        <main>
            {/* <Heading title="Услуги" /> */}

            <section className= {styles["cleaning-waters"]}>
                <Heading
                headingClass={styles["cleaning-waters__heading"]}
                hrClass={styles["cleaning-waters__hr"]}
                title="Пречистване на водите" />

                <div className={styles["cleaning-waters__main"]}>
                    <div className={styles["cleaning-waters__text"]}>
                        <p>
                            
                        </p>
                        <ul>
                            <li>
                                Проектиране и изграждане на пречиствателни станции за битови отпадни води за хотели, ваканционни комплекси, жилищни и офис 
                            </li>

                            <li>
                                Предлагаме разработени модули за пречиствателни станции за битови отпадни води за: 30, 50, 100, 200, 500, 1 000, 2 000 и 5 000 е.ж.
                            </li>

                            <li>
                                Проектиране на пречиствателни станции за промишлени отпадни води
                            </li>

                            <li>
                                Проектиране на пречиствателни станции за градове и малки населени места
                            </li>

                            <li>
                                Проектиране на канализационни мрежи и съоръжения на населени места
                            </li>

                            <li>
                                Проектиране на водоснабдителни системи на населени места
                            </li>

                            <li>
                                Проектиране на пречиствателни станции за питейни води
                            </li>

                            <li>
                                Консултации и проучвания във водният сектор
                            </li>

                            <li>
                            Изготвяне на прединвестиционни проучвания във вик сектора и пречистването на водите
                            </li>

                            <li>
                            Доставка и монтаж на оборудване за пречиствателни станции
                            </li>

                            <li>
                            Упражняване авторски надзор при изпълнението
                            </li>

                            <li>
                                Въвеждане в експлоатация и технологична настройка
                            </li>

                            <li>
                                Пречиствателни станции за къщи – до 30 е.ж.
                            </li>
                            
                            <li>
                                Обучение на персонала
                            </li>
                        </ul>
                    </div>
                    
                    <div className="cleaning-waters__imgs-holder">
                        <Gallery imgNames ={["24.jpg","25.jpg","26.jpg"]} />
                    </div>

                </div>
            </section>


            <section>
                <Heading title="Допричестване на водите – очаквайте скоро" />

                <div>
                    <div>
                        <p>

                        </p>
                        <ul>
                            <li>Индустриални омекотителни инсталации за вода</li>
                            <li>Инсталации за обратна осмоза ултрафилтрация</li>
                            <li>Озониране на вода</li>
                            <li>Инсталации за нанофилтрация на вода</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <Heading title="Възобновяема енергия" />

                <div>
                    <div>
                        <p></p>
                        <ul>
                            <li>Разработване на иновативни решения за оползотворяване на органични неопасни отпадъци с цел производство на ел. енергия</li>
                            <li>Консултиране на клиенти при изготвяне и финансиране на проекти в сферата на енергетиката</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        <GoToTop />
        </>
    )
}

export default Services;