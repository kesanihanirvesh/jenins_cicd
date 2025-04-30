import React from 'react';

const FormattedDataDisplay = ({ open, time, high }) => {
  if (!Array.isArray(open) || !Array.isArray(time) || open.length !== time.length) {
    return <p>No formatted data available</p>;
  }

  return (
    <div>
      <h3>Formatted Data</h3>
      {open.map((item, index) => (
        <p key={index}>{item} and {time[index]} and {high[index]}</p>
      ))}
    </div>
  );
};

export default FormattedDataDisplay;