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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5251 9.15906L20.5907 9.35505L20.7756 9.44748L23.5 10.8097V13.1856L20.9289 14.408L20.7374 14.4991L20.6697 14.7001C20.6079 14.884 20.5108 15.0778 20.3923 15.3123L20.3858 15.3253C20.2759 15.5428 20.1467 15.7982 20.0594 16.0589L20.002 16.2303L20.0675 16.3988L21.1695 19.2357L19.3802 21.0251L16.5432 19.923L16.2997 19.8284L16.083 19.9743C15.6974 20.2339 15.2983 20.3733 14.8452 20.5251L14.6493 20.5907L14.5568 20.7756L13.1946 23.5H10.8118L9.44964 20.7756L9.3585 20.5933L9.16593 20.5267L7.8078 20.0567L7.63434 19.9967L7.46325 20.0632L4.62631 21.1652L2.84652 19.3854L4.06982 16.5563L4.1783 16.3054L4.02568 16.0787C3.76613 15.693 3.62666 15.294 3.47492 14.8409L3.40928 14.6449L3.22442 14.5525L0.5 13.1903V10.8075L3.22442 9.44533L3.40668 9.35419L3.47332 9.16162L3.94327 7.80349L4.0033 7.63003L3.93683 7.45894L2.83477 4.622L4.62416 2.83261L7.46109 3.93467L7.63219 4.00114L7.80565 3.94112L9.16377 3.47116L9.35627 3.40455L9.44742 3.22239L10.8096 0.5H13.1905L14.5548 3.22467L14.646 3.40674L14.8384 3.47332L16.1965 3.94327L16.37 4.0033L16.5411 3.93683L19.3777 2.83489L21.1536 4.61424L19.9302 7.4437L19.8217 7.69458L19.9743 7.92133C20.2339 8.30695 20.3733 8.70602 20.5251 9.15906ZM6.86621 11.9989C6.86621 14.8318 9.16821 17.1338 12.0011 17.1338C14.8316 17.1338 17.1359 14.8319 17.1359 11.9989C17.1359 9.16606 14.8339 6.86405 12.0011 6.86405C9.16806 6.86405 6.86621 9.16836 6.86621 11.9989Z" stroke="white"></path>
                        </svg>
                    </span>
                </div>
            </div>

            <div className={classes.fullscreen}>
                <div id="gFsc" className={classes.buttonWrapper}>
                    <span className={classes.fullscreenIn}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.6 12.6V3.6H12.6V0H2.52C1.134 0 0 1.134 0 2.52V12.6H3.6Z" fill="#6EB118"></path>
                            <path d="M23.3999 3.6H32.3999V12.6H35.9999V2.52C35.9999 1.134 34.8659 0 33.4799 0H23.3999V3.6Z" fill="#6EB118"></path>
                            <path d="M32.3999 23.3999V32.3999H23.3999V35.9999H33.4799C34.8659 35.9999 35.9999 34.8659 35.9999 33.4799V23.3999H32.3999Z" fill="#6EB118"></path>
                            <path d="M12.6 32.3999H3.6V23.3999H0V33.4799C0 34.8659 1.134 35.9999 2.52 35.9999H12.6V32.3999Z" fill="#6EB118"></path>
                        </svg>
                    </span>
                    <span className={classes.fullscreenOut}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.0001 9.76753e-05L9.0001 9.0001L9.83048e-05 9.0001L9.799e-05 12.6001L10.0801 12.6001C11.4661 12.6001 12.6001 11.4661 12.6001 10.0801L12.6001 9.799e-05L9.0001 9.76753e-05Z" fill="#6EB118"></path>
                            <path d="M36 9.0001L27 9.0001L27 9.72032e-05L23.4 9.68885e-05L23.4 10.0801C23.4 11.4661 24.534 12.6001 25.92 12.6001L36 12.6001L36 9.0001Z" fill="#6EB118"></path>
                            <path d="M27 36L27 27L36 27L36 23.4L25.92 23.4C24.534 23.4 23.4 24.534 23.4 25.92L23.4 36L27 36Z" fill="#6EB118"></path>
                            <path d="M9.87768e-05 27L9.0001 27L9.0001 36L12.6001 36L12.6001 25.92C12.6001 24.534 11.4661 23.4 10.0801 23.4L9.90916e-05 23.4L9.87768e-05 27Z" fill="#6EB118"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default GameUI;