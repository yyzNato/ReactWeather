var React = require('react');

var WeatherFormComponent = React.createClass({
  onClickSubmit: function (e) {
    e.preventDefault();
    var cityNameRef = this.refs.cityName;
    var cityName = cityNameRef.value;
    var updates = {};

    if(cityName.length > 0){
      cityNameRef.value = '';
      updates.cityName = cityName;
      this.props.onChangeCity(updates);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onClickSubmit}>
        <input placeholder="Enter city name" type="text" ref="cityName"></input>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherFormComponent;
