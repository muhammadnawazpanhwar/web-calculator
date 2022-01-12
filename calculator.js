const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The result of the calculation is "+result);
});

app.get("/bmiCalculator" , function(req , res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator" , function(req , res){
  var h = parseFloat(req.body.h);
  var w = parseFloat(req.body.w);
  var bmi = w/(h*h) ;
  res.send("Your BMI is: "+bmi);
});

app.listen(3000); //we can  choose any number for server instead of just 3000
