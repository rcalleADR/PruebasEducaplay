import PropTypes from 'prop-types'

function FullscreenOutIcon(props) {
    const { className } = props;

    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className={className}>
            <path d="M9.0001 9.76753e-05L9.0001 9.0001L9.83048e-05 9.0001L9.799e-05 12.6001L10.0801 12.6001C11.4661 12.6001 12.6001 11.4661 12.6001 10.0801L12.6001 9.799e-05L9.0001 9.76753e-05Z" fill="#6EB118"></path>
            <path d="M36 9.0001L27 9.0001L27 9.72032e-05L23.4 9.68885e-05L23.4 10.0801C23.4 11.4661 24.534 12.6001 25.92 12.6001L36 12.6001L36 9.0001Z" fill="#6EB118"></path>
            <path d="M27 36L27 27L36 27L36 23.4L25.92 23.4C24.534 23.4 23.4 24.534 23.4 25.92L23.4 36L27 36Z" fill="#6EB118"></path>
            <path d="M9.87768e-05 27L9.0001 27L9.0001 36L12.6001 36L12.6001 25.92C12.6001 24.534 11.4661 23.4 10.0801 23.4L9.90916e-05 23.4L9.87768e-05 27Z" fill="#6EB118"></path>
        </svg>
    );
}

FullscreenOutIcon.propTypes = {
    className: PropTypes.string,
}

export default FullscreenOutIcon;