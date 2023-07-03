import ActivityLogin from '../activityLogin/ActivityLogin'
import RestartIcon from '../../icons/RestartIcon'
import StartIcon from '../../icons/StartIcon';
import Button from '../Button/Button'
import PropTypes from 'prop-types';

function MainMenu(props) {
    const { onStart, user } = props;

    return (
        <>
            <h1>Yes or No</h1>
            <ActivityLogin user={user} />
            <Button className='classssse' icon={<StartIcon />} onClick={onStart}>
                Comenzar
            </Button>
            <hr />
            <Button className='classssse' icon={<RestartIcon />}>
                Reintentar
            </Button>
        </>
    );
}

MainMenu.propTypes = {
    onStart: PropTypes.func,
    user: PropTypes.shape({
        name: PropTypes.string,
        lastname: PropTypes.string,
        imageSource: PropTypes.string
    })
}

export default MainMenu;