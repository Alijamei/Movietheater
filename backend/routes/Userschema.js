const express = require('express');
var bodyParser = require('body-parser')
const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'thwesecrethere',
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String,
    carts:[{ type: mongoose.Types.ObjectId, required: true, ref: 'Cart' }],
    posts:[{ type: mongoose.Types.ObjectId, required: true, ref: 'Post' }]
   
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'name',
    passwordField: 'password'
});

module.exports = mongoose.model('User', userSchema );