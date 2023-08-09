import PropTypes from 'prop-types';
import classes from './gameWin.module.scss'
import EndUI from '../EndUI';
import Confetti from 'react-confetti';

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
            <div className={classes.confettiWrapper}>
                <Confetti gravity={0.02} />
            </div>

            <div className={classes.titleWrapper}>
                <div className={classes.title}>¡Has Ganado!</div>
                <div className={classes.subtitle}>¡Enhorabuena!</div>
                <div className={classes.cup}>
                    <svg width="156" height="118" viewBox="0 0 156 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M119.576 15.8191C118.779 21.0714 117.019 27.0367 114.54 32.6818C112.15 38.1233 109.357 42.7354 106.928 45.4852V15.8191H119.576ZM123.992 9.99939H102.993V53.9966C108.56 53.9966 114.806 42.75 117.845 35.839C121.327 27.8951 123.992 18.2343 123.992 9.99939Z" fill="#FAFFF3"></path>
                            <path d="M49.8469 15.8191V45.4416C47.0971 42.4008 44.0173 37.3376 42.1874 32.8564C40.1676 27.9387 38.0577 21.5079 37.0678 15.8191H49.8469ZM53.8467 9.99939H32.498C32.498 18.2343 35.8478 28.768 38.7476 35.839C41.2375 41.9206 48.1871 53.9966 53.8467 53.9966V9.99939Z" fill="#FAFFF3"></path>
                            <path d="M102.824 3.99975V56.9264C102.824 69.6356 93.2945 80.1049 80.6553 81.2748L78.3554 81.4848L76.0556 81.2748C63.4264 80.0949 53.897 69.6256 53.897 56.9264V3.99975H102.824ZM78.3554 104.413L80.6553 104.623C83.7351 104.913 86.7149 105.793 89.4347 107.183H67.2761C70.0059 105.793 72.9858 104.913 76.0556 104.623L78.3554 104.413ZM106.824 0H49.8972V56.9264C49.8972 71.7454 61.2265 83.9147 75.6956 85.2546V100.634C67.8061 101.374 60.8465 105.323 56.1568 111.173H100.574C95.8843 105.323 88.9247 101.374 81.0352 100.634V85.2546C95.5043 83.9047 106.834 71.7354 106.834 56.9264V0H106.824Z" fill="#FAFFF3"></path>
                            <path d="M151.96 66.4758C154.55 65.1659 155.98 62.786 155.98 62.786C155.98 62.786 153.22 62.546 150.63 63.8559C149.92 64.2159 149.38 64.5459 148.97 64.8559C149.13 63.166 149.25 61.4661 149.31 59.7562C149.92 59.8262 150.87 59.5062 152.39 58.5263C154.82 56.9464 156 54.4365 156 54.4365C156 54.4365 153.23 54.4865 150.79 56.0664C150.19 56.4564 149.72 56.8164 149.36 57.1364C149.36 55.4565 149.31 53.7766 149.2 52.0967C149.81 52.1167 150.73 51.7167 152.17 50.5668C154.43 48.7469 155.35 46.1271 155.35 46.1271C155.35 46.1271 152.6 46.457 150.33 48.2769C149.75 48.7469 149.32 49.1469 148.99 49.5169C148.84 48.0369 148.64 46.577 148.4 45.1071C149 45.2471 149.97 44.9171 151.59 43.6072C153.85 41.7873 154.77 39.1675 154.77 39.1675C154.77 39.1675 152.02 39.4975 149.75 41.3174C149.52 41.5074 149.31 41.6873 149.12 41.8573C149.11 41.3274 149.01 40.6474 148.81 39.7975C148.15 36.9576 146.191 34.9978 146.191 34.9978C146.191 34.9978 145.291 37.6176 145.941 40.4474C146.111 41.1874 146.291 41.7773 146.481 42.2273C146.201 42.0173 145.881 41.7973 145.501 41.5674C143.041 40.0275 140.261 40.0375 140.261 40.0375C140.261 40.0375 141.481 42.5273 143.941 44.0672C145.561 45.0771 146.541 45.3471 147.141 45.2171C147.4 46.727 147.6 48.2469 147.75 49.7768C147.361 49.4069 146.821 48.9969 146.071 48.5369C143.631 46.997 140.851 46.997 140.851 46.997C140.851 46.997 142.071 49.4869 144.541 51.0268C146.381 52.1767 147.391 52.3667 147.96 52.1067C148.08 53.8466 148.13 55.5965 148.12 57.3364C147.77 56.9264 147.261 56.4464 146.551 55.8964C144.251 54.1166 141.491 53.8366 141.491 53.8366C141.491 53.8366 142.451 56.4364 144.751 58.2163C146.501 59.5662 147.48 59.8462 148.08 59.6262C148.02 61.3261 147.91 63.016 147.75 64.6959C147.45 64.2759 147.031 63.7959 146.441 63.236C144.351 61.2261 141.631 60.6561 141.631 60.6561C141.631 60.6561 142.311 63.346 144.411 65.3558C145.931 66.8158 146.871 67.2357 147.481 67.1257C147.351 68.1857 147.191 69.2456 147.021 70.2955C146.831 69.9956 146.601 69.6756 146.331 69.3156C144.561 67.0157 141.961 66.0458 141.961 66.0458C141.961 66.0458 142.231 68.8056 144.001 71.1055C145.091 72.5254 145.881 73.1354 146.471 73.2853C146.271 74.2553 146.061 75.2252 145.841 76.1852C145.661 75.8252 145.421 75.4152 145.121 74.9552C143.541 72.5154 141.031 71.3355 141.031 71.3355C141.031 71.3355 141.081 74.1053 142.651 76.5451C143.731 78.215 144.521 78.865 145.131 78.965C144.731 80.4349 144.301 81.8648 143.831 83.2747C143.641 82.7647 143.311 82.1348 142.791 81.3448C141.201 78.915 138.681 77.7551 138.681 77.7551C138.681 77.7551 138.751 80.5249 140.341 82.9547C141.611 84.8946 142.481 85.4446 143.121 85.3646C142.671 86.6345 142.191 87.8644 141.691 89.0643C141.541 88.6144 141.331 88.0944 141.021 87.4744C139.731 84.8746 137.361 83.4247 137.361 83.4247C137.361 83.4247 137.101 86.1845 138.391 88.7844C139.311 90.6242 140.041 91.3442 140.641 91.4842C140.131 92.5941 139.611 93.674 139.061 94.714C138.961 94.414 138.831 94.084 138.681 93.724C137.551 91.0542 135.281 89.4543 135.281 89.4543C135.281 89.4543 134.841 92.1941 135.971 94.864C136.561 96.2639 137.081 97.0438 137.561 97.4238C136.941 98.4937 136.301 99.5037 135.651 100.464C135.571 99.9936 135.421 99.4437 135.201 98.7737C134.281 96.0239 132.141 94.254 132.141 94.254C132.141 94.254 131.502 96.9538 132.421 99.7037C133.011 101.474 133.581 102.303 134.111 102.603C133.881 102.903 133.651 103.213 133.411 103.493C132.831 104.213 132.241 104.873 131.652 105.493C131.592 104.953 131.432 104.273 131.142 103.403C130.222 100.654 128.082 98.8837 128.082 98.8837C128.082 98.8837 127.442 101.584 128.362 104.333C128.912 105.963 129.432 106.793 129.922 107.153C128.422 108.463 126.942 109.423 125.552 110.033C125.602 109.473 125.552 108.723 125.382 107.713C124.892 104.853 123.052 102.773 123.052 102.773C123.052 102.773 122.002 105.343 122.482 108.203C122.682 109.393 123.242 110.183 123.532 110.713C123.212 110.763 122.912 110.793 122.912 110.793V112.053C123.832 112.053 124.082 111.953 124.842 111.753C124.842 112.483 125.422 113.163 128.042 113.613C130.902 114.103 133.391 113.043 133.391 113.043C133.391 113.043 131.282 111.203 128.412 110.713C128.052 110.653 127.692 110.603 127.392 110.573C128.602 109.903 129.822 108.993 131.052 107.873C131.382 108.413 132.321 108.803 134.521 108.833C137.421 108.873 139.791 107.433 139.791 107.433C139.791 107.433 137.451 105.933 134.551 105.893C133.911 105.883 133.391 105.913 132.941 105.963C133.431 105.433 133.911 104.873 134.391 104.273C134.641 103.963 134.901 103.633 135.151 103.303C135.521 103.803 136.481 104.153 138.571 104.183C141.471 104.223 143.851 102.783 143.851 102.783C143.851 102.783 141.511 101.284 138.611 101.244C137.731 101.234 137.051 101.284 136.531 101.384C137.301 100.264 138.041 99.0737 138.771 97.8238C138.941 98.5237 139.821 99.0137 142.461 98.8537C145.361 98.6737 147.62 97.0538 147.62 97.0538C147.62 97.0538 145.181 95.7339 142.281 95.9239C140.941 96.0039 140.081 96.2039 139.531 96.4739C140.291 95.074 141.031 93.6041 141.731 92.0742C142.221 92.4441 143.221 92.6041 145.111 92.3641C147.99 92.0042 150.14 90.2543 150.14 90.2543C150.14 90.2543 147.62 89.0943 144.741 89.4543C143.861 89.5643 143.191 89.7143 142.681 89.8843C143.221 88.5944 143.741 87.2745 144.221 85.9145C144.791 86.1345 145.771 86.1345 147.44 85.7146C150.26 85.0146 152.18 83.0147 152.18 83.0147C152.18 83.0147 149.54 82.1548 146.731 82.8647C146.061 83.0347 145.531 83.2047 145.091 83.3847C145.511 82.0848 145.911 80.7549 146.271 79.405C146.781 79.7449 147.8 79.8149 149.73 79.345C152.55 78.665 154.49 76.6751 154.49 76.6751C154.49 76.6751 151.86 75.8052 149.03 76.4851C148.03 76.7251 147.321 76.9851 146.821 77.2551C147.121 76.0252 147.39 74.7852 147.64 73.5253C148.12 73.9453 149.14 74.0153 151.26 73.3153C154.02 72.4054 155.79 70.2755 155.79 70.2755C155.79 70.2755 153.09 69.6156 150.34 70.5255C149.22 70.8955 148.48 71.2555 148 71.6054C148.25 70.1855 148.47 68.7556 148.65 67.3157C149.28 67.5257 150.27 67.3357 151.96 66.4758Z" fill="#FAFFF3"></path>
                            <path d="M30.5981 107.733C30.4281 108.733 30.3881 109.483 30.4281 110.053C29.0282 109.453 27.5483 108.483 26.0583 107.173C26.5483 106.813 27.0783 105.983 27.6182 104.353C28.5382 101.604 27.8982 98.9037 27.8982 98.9037C27.8982 98.9037 25.7584 100.674 24.8384 103.423C24.5484 104.293 24.3885 104.973 24.3285 105.513C23.7385 104.893 23.1485 104.233 22.5686 103.513C22.3386 103.223 22.1086 102.923 21.8686 102.623C22.3986 102.324 22.9685 101.494 23.5585 99.7237C24.4784 96.9738 23.8385 94.274 23.8385 94.274C23.8385 94.274 21.6986 96.0439 20.7787 98.7937C20.5587 99.4637 20.4087 100.014 20.3287 100.484C19.6788 99.5237 19.0388 98.5037 18.4188 97.4438C18.8888 97.0638 19.4188 96.2839 20.0087 94.884C21.1387 92.2141 20.6987 89.4743 20.6987 89.4743C20.6987 89.4743 18.4288 91.0742 17.2989 93.744C17.1489 94.104 17.0189 94.434 16.9189 94.734C16.379 93.6941 15.849 92.6141 15.339 91.5042C15.939 91.3742 16.6689 90.6542 17.5889 88.8044C18.8788 86.2045 18.6188 83.4447 18.6188 83.4447C18.6188 83.4447 16.259 84.8946 14.9591 87.4944C14.6491 88.1144 14.4291 88.6344 14.2891 89.0843C13.7891 87.8844 13.3092 86.6445 12.8592 85.3846C13.4991 85.4646 14.3591 84.9146 15.639 82.9747C17.2289 80.5449 17.2989 77.7751 17.2989 77.7751C17.2989 77.7751 14.7791 78.935 13.1892 81.3648C12.6692 82.1548 12.3392 82.7847 12.1492 83.2947C11.6893 81.8848 11.2493 80.4549 10.8493 78.985C11.4593 78.885 12.2492 78.235 13.3292 76.5651C14.9091 74.1253 14.9491 71.3555 14.9491 71.3555C14.9491 71.3555 12.4392 72.5354 10.8593 74.9752C10.5593 75.4352 10.3293 75.8452 10.1394 76.2052C9.90937 75.2452 9.69939 74.2853 9.5094 73.3053C10.0994 73.1654 10.8893 72.5454 11.9792 71.1255C13.7491 68.8256 14.0191 66.0658 14.0191 66.0658C14.0191 66.0658 11.4193 67.0357 9.64939 69.3356C9.36941 69.6956 9.14942 70.0156 8.95943 70.3155C8.78944 69.2656 8.62945 68.2057 8.49946 67.1457C9.10942 67.2457 10.0494 66.8358 11.5693 65.3758C13.6591 63.366 14.3491 60.6761 14.3491 60.6761C14.3491 60.6761 11.6393 61.2461 9.5394 63.256C8.94943 63.8159 8.52946 64.2959 8.22948 64.7159C8.06949 63.036 7.9595 61.3461 7.8995 59.6462C8.48946 59.8662 9.4794 59.5862 11.2293 58.2363C13.5291 56.4564 14.4891 53.8566 14.4891 53.8566C14.4891 53.8566 11.7293 54.1366 9.4294 55.9164C8.70945 56.4664 8.19948 56.9464 7.8595 57.3564C7.8495 55.6165 7.9095 53.8666 8.01949 52.1267C8.58946 52.3867 9.59939 52.1967 11.4393 51.0468C13.9091 49.5069 15.129 47.017 15.129 47.017C15.129 47.017 12.3492 47.017 9.88937 48.5469C9.14942 48.9969 8.60945 49.4069 8.21948 49.7768C8.36947 48.2469 8.56946 46.727 8.82944 45.2171C9.4294 45.3471 10.3993 45.0771 12.0292 44.0672C14.4891 42.5373 15.709 40.0375 15.709 40.0375C15.709 40.0375 12.9392 40.0375 10.4693 41.5674C10.0994 41.8073 9.77938 42.0273 9.4994 42.2373C9.68939 41.7773 9.86937 41.1974 10.0394 40.4574C10.6993 37.6276 9.79938 34.9978 9.79938 34.9978C9.79938 34.9978 7.8395 36.9676 7.18954 39.7975C6.98956 40.6474 6.89956 41.3274 6.87956 41.8573C6.68958 41.6873 6.47959 41.5074 6.2496 41.3174C3.98975 39.4975 1.22992 39.1675 1.22992 39.1675C1.22992 39.1675 2.14986 41.7873 4.40972 43.6072C6.03962 44.9171 6.99956 45.2571 7.59952 45.1071C7.35953 46.567 7.15955 48.0369 7.00956 49.5169C6.67958 49.1469 6.2396 48.7469 5.66964 48.2769C3.40978 46.457 0.649959 46.1271 0.649959 46.1271C0.649959 46.1271 1.5699 48.7469 3.82976 50.5668C5.26967 51.7167 6.18961 52.1167 6.79957 52.0967C6.68958 53.7766 6.63958 55.4565 6.63958 57.1364C6.2796 56.8164 5.80963 56.4664 5.20967 56.0664C2.76982 54.4865 0 54.4365 0 54.4365C0 54.4365 1.16993 56.9464 3.60977 58.5263C5.12967 59.5162 6.07961 59.8262 6.68958 59.7562C6.74957 61.4661 6.85957 63.166 7.02955 64.8559C6.61958 64.5459 6.07961 64.2159 5.36966 63.8559C2.77982 62.546 0.0199987 62.786 0.0199987 62.786C0.0199987 62.786 1.44991 65.1559 4.03974 66.4758C5.72964 67.3357 6.71957 67.5257 7.30954 67.3457C7.48953 68.7856 7.70951 70.2255 7.9595 71.6354C7.47953 71.2855 6.73957 70.9255 5.61964 70.5555C2.85982 69.6456 0.169989 70.3055 0.169989 70.3055C0.169989 70.3055 1.93988 72.4354 4.6997 73.3453C6.81957 74.0453 7.8395 73.9753 8.31947 73.5553C8.56946 74.8152 8.83944 76.0552 9.13942 77.2851C8.63945 77.0151 7.9295 76.7651 6.92956 76.5151C4.10974 75.8352 1.46991 76.7051 1.46991 76.7051C1.46991 76.7051 3.40978 78.685 6.2296 79.375C8.15948 79.8449 9.16942 79.7749 9.68939 79.435C10.0594 80.7849 10.4493 82.1148 10.8693 83.4147C10.4393 83.2347 9.89937 83.0647 9.22941 82.8947C6.40959 82.1948 3.77976 83.0447 3.77976 83.0447C3.77976 83.0447 5.70964 85.0346 8.51946 85.7446C10.1794 86.1645 11.1693 86.1645 11.7393 85.9445C12.2292 87.3045 12.7392 88.6244 13.2792 89.9143C12.7692 89.7443 12.0992 89.5943 11.2193 89.4843C8.33947 89.1243 5.81963 90.2843 5.81963 90.2843C5.81963 90.2843 7.96949 92.0342 10.8493 92.3941C12.7392 92.6341 13.7391 92.4741 14.2291 92.1042C14.9291 93.6341 15.659 95.104 16.429 96.5039C15.889 96.2339 15.019 96.0439 13.6791 95.9539C10.7793 95.7739 8.33947 97.0838 8.33947 97.0838C8.33947 97.0838 10.5993 98.6937 13.4991 98.8837C16.139 99.0537 17.0189 98.5537 17.1889 97.8538C17.9189 99.1037 18.6588 100.304 19.4288 101.414C18.9088 101.314 18.2288 101.264 17.3489 101.274C14.4491 101.314 12.1092 102.813 12.1092 102.813C12.1092 102.813 14.4791 104.253 17.3889 104.213C19.4788 104.183 20.4387 103.833 20.8087 103.333C21.0587 103.663 21.3086 103.993 21.5686 104.303C22.0486 104.903 22.5386 105.463 23.0185 105.993C22.5786 105.943 22.0486 105.913 21.4086 105.923C18.5088 105.963 16.169 107.463 16.169 107.463C16.169 107.463 18.5388 108.903 21.4386 108.863C23.6385 108.833 24.5884 108.443 24.9084 107.903C26.1383 109.023 27.3583 109.933 28.5682 110.603C28.2682 110.633 27.9182 110.683 27.5483 110.743C24.6884 111.233 22.5686 113.073 22.5686 113.073C22.5686 113.073 25.0584 114.123 27.9182 113.643C30.5481 113.193 31.118 112.513 31.118 111.783C31.878 111.983 32.128 112.083 33.0479 112.083V110.823C33.0479 110.823 32.7479 110.793 32.4279 110.743C32.7079 110.223 33.2679 109.423 33.4779 108.233C33.9678 105.373 32.9079 102.803 32.9079 102.803C32.9079 102.803 31.088 104.873 30.5981 107.733Z" fill="#FAFFF3"></path>
                        </g>
                    </svg>
                </div>
                <div className={classes.pointsWrapper}>
                    <span className={classes.pointsTitle}>Total<br/>Puntos</span>
                    <span className={classes.pointsValue}>100.000</span>
                </div>
            </div>

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