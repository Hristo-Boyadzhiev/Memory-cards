import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const numbersContext = createContext()

export function NumbersProvider({
    children
}) {
    const [level, setLevel] = useState(null)


    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    let randomNumber = getRandomNumberInRange(1, 100);

    const numbersContextValues = {
        setLevel,
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