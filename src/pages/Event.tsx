import React from 'react'
import { Link } from 'react-router-dom'
import './Event.css'

const Event: React.FC = () => {
  return (
    <div className="event-page">
      <section className="event-hero-section">
        <h1 className="event-page-title">
          Our <span className="highlight">Events</span>
        </h1>
        <p className="event-page-description">
          Discover exciting opportunities to learn, compete, and grow with IGNITE
        </p>
      </section>

      <section className="events-grid-section">
        <div className="events-container">
          {/* Event Card 1 */}
          <div className="event-card">
            <div className="event-card-image">
              <img src="/images/event-poster.png" alt="Debate Competition" />
              <div className="event-badge-overlay">Offline</div>
            </div>
            <div className="event-card-content">
              <h3 className="event-card-title">
                Debate <span className="highlight">Competition</span>
              </h3>
              <p className="event-card-description">
                A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.
              </p>
              <div className="event-card-meta">
                <div className="event-meta-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#F3BD51" strokeWidth="2"/>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="#F3BD51" strokeWidth="2"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                  </svg>
                  <span>March 28, 2026</span>
                </div>
                <div className="event-meta-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#F3BD51" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="#F3BD51" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>9:00 AM</span>
                </div>
              </div>
              <div className="event-card-actions">
                <Link to="/event/debate-competition/register" className="btn-register">
                  Register Now
                </Link>
                <Link to="/event/debate-competition" className="btn-details">
                  Show Details
                </Link>
              </div>
            </div>
          </div>

          {/* You can add more event cards here */}
        </div>
      </section>
    </div>
  )
}

export default Event
