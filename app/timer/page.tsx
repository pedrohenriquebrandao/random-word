
'use client'

import { useEffect, useRef, useState } from "react";

export default function Timer() {
    const [minutes, setMinutes] = useState(3);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);
    const [buttonStartIsVisible, setButtonStartIsVisible] = useState(true);
    const [buttonStopIsVisible, setButtonStopIsVisible] = useState(true);

    const startCount = () => {
        setStart(true);
        setButtonStartIsVisible(false);
    };

    const stopCount = () => {
        setStart(false);
        setButtonStopIsVisible(false);
        setButtonStartIsVisible(true);
        setMinutes(3);
        setSeconds(0);
    };

    useEffect(() => {
        if (start) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    },);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">

            {
                buttonStartIsVisible 
                ? 
                <button
                onClick={startCount}
                type="button"
                className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-100"
                >
                INICIAR
                </button> 
                : 
                <button
                onClick={stopCount}
                type="button"
                className="px-8 py-3 font-semibold rounded bg-red-500 text-gray-100"
                >
                PARAR
                </button> 
            }

            <div className="flex container min-h-screen flex-col items-center justify-between p-8 mt-8 text-gray-900">

                <h1 className="bg-green-300 p-4 rounded-xl text-9xl "> {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

            </div>
        </main>
    )
}
