import { Card } from "../Card/Card";
import styles from "./Level.module.css"

export function Level(props) {
    return (
        <section className={styles.level}>

            <article className={styles.info}>

                <div className={styles.levelSection}>
                    <p className={styles.levelLebel}>Level</p>
                    <p className={styles.currentLevel}>1</p>
                </div>

                <div className={styles.timeSection}>
                    <p className={styles.timeLebel}>Time</p>
                    <p className={styles.time}>00:40</p>
                </div>

                <div className={styles.bestTimeSection}>
                    <p className={styles.bestTimeLebel}>Best Time</p>
                    <p className={styles.bestTime}>00:20</p>
                </div>

            </article>

            <article className={styles.cards}>
                <div className={styles.column}>
                    <Card/>
                    <Card/>
                </div>
                <div className={styles.column}>
                    <Card/>
                    <Card/>
                </div>
            </article>
        </section>
    )
}