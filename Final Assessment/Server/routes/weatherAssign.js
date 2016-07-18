var express = require('express');
var app = express();
var weather=require('../Models/weatherschema');
console.log("hiii");
app.post('/add',function(req,res){
  console.log("post");
var report = new weather(req.body);
console.log(req.body);
var status=report.save(function(err,data){
    console.log(status);
  if(err)
  console.log(err);
  else {
    res.send("successfull");
    console.log("  data inserted");
  }

});
});

app.get('/findAll',function(req,res){
    weather.find().exec(function(err,data){
      if(err) throw err;

      else if(data!==null)
      {
        console.log(data);
        res.json(data);
      }

    });
  });

    app.get('/find/:id', function (req, res) {
      weather.findById(req.params.id, function(err, movie){
        if(err) res.send(err);
        res.json(movie);
      });
    });

module.exports=app;
