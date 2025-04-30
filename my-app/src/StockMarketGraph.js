import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Bar } from "recharts";
import ApexChart from "./ApexChart";

const StockMarketGraph = ({ open, time, high, low ,close }) => {
  if (!Array.isArray(open) || !Array.isArray(time) || !Array.isArray(high) || !Array.isArray(low)) {
    return <p>No data available</p>;
  }

  const data = time.map((t, index) => ({
    time: t,
    open: open[index],
    high: high[index],
    low: low[index],
    close:close[index],
  }));

  return (
    <div>
      <div className="p-4 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Stock Candlestick Chart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis dataKey="time" />
            <YAxis  tickCount={10000} domain={['auto', 'auto']} />
            <Tooltip />
            <Bar
              dataKey="low"
              fill="green"
              barSize={20}
              shape={(props) => {
                const { x, y, width, payload } = props;
                const color = payload.open > payload.close ? "red" : "green";
                const yStart = payload.open;
                const yEnd = payload.close
                return (
                  <rect x={x} y={yStart} width={width} height={yEnd-yStart} fill={color} />
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {/* <ApexChart seriesData={data} seriesDataLinear={data.map((d) => d.open)} /> */}
    </div>
  );
};

export default StockMarketGraph;