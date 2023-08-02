import classes from './gameCountdown.module.scss'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GameTimer from './GameTimer';

function GameCountdown({ startTime, onFinish }) {
    const [time, setTime] = useState(0);
    const [countdown, setCountdown] = useState(startTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
            setCountdown(countdown => {
                console.log(countdown);
                if(countdown === 0) {
                    onFinish();
                    clearInterval(interval);
                    return 0;
                }
                return countdown - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.timerComponent}><GameTimer /></div>
            
            <div className={classes.countdownWrapper}>
                <div className={classes.countdown}>{countdown}</div>
                    {/* <svg className="clk__ch__svg" width="212" height="212" viewBox="0 0 212 212" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="currentColor" fill="none">
                            <circle className="clk__ch__svg__pr" r="96" cy="106" cx="106" strokeWidth="20" style="stroke-dasharray: 603.186, 603.186; stroke-dashoffset: 404.134;"></circle>
                        </g>
                    </svg> */}
                
                {/* <div className={classes.timer}>{formatTime(time)}</div> */}
                <div className="clk__st">
                    <svg width="80" height="80" viewBox="0 0 90 90" fill="none">
                    {/* <svg width="195" height="98" viewBox="0 0 195 98" fill="none"> */}
                        <g className="clk__st__i-bg">
                            {/* <path className="clk__st__ll-bg" d="M65.7373 76.1426C81.1989 65.128 84.8468 47.3002 82.5557 31.9185H164.418C175.707 31.9185 186.125 41.8412 186.125 54.0305C186.125 66.2198 175.707 76.1426 164.418 76.1426H65.7373Z" fill="rgba(250,255,243,0.7)"></path> */}
                            <path className="clk__st__rg-bg" d="M48.5388 83.5129C70.9278 83.5129 89.0776 65.363 89.0776 42.9741C89.0776 20.5851 70.9278 2.4353 48.5388 2.4353C26.1498 2.4353 8 20.5851 8 42.9741C8 65.363 26.1498 83.5129 48.5388 83.5129Z" fill="rgba(250,255,243)"></path>
                        </g>
                        {/* <path className="clk__st__ll" d="M164.013 36.8322C173.496 36.8322 181.211 44.5469 181.211 54.0305C181.211 63.5141 173.496 71.2288 164.013 71.2288H74.7292C84.8885 61.6469 87.7999 48.6745 86.5715 36.8322H164.013ZM164.013 31.9185C96.657 31.9185 84.3725 31.9185 80.7855 31.9185C84.4708 48.1954 79.7659 67.6417 57.3467 76.1426C63.5872 76.1426 164.013 76.1426 164.013 76.1426C176.224 76.1426 186.125 66.2413 186.125 54.0305C186.125 41.8197 176.224 31.9185 164.013 31.9185Z" fill="#6EB118"></path> */}
                        <path className="clk__st__rg" d="M48.5388 14.7198C64.1155 14.7198 76.7931 27.3974 76.7931 42.9741C76.7931 58.5508 64.1155 71.2284 48.5388 71.2284C32.9621 71.2284 20.2845 58.5508 20.2845 42.9741C20.2845 27.3974 32.9621 14.7198 48.5388 14.7198ZM48.5388 2.4353C26.1442 2.4353 8 20.5795 8 42.9741C8 65.3687 26.1442 83.5129 48.5388 83.5129C70.9334 83.5129 89.0776 65.3687 89.0776 42.9741C89.0776 20.5795 70.9334 2.4353 48.5388 2.4353Z" fill="#6EB118"></path>
                    </svg>
                </div>
            </div>

        </div>
    );
}

GameCountdown.propTypes = {
    startTime: PropTypes.number,
    onFinish: PropTypes.func
}

export default GameCountdown;