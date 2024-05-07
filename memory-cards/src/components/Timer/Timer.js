import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNumbersContext } from '../../contexts/numbersContext';

export function Timer() {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    const { isCompletedGame, setCurrentTime, setCurrentTimeForRendering, isNewGame } = useNumbersContext()

    useEffect(() => {
        if (isCompletedGame) {
            pause()
            setCurrentTime(totalSeconds)
            setCurrentTimeForRendering(`${hours}:${minutes}:${seconds}`)
        }

        if(isNewGame){
            reset()
            setCurrentTime(0)
        }

    }, [isCompletedGame, isNewGame])


    return (
        <p>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </p>
    );
}