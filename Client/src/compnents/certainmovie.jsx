import React, { useEffect,memo } from 'react'
import LazyLoad from 'react-lazy-load';
import "./certainmovie.css";
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPages/MovieDetailsPage';

function Certainmovie(props){
    
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = props.image;
        link.as = 'image';
        link.type = 'image/webp'; 
        document.head.appendChild(link);
    
        return () => {
          document.head.removeChild(link);
        };
      }, [props.image]);

      return(
                    <div className="bodymovies">
                                    
                        <div className="middleimagecontainer">
                        <LazyLoad>
                            <img className="middleimage" src={props.image} alt="" />
                       </LazyLoad>

                        </div>
                        <div className ="box">
                            <p className="goodfellesinbox">{props.title}</p> 
                            <p className="borderf"></p>   
                            <span className="ondemand">ON DEMAND:</span>
                            <span className="available">AVAILABLE</span>
                        </div>
                        <div className="videofloat">
                           <LazyLoad>  
                            <video className="videohere"  src={props.video} type="video/mp4" poster={props.poster} controls id="video"  > </video>
                            </LazyLoad>

                                <div className="text">
                                    <p className="watch"> {props.watch}</p>
                                    <p className="watchit">{props.stream}</p>
                                </div>
                        </div>                         
                </div> 

       );
}

export default memo(Certainmovie);
