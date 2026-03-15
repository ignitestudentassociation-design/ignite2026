import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Registration.css'

const Registration: React.FC = () => {
  const { eventId } = useParams()
  const [formData, setFormData] = useState({
    event: '',
    fullName: '',
    email: '',
    phone: '',
    college: '',
    teamSize: '',
    additionalInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <h1 className="registration-title">
            Event <span className="highlight">Registration</span>
          </h1>
          <p className="registration-subtitle">
            Secure your spot at our upcoming events. Fill out the form below to register.
          </p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group full-width">
            <label htmlFor="event" className="form-label">
              Select Event<span className="required">*</span>
            </label>
            <select
              id="event"
              name="event"
              className="form-input"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Select an event</option>
              <option value="debugging-fix-and-win">Debugging: Fix and Win</option>
              <option value="promptx">PromptX</option>
              <option value="clashiq">ClashIQ</option>
              <option value="yuva-manthan">Yuva Manthan</option>
              <option value="red-zone-challenge">Red Zone Challenge</option>
              <option value="inspira">Inspira</option>
              <option value="cinecraft">CineCraft</option>
              <option value="e-sports">E Sports</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="college" className="form-label">
                College/University<span className="required">*</span>
              </label>
              <input
                type="text"
                id="college"
                name="college"
                className="form-input"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="teamSize" className="form-label">
              Team Size (if applicable)
            </label>
            <input
              type="text"
              id="teamSize"
              name="teamSize"
              className="form-input"
              value={formData.teamSize}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="additionalInfo" className="form-label">
              Additional Info
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              className="form-textarea"
              rows={5}
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Registration
