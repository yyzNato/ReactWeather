var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9e32183135a27049421147f27f0424b2&units=imperial';

module.exports = {
  getTemp: function (location) {
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
