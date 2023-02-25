import React, {memo } from 'react'
import Post from "../../inputpost.jsx";
import Navbar from "../../navbar.jsx";
import Footer  from "../../footer.jsx";
import CertainMovie from "../../certainmovie.jsx";

import {
    Redirect, useLocation ,
    Route
  } from "react-router-dom";
import Notfound from "../../notfound.js";


function MovieDetailsPage(){
       let routesData = {
           "/goodfellas": {
              path:"/goodfellas",
              image:"/images/wallfella.webp",
              title:"Goodfellas",
              video:"/images/fellavideo.mp4",
              watch:"Watch Goodfelles",
              stream:"Stream Goodfellas  now — no subscription required.",
              poster:"/images/goodfelles.jpg",
              port:"goodfellaspost",
              postTheMovie:"postsfella"
            },
            "/soprano":{
              path: "/soprano",
              image:"/images/soprano.webp",
              title:"TheSopranos",
              video:"/images/soprano.mp4",
              watch:"Watch The Sopranos",
              stream:"Stream  The Sopranos  now — no subscription required.",
              poster:"/images/sopr.webp",
              port:"sopranopost",
              postTheMovie:"postssoprano",
            },
            "/onceupontime":{
              path: "/onceupontime",
              image:"/images/hollywoodwallpaper.webp",
              title:"Once upon time in Hollywood",
              video:"/images/hollywood.mp4",
              watch:"Watch Once upon time in Hollywood",
              stream:"Stream Once upon time in Hollywood  now — no subscription required.",
              poster:"/images/holywood.webp",
              port:"onceupontimepost",
              postTheMovie:"postsupontime",
            }
          

          }
        const location = useLocation();
  
        let currentRouterData = routesData[location.pathname]
        if(currentRouterData){
           return(
                <>
                    {
                      <Route path={currentRouterData.path}>
                            <Redirect to={currentRouterData.path} />
                            <Navbar />
                            <CertainMovie
                              image={currentRouterData.image}
                              title={currentRouterData.title}
                              video={currentRouterData.video}
                              watch={currentRouterData.watch}
                              stream={currentRouterData.stream}
                              poster={currentRouterData.poster}
                              />
                              <Post 
                                  theInputStyle={{marginBottom:'150px',marginLeft:'30px'}} 
                                  port={currentRouterData.port}
                                  postTheMovie={currentRouterData.postTheMovie}
                                
                                />
                            <Footer />       
                      </Route>
                  }  
                    
              </>
                )
          }
          else{
            return(
               <Notfound />
            )
          }
}

export default memo(MovieDetailsPage);