import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import './App.css';
import StockData from './Fetapi';
import StockChart from './StockChart';
import CurrentTime from './TimeOfpresentdata';
import Stockdatadisplay from './Stockdatadisplay';
import forminfo from './StockDisplay';
import StockMarketGraph from './StockMarketGraph';
import FormattedDataDisplay from './FormattedDataDisplay';
import ApexChart from './ApexChart';
import DashboardLayoutBasic from "./Navigation";
function App() {
  
  return (
    <div>
      <h1>Stock Market Data</h1>
      <StockData /> 
       <StockMarketGraph/>
       {/* <DashboardLayoutBasic/> */}
       <ApexChart/>
       <CurrentTime />
    </div>
  );
}

export default App;