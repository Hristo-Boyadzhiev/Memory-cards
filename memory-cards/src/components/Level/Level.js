import { useParams } from "react-router-dom";
import { PairCards } from "../PairCards/PairCards";
import styles from "./Level.module.css"
import { Timer } from "../Timer/Timer";


export function Level(props) {
    const { level } = useParams()


    let cards = []

    if (level < 13) {
        for (let i = 0; i < (Number(level) + 1); i++) {
            cards.push(null)
        }

        cards = cards.map((card, i) => <li key={i}><PairCards /></li>)
    }

    return (
        <section className={styles.level}>

            <article className={styles.info}>

                <div className={styles.levelSection}>
                    <p className={styles.levelLebel}>Level</p>
                    <p className={styles.currentLevel}>{level}</p>
                </div>

                <div className={styles.timeSection}>
                    <p className={styles.timeLebel}>Time</p>
                    <Timer />
                </div>

                <div className={styles.bestTimeSection}>
                    <p className={styles.bestTimeLebel}>Best Time</p>
                    <p className={styles.bestTime}>00:20</p>
                </div>

            </article>

            <article className={styles.cards}>
                <ul className={styles.cardsList}>
                    {/* <li><PairCards /></li>
                    <li><PairCards /></li> */}
                    {cards}
                </ul>
            </article>
        </section>
    )
}