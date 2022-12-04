import {React,useState,useEffect,useContext} from "react";
import Carousel, {slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from "./card";
import WatchLater  from "./cart";
import Navbar from "./navbar";
import  Image  from "./coronaimg";
import Movies  from "./threemovies";
import Middle from "./grey";
import Footer  from "./footer";
import CertainMovie from "./certainmovie";
import Post from "./inputpost";
import SignIn from './signin';
import SignUp from "./signup";
 import {
   Switch, Redirect, BrowserRouter as Router,
   Route
 } from "react-router-dom";
import { AuthContext } from "../authcontext";
import { WatchLaterContext } from "../context/watchLaterContext";
import Notfound from './notfound';
import MainPageCard from "./MainPageCompenents/MainPageCard";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage.js/MovieDetailsPage";
import WatchLaterPage from "./WatchLaterPage.js/WatchLaterPage";


// To Do //

// 1: Add Cookie instead of localstoarge //

  

function App(){
                                      
         /* Save data of state in local Storage to use it in the next routers */
          
 
   const userObject = useContext(AuthContext);

   const user=userObject != undefined;
 
   
  let routes;


  if (user) {
    routes = (        
          <Router>
            <div className="body">
                <Switch>
                    <Route exact path="/">     
                          <Navbar />
                          <Image />
                          <Movies />
                          <Middle /> 
                        {/* Main page cards to add to Watchlater list  */} 

                        <MainPageCard />

                       <Footer /> 
                      </Route> 

                    <Route  path="/signin">
                       <SignIn />
                     </Route>

                    <Route  path="/signup">
                        <SignUp />
                    </Route>

                {/* User watch later list page */}
                    <Route path ="/watchlater">
                      {/* show  all the cart here in this router */}
                       <Navbar />

                      <WatchLaterPage />
                    </Route> 
                          
                {/* Certain Movie Details page  */}

                 <MovieDetailsPage />
                                        
              </Switch>
              </div>   
           </Router>
            );
  } else {
    routes = (
        <Router>
        {/* div className="body" */}
        <>
          <Switch>
              <Route exact path="/">
        
                      <Navbar />
                      <Image />
                      <Movies />
                      <Middle />
                      {/* Main page cards to add to Watchlater list  */} 
                     <MainPageCard />
 
               </Route>

              <Route path="/signin">
                    <SignIn />
              </Route>

              <Route  path="/signup">
                  <SignUp />
              </Route>

              <Route path ="/watchlater">
                 <Notfound />
              </Route>
              {/* Certain Movie Details page  */}

               <MovieDetailsPage />
                                           
            </Switch>
            </>   
        </Router>   
      
    );
  }
   
  return (
   
     
        <main>{routes}</main>
     
  
  );
   
};

export default App;


  

                           

  

                           
