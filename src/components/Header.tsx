import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/ig_logo.png" alt="IGNITE Logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About us</Link>
        <Link to="/event" className="nav-link">Event</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
