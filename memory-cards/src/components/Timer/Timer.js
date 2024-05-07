import React, { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNumbersContext } from '../../contexts/numbersContext';

export function Timer() {
    const {
        // totalSeconds,
        seconds,
        minutes,
        hours,
        // days,
        // isRunning,
        // start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    const { completedGame } = useNumbersContext()
    const [isStop, setIsStop] = useState(false)

    useEffect(() => {
        if (completedGame) {
            setIsStop(true)
            pause()
        }
    }, [completedGame])

    return (
        <>
            {isStop ? <p>Stop</p>
                : <p>
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </p>

            }

            {/* <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button> */}
        </>

    );
}