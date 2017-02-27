var React = require('react');

var WeatherMsgComponent = ({temp, cityName}) => {
  return (
    <div>
      <h2>It's {temp} for {cityName}</h2>
    </div>
  );
};

module.exports = WeatherMsgComponent;
