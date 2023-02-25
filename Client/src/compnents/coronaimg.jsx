import React from "react";
import LazyLoad from 'react-lazy-load';

import "./coronaimg.css"
function Image(){
         return(
            // <LazyLoad>
               <div className="image">
                 <img src="/images/nyc.jpg" alt="" />
              </div>
            // </LazyLoad> 
        );
}
export default Image;
