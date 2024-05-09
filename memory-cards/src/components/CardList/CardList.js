import { useNumbersContext } from "../../contexts/numbersContext";
import { CardItem } from "./CardItem/CardItem";
import styles from "./CardList.module.css"

export function CardList(props) {
    const {
        totalCardItems,
        isCompletedGame,
        setIsNewGame
    } = useNumbersContext()

    const cardsArray = Array.from({ length: totalCardItems })
        .map((card, i) => <li key={i}><CardItem index={i} /></li>)

    function newGameHandler(event) {
        setIsNewGame(true)
    }

    return (
        <>
            {isCompletedGame
                ?
                <div className={styles.newGameContainer}>
                    <button onClick={newGameHandler} className={styles.newGame}>New Game</button>
                </div>
                :
                <ul className={styles.cardsList}>
                    {cardsArray}
                </ul>

            }
        </>
    )
}