import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='w-[100%] flex'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/home' element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
