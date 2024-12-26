import React, { useEffect, useRef, memo } from 'react'

function TradingViewScreenerWidget() {
  const widgetContainerRef = useRef(null)

  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: 'ITC', proName: 'BSE:ITC' },
        { description: 'RELIANCE', proName: 'BSE:RELIANCE' },
        { description: 'TATAMOTORS', proName: 'BSE:TATAMOTORS' },
        { description: 'SUNPHARMA', proName: 'BSE:SUNPHARMA' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'compact',
      colorTheme: 'dark',
      locale: 'en',
      width: '100%',
      height: '100%',
    })

    // Append the script to the widget container
    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script)
    }

    // Cleanup on unmount
    return () => {
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

export default memo(TradingViewScreenerWidget)
