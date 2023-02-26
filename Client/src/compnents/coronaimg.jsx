import React from "react";
import { useEffect } from 'react'
import LazyLoad from 'react-lazy-load';
import "./coronaimg.css"
function Image(){
   useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = "/images/nyc.jpg";
      link.as = 'image';
      link.type = 'image/jpg'; 
      document.head.appendChild(link);
  
      return () => {
        document.head.removeChild(link);
      };
    }, ['/images/nyc.jpg']);
         return(
            <LazyLoad>
               <div className="image">
                 <img src="/images/nyc.jpg" alt="" />
              </div>
            </LazyLoad>

        );
}
export default Image;
