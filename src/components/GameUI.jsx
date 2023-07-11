import FullscreenInIcon from '../icons/FullscreenInIcon';
import FullscreenOutIcon from '../icons/FullscreenOutIcon';
import OptionsIcon from '../icons/OptionsIcon';
import classes from './GameUI.module.scss'

function GameUI() {
    return(
        <div className={classes.buttonMenu}>
            {/* <div id="exit" className="exit">
                <button id="exitBtn" className="btn btn__edu btn__edu--out">
                    <span className="btn__i i__exit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 23.5H0.5V0.5H15" stroke="white" strokeMiterlimit="10"></path>
                            <g className="i__exit__arrow">
                                <path d="M6 11.5H22.5L16 5" stroke="white" strokeMiterlimit="10"></path>
                                <path d="M22.5 11.5L16 18" stroke="white" strokeMiterlimit="10"></path>
                            </g>
                        </svg>
                    </span>
                    <span id="btn__txt__trm" className="btn__txt"></span>
                </button>
            </div> */}

            <div id="options" className={classes.options}>
                <div className={classes.buttonWrapper}>
                    <span className="btn__i i__options">
                        <OptionsIcon />
                    </span>
                </div>
            </div>

            <div className={classes.fullscreen}>
                <div id="gFsc" className={classes.buttonWrapper}>
                    <span className={classes.fullscreenIn}>
                        <FullscreenInIcon />
                    </span>
                    <span className={classes.fullscreenOut}>
                        <FullscreenOutIcon />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default GameUI;