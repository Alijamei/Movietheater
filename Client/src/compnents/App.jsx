import React, { useContext } from "react";
import '@brainhubeu/react-carousel/lib/style.css';
import Navbar from "./navbar.jsx";
import Image from "./coronaimg.jsx";
import Movies from "./threemovies.jsx";
import Middle from "./grey.jsx";
import Footer from "./footer.jsx";
import SignIn from './signin.jsx';
import SignUp from "./signup.jsx";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "../authcontext.js";
import Notfound from './notfound';
import MainPageCard from "./MainPageCompenents/MainPageCard.js";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPages/MovieDetailsPage.js";
import WatchLaterPage from "./WatchLaterPage/WatchLaterPage.js";
function App(){          
 
   const userObject = useContext(AuthContext);

   const user=userObject != undefined;
 
   
  let routes;


//   if (user) {
//    // if user loggedIn user can access protected routes //
//     routes = (        
//           <Router>
//             <div className="body">
//                 <Switch>
//                     <Route exact path="/">     
//                           <Navbar />
//                           <Image />
//                           <Movies />
//                           <Middle /> 
//                         {/* Main page cards to add to Watchlater list  */} 

//                         <MainPageCard />

//                        <Footer /> 
//                       </Route> 

//                     <Route  path="/signin">
//                        <SignIn />
//                      </Route>

//                     <Route  path="/signup">
//                         <SignUp />
//                     </Route>

//                 {/* User watch later list page */}
//                     <Route path ="/watchlater">
//                       {/* show  all the cart here in this router */}
//                        <Navbar />

//                       <WatchLaterPage />
//                     </Route> 
                          
//                 {/* Certain Movie Details page  */}

//                  <MovieDetailsPage />
                                        
//               </Switch>
//               </div>   
//            </Router>
//             );
//   } else {
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
//   }
   
  return (
        <main>{routes}</main>
  );
   
};

export default App;


  

                           

  

                           
