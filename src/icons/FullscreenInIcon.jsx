import PropTypes from 'prop-types'

function FullscreenInIcon(props) {
    const { className } = props;

    return (
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none" className={className}>
            <path d="M3.6 12.6V3.6H12.6V0H2.52C1.134 0 0 1.134 0 2.52V12.6H3.6Z" fill="#ffffff"></path>
            <path d="M23.3999 3.6H32.3999V12.6H35.9999V2.52C35.9999 1.134 34.8659 0 33.4799 0H23.3999V3.6Z" fill="#ffffff"></path>
            <path d="M32.3999 23.3999V32.3999H23.3999V35.9999H33.4799C34.8659 35.9999 35.9999 34.8659 35.9999 33.4799V23.3999H32.3999Z" fill="#ffffff"></path>
            <path d="M12.6 32.3999H3.6V23.3999H0V33.4799C0 34.8659 1.134 35.9999 2.52 35.9999H12.6V32.3999Z" fill="#ffffff"></path>
        </svg>
    );
}

FullscreenInIcon.propTypes = {
    className: PropTypes.string,
}

export default FullscreenInIcon;