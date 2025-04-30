import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import formattedData from "./StockDisplay";
const data = [
  {
    date: "2025-02-11",
    open: 249.2,
    high: 249.2,
    low: 249.2,
    close: 249.2,
  },
];

const StockChart = ({data}) => {
  return (
    <LineChart  width={1000} height={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="date" stroke="#8884d8" name="Date" />
      <Line type="monotone" dataKey="open" stroke="#8884d8" name="Open" />
      <Line type="monotone" dataKey="high" stroke="#82ca9d" name="High" />
      <Line type="monotone" dataKey="low" stroke="#ffc658" name="Low" />
      <Line type="monotone" dataKey="close" stroke="#ff7300" name="Close" />
    </LineChart>
  );
};

export default StockChart;
