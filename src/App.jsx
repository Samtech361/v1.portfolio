import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import WorksPage from './pages/Works'
import ContactPage from './pages/Contact'

function App() {


  return (
    <div className='w-full flex h-screen'>
      <Router>
      <Navbar />
      <div className='bg-blue-200 flex w-full'>
        <Routes>
          <Route path='/home' element={<Homepage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/works' element={<WorksPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </div>
      </Router>
      
    </div>
  )
}

export default App
