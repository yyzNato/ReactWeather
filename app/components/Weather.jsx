var React = require('react');
var WeatherFormComponent = require('WeatherFormComponent');
var WeatherMsgComponent = require('WeatherMsgComponent');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleChangeCity: function (updates) {
    var that = this;

    this.setState({
        isLoading: true
    });
    openWeatherMap.getTemp(updates.cityName).then(function(temp){
      that.setState({
        cityName: updates.cityName,
        temp: temp,
        isLoading: false
      });
    }, function (errorMsg){
      that.setState({
        isLoading: false
      });
    })
  },
  render: function () {
    var {isLoading, temp, cityName} = this.state;

    function renderMsg () {
        if(isLoading) {
          return (
            <h3>Fetching weather...</h3>
          );
        } else if (temp && location) {
          return (
            <WeatherMsgComponent temp={temp} cityName={cityName} />
          );
        }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherFormComponent onChangeCity={this.handleChangeCity}/>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;
