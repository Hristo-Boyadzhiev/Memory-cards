import { useState } from 'react'
import styles from './CardItem.module.css'
import { useNumbersContext } from '../../../contexts/numbersContext'

export function CardItem({
    index
}) {
    const [isClicked, setIsClicked] = useState(false)
    const {numbers} = useNumbersContext()

    function clickHandler(event) {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
        }, 1000);
    }
    console.log(numbers)

    return (
        <>
            {isClicked
                ? <div className={styles.clickedCard} onClick={clickHandler}>
                    <p className={styles.number}>{numbers[index]}</p>
                </div>
                : <div className={styles.card} onClick={clickHandler}>
                    <div className={styles.content}>
                        <i className="fa-solid fa-star" style={{ fontSize: '3em', color: 'white' }}></i>
                    </div>
                </div>
            }
        </>
    )
}