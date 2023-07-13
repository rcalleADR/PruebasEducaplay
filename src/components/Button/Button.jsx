import classes from './button.module.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx';

function Button(props) {
    const { children, className, icon, disabled = false, onClick } = props;

    return (
        <button className={clsx(classes.button, className)} disabled={disabled} onClick={onClick}>
            <span className={classes.svg}>
                {icon}
            </span>
            <span id="btn__txt__cm" className={classes.content}>
                {children}
            </span>
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button;