import styles from "./Game.module.css"
import { Timer } from "../Timer/Timer";
import { useEffect } from "react";
import { CardList } from "../CardList/CardList";

export function Game(props) {
    return (
        <section className={styles.level}>
            <div className={styles.container}>

                <article className={styles.info}>

                    <div className={styles.levelSection}>
                        <p className={styles.levelLebel}>Level</p>
                        <p className={styles.currentLevel}>1</p>
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
                    <CardList/>
                </article>

            </div>
        </section>
    )
}