import MainMenu from './components/screens/MainMenu';

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
    <MainMenu user={mockUser} onStart={handleClick}/>
  )
}

export default App
