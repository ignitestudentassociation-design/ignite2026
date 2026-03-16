'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Event } from '@/types/event'
import './EventSection.css'

export default function EventSection() {

  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        "https://ignitecore-three.vercel.app/api/v1/events/",
        { cache: "no-store" }
      )

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setEvents(result.data)
      } else {
        throw new Error(result.message || "Failed to fetch events")
      }

    } catch (err) {

      console.error("Fetch error:", err)

      const message =
        err instanceof Error
          ? err.message
          : "Unable to load events"

      setError(message)

    } finally {
      setLoading(false)
    }
  }

  const handleImageError = (eventId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [eventId]: true
    }))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)

    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  if (loading) {
    return (
      <section className="event-section">
        <div className="event-container">
          <div className="loading-state">
            <p>Loading events...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="event-section">
        <div className="event-container">
          <div className="error-state">
            <p>Error loading events: {error}</p>
            <button onClick={fetchEvents} className="retry-btn">
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  // Show only first 3 events
  const displayedEvents = events.slice(0, 3)

  return (
    <section className="event-section">

      <div className="event-container">

        {/* Title */}
        <h2 className="event-title">
          <span className="title-highlight">Upcoming</span> Events
        </h2>

        {/* Description */}
        <p className="event-description">
          Ignite SA is a student community that boasts the most brilliant minds
          from our college. Comprising individuals from diverse fields including
          tech and design, all members possess exceptional skills in their
          respective domains and work together to create meaningful student
          experiences.
        </p>

        {/* Event Cards */}
        <div className="event-cards-container">

          {displayedEvents.length > 0 ? (

            displayedEvents.map((event) => (

              <div key={event._id} className="event-card">

                <div className="event-image-wrapper">

                  {!imageErrors[event._id] ? (

                    <Image
                      src={event.eventimage || "/images/event.png"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="event-image"
                      onError={() => handleImageError(event._id)}
                      unoptimized
                    />

                  ) : (

                    <img
                      src="/images/event.png"
                      alt={event.title}
                      className="event-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />

                  )}

                </div>

                <div className="event-content">

                  <h3 className="event-card-title">
                    {event.title}
                  </h3>

                  <p className="event-card-description">
                    {event.content}
                  </p>

                  {event.tags && event.tags.length > 0 && (

                    <div className="event-tags">

                      {event.tags.slice(0, 3).map((tag: string, index: number) => (

                        <span key={index} className="event-tag">
                          #{tag}
                        </span>

                      ))}

                    </div>

                  )}

                  <div className="event-details">

                    <div className="event-detail-item">
                      <span>📅 {formatDate(event.eventdate)}</span>
                    </div>

                    <div className="event-detail-item">
                      <span>📍 {event.eventvenue || event.mode}</span>
                    </div>

                    {event.amount > 0 && (
                      <div className="event-detail-item">
                        <span>💰 ₹{event.amount}</span>
                      </div>
                    )}

                  </div>

                  <Link href={`/register?event=${event._id}`} className="register-btn">
                    Register Now
                  </Link>

                  <Link href={`/event-details/${event._id}`} className="more-details-btn">
                    More Details
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                </div>

              </div>

            ))

          ) : (

            <p className="no-events">
              No events available at the moment.
            </p>

          )}

        </div>

        {/* View All Events Button */}
        {events.length > 3 && (
          <div className="view-all-container">
            <Link href="/events" className="view-all-btn">
              View All Events
              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

      </div>

    </section>
  )
}