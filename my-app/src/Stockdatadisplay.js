import formattedData from "./StockDisplay";
const Stockdatadisplay=({data})=>{
    return (
        <div>
            
            <h2>Stock Data Display hanirvesh</h2>
            <h2>Stock Data Display</h2>
            <p>Open: </p>
            <p>High: {data.high}</p>
            <p>Low: {data.low}</p>
            <p>Close: {data.close}</p>
            <p>Volume: {data.volume}</p>
            
        </div>
    );
}
export default Stockdatadisplay;