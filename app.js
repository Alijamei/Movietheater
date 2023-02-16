require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })
const express = require('express');
var bodyParser = require('body-parser')
const cartRoutes=require('./routes/cart/cart-routes');
const userRoutes=require('./routes/user/user-routes')
const postRoutes=require('./routes/post/post-routes')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const passport = require('passport')
var cors = require('cors')
const helmet = require("helmet");


const app = express()

app.use(helmet());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.disable('etag');

app.enable('trust proxy'); 


app.use(
  cors({
    methods: ["GET", "POST","DELETE"],
    credentials: true,
    origin:  "https://fanciful-youtiao-44a1bf.netlify.app"
  })
);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ 
    mongoUrl: process.env.MONGOLAB_URI,
    ttl: 24 * 60 * 60 // session expiration time in seconds
  })
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGOLAB_URI)
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });

app.use('/user',userRoutes)
app.use('/', cartRoutes);
app.use('/', postRoutes);  


app.use(express.static(path.join(__dirname, './Client/build')))

// app.get('*', (req, res) => { 
//   res.sendFile(path.resolve(__dirname,'./Client/build/index.html'), err => {
//      if (err) { res.status(500).send(err)  }
//   })
// })
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('Client/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'Client', 'build','index.html')));
}
 app.listen(PORT,function(){
      console.log(`Server is running on port ${PORT}`)
    
})
