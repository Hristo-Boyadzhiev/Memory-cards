import { CardItem } from "./CardItem/CardItem";
import styles from "./CardList.module.css"

export function CardList(props){
const totalItems = 28
const cardArray = Array.from({length: totalItems})
.map((card, i)=><li key={i}><CardItem index={i}/></li>)

    return (
        <ul className={styles.cardsList}>
            {cardArray}
        </ul>
    )
}