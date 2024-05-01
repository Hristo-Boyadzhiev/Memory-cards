import { useParams } from "react-router-dom";
import { PairCards } from "../PairCards/PairCards";
import styles from "./Level.module.css"
import { useState } from 'react'
import { Timer } from "../Timer/Timer";

export function Level(props) {
    // const [seconds, setSeconds] = useState(0);
    const { level } = useParams()


    return (
        <section className={styles.level}>

            <article className={styles.info}>

                <div className={styles.levelSection}>
                    <p className={styles.levelLebel}>Level</p>
                    <p className={styles.currentLevel}>{level}</p>
                </div>

                <div className={styles.timeSection}>
                    <p className={styles.timeLebel}>Time</p>
                    <p className={styles.time}><Timer/></p>
                </div>

                <div className={styles.bestTimeSection}>
                    <p className={styles.bestTimeLebel}>Best Time</p>
                    <p className={styles.bestTime}>00:20</p>
                </div>

            </article>

            <article className={styles.cards}>
                <ul className={styles.cardsList}>
                    <li><PairCards /></li>
                    <li><PairCards /></li>

                </ul>
            </article>
        </section>
    )
}