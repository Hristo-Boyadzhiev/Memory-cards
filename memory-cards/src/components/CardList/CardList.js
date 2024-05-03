import { useNumbersContext } from "../../contexts/numbersContext";
import { CardItem } from "./CardItem/CardItem";
import styles from "./CardList.module.css"

export function CardList(props) {

    const { totalCardItems, setTotalCardItems } = useNumbersContext()
    
    const cardsArray = Array.from({ length: totalCardItems })
        .map((card, i) => <li key={i}><CardItem index={i} /></li>)

    return (
        <ul className={styles.cardsList}>
            {cardsArray}
        </ul>
    )
}