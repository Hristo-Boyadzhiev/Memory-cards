import { useEffect, useState } from 'react'
import styles from './CardItem.module.css'
import { useNumbersContext } from '../../../contexts/numbersContext'

export function CardItem({
    index
}) {
    const [isVisible, setIsVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const {
        numbers,
        clickedFirstNumber,
        setClickedFirstNumber,
        setClickedSecondNumber,
        isResetNumbers,
        isWin,
        setIsWin,
        isNewGame
    } = useNumbersContext()

    function clickHandler(event) {
        if (!isResetNumbers && !isVisible && !isClicked) {
            setIsVisible(true)
            setIsClicked(true)
            if (clickedFirstNumber) {
                setClickedSecondNumber(numbers[index])
            } else {
                setClickedFirstNumber(numbers[index])
            }
        }
    }

    useEffect(() => {
        if (isResetNumbers) {
            if (isWin) {
                setIsVisible(false)
                setIsClicked(false)
                setIsWin(false)
            } else {
                if (isClicked) {
                    setTimeout(() => {
                        setIsVisible(false)         
                        setIsClicked(false)
                    }, 500);
                } else {
                    setIsVisible(false)
                    setIsClicked(false)
                }
            }
        }

    }, [isResetNumbers, isNewGame])


    return (
        <>
            {isVisible
                ?
                <div className={styles.clickedCard}>
                    <p className={styles.number}>{numbers[index]}</p>
                </div>

                :
                <div className={styles.card} onClick={clickHandler}>
                    <div className={styles.content}>
                        <i className="fa-solid fa-star" style={{ fontSize: '3em', color: 'white' }}></i>
                    </div>
                </div>
            }
        </>
    )
}