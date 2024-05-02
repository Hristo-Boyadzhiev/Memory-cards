import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export function Timer() {
    const {
        // totalSeconds,
        seconds,
        minutes,
        hours,
        // days,
        // isRunning,
        // start,
        // pause,
        // reset,
    } = useStopwatch({ autoStart: true });


    return (
        <>
            <p>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </p>
           
            {/* <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button> */}
        </>

    );
}