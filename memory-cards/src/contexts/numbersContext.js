import { createContext, useContext, useState } from "react";

const numbersContext = createContext()

export function NumbersProvider({
    children
}) {
    const [level, setLevel] = useState(null)
    const [numbers, setNumbers] = useState([])


    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    const numbersContextValues = {
        setLevel,
        setNumbers,
        numbers,
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