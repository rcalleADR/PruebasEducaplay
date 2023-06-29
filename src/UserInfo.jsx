import classes from './userInfo.module.css'

function UserInfo() {
    return (
        <div className="activityLogin">
            <span className={classes.img}>
                <img src="https://d2mxgq73d0f24i.cloudfront.net/images/imagenes/img_6893755_2184.jpg" width="74" height="76" alt=""/>
            </span>
            <div className="activityLogin__txt">
                <span id="activityLogin__identified" className="activityLogin__identified"></span>
                <span className={classes.title}>
                    Ricardo .
                </span>
                <span id="activityLogin__identified2" className="activityLogin__identified2"></span>
            </div>
        </div>
    );
}

export default UserInfo