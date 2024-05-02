import { useState } from 'react'
import styles from './Card.module.css'

export function Card(props) {
    const [isClicked, setIsClicked] = useState(false)

    function clickHandler(event) {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
        }, 1000);
    }

    return (
        <>
            {isClicked
                ? <div className={styles.clickedCard} onClick={clickHandler}>
                    <p className={styles.number}>1</p>
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