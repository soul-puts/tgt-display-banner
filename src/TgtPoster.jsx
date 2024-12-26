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
            <div style={{}}>
              Trading Academy | Stock Market Training | Live Classes
            </div>
          </div>
        </h1>
        <div style={{}}>
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
      </div>
    </div>
  )
}

export default TgtPoster
