var mongoose=require('mongoose');
console.log("hiii");
var weatherschema = mongoose.Schema({

      "coord": {
          		      "lon": String,
          		      "lat":String
          	       },
      "sys": {
          		"message": String,
          		"country": String,
          		"sunrise": String,
          		"sunset": String
          	},
      "weather": [{
          		"id": String,
          		"main":String,
          		"description": String,
          		"icon": String
          	}],
    	"base": String,
      "main": {
            		"temp": String,
            		"temp_min": String,
            		"temp_max": String,
            		"pressure": String,
            		"sea_level": String,
            		"grnd_level": String,
            		"humidity": String
            	},
      "wind": {
            		"speed":String,
            		"deg": String
            	},
    	"clouds": {
            		"all":String
            	},
    	"dt": String,
    	"id": String,
    	"name": String,
    	"cod": String


});

var weather = mongoose.model('reports', weatherschema);
module.exports=weather;
