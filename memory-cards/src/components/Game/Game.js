import styles from "./Game.module.css"
import { Timer } from "../Timer/Timer";
import { useEffect } from "react";
import { CardList } from "../CardList/CardList";
import { useNumbersContext } from "../../contexts/numbersContext";

export function Game(props) {

    const {bestTime, bestTimeForRendering} = useNumbersContext()

    return (
        <section className={styles.level}>
            <div className={styles.container}>

                <article className={styles.info}>

                    <div className={styles.timeSection}>
                        <p className={styles.timeLebel}>Time</p>
                        <Timer />
                    </div>

                    <div className={styles.bestTimeSection}>
                        <p className={styles.bestTimeLebel}>Best Time</p>
                        <p className={styles.bestTime}>{bestTimeForRendering}</p>
                    </div>

                </article>

                <article className={styles.cards}>
                    <CardList/>
                </article>

            </div>
        </section>
    )
}