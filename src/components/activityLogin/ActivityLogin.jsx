import PropTypes from 'prop-types';
import classes from './activityLogin.module.scss'

function ActivityLogin(props) {
    const user = props.user;
    const logged = true; //is the user logged

    return (logged &&
        <div className={classes.activityLogin}>
            <span className={classes.activityLogin__user}>
                <img src={user.imageSource} width="74" height="76" alt=""/>
            </span>
            <div className={classes.activityLogin__txt}>
                <span className={classes.activityLogin__identified}></span>
                <span className={classes.title}>
                    { user.name } {user.lastname}
                </span>
                <span className={classes.activityLogin__identified2}></span>
            </div>
        </div>
    );
}

ActivityLogin.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        lastname: PropTypes.string,
        imageSource: PropTypes.string
    })
}

export default ActivityLogin;