import classes from './iconButton.module.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx';

function IconButton(props) {
    const { className, icon, onClick, type = 'button' } = props;

    return (
        <button type={type} className={clsx(classes.button, className)} onClick={onClick}>
            {icon}
        </button>
    );
}

IconButton.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default IconButton;