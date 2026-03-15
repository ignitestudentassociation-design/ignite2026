import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './EventDetails.css'

const EventDetails: React.FC = () => {
  const { eventId } = useParams()

  return (
    <div className="event-details-page">
      <div className="back-link">
        <Link to="/event" className="back-button">
          ← Back to Event page
        </Link>
      </div>

      <div className="event-header-section">
        <div className="event-info-left">
          <div className="event-badge">Offline</div>
          <h1 className="event-main-title">
            Debate <span className="highlight">Competition</span>
          </h1>
          <p className="event-subtitle">
            A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.
          </p>

          <div className="event-meta-grid">
            <div className="meta-card">
              <div className="meta-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="3" y1="9" x2="21" y2="9" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                </svg>
              </div>
              <div className="meta-label">March 28,2026</div>
            </div>

            <div className="meta-card">
              <div className="meta-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#F3BD51" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="#F3BD51" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="meta-label">9:00am</div>
            </div>

            <div className="meta-card">
              <div className="meta-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="3" y1="9" x2="21" y2="9" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="#F3BD51" strokeWidth="2"/>
                </svg>
              </div>
              <div className="meta-label">Dept LTD</div>
            </div>

            <div className="meta-card">
              <div className="meta-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#F3BD51" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="#F3BD51" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="meta-label">9:00am</div>
            </div>
          </div>
        </div>

        <div className="event-right-section">
          <div className="event-poster">
            <img src="/images/event-poster.png" alt="Event Poster" />
          </div>

          <Link to={`/event/${eventId}/register`} className="register-button-sidebar">
            Register Now
          </Link>
        </div>
      </div>

      <section className="about-event-section">
        <h2 className="section-heading">
          About <span className="highlight">The Event</span>
        </h2>
        <p className="event-description">
          A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.A powerful debate competition where young minds present their opinions on important topics and defend their perspectives with logic and confidence.
        </p>
      </section>

      <div className="rules-coordinators-section">
        <section className="rules-section">
          <h2 className="section-heading">
            Rules & <span className="highlight">Guidelines</span>
          </h2>
          <ul className="rules-list">
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
            <li>Participants will be given a topic before the debate begins.</li>
          </ul>
          <div className="download-rulebook-container">
            <a href="/rulebooks/debate-competition-rules.pdf" download className="download-rulebook-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download Rulebook
            </a>
          </div>
        </section>

        <section className="coordinators-section">
          <h2 className="section-heading">
            Event <span className="highlight">Co-ordinators</span>
          </h2>
          <div className="coordinators-grid">
            <div className="coordinator-card">
              <h3 className="coordinator-name">Saurav Ambhore</h3>
              <a href="tel:7666679366" className="coordinator-contact">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#F3BD51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7666679366
              </a>
            </div>
            <div className="coordinator-card">
              <h3 className="coordinator-name">Saurav Ambhore</h3>
              <a href="tel:7666679366" className="coordinator-contact">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#F3BD51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                7666679366
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="cta-section">
        <div className="cta-box">
          <h3 className="cta-title">Ready to Join?</h3>
          <p className="cta-subtitle">Secure your spot now — limited seats available!</p>
          <Link to={`/event/${eventId}/register`} className="register-button">
            Register Now
          </Link>
        </div>
      </section>

      <section className="gallery-cta-section">
        <Link to="/gallery" className="gallery-button">
          Gallery
        </Link>
      </section>
    </div>
  )
}

export default EventDetails
