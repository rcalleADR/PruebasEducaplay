import MainMenu from './components/screens/MainMenu';

  const mockUser = {
    name: 'Edu',
    lastname: 'Caplay',
    imageSource: 'https://d2mxgq73d0f24i.cloudfront.net/images/imagenes/img_6893755_2184.jpg'
  }

  const mockGame = {
    type: 'Relacionar movidas',
    title: 'Componentes de React',
    imageSource: 'https://es.rcalle.dev.educaplay.com/v2/r1/img/activities/RELACIONAR_COLUMNAS/logoActivity.png?v=20230202'
  }

function App() {

  const handleClick = () => {
    console.log('Empieza!');
  }

  return (
    <MainMenu user={mockUser} onStart={handleClick} gameData={mockGame} />
  )
}

export default App
