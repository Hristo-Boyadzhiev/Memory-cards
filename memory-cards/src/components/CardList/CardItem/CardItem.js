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
        setIsResetNumbers,
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
        if (isWin) {
            setIsVisible(false)
            setIsClicked(false)
            setIsResetNumbers(false)
            setIsWin(false)
        } else {
            setTimeout(() => {
                setIsVisible(false)
                setIsClicked(false)
                setIsResetNumbers(false)
            }, 500);
        }
  
    }, [isWin, isResetNumbers, isNewGame])


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