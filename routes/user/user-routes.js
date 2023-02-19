const express = require('express');
var bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport')
const User = require('./Userschema');
var cors = require('cors')

var app = express()

app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
    origin: "https://radiant-quokka-7684a5.netlify.app"
  })

);



const router = express.Router();


app.disable('etag');

app.enable('trust proxy'); 

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true

}))


app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get('/logout',function(req,res){

     req.logout(function(err) {
        if (err) return next(err);
        res.redirect('/');
    });
  
});

router.get('/get',function(req,res){
         
    if(req.isAuthenticated()){
      
          res.send(req.user);
          console.log(req.user,'auth')
    }
    else{
       console.log('no user')
       res.send('error no user');
    }
})

router.post('/signup',function(req,res){
     User.register({name: req.body.name}, req.body.password, function(err,user) {
          if (err) { 
                       console.log(req.body.name)
                       console.log( req.body.password)
                       console.log('errrrrror',err)
                       
                 }
               else{
                 passport.authenticate('local')(req, res,function() {
                 console.log('signedup',req.isAuthenticated())
                  // res.status(201).send(req.user);
                  res.send(req.user);
                  
               });

        }

});

});


router.post('/login',function(req,res,next){
    const user = new User({
         name: req.body.name,
         password: req.body.password   
     })
   req.login(user, function(err) {
    if (err) {
          next(err)
      }
    
        else{
               passport.authenticate('local')(req, res,function() {
                      res.send(req.user);           
                 });
        }
  
  
  });     
   
});   
 






module.exports = router;

