import React from "react";
import  ReactDOM   from "react-dom";
import App from "./compnents/App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Context from "./authcontext";


ReactDOM.render(<Context><App /></Context>, document.getElementById("root"));
