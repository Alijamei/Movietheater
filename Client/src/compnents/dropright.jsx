import React from "react";
import {Link} from "react-router-dom";
function Dropright(){
  return(
    <div className="navbar">             
         <div className="navwrapper">       
                <ul id="navi" className="left hide-on-med-and-down">
                    <a href="#" className="brand center">HBO</a>
                    <li><a className="lii"> Series</a></li>
                    <li><a className="lii">Movies</a></li>
                    <li><a className="lii">DOCS</a></li>
                    <li><a className="lii">HBOMAX</a></li>
                    <li><a className="liii">PODCAST</a></li>     
                    <Link to="/user/:username"><button className='listd'><li className='fa fa-list-alt'></li>My Watch list</button></Link>
                    <Link to="/signin"><li className="signi">Sign in</li></Link>
                
                </ul>
         </div>
    </div>
  )
}
export default Dropright;
