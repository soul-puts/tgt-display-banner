import React, { useEffect, useRef, memo } from 'react'

function TradingViewMarketOverview() {
  const widgetContainerRef = useRef(null)

  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '3M',
      showChart: false,
      locale: 'en',
      width: '100%',
      height: '10%',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      tabs: [
        {
          title: 'Indices',
          symbols: [
            {
              s: 'FOREXCOM:SPXUSD',
              d: 'S&P 500 Index',
            },
            {
              s: 'FOREXCOM:NSXUSD',
              d: 'US 100 Cash CFD',
            },
            {
              s: 'BSE:SENSEX',
              d: 'SENSEX 100',
            },
          ],
          originalTitle: 'Indices',
        },
      ],
    })

    // Add 5 second delay before appending the script
    const timer = setTimeout(() => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.appendChild(script)
      }
    }, 3000)

    // Cleanup on unmount
    return () => {
      clearTimeout(timer) // Clear the timeout if component unmounts
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className='tradingview-widget-container' ref={widgetContainerRef}>
      <div className='tradingview-widget-container__widget'></div>
    </div>
  )
}

export default TradingViewMarketOverview
