// import * as dotenv from 'dotenv'
import React from "react";
import  ReactDOM   from "react-dom";
import App from "./compnents/App.jsx";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Context from "./authcontext.js";
import  WatchLater  from './context/watchLaterContext.js';
// dotenv.config()
console.log(process.env.REACT_APP_SECRET , 'T-e-t');
console.log(process.env.REACT_APP_BACKEND_URL);

ReactDOM.render(<Context><WatchLater><App /></WatchLater></Context>, document.getElementById("root"));
