const express = require('express')
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
var bodyParser = require('body-parser')
const app = express()
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  
