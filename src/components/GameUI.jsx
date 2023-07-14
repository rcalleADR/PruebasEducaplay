import FullscreenInIcon from '../icons/FullscreenInIcon';
import OptionsIcon from '../icons/OptionsIcon';
import classes from './GameUI.module.scss'
import IconButton from './IconButton';

function GameUI() {
    return(
        <div className={classes.buttonMenu}>
            <IconButton icon={<OptionsIcon />} />

            <IconButton className={classes.hideTouchDevice} icon={<FullscreenInIcon />} />
        </div>
    );
}

export default GameUI;