import classes from './gameTimer.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function GameTimer(props) {
    const { className } = props;
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
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
            <div className={clsx(classes.timer, className)}>{formatTime(time)}</div>
        </div>
    );
}

GameTimer.propTypes = {
    className: PropTypes.string
}

export default GameTimer;