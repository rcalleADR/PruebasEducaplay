import Button from './components/Button/Button'
import ActivityLogin from './components/userInfo/ActivityLogin'
import RestartIcon from './icons/RestartIcon';
import StartIcon from './icons/StartIcon';

  const mockUser = {
    name: 'Edu',
    lastname: 'Caplay',
    imageSource: 'https://d2mxgq73d0f24i.cloudfront.net/images/imagenes/img_6893755_2184.jpg'
  }


function App() {

  const handleClick = () => {
    console.log('Empieza!');
  }

  return (
    <>
      <h1>Yes or No</h1>
      <ActivityLogin user={mockUser}/>
      <Button className='classssse' icon={<StartIcon />} onClick={handleClick}>
        Comenzar
      </Button>
      <hr/>
      <Button className='classssse' icon={<RestartIcon />}>
        Reintentar
      </Button>
    </>
  )
}

export default App
