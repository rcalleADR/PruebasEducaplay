import ExitIcon from '../icons/ExitIcon';
import FullscreenInIcon from '../icons/FullscreenInIcon';
import OptionsIcon from '../icons/OptionsIcon';
import classes from './gameUI.module.scss'
import IconButton from './IconButton';

function GameUI() {
    return(
        <div className={classes.buttonMenu}>
            <IconButton icon={<ExitIcon />} />
            <IconButton icon={<OptionsIcon />} />
            <IconButton className={classes.hideTouchDevice} icon={<FullscreenInIcon />} />
        </div>
    );
}

export default GameUI;