import PropTypes from 'prop-types';
import classes from './activityLogin.module.scss'
import defaultAvatar from '../../assets/usuario.svg'

function ActivityLogin(props) {
    const user = props.user;
    const logged = true; //is the user logged

    if (logged) {
        return (
            <div className={classes.activityLogin}>
                <span className={classes.userAvatar}>
                    <img src={user.imageSource} width="74" height="76" alt=""/>
                </span>
                <div className={classes.txt}>
                    <span className={classes.identified}></span>
                    <span className={classes.title}>
                        { user.name } {user.lastname}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.activityLogin}>
                <span className={classes.userAvatar}>
                    <img src={defaultAvatar} width="74" height="76" alt=""/>
                </span>
                <div className={classes.txt}>
                    <a className={classes.notIdentified} href="//es.educaplay.com/">Pulsa aquí para identificarte</a>
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