import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function TradingViewChart() {
  return <AdvancedRealTimeChart symbol='BINANCE:BTCUSD' theme='dark' height={610} width='100%'  interval='D' details={true} ></AdvancedRealTimeChart>
}

export default TradingViewChart