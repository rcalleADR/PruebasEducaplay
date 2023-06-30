import './App.css'
import StartButton from './components/startButton/startButton'
import ActivityLogin from './components/userInfo/ActivityLogin'

function App() {

  const mockUser = {
    name: 'Edu',
    lastname: 'Caplay',
    imageSource: 'https://d2mxgq73d0f24i.cloudfront.net/images/imagenes/img_6893755_2184.jpg'
  }

  return (
    <>
      <h1>Yes or No</h1>
      <ActivityLogin user={mockUser}/>
      <StartButton></StartButton>
    </>
  )
}

export default App
