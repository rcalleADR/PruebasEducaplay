import GameOver from './components/screens/GameOver';
import GameWin from './components/screens/GameWin';
import MainMenu from './components/screens/MainMenu';

  const mockUser = {
    name: 'Ricardo',
    lastname: '.',
    imageSource: 'https://d2mxgq73d0f24i.cloudfront.net/images/imagenes/img_6893755_2184.jpg'
  }

  const mockGame = {
    type: 'Relacionar Columnas',
    title: 'Probando el juego',
    imageSource: 'https://es.rcalle.dev.educaplay.com/v2/r1/img/activities/RELACIONAR_COLUMNAS/logoActivity.png?v=20230202'
  }

function App() {

  const handleClick = () => {
    alert('Empieza!');
  }

  return (
    <GameOver user={mockUser} onStart={handleClick} gameData={mockGame} />
  )
}

export default App
