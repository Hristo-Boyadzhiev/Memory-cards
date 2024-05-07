import { useEffect, useState } from 'react'
import styles from './CardItem.module.css'
import { useNumbersContext } from '../../../contexts/numbersContext'

export function CardItem({
    index
}) {
    const [isVisible, setIsVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const { isNewGame } = useNumbersContext()
    const {
        numbers,
        clickedFirstNumber,
        setClickedFirstNumber,
        setClickedSecondNumber,
        isWin,
        isResetNumbers,
        setIsResetNumbers
    } = useNumbersContext()

    function clickHandler(event) {
        if (!isVisible && !isClicked) {
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
        setIsVisible(false)
        setIsClicked(false)

        if (isResetNumbers) {
            setIsResetNumbers(false)
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