import styles from "./Game.module.css"
import { Timer } from "../Timer/Timer";
import { useNumbersContext } from "../../contexts/numbersContext";
import { useEffect } from "react";
import { CardList } from "../CardList/CardList";

export function Game(props) {
    const { getRandomNumberInRange, setNumbers } = useNumbersContext()

    useEffect(() => {

        const newPairs = []

        for (let i = 0; i < 28; i += 2) {
            const randomNumber = getRandomNumberInRange(1, 99);
            newPairs.push(randomNumber, randomNumber)
        }
        const shuffledPairs = newPairs.sort(() => Math.random() - 0.5);
        setNumbers(shuffledPairs)
    }, [])

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