import PropTypes from 'prop-types';
import classes from './gameOver.module.scss'
import EndUI from '../EndUI';

function GameOver(props) {
    const { onStart, user, gameData } = props;

    return (
        <>
            <div className={classes.titleWrapper}>
                <div className={classes.title}>Game Over</div>
                <div className={classes.pointsWrapper}>
                    <span className={classes.pointsTitle}>Total<br/>Puntos</span>
                    <span className={classes.pointsValue}>100.000</span>
                </div>
            </div>

            <EndUI user={user} onStart={onStart} />
        </>
    );
}

GameOver.propTypes = {
    onStart: PropTypes.func,
    user: PropTypes.shape({
        name: PropTypes.string,
        lastname: PropTypes.string,
        imageSource: PropTypes.string
    }),
    gameData: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        imageSource: PropTypes.string
    })
}

export default GameOver;