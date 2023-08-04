import { useImperativeHandle, useRef, useState } from "react";
import GameCountdown from "../GameCountdown";
import GameTimer from "../GameTimer";

function ClockDemo() {
    const [startTime, setStartTime] = useState(35);
    const countdownRef = useRef(null);

    const reset = () => {
        countdownRef.current.reset();
    }
    
    return (
        <>
            {/* <GameTimer /> */}
            <GameCountdown ref={countdownRef} startTime={startTime} onFinish={reset} />
        </>
    );
}

export default ClockDemo;