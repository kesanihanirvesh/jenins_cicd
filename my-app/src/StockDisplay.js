import Stockdatadisplay from './Stockdatadisplay';
import FormattedDataDisplay from './FormattedDataDisplay';
import StockChart from './StockChart';
import StockMarketGraph from './StockMarketGraph';
import ApexChart from './ApexChart';
import React, { useState, useEffect } from 'react';

const StockDisplay = ({ data }) => {
    

    if (!data || !data["Time Series (5min)"]) {
        return <p>No stock data1 available</p>;
    }
    if (!data || !data["Meta Data"]) {
        return <p>No stock data2 available</p>;
    }

    const metadata = data["Meta Data"];
    const symbol = metadata["2. Symbol"];
    ApexChart.prototype = { pathname: metadata };

    // Extract time series data
    const timeSeriesData = data["Time Series (5min)"];

    // Convert object to an array
    const formattedData = Object.entries(timeSeriesData).map(([timestamp, values]) => ({
        timestamp,
        open: parseFloat(values["1. open"]),
        high: parseFloat(values["2. high"]),
        low: parseFloat(values["3. low"]),
        close: parseFloat(values["4. close"]),
        volume: parseInt(values["5. volume"], 10),
    }));

    const formopen = formattedData.map((item) => item.open);

    // Dependency array ensures it runs only when formopen changes

     // Returns the value safely

    const formtime = formattedData.map((item) => item.timestamp);
    const formhigh = formattedData.map((item) => item.high);
    const formlow = formattedData.map((item) => item.low);
    const formclose = formattedData.map((item) => item.close);

    

    return (
        <div>
            <h2>{symbol} Stock Data (5min Interval)</h2>
            <table border="2" style={{ margin: "10px", backgroundColor: "lightblue" }}>
                <thead>
                    <tr style={{ margin: "10px" }}>
                        <th style={{ backgroundColor: "lightblue" }}>Timest</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {formattedData.map((item) => (
                        <tr key={item.timestamp}>
                            <td>{item.timestamp}</td>
                            <td>{item.open}</td>
                            <td>{item.high}</td>
                            <td>{item.low}</td>
                            <td>{item.close}</td>
                            <td>{item.volume}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <StockChart data={formattedData} /> */}
            {/* <FormattedDataDisplay open={formopen} time={formtime} high={formhigh}/> */}
            <StockMarketGraph time={formtime} open={formopen} high={formhigh} low={formlow} close={formclose} />
        </div>
    );
};



export default StockDisplay;
