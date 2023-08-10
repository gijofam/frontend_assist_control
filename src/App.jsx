import './App.css'
import NavBar from './components/NavBar'
import Register from './components/Register'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>app control de asistencia</h1>
      <NavBar/>
      <Register/>
      {/* <Inputs/> */}
    </div>
  )
}

export default App
