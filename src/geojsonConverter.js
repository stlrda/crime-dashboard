var data = require('./data/test.json')
var GeoJSON = require('geojson');
var fs = require('fs')

GeoJSON.parse(data, {Point: ['lat', 'lon']}, function(geojson){
    fs.writeFile('Output.geojson', JSON.stringify(geojson), (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
  });