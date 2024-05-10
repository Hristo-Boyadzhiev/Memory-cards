import { createContext, useContext, useEffect, useState } from "react";

const numbersContext = createContext()

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function NumbersProvider({
    children
}) {
    const [totalCardItems, setTotalCardItems] = useState(24)
    const [numbers, setNumbers] = useState([])
    const [clickedFirstNumber, setClickedFirstNumber] = useState(null)
    const [clickedSecondNumber, setClickedSecondNumber] = useState(null)
    const [isWin, setIsWin] = useState(false)
    const [isResetNumbers, setIsResetNumbers] = useState(false)
    const [isCompletedGame, setIsCompletedGame] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [bestTime, setBestTime] = useState(0)
    const [currentTimeForRendering, setCurrentTimeForRendering] = useState('0:0:0')
    const [bestTimeForRendering, setBestTimeForRendering] = useState('0:0:0')
    const [isNewGame, setIsNewGame] = useState(false)

    useEffect(() => {
        setTotalCardItems(24)
        setNumbers([])
        setClickedFirstNumber(null)
        setClickedSecondNumber(null)
        setIsCompletedGame(false)
        setCurrentTime(0)
        setIsNewGame(false)

        const uniqueNumbersSet = new Set();

        while (uniqueNumbersSet.size < totalCardItems / 2) {
            const randomNumber = getRandomNumberInRange(1, 99);
            uniqueNumbersSet.add(randomNumber)
        }

        let uniqueNumbersArray = Array.from(uniqueNumbersSet)

        let pairsArray = uniqueNumbersArray.concat(uniqueNumbersArray)

        const shuffledPairs = pairsArray.sort(() => Math.random() - 0.5);
        setNumbers(shuffledPairs);
    }, [isNewGame])

    useEffect(() => {
        if ((clickedFirstNumber !== null && clickedSecondNumber !== null)) {
            if (clickedFirstNumber === clickedSecondNumber) {

                const firstNumberIndex = numbers.indexOf(clickedFirstNumber)
                numbers.splice(firstNumberIndex, 1)

                const secondNumberIndex = numbers.indexOf(clickedSecondNumber)
                numbers.splice(secondNumberIndex, 1)

                setNumbers(numbers)
                setIsWin(true)

                if (totalCardItems > 0) {
                    setTotalCardItems(numbers.length)

                    if (numbers.length === 0) {
                        setIsCompletedGame(true)
                    }
                }
            }
            setClickedFirstNumber(null)
            setClickedSecondNumber(null)
            setIsResetNumbers(true)
            setTimeout(() => {
                setIsResetNumbers(false)
            }, 500);
        }

        if (currentTime !== 0) {
            if (bestTime === 0 || (currentTime < bestTime)) {
                setBestTime(currentTime)
                setBestTimeForRendering(currentTimeForRendering)
            }
        }
    }, [clickedSecondNumber, currentTime])

    const numbersContextValues = {
        numbers,
        clickedFirstNumber,
        setClickedFirstNumber,
        setClickedSecondNumber,
        isWin,
        setIsWin,
        isResetNumbers,
        totalCardItems,
        isCompletedGame,
        isNewGame,
        setIsNewGame,
        setCurrentTime,
        setCurrentTimeForRendering,
        bestTimeForRendering
    }

    return (
        <numbersContext.Provider value={numbersContextValues}>
            {children}
        </numbersContext.Provider>
    )
}

export const useNumbersContext = () => {
    const context = useContext(numbersContext)
    return context
}