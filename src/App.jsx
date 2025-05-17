import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Room from './components/Room'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
