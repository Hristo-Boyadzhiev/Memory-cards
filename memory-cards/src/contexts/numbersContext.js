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
    const [isWin, setIsWin] = useState(null)
    const [isResetNumbers, setIsResetNumbers] = useState(false)
    const [isCompletedGame, setIsCompletedGame] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [bestTime, setBestTime] = useState(0)
    const [currentTimeForRendering, setCurrentTimeForRendering] = useState('0:0:0')
    const [bestTimeForRendering, setBestTimeForRendering] = useState('0:0:0')
    const [isNewGame, setIsNewGame] = useState(false)

    useEffect(() => {
        const newPairs = []

        for (let i = 0; i < 24; i += 2) {
            const randomNumber = getRandomNumberInRange(1, 99);
            newPairs.push(randomNumber, randomNumber)
        }
        const shuffledPairs = newPairs.sort(() => Math.random() - 0.5);
        setNumbers(shuffledPairs)
    }, [isNewGame])

    useEffect(() => {

        if (isNewGame) {
            setTotalCardItems(24)
            setNumbers([])
            setClickedFirstNumber(null)
            setClickedSecondNumber(null)
            setIsWin(null)
            setIsResetNumbers(false)
            setIsCompletedGame(false)
            setCurrentTime(0)
            setIsNewGame(false)

        } else {
            if ((clickedFirstNumber !== null && clickedSecondNumber !== null)) {
                if (clickedFirstNumber === clickedSecondNumber) {
                    setIsWin(true)
                } else {
                    setClickedFirstNumber(null)
                    setClickedSecondNumber(null)
                    setIsResetNumbers(true)
                }
            }

            if (currentTime !== 0) {
                if (bestTime === 0 || (currentTime < bestTime)) {
                    setBestTime(currentTime)
                    setBestTimeForRendering(currentTimeForRendering)
                }
            }
        }
    }, [clickedSecondNumber, currentTime, isNewGame])

    if (isWin) {
        const firstNumberIndex = numbers.indexOf(Number(clickedFirstNumber))
        numbers.splice(firstNumberIndex, 1)

        const secondNumberIndex = numbers.lastIndexOf(clickedSecondNumber)
        numbers.splice(secondNumberIndex, 1)
        setNumbers(numbers)

        if (totalCardItems > 0) {
            setTotalCardItems(numbers.length)
            if (numbers.length === 0) {
                setIsCompletedGame(true)
            }
            setIsWin(false)
        }
        

        setClickedFirstNumber(null)
        setClickedSecondNumber(null)
        setIsResetNumbers(true)
    }


    console.log(numbers)

    const numbersContextValues = {
        numbers,
        setNumbers,
        clickedFirstNumber,
        setClickedFirstNumber,
        clickedSecondNumber,
        setClickedSecondNumber,
        isWin,
        setIsWin,
        isResetNumbers,
        setIsResetNumbers,
        totalCardItems,
        setTotalCardItems,
        isCompletedGame,
        isNewGame,
        setIsNewGame,
        setCurrentTime,
        bestTime,
        currentTimeForRendering,
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