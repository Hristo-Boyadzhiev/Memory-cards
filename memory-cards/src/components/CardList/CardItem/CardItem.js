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
        clickedSecondNumber,
        setClickedSecondNumber,
        isWin,
        isResetNumbers,
        setIsResetNumbers
    } = useNumbersContext()

    function clickHandler(event) {
        if (isVisible) {
            // setIsVisible(false)
            // setIsClicked(false)
        } else {
            if (!isClicked) {
                setIsVisible(true)
                setIsClicked(true)
                if (clickedFirstNumber) {
                    setClickedSecondNumber(numbers[index])
                } else {
                    setClickedFirstNumber(numbers[index])
                }
            }
        }
    }

    useEffect(() => {
        if (isWin) {
            console.log('da')
        } else {
            setTimeout(() => {
                setIsVisible(false)
                setIsClicked(false)
            }, 1000);
        }

        if (isResetNumbers) {
            setTimeout(() => {
                setIsVisible(false)
                setIsClicked(false)
                setIsResetNumbers(false)
            }, 200)
        }
    }, [isResetNumbers, isWin])

    return (
        <>
            {isVisible
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