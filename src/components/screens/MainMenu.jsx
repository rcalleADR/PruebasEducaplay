import ActivityLogin from '../activityLogin/ActivityLogin'
import RestartIcon from '../../icons/RestartIcon'
import StartIcon from '../../icons/StartIcon';
import Button from '../Button/Button'
import PropTypes from 'prop-types';
import EducaplayLogo from '../EducaplayLogo';
import classes from './mainMenu.module.scss'

function MainMenu(props) {
    const { onStart, user, gameData } = props;

    return (
        <>
            <div className={classes.background}>
                <div className={classes.logoHeader}><EducaplayLogo width={96} height={88} /></div>
                <div className={classes.gameData}>
                    <div className={classes.imageWrapper}>
                        <img className={classes.image} width="360" height="360" src={gameData.imageSource} alt={gameData.type} />
                    </div>
                    <div className={classes.titleWrapper}>
                        <h1 className={classes.gameTitle}>{gameData.title}</h1>
                        <h2 className={classes.gameType}>{gameData.type}</h2>
                    </div>
                </div>
                <ActivityLogin user={user} />
                <Button className='classssse' icon={<StartIcon />} onClick={onStart}>
                    Comenzar
                </Button>
                {/* <hr />
                <Button className='classssse' icon={<RestartIcon />}>
                    Reintentar
                </Button> */}
            </div>
        </>
    );
}

MainMenu.propTypes = {
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

export default MainMenu;