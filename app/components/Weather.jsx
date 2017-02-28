var React = require('react');
var WeatherFormComponent = require('WeatherFormComponent');
var WeatherMsgComponent = require('WeatherMsgComponent');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    };
  },
  handleChangeCity: function (updates) {
    var that = this;

    this.setState({
        isLoading: true,
        errorMsg: undefined
    });

    openWeatherMap.getTemp(updates.cityName).then(function(data){
      that.setState({
        cityName: data.name,
        temp: data.main.temp,
        isLoading: false
      });
    }, function (err){
      that.setState({
        isLoading: false,
        errorMsg: err.message
      });
    })
  },
  
  render: function () {
    var {isLoading, temp, cityName, errorMsg} = this.state;

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

    function renderError () {
      if(typeof errorMsg === ' string'){
        return (
          <ErrorModal msg={errorMsg}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherFormComponent onChangeCity={this.handleChangeCity}/>
        {renderMsg()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
