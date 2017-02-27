var React = require('react');

var WeatherMsgComponent = ({temp, cityName}) => {
  return (
    <div>
      <h3 className="text-center">It's {temp} for {cityName}</h3>
    </div>
  );
};

module.exports = WeatherMsgComponent;
