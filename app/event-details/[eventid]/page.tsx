'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import './event-details.css'

export default function EventDetailsPage() {
  const params = useParams()
  const eventId = params.eventid as string
  
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageError, setImageError] = useState(false)

  const fallbackCoordinators: { [key: string]: Array<{name: string, phone: string}> } = {
    '69b7c782d21568ae765898f0': [
      { name: 'Saurav Ambhore', phone: '+91 7666679366' },
      { name: 'Sai Bembalge', phone: '+91 9823417001' }
    ],
    '69b7c84ad21568ae765898fb': [
      { name: 'Vivek Parande', phone: '+91 7498823753' },
      { name: 'Sandesh Ghule', phone: '+91 7499376437' }
    ],
    '69b7c85dd21568ae765898ff': [
      { name: 'Vijay Nagargoje', phone: '+91 8767431818' },
      { name: 'Rohit Mahadhane', phone: '+91 8459767146' }
    ],
    '69b7c835d21568ae765898f7': [
      { name: 'Krish Pachote', phone: '+91 9552316663' },
      { name: 'Pratik Kakde', phone: '+91 7507574789' },
      { name: 'Jay Rindhe', phone: '+91 9322091325' }
    ],
    '69b7c83ed21568ae765898f9': [
      { name: 'Krish Pachote', phone: '+91 9552316663' },
      { name: 'Pratik Kakde', phone: '+91 7507574789' },
      { name: 'Jay Rindhe', phone: '+91 9322091325' }
    ],
    '69b7c862d21568ae76589901': [
      { name: 'Ajinkya Ghuge', phone: '+91 9604176810' },
      { name: 'Shivam Ghante', phone: '+91 7972682325' }
    ],
    '69b7e5be6ce9af68a815e765': [
      { name: 'Onkar Tanpure', phone: '+91 8208607665' },
      { name: 'Pratik Tayde', phone: '+91 8983729462' }
    ],
    '69b8d02be6f29f7bdb8b9b83': [
      { name: 'Onkar Tanpure', phone: '+91 8208607665' },
      { name: 'Pratik Tayde', phone: '+91 8983729462' }
    ],
    '69b7c855d21568ae765898fd': [
      { name: 'Ishan Chipate', phone: '+91 8446387738' },
      { name: 'Ajay Wagh', phone: '+91 9356987231' }
    ]
  }

  useEffect(() => {
    if (eventId) {
      fetchEventDetails()
    }
  }, [eventId])

  const fetchEventDetails = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://ignitecore-three.vercel.app/api/v1/events/${eventId}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch event details')
      }
      
      const result = await response.json()
      
      if (result.success) {
        setEvent(result.data)
      } else {
        throw new Error(result.message || 'Failed to fetch event details')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
      setError(errorMessage)
      console.error('Error fetching event details:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    if (!timeString) return 'TBA'
    return timeString
  }

  if (loading) {
    return (
      <div className="event-details-page">
        <Header />
        <div className="loading-state">
          <p>Loading event details...</p>
        </div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="event-details-page">
        <Header />
        <div className="error-state">
          <h1>Event Not Found</h1>
          <p>Error: {error || 'Event not found'}</p>
          <Link href="/" className="retry-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="event-details-page">

        <div className="back-link">
          <Link href="/" className="back-button">
            ← Back to Events
          </Link>
        </div>

        <div className="event-header-section">
          <div className="event-info-left">
            <div className="event-badge">{event.mode || 'Offline'}</div>

            <h1 className="event-main-title">
              {event.title.split(' ').map((word: string, index: number, array: string[]) => {
                if (index === array.length - 1) {
                  return <span key={index} className="highlight">{word}</span>
                }
                return word + ' '
              })}
            </h1>

            <p className="event-subtitle">{event.content}</p>

            <div className="event-meta-grid">
              <div className="meta-card">
                <div className="meta-label">{formatDate(event.eventdate)}</div>
              </div>

              <div className="meta-card">
                <div className="meta-label">{formatTime(event.eventtime)}</div>
              </div>

              <div className="meta-card">
                <div className="meta-label">{event.eventvenue || 'TBD'}</div>
              </div>

              <div className="meta-card">
                <div className="meta-label">{event.totalRegCount || 0} Registered</div>
              </div>
            </div>
          </div>

          <div className="event-right-section">
            <div className="event-poster">
              {!imageError ? (
                <Image 
                  src={event.eventimage || '/images/event.png'}
                  alt={event.title}
                  width={450}
                  height={600}
                  onError={() => setImageError(true)}
                  unoptimized
                  className="event-poster-image"
                />
              ) : (
                <img src="/images/event.png" alt={event.title} className="event-poster-image" />
              )}
            </div>

            {event.amount > 0 && (
              <div className="price-tag">
                <span>₹{event.amount}</span>
              </div>
            )}

            <Link href={`/register?event=${event._id}`} className="register-button-sidebar">
              Register Now
            </Link>
          </div>
        </div>

        <section className="about-event-section">
          <h2>About Event</h2>
          <p>{event.content}</p>
        </section>

        <div className="rules-coordinators-section">

          <section className="rules-section">
            <h2>Rules</h2>
            {event.rules?.length ? (
              <ul>
                {event.rules.map((rule: string, i: number) => <li key={i}>{rule}</li>)}
              </ul>
            ) : <p>No rules</p>}
          </section>

          {/* ✅ FIXED HERE */}
          <section className="coordinators-section">
            <h2>Event Coordinators</h2>

            {(() => {
              const coordinators = (event.eventCordinators?.length)
                ? event.eventCordinators
                : fallbackCoordinators[eventId] || []

              return coordinators.length ? (
                <div className="coordinators-grid">
                  {coordinators.map((c: any, i: number) => (
                    <div key={i}>
                      <h3>{c.name}</h3>
                      {c.phone && (
                        <a href={`tel:${c.phone.replace('+91 ', '')}`}>
                          {c.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : <p>No coordinators</p>
            })()}

          </section>

        </div>

      </div>
    </>
  )
}