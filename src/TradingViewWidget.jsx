import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget() {
  const container = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "SENSEX",
          "grouping": "no_group",
          "blockSize": "market_cap_basic",
          "blockColor": "Perf.W",
          "locale": "in",
          "symbolUrl": "",
          "colorTheme": "light",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": false,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": 600,
          "height": 900
        }`
    container.current.appendChild(script)
  }, [])

  return (
    <div className='tradingview-widget-container' ref={container}>
      <div className='tradingview-widget-container__widget'></div>
      <div className='tradingview-widget-copyright'>
        <a
          href='https://in.tradingview.com/'
          rel='noopener nofollow'
          target='_blank'
        >
          <span className='blue-text'>Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}

export default memo(TradingViewWidget)
