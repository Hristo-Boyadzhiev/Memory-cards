import { createContext, useContext, useEffect, useState } from "react";

const numbersContext = createContext()

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function NumbersProvider({
    children
}) {
    const [totalCardItems, setTotalCardItems] = useState(28)
    const [numbers, setNumbers] = useState([])
    const [clickedFirstNumber, setClickedFirstNumber] = useState(null)
    const [clickedSecondNumber, setClickedSecondNumber] = useState(null)
    const [isWin, setIsWin] = useState(null)
    const [isResetNumbers, setIsResetNumbers] = useState(false)
    const [completedGame, setCompletedGame] = useState(false)

    useEffect(() => {
        const newPairs = []

        for (let i = 0; i < 28; i += 2) {
            const randomNumber = getRandomNumberInRange(1, 99);
            newPairs.push(randomNumber, randomNumber)
        }
        const shuffledPairs = newPairs.sort(() => Math.random() - 0.5);
        setNumbers(shuffledPairs)
    }, [])

    useEffect(() => {
        if ((clickedFirstNumber !== null && clickedSecondNumber !== null)) {
            if (clickedFirstNumber === clickedSecondNumber) {
                console.log('WINNER')
                console.log(`FirstNumber:${clickedFirstNumber}`)
                console.log(`SecondNumber:${clickedSecondNumber}`)
                setIsWin(true)
            } else {
                setClickedFirstNumber(null)
                setClickedSecondNumber(null)
                setIsResetNumbers(true)
            }
        }
    }, [clickedSecondNumber])

    if (isWin) {
        const firstNumberIndex = numbers.indexOf(Number(clickedFirstNumber)) 
        numbers.splice(firstNumberIndex, 1)

        const secondNumberIndex = numbers.lastIndexOf(clickedSecondNumber) 
        numbers.splice(secondNumberIndex, 1)
        setNumbers(numbers)

        if (totalCardItems > 0) {
            setTotalCardItems(numbers.length)
            if(numbers.length === 0){
                setCompletedGame(true)
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
        completedGame
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