require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
const express = require('express');
var bodyParser = require('body-parser')
const cartroutes=require('./routes/cartroutes');
const userroutes=require('./routes/user-routes')
const postroutes=require('./routes/postroutes')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const passport = require('passport')
var cors = require('cors')

const app = express()



 



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.disable('etag');

app.enable('trust proxy'); 


app.use(
  cors({
    methods: ["GET", "POST","DELETE"],
    credentials: true,
    origin:process.env.REACT_APP_BACKEND_URL
  })
);




app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true

}))
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGOLAB_URI)
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });


app.use('/user',userroutes)
app.use('/', cartroutes);
app.use('/', postroutes);  



// if (process.env.NODE_ENV === 'production') {


  app.use(express.static(path.join(__dirname,'..', 'frontend', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '..', 'frontend', 'build', 'index.html')
    )
  );






 

  const PORT = process.env.PORT || 5000;
 

 app.listen(PORT,function(){
      console.log(`Server is running on port ${PORT}`)
    
})

