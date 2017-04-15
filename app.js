const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

  geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(results.address);
      weather.getWeather(results.longitude,results.latitude ,(errorMessage, weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
      });
    }
  });



  //05bb932da2b9602c60b441d904f04a4e
