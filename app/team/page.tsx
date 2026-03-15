'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import './team.css'

export default function TeamPage() {
  return (
    <div className="team-page">
      {/* 3D Background Elements */}
      <div className="team-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      {/* Navigation - Shared Header */}
      <Header />

      {/* Main Content */}
      <div className="team-content">
        {/* Title */}
        <h1 className="team-title">
          <span className="team-title-yellow">The People</span>{' '}
          <span className="team-title-white">Behind IGNITE</span>
        </h1>

        {/* Description Paragraphs */}
        <div className="team-description">
          <p>
            At IGNITE Student Association, our strength lies in our passionate, dedicated, and visionary 
            team members. Together, we collaborate to organize impactful events, foster innovation, and 
            create meaningful student experiences.
          </p>

          <p>
            Our team consists of faculty mentors, core leaders, and dynamic student coordinators who 
            work tirelessly behind the scenes.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="team-image-container">
          <div className="team-image-wrapper">
            <Image
              src="/images/snapshot2.jpeg"
              alt="IGNITE Team"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            
            {/* Overlay Text */}
            <div className="team-image-overlay">
              <h2 className="team-image-title">
                <span className="team-image-title-white">Our </span>
                <span className="team-image-title-yellow">Family</span>
              </h2>
              <p className="team-image-subtitle">
                The people who make IGNITE what it is
              </p>
            </div>

            {/* Gradient overlay for better text visibility */}
            <div className="team-gradient-overlay"></div>
          </div>
        </div>

        {/* Faculty Mentors Section */}
        <div className="team-section">
          <h2 className="section-title">
            <span className="title-white">Faculty </span>
            <span className="title-yellow">Mentors</span>
          </h2>
          <div className="faculty-card">
            <div className="faculty-image-placeholder"></div>
            <h3 className="faculty-name">Dr. Dipa Dharmadhikari</h3>
            <p className="faculty-designation">Professor, ESTD</p>
          </div>
        </div>

        {/* The Core Section */}
        <div className="team-section">
          <h2 className="section-title">
            <span className="title-white">The </span>
            <span className="title-yellow">Core</span>
          </h2>
          <div className="core-grid">
            <div className="team-member">
              <Image src="/images/president.png" alt="Core Member" width={150} height={150} className="member-image" />
              <div className="member-info">
                <h4 className="member-name">John Doe</h4>
                <p className="member-designation">Core Lead</p>
              </div>
            </div>
            <div className="team-member">
              <Image src="/images/president.png" alt="Core Member" width={150} height={150} className="member-image" />
              <div className="member-info">
                <h4 className="member-name">Jane Smith</h4>
                <p className="member-designation">Core Lead</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Team & Design Team */}
        <div className="teams-row">
          <div className="team-group">
            <h3 className="team-group-title">Technical Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Technical Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Developer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Technical Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Developer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Technical Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Design Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Design Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Designer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Design Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event, Finance & Support Teams */}
        <div className="teams-row">
          <div className="team-group">
            <h3 className="team-group-title">Event Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Event Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Event Coordinator</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Event Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Event Coordinator</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Finance Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Finance Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Finance Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Support Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Support Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Support Lead</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Support Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Support Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media & Web Dev Teams */}
        <div className="teams-row">
          <div className="team-group">
            <h3 className="team-group-title">Media Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Media Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Media Manager</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Media Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Media Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Web Dev Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Web Dev Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Web Developer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Web Dev Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Web Developer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Web Dev Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing, Social Media & Content Teams */}
        <div className="teams-row">
          <div className="team-group">
            <h3 className="team-group-title">Marketing Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Marketing Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Marketing Lead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Social media Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Social Media Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Social Media Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group">
            <h3 className="team-group-title">Content Team</h3>
            <div className="team-grid">
              <div className="team-member">
                <Image src="/images/president.png" alt="Content Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Content Writer</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Content Team" width={150} height={150} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Executives Section */}
        <div className="executives-section">
          <div className="executives-container">
            <div className="executives-title-vertical">
              Executives The
            </div>
            
            <div className="executives-grid">
              {/* Row 1 - 5 members */}
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>

              {/* Row 2 - 5 members */}
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>

              {/* Row 3 - 3 members */}
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
              <div className="team-member">
                <Image src="/images/president.png" alt="Executive" width={200} height={200} className="member-image" />
                <div className="member-info">
                  <h4 className="member-name">Member Name</h4>
                  <p className="member-designation">Executive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
