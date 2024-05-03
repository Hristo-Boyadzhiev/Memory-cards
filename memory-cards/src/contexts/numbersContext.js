import { createContext, useContext, useEffect, useState } from "react";

const numbersContext = createContext()

export function NumbersProvider({
    children
}) {
    const [numbers, setNumbers] = useState([])
    const [clickedFirstNumber, setClickedFirstNumber] = useState(null)
    const [clickedSecondNumber, setClickedSecondNumber] = useState(null)
    const [isWin, setIsWin] = useState(null)
    const [isResetNumbers, setIsResetNumbers] = useState(false)

    useEffect(() => {
        if((clickedFirstNumber !== null && clickedSecondNumber !== null)){

            if (clickedFirstNumber === clickedSecondNumber) {
                console.log('WINNER')
                const firstNumberIndex = numbers.indexOf(clickedFirstNumber)
                let newArray = [...numbers]
                const secondNumberIndex = numbers.indexOf(clickedSecondNumber)
                // splice не го използвам както трябва
                newArray = newArray.splice(firstNumberIndex, 1)
                console.log(newArray)
                setNumbers(newArray)
                setIsWin(true)
            } else {
                setClickedFirstNumber(null)
                setClickedSecondNumber(null)
                setIsResetNumbers(true)
            }
        }
    }, [clickedSecondNumber])

    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
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
        isResetNumbers,
        setIsResetNumbers,
        getRandomNumberInRange
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