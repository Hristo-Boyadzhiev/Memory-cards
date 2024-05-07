import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNumbersContext } from '../../contexts/numbersContext';

export function Timer() {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        // days,
        // isRunning,
        // start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    const { completedGame, setCurrentTime } = useNumbersContext()

    useEffect(() => {
        if (completedGame) {
            pause()
            setCurrentTime(totalSeconds)
        }
    }, [completedGame])


    return (
        <p>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </p>
    );
}