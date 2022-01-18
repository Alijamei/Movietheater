import React, { useContext, useEffect, useState } from 'react'
import "./certainmovie.css";
import { AuthContext } from "../authcontext";

function Certainmovie(props){
    
      return(
                    <div className="bodymovies">
                                    
                        <div className="middleimagecontainer">
                            <img className="middleimage" src= {props.image} />
                        </div>
                        <div className ="box">
                            <p className="goodfellesinbox">{props.title}</p> 
                            <p className="borderf"></p>   
                            <span className="ondemand">ON DEMAND:</span>
                            <span className="available">AVAILABLE</span>
                        </div>
                        <div className="videofloat">
                            
                            <video className="videohere"  src={props.video} type="video/mp4" poster={props.poster} controls id="video"  > </video>
                        
                                <div className="text">
                                    <p className="watch"> {props.watch}</p>
                                    <p className="watchit">{props.stream}</p>
                                </div>
                        </div>
                        
                        
                    
                </div> 






       );
}

export default Certainmovie;