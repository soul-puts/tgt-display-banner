import './App.css';
import TradingViewWidget from './TradingViewWidget';
import TradingViewScreenerWidget from './TradingViewScreener';
import TradingViewMarketOverview from './TradingViewMarketOverview';
import TgtPoster from './TgtPoster';

function App() {
  return (
    <div className="App">
      <div
        className="tradingview-widget-container"
        style={{
          width: '1280px',
          height: '1760px',
          maxWidth: '100%'
        }}
      >
        {<TradingViewScreenerWidget />}

        {<TradingViewMarketOverview />}


        <TgtPoster />
      </div>
    </div>
  );
}

export default App;
