import classes from './activityLogin.module.scss'

function ActivityLogin(props) {
    const user = props.user;
    return (
        <div className={classes.activityLogin}>
            <span className={classes.activityLogin__user}>
                <img src={user.imageSource} width="74" height="76" alt=""/>
            </span>
            <div className={classes.activityLogin__txt}>
                <span id="activityLogin__identified" className={classes.activityLogin__identified}></span>
                <span className={classes.title}>
                    { user.name } {user.lastname}
                </span>
                <span id="activityLogin__identified2" className={classes.activityLogin__identified2}></span>
            </div>
        </div>
    );
}

export default ActivityLogin;