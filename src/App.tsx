import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import EventDetails from './pages/EventDetails'
import Registration from './pages/Registration'
import Gallery from './pages/Gallery'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/event/:eventId/register" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
