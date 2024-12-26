import React from 'react'
import './TgtPoster.css' // Create this CSS file for animations

function TgtPoster() {
  return (
    <div className='tgt-poster-container'>
      <div className='ticker-wrapper glow-effect'></div>

      <div className='content-wrapper'>
        <h1 className='title-animate'>
          <div className='main-heading'>
            <span
              className='neon-text'
              style={{
                color: '#00ffff',
                animation: 'rotate 3s linear infinite, blink 3s infinite',
                display: 'inline-block',
                transformOrigin: 'center',
              }}
            >
              TGT
            </span>
          </div>
          <div className='sub-heading'>
            <div style={{ animation: 'slide-text 20s ease infinite' }}>
              Trading Academy | Stock Market Training | Live Classes
            </div>
          </div>
        </h1>
        <div style={{ animation: 'slide-text 20s ease infinite' }}>
          <button className='cta-button'>
            <span className='button-text pulse'>
              Start Your Trading Journey With SEBI AUTHORISED ANALYST
            </span>
            <span className='button-shine'></span>
          </button>
        </div>
        <button className='cta-button-name'>
          <span className='button-text-name pulse'>MR. ASHISH</span>
          <span className='button-shine'></span>
        </button>
        <button className='cta-button-name'>
          <span className='button-text-name pulse'>
            Call Now - 7900 17 6383
          </span>
          <span className='button-shine'></span>
        </button>

        <div className='features-grid'>
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

export default TgtPoster
