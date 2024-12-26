import React from 'react'
import './TgtPoster.css' // Create this CSS file for animations

function TgtFeaturePoster() {
  return (
    <div className='tgt-poster-container'>
      <div className='ticker-wrapper glow-effect'></div>
      <div className='content-wrapper'>
        <h1 className='title-animate'>
          <div className='sub-heading'>
            <div style={{}}>Trading Academy | Stock Market Training</div>
          </div>
        </h1>
        <div
          className='features-grid'
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
        >
          {/* Row 1 */}
          <div
            className='feature-card slide-in'
            style={{ animationDelay: '0.8s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>🎯</div>
              <h3 style={{ fontSize: '2.5rem' }}>Live Workshops</h3>
            </div>
          </div>

          <div
            className='feature-card slide-in'
            style={{ animationDelay: '1.0s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>📈</div>
              <h3 style={{ fontSize: '2.5rem' }}>Option Trading</h3>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className='feature-card slide-in'
            style={{ animationDelay: '1.2s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>📊</div>
              <h3 style={{ fontSize: '2.5rem' }}>Harmonic Trading</h3>
            </div>
          </div>

          <div
            className='feature-card slide-in'
            style={{ animationDelay: '1.4s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>📉</div>
              <h3 style={{ fontSize: '2.5rem' }}>Price Action</h3>
            </div>
          </div>

          {/* Row 3 */}
          <div
            className='feature-card slide-in'
            style={{ animationDelay: '1.6s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>📚</div>
              <h3 style={{ fontSize: '2.5rem' }}>Technical Analysis</h3>
            </div>
          </div>

          <div
            className='feature-card slide-in'
            style={{ animationDelay: '1.8s' }}
          >
            <div className='card-content'>
              <div className='icon-wrapper pulse'>💹</div>
              <h3 style={{ fontSize: '2.2rem' }}>Fundamental Analysis</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TgtFeaturePoster
