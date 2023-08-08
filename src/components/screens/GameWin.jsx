import PropTypes from 'prop-types';
import classes from './gameWin.module.scss'
import EndUI from '../EndUI';

function GameWin(props) {
    const { onStart, user, gameData } = props;

    return (
        <>
            <div id="g__fdb__bg" className={classes.background}>
                <svg className={classes.svg} width="928" height="928" viewBox="0 0 928 928" fill="none">
                    <path d="M464 464L420.5 0H507.5L464 464Z" fill="url(#paint0_diamond)"></path>
                    <path d="M464 464L507.5 928H420.5L464 464Z" fill="url(#paint1_diamond)"></path>
                    <path d="M464 464L928 420.5V507.5L464 464Z" fill="url(#paint2_diamond)"></path>
                    <path d="M464 464L0 507.5V420.5L464 464Z" fill="url(#paint3_diamond)"></path>
                    <path d="M464 464L761.337 105.14L822.86 166.663L464 464Z" fill="url(#paint4_diamond)"></path>
                    <path d="M464 464L166.663 822.86L105.14 761.337L464 464Z" fill="url(#paint5_diamond)"></path>
                    <path d="M464 464L822.86 761.337L761.337 822.86L464 464Z" fill="url(#paint6_diamond)"></path>
                    <path d="M464 464L105.14 166.663L166.663 105.14L464 464Z" fill="url(#paint7_diamond)"></path>
                    <path d="M464 464L598.821 17.8929L679.397 50.7209L464 464Z" fill="url(#paint8_diamond)"></path>
                    <path d="M464 464L329.179 910.107L248.602 877.279L464 464Z" fill="url(#paint9_diamond)"></path>
                    <path d="M464 464L910.107 598.821L877.279 679.397L464 464Z" fill="url(#paint10_diamond)"></path>
                    <path d="M464 464L17.8928 329.179L50.7208 248.602L464 464Z" fill="url(#paint11_diamond)"></path>
                    <path d="M464 464L874.785 243.89L908.541 324.075L464 464Z" fill="url(#paint12_diamond)"></path>
                    <path d="M464 464L53.2149 684.11L19.4589 603.925L464 464Z" fill="url(#paint13_diamond)"></path>
                    <path d="M464 464L684.11 874.785L603.925 908.541L464 464Z" fill="url(#paint14_diamond)"></path>
                    <path d="M464 464L243.89 53.2149L324.075 19.4589L464 464Z" fill="url(#paint15_diamond)"></path>
                    <defs>
                        <radialGradient id="paint0_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(464 232) rotate(90) scale(232 43.5)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint1_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(464 696) rotate(90) scale(232 43.5)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint2_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(696 464) rotate(90) scale(43.5 232)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint3_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(232 464) rotate(90) scale(43.5 232)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint4_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(643.43 284.57) rotate(90) scale(179.43)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint5_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.57 643.43) rotate(90) scale(179.43)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint6_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(643.43 643.43) rotate(90) scale(179.43)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint7_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.57 284.57) rotate(90) scale(179.43)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint8_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(571.699 240.946) rotate(90) scale(223.053 107.699)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint9_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(356.301 687.053) rotate(90) scale(223.053 107.699)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint10_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(687.053 571.699) rotate(90) scale(107.699 223.053)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint11_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240.946 356.301) rotate(90) scale(107.699 223.053)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint12_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(686.271 353.945) rotate(90) scale(110.055 222.271)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint13_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(241.729 574.055) rotate(90) scale(110.055 222.27)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint14_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(574.055 686.271) rotate(90) scale(222.271 110.055)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                        <radialGradient id="paint15_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(353.945 241.729) rotate(90) scale(222.27 110.055)">
                            <stop stopColor="white" stopOpacity="0.46"></stop>
                            <stop offset="0.526042" stopColor="white" stopOpacity="0.49"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0.18"></stop>
                        </radialGradient>
                    </defs>
                </svg>                                
            </div>
            {/* <div id="g__fdb__award" className="g__fdb__award act">
                <div className="g__fdb__award__itm-150"></div>
                <div className="g__fdb__award__itm-149"></div>
                <div className="g__fdb__award__itm-148"></div>
                <div className="g__fdb__award__itm-147"></div>
                <div className="g__fdb__award__itm-146"></div>
                <div className="g__fdb__award__itm-145"></div>
                <div className="g__fdb__award__itm-144"></div>
                <div className="g__fdb__award__itm-143"></div>
                <div className="g__fdb__award__itm-142"></div>
                <div className="g__fdb__award__itm-141"></div>
                <div className="g__fdb__award__itm-140"></div>
                <div className="g__fdb__award__itm-139"></div>
                <div className="g__fdb__award__itm-138"></div>
                <div className="g__fdb__award__itm-137"></div>
                <div className="g__fdb__award__itm-136"></div>
                <div className="g__fdb__award__itm-135"></div>
                <div className="g__fdb__award__itm-134"></div>
                <div className="g__fdb__award__itm-133"></div>
                <div className="g__fdb__award__itm-132"></div>
                <div className="g__fdb__award__itm-131"></div>
                <div className="g__fdb__award__itm-130"></div>
                <div className="g__fdb__award__itm-129"></div>
                <div className="g__fdb__award__itm-128"></div>
                <div className="g__fdb__award__itm-127"></div>
                <div className="g__fdb__award__itm-126"></div>
                <div className="g__fdb__award__itm-125"></div>
                <div className="g__fdb__award__itm-124"></div>
                <div className="g__fdb__award__itm-123"></div>
                <div className="g__fdb__award__itm-122"></div>
                <div className="g__fdb__award__itm-121"></div>
                <div className="g__fdb__award__itm-120"></div>
                <div className="g__fdb__award__itm-119"></div>
                <div className="g__fdb__award__itm-118"></div>
                <div className="g__fdb__award__itm-117"></div>
                <div className="g__fdb__award__itm-116"></div>
                <div className="g__fdb__award__itm-115"></div>
                <div className="g__fdb__award__itm-114"></div>
                <div className="g__fdb__award__itm-113"></div>
                <div className="g__fdb__award__itm-112"></div>
                <div className="g__fdb__award__itm-111"></div>
                <div className="g__fdb__award__itm-110"></div>
                <div className="g__fdb__award__itm-109"></div>
                <div className="g__fdb__award__itm-108"></div>
                <div className="g__fdb__award__itm-107"></div>
                <div className="g__fdb__award__itm-106"></div>
                <div className="g__fdb__award__itm-105"></div>
                <div className="g__fdb__award__itm-104"></div>
                <div className="g__fdb__award__itm-103"></div>
                <div className="g__fdb__award__itm-102"></div>
                <div className="g__fdb__award__itm-101"></div>
                <div className="g__fdb__award__itm-100"></div>
                <div className="g__fdb__award__itm-99"></div>
                <div className="g__fdb__award__itm-98"></div>
                <div className="g__fdb__award__itm-97"></div>
                <div className="g__fdb__award__itm-96"></div>
                <div className="g__fdb__award__itm-95"></div>
                <div className="g__fdb__award__itm-94"></div>
                <div className="g__fdb__award__itm-93"></div>
                <div className="g__fdb__award__itm-92"></div>
                <div className="g__fdb__award__itm-91"></div>
                <div className="g__fdb__award__itm-90"></div>
                <div className="g__fdb__award__itm-89"></div>
                <div className="g__fdb__award__itm-88"></div>
                <div className="g__fdb__award__itm-87"></div>
                <div className="g__fdb__award__itm-86"></div>
                <div className="g__fdb__award__itm-85"></div>
                <div className="g__fdb__award__itm-84"></div>
                <div className="g__fdb__award__itm-83"></div>
                <div className="g__fdb__award__itm-82"></div>
                <div className="g__fdb__award__itm-81"></div>
                <div className="g__fdb__award__itm-80"></div>
                <div className="g__fdb__award__itm-79"></div>
                <div className="g__fdb__award__itm-78"></div>
                <div className="g__fdb__award__itm-77"></div>
                <div className="g__fdb__award__itm-76"></div>
                <div className="g__fdb__award__itm-75"></div>
                <div className="g__fdb__award__itm-74"></div>
                <div className="g__fdb__award__itm-73"></div>
                <div className="g__fdb__award__itm-72"></div>
                <div className="g__fdb__award__itm-71"></div>
                <div className="g__fdb__award__itm-70"></div>
                <div className="g__fdb__award__itm-69"></div>
                <div className="g__fdb__award__itm-68"></div>
                <div className="g__fdb__award__itm-67"></div>
                <div className="g__fdb__award__itm-66"></div>
                <div className="g__fdb__award__itm-65"></div>
                <div className="g__fdb__award__itm-64"></div>
                <div className="g__fdb__award__itm-63"></div>
                <div className="g__fdb__award__itm-62"></div>
                <div className="g__fdb__award__itm-61"></div>
                <div className="g__fdb__award__itm-60"></div>
                <div className="g__fdb__award__itm-59"></div>
                <div className="g__fdb__award__itm-58"></div>
                <div className="g__fdb__award__itm-57"></div>
                <div className="g__fdb__award__itm-56"></div>
                <div className="g__fdb__award__itm-55"></div>
                <div className="g__fdb__award__itm-54"></div>
                <div className="g__fdb__award__itm-53"></div>
                <div className="g__fdb__award__itm-52"></div>
                <div className="g__fdb__award__itm-51"></div>
                <div className="g__fdb__award__itm-50"></div>
                <div className="g__fdb__award__itm-49"></div>
                <div className="g__fdb__award__itm-48"></div>
                <div className="g__fdb__award__itm-47"></div>
                <div className="g__fdb__award__itm-46"></div>
                <div className="g__fdb__award__itm-45"></div>
                <div className="g__fdb__award__itm-44"></div>
                <div className="g__fdb__award__itm-43"></div>
                <div className="g__fdb__award__itm-42"></div>
                <div className="g__fdb__award__itm-41"></div>
                <div className="g__fdb__award__itm-40"></div>
                <div className="g__fdb__award__itm-39"></div>
                <div className="g__fdb__award__itm-38"></div>
                <div className="g__fdb__award__itm-37"></div>
                <div className="g__fdb__award__itm-36"></div>
                <div className="g__fdb__award__itm-35"></div>
                <div className="g__fdb__award__itm-34"></div>
                <div className="g__fdb__award__itm-33"></div>
                <div className="g__fdb__award__itm-32"></div>
                <div className="g__fdb__award__itm-31"></div>
                <div className="g__fdb__award__itm-30"></div>
                <div className="g__fdb__award__itm-29"></div>
                <div className="g__fdb__award__itm-28"></div>
                <div className="g__fdb__award__itm-27"></div>
                <div className="g__fdb__award__itm-26"></div>
                <div className="g__fdb__award__itm-25"></div>
                <div className="g__fdb__award__itm-24"></div>
                <div className="g__fdb__award__itm-23"></div>
                <div className="g__fdb__award__itm-22"></div>
                <div className="g__fdb__award__itm-21"></div>
                <div className="g__fdb__award__itm-20"></div>
                <div className="g__fdb__award__itm-19"></div>
                <div className="g__fdb__award__itm-18"></div>
                <div className="g__fdb__award__itm-17"></div>
                <div className="g__fdb__award__itm-16"></div>
                <div className="g__fdb__award__itm-15"></div>
                <div className="g__fdb__award__itm-14"></div>
                <div className="g__fdb__award__itm-13"></div>
                <div className="g__fdb__award__itm-12"></div>
                <div className="g__fdb__award__itm-11"></div>
                <div className="g__fdb__award__itm-10"></div>
                <div className="g__fdb__award__itm-9"></div>
                <div className="g__fdb__award__itm-8"></div>
                <div className="g__fdb__award__itm-7"></div>
                <div className="g__fdb__award__itm-6"></div>
                <div className="g__fdb__award__itm-5"></div>
                <div className="g__fdb__award__itm-4"></div>
                <div className="g__fdb__award__itm-3"></div>
                <div className="g__fdb__award__itm-2"></div>
                <div className="g__fdb__award__itm-1"></div>
            </div> */}
            

            <EndUI user={user} onStart={onStart} />
        </>
    );
}

GameWin.propTypes = {
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

export default GameWin;