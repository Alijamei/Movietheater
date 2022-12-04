import {React} from "react";
import Post from "../../inputpost";
import Navbar from "../../navbar";
import Footer  from "../../footer";
import CertainMovie from "../../certainmovie.jsx";

import {
    Redirect, useLocation ,
    Route
  } from "react-router-dom";
import Notfound from "../../notfound";


export default function MovieDetailsPage(){
       let routesData = {
           "/goodfellas": {
              path:"/goodfellas",
              image:"/images/wallfella.jpg",
              title:"Goodfellas",
              video:"/images/fellavideo.mp4",
              watch:"Watch Goodfelles",
              stream:"Stream Goodfellas  now — no subscription required.",
              poster:"/images/goodfelles.jpg",
              port:"goodfellaspost",
              postit:"postsfella"
            },
            "/soprano":{
              path: "/soprano",
              image:"/images/soprano.jpg",
              title:"TheSopranos",
              video:"/images/soprano.mp4",
              watch:"Watch The Sopranos",
              stream:"Stream  The Sopranos  now — no subscription required.",
              poster:"/images/sopr.jpeg",
              port:"sopranopost",
              postit:"postssoprano",
            },
            "/onceupontime":{
              path: "/onceupontime",
              image:"/images/hollywoodwallpaper.jpg",
              title:"Once upon time in Hollywood",
              video:"/images/hollywood.mp4",
              watch:"Watch Once upon time in Hollywood",
              stream:"Stream Once upon time in Hollywood  now — no subscription required.",
              poster:"/images/holywood.jpg",
              port:"onceupontimepost",
              postit:"postsupontime",
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
                                  theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                                  port={currentRouterData.port}
                                  postit={currentRouterData.postit}
                                
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

