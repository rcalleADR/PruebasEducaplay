import classes from './/endUI.module.scss'
import Button from './Button/Button'
import RestartIcon from '../icons/RestartIcon';
import ActivityLogin from './activityLogin/ActivityLogin';
import PropTypes from 'prop-types';

function EndUI(props) {
    const { onRestart, user, scoreData } = props;

    return(
        <div className={classes.background}>
            <Button className='classssse' icon={<RestartIcon />} onClick={onRestart}>
                Reintentar
            </Button>
            <div className={classes.shareWrapper} >
                <span>Compartir</span>
                <a href="">
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.01 13.5L12.68 9.16H8.51V6.34C8.51 5.15 9.09 3.99 10.96 3.99H12.85V0.29C12.85 0.29 11.13 0 9.49 0C6.06 0 3.82 2.08 3.82 5.85V9.16H0V13.5H3.82V24H8.52V13.5H12.01Z" fill="#DCFBB6"></path>
                    </svg>   
                </a>
                <a href="">
                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9168 2.37109C23.1568 2.71109 22.3068 2.92109 21.4868 3.06109C21.8768 2.99109 22.4468 2.29109 22.6768 2.00109C23.0268 1.56109 23.3168 1.07109 23.4868 0.531094C23.5068 0.491094 23.5268 0.441094 23.4768 0.401094C23.4268 0.381094 23.3868 0.391094 23.3468 0.411094C22.4268 0.901094 21.4768 1.26109 20.4668 1.51109C20.3868 1.53109 20.3168 1.51109 20.2668 1.46109C20.1868 1.37109 20.1068 1.28109 20.0168 1.20109C19.5968 0.841094 19.1368 0.561094 18.6268 0.351094C17.9568 0.081094 17.2168 -0.0389061 16.4868 0.0110939C15.7768 0.0610939 15.0868 0.261094 14.4568 0.581094C13.8268 0.911094 13.2668 1.37109 12.8168 1.92109C12.3568 2.49109 12.0168 3.16109 11.8368 3.88109C11.6668 4.57109 11.6868 5.25109 11.7868 5.95109C11.8068 6.07109 11.7968 6.08109 11.6868 6.07109C7.73677 5.48109 4.45677 4.07109 1.79677 1.04109C1.67677 0.911094 1.61677 0.911094 1.52677 1.05109C0.36677 2.79109 0.926772 5.60109 2.37677 6.97109C2.56677 7.15109 2.76677 7.34109 2.98677 7.50109C2.90677 7.52109 1.93677 7.41109 1.07677 6.97109C0.956769 6.90109 0.906769 6.94109 0.896769 7.07109C0.886769 7.26109 0.906771 7.43109 0.926771 7.64109C1.14677 9.41109 2.37677 11.0411 4.05677 11.6811C4.25677 11.7611 4.47677 11.8411 4.68677 11.8711C4.30677 11.9511 3.90677 12.0111 2.81677 11.9311C2.67677 11.9011 2.62677 11.9711 2.67677 12.1011C3.49677 14.3411 5.27677 15.0111 6.60677 15.3911C6.78677 15.4211 6.96677 15.4211 7.14677 15.4611C7.13677 15.4811 7.12677 15.4811 7.11677 15.4911C6.67677 16.1611 5.14677 16.6611 4.42677 16.9111C3.12677 17.3611 1.71677 17.5711 0.346769 17.4311C0.126769 17.4011 0.0767697 17.4011 0.0267697 17.4311C-0.0332303 17.4711 0.0167711 17.5211 0.0867711 17.5811C0.366771 17.7611 0.64677 17.9311 0.93677 18.0811C1.80677 18.5411 2.71677 18.9111 3.66677 19.1711C8.56677 20.5211 14.0868 19.5311 17.7668 15.8711C20.6568 13.0011 21.6668 9.04109 21.6668 5.08109C21.6668 4.92109 21.8468 4.84109 21.9568 4.76109C22.7068 4.20109 23.3168 3.52109 23.8768 2.76109C24.0068 2.59109 24.0068 2.44109 24.0068 2.38109C24.0068 2.37109 24.0068 2.36109 24.0068 2.36109C24.0168 2.30109 24.0168 2.32109 23.9168 2.37109Z" fill="#DCFBB6"></path>
                    </svg>   
                </a>
            </div>
            <ActivityLogin user={user} />
            <div className={classes.scoreWrapper} >
                <div className={classes.firstScoreLine}>
                    <span>Puntos</span>
                    <span>100</span>
                </div>
                <div className={classes.scoreLine}>
                    <span>Tiempo</span>
                    <span>00:34</span>
                </div>
                <div className={classes.scoreLine}>
                    <span>Aciertos</span>
                    <span>8/8</span>
                </div>
            </div>
            <Button className='classssse' >
                Resultados
            </Button>
            <div className={classes.reports} >
                <div>
                    <div>Resultados actividad</div>
                    <div>Probando el juego</div>
                    <div>[Aqui van a ir los resultados en lista]</div>
                </div>
            </div>
        </div>
    );
}

EndUI.propTypes = {
    onRestart: PropTypes.func,
    user: PropTypes.shape({
        name: PropTypes.string,
        lastname: PropTypes.string,
        imageSource: PropTypes.string
    }),
    gameData: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        imageSource: PropTypes.string
    })
}

export default EndUI;