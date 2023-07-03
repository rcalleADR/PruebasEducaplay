import PropTypes from 'prop-types'

function StartIcon(props) {
    const { className, color = 'currentColor' } = props;

    return (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className={className}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 24.2584L20.5 13.8661C21.1667 13.4811 21.1667 12.5189 20.5 12.134L2.5 1.74169C1.83333 1.35679 1 1.83792 1 2.60772L0.999999 23.3923C0.999999 24.1621 1.83333 24.6433 2.5 24.2584ZM21 14.7321C22.3333 13.9623 22.3333 12.0378 21 11.268L3 0.875669C1.66667 0.105868 -2.02551e-08 1.06812 -8.75531e-08 2.60772L-9.96077e-07 23.3923C-1.06338e-06 24.9319 1.66666 25.8942 3 25.1244L21 14.7321Z" fill={color}></path>
        </svg>
    );
}

StartIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
}

export default StartIcon;