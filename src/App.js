import './App.css';
import { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget';
import TradingViewScreenerWidget from './TradingViewScreener';
import TradingViewMarketOverview from './TradingViewMarketOverview';
import TgtPoster from './TgtPoster';
import TgtFeaturePoster from './TgtFeaturePoster';

function App() {
  const [showMarketOverview, setShowMarketOverview] = useState(Number);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 3) + 1
      setShowMarketOverview(randomNumber);
      console.log(showMarketOverview, "showMarketOverview", randomNumber);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div
        className="tradingview-widget-container"
        style={{
          width: '1280px',
          height: '1760px',
          maxWidth: '100%',
        }}
      >
        <div className="component-container" style={{ position: 'relative', height: '100%' }}>

          <div
            style={{
              opacity: showMarketOverview === 1 ? 1 : 0,
              transition: 'opacity 2s ease',
              position: 'absolute',
              width: '100%',
              height: '100%',
              visibility: showMarketOverview === 1 ? 'visible' : 'hidden'
            }}
          >
            <TradingViewMarketOverview />
            <div style={{ position: 'fixed', bottom: '20px', left: 0, width: '100%', zIndex: 1000 }}>
              <button className='cta-button-name'>
                <span className='button-text-name pulse'>
                  Call Now - 7900176383
                </span>
                <span className='button-shine'></span>
              </button>
            </div>
          </div>

          <div
            style={{
              opacity: showMarketOverview === 2 ? 1 : 0,
              transition: 'opacity 2s ease',
              position: 'absolute',
              width: '100%',
              height: '100%',
              visibility: showMarketOverview === 2 ? 'visible' : 'hidden'
            }}
          >
            <TgtFeaturePoster />
            <div style={{ position: 'fixed', bottom: '20px', left: 0, width: '100%', zIndex: 1000 }}>
              <button className='cta-button-name'>
                <span className='button-text-name pulse'>
                  Call Now - 7900176383
                </span>
                <span className='button-shine'></span>
              </button>
            </div>
          </div>

          <div
            style={{
              opacity: showMarketOverview === 3 ? 1 : 0,
              transition: 'opacity 2s ease',
              position: 'absolute',
              width: '100%',
              height: '100%',
              visibility: showMarketOverview === 3 ? 'visible' : 'hidden'
            }}
          >
            <TgtPoster />
            <div style={{ position: 'fixed', bottom: '20px', left: 0, width: '100%', zIndex: 1000 }}>
              <button className='cta-button-name'>
                <span className='button-text-name pulse'>
                  Call Now - 7900176383
                </span>
                <span className='button-shine'></span>
              </button>
            </div>
          </div>



        </div>
      </div>
    </div >
  );
}

export default App;
