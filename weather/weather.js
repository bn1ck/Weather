const request  = require('request');


var getWeather = (long, lat, callback) => {
  //var encodedAddress = encodeURIComponent(address);

  request({
    url:`https://api.darksky.net/forecast/05bb932da2b9602c60b441d904f04a4e/${lat},${long}`,
    json: true
  }, (error,response,body) =>{
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }else{
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
