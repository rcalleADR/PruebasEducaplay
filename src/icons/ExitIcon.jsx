import PropTypes from 'prop-types'

function ExitIcon(props) {
    const { className } = props;

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M15 23.5H0.5V0.5H15" stroke="white" strokeMiterlimit="10"></path>
            <g className="i__exit__arrow">
                <path d="M6 11.5H22.5L16 5" stroke="white" strokeMiterlimit="10"></path>
                <path d="M22.5 11.5L16 18" stroke="white" strokeMiterlimit="10"></path>
            </g>
        </svg>
    );
}

ExitIcon.propTypes = {
    className: PropTypes.string,
}

export default ExitIcon;