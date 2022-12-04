import * as dotenv from 'dotenv'
import React from "react";
import  ReactDOM   from "react-dom";
import App from "./compnents/App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Context from "./authcontext";
import  WatchLater  from './context/watchLaterContext';
dotenv.config()

ReactDOM.render(<Context><WatchLater><App /></WatchLater></Context>, document.getElementById("root"));
