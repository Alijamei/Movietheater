import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../authcontext";
import axios from "axios";

function Navbar(){
  const userObject = useContext(AuthContext);
  const user=userObject != undefined;
 // console.log(userObject)

  const logOut = () => {
    axios.defaults.withCredentials = true
    axios.get(process.env.REACT_APP_BACKEND_URL + "/user/logout").then((res) => {
        if (res) {
            window.location.href = "/"
        }
    })
}
  return(
   
    <div className="navbar">
          
           
         <div className="navwrapper">
         
                <ul id="nav-mobile" className="left hide-on-med-and-down">            
                     <a><img className="imgnav" src="/images/logo.png" alt=""/></a>
                    <li><a className="liii"> Series</a></li>
                    <li><a className="liii">Movies</a></li>
                    <li><a className="liii">Theater</a></li>
                    <li><a className="liii">PODCAST </a></li>
                       
                     {user &&(<Link to='/watchlater'><button className='listed'><li className='fa fa-list-alt'></li>My Watch list</button></Link>)}
                     {!user && <Link to="/signin"> <li className="signin in">Sign in</li></Link>}
                      {user &&(<li className="logout" onClick={logOut}>Log out</li>)}
                </ul>
         </div>
    </div>
  )
} 
export default Navbar;
