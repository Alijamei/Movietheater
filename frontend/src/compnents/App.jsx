import {React,useState,useCallback,useReducer,createContext,useEffect,useContext} from "react";
import Carousel, { Dots, slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from "./card";
import Cartit  from "./cart";
import Navbar from "./navbar";
import  Image  from "./coronaimg";
import Movies  from "./threemovies";
import Middle from "./grey";
import Footer  from "./footer";
import Certainmovie from "./certainmovie";
import Post from "./inputpost";
import Signin from './signin';
import Signup from "./signup";
 import {
   Switch, Redirect, BrowserRouter as Router,
   useHistory,
   useLocation,
   withRouter,
   Route,
   Link
 } from "react-router-dom";
import { AuthContext } from "../authcontext";
import { propTypes } from "react-bootstrap/esm/Image";
import { position } from "dom-helpers";
import Context from "../authcontext";
import Notfound from './notfound';
import axios from "axios";



/*import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';*/


  

function App(){

                      const [dataa, setdata] = useState([]);
                      useEffect(() => {
                          axios.defaults.withCredentials = true
                          axios.get(process.env.REACT_APP_BACKEND_URL +"/cart").then((res) => {       
                          if (res) {
                              setdata(res.data);
                              
                            
                            }
                        
                          
                      })
                    }, [])
                                      
       
                 const localUser = JSON.parse(localStorage.getItem('intial')) || []
                 const [intial, end] = useState(localUser);
                //  console.log(localUser,'looooooooooooocal')
                 useEffect(()=>{localStorage.setItem("intial", JSON.stringify(intial))},[{}]) 
                //  console.log(intial)
                function Callit(sooon,tiitle,images,quantityyy,infoo){ 
                   
                    // is there  this item in the cart which equal to title so we dont add it again in else//    
                 const item = intial.find(list => list.title ===  tiitle);
                 const smhh= {image:images,title:tiitle,soon:sooon,quantityy: quantityyy,info:infoo}
             
                 axios
                 .post(
                  process.env.REACT_APP_BACKEND_URL +"/cart",smhh)
                 .then(res => {           

                         console.log(res);  
                 })
                 .catch((err) => {
                     console.log(err)
                     console.log('error here')                  
                 });

                
               
                 
                  if(item){                   
                            // console.log(item,'iteeeeeeeeeem');                                                
                          
                    }
                   else{ 
                       console.log("nah")

                            /* adding to the cart */
                          end(value => {
                                  
                                          return [
                                                ...value,
                                                {image:images,title:tiitle,soon:sooon,quantityy: quantityyy,info:infoo}
                                          ]
                                        
                                      })
 
                                  }
                                }
                        /* Removing from the cart */      
                            function removeit(id){ 
                             
                           
                              
                              axios
                              .delete(
                                process.env.REACT_APP_BACKEND_URL + `/cart/${id}`)
                              .then(res => {           
                                      
                                      console.log(res,'deleteinfo');  
                              })
                              .catch((err) => {
                                  console.log(err)
                                  console.log('error here')                  
                              });

                              setdata(value => {
                                          
                                return  value.filter(list => {
                                   return  list._id !== id;
                                
                            });
                      
                           }); 
                               
                             
                                      
                                

                            }
                            
                              
                            
                          
                          
         /* Save data of state in local stoarge to use it in the next routers */
               
             
  const titlerobot = "Mr.robot";
  const titlescarface="Scarface";
  const titledjango = "Django";
  const titlebluestreak = "bluestreak";

 
   const userObject = useContext(AuthContext);
   const user=userObject != undefined;
   console.log(user)

   
 
 console.log(dataa,"data")
   
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
                  
                  
          <div className="container" >
            <Carousel
                plugins={[
                  'clickToChange',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                  numberOfSlides: 2,
                  },
                },
                ]}  
              >
                 <Card               
                  key = {1}               
                  image={"/images/scarface.jpg"}
                  soon={"Coming Soon"}
                  title={"Scarface"}
                   info={"Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp He's Internatoinal  drug dealer"}
                  cardss={"cardofscarface"}
                  icon={dataa.find(list => list.array.title === titlescarface) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  herecallit={Callit}
                  // press={'Watchlater'}
                  valueo={true}
                  change={false}
             
                  />
                
                  <Card
                  key = {2}
                  image={"/images/djanjou.jpg"}
                  soon={"Coming Soon"}
                  title={"Django"}
                  icon={dataa.find(list => list.array.title === titledjango) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                  cardss={"cardofdjanjo"}
                  herecallit={Callit}
                  valueo={true}
                  // button={"Watchlater"}
        
               
                  />
                  <Card

                  key = {3}
                  image={"/images/bluestreak.jpg"}
                  soon={"Coming Soon"}
                  title={"bluestreak"}
                  icon={dataa.find(list => list.array.title === titlebluestreak) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                  cardss={"cardofbluestreak"}
                  herecallit={Callit}
                  valueo={true}
                  // button={'Watchlater'}
              
               
                  />
                  
             
                   <Card
                      key = {4}
                      image={"/images/mrrobot.jpg"}
                      soon={"Coming Soon"}
                      icon={dataa.find(list => list.array.title === titlerobot) ? "icon fa fa-check-circle fa-lg"  : "icon fa fa-plus-square fa-lg"}
                      title={"Mr.robot"}
                      info={"Elliot, a brilliant but highly unstable young cyber-security engineer becomes a key figure in a complex game of global domiHnance Worldwide"}
                      cardss={"cardofMr.robot"}
                      herecallit={Callit}
                      valueo={true}
                      // button={'Watchlater'}
                      />
           </Carousel>
          
        
               
          </div>
          <Footer /> 
               </Route>
            
                 <Route path="/goodfellas">
                   <Redirect to="/goodfellas" />
                   <Navbar />
                   <Certainmovie
                     image={"/images/wallfella.jpg"}
                     title={"Goodfellas"}
                     video={"/images/fellasvideo.mp4"}
                     watch={"Watch Goodfelles"}
                     stream={"Stream Goodfellas  now — no subscription required."}
                     poster={"/images/goodfelles.jpg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                        port={"goodfellaspost"}
                        postit={"postsfella"}
                       
                      />
                   <Footer />
                   
                  </Route>
                  <Route  path="/soprano">
                        <Redirect to="/soprano" />
                     
                   <Navbar />
                   <Certainmovie
                     image={"/images/soprano.jpg"}
                     title={"Goodfellas"}
                     video={"/images/soprano.mp4"}
                     watch={"Watch The Sopranos"}
                     stream={"Stream  The Sopranos  now — no subscription required."}
                     poster={"/images/sopr.jpeg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                        port={"sopranopost"}
                        postit={"postssoprano"}
                      />
                   <Footer />
                   </Route>
                   <Route  path="/onceupontime">
                      <Redirect to="/onceupontime" />
                   <Navbar />
                   <Certainmovie
                     image={"/images/hollywoodwallpaper.jpg"}
                     title={"Once upon time in Hollywood"}
                     video={"/images/hollywood.mp4"}
                     watch={"Watch Once upon time in Hollywood"}
                     stream={"Stream Once upon time in Hollywood  now — no subscription required."}
                     poster={"/images/holywood.jpg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                        port={"onceupontimepost"}
                        postit={"postsupontime"}
                      />
                   <Footer />
                  </Route>
                  <Route  path="/signin">
                       <Signin />
                  </Route>
                  <Route  path="/signup">
                       <Signup />
                  </Route>
                  <Route path ="/watchlater">
                     {/* show  all the cart here in this router */}
                     {/* <Users/> */}
                     <Navbar />
                   
                     <Cartit
                         inti =  {dataa}
                         
                         mapp= {dataa.map((item) => (
                                   
                               
                                   

                                  <div className="right">
                                        {/* {console.log(item.info)} */}

                                      <Card
                                         stylecard={{float:'left',width:'21%'}}
                                        key={item._id}
                                        id={item._id}
                                        image={item.array.image}
                                        soon={item.array.soon}
                                        title={item.array.title}
                                        info={item.array.info}             
                                        herecallit={Callit}          
                                        remove={'icon fa fa-trash'}
                                        hereremove={removeit}
                                        valueo={false}
                                        change={true}
                                  
                                />
                                </div>
                                ))} 
                                                 
                           
                    
                       />
                          
                

                  </Route> 
                
                   
      </Switch>
      </div>   
     </Router>
    );
  } else {
    routes = (
        <Router>
        <div className="body">
       <Switch>
           <Route exact path="/">
       
              
              

                  <Navbar />
                  <Image />
                  <Movies />
                  <Middle />
                  
                  
          <div className="container" >
            <Carousel
                plugins={[
                  'clickToChange',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                  numberOfSlides: 2,
                  },
                },
                ]}  
              >
                 <Card
                  key = {1}
                  image={"/images/scarface.jpg"}
                  soon={"Coming Soon"}
                  title={"Scarface"}
                   info={"Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp He's Internatoinal  drug dealer"}
                  cardss={"cardofscarface"}
                  icon={intial.find(list => list.title === titlescarface) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  herecallit={Callit}
                  press={'Watchlater'}
                  valueo={true}
                  change={false}
             
                  />
                
                  <Card
                  key = {2}
                  image={"/images/djanjou.jpg"}
                  soon={"Coming Soon"}
                  title={"Django"}
                  icon={intial.find(list => list.title === titledjango) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                  cardss={"cardofdjanjo"}
                  herecallit={Callit}
                  valueo={true}
                  button={"Watchlater"}
        
               
                  />
                  <Card
                  key = {3}
                  image={"/images/bluestreak.jpg"}
                  soon={"Coming Soon"}
                  title={"bluestreak"}
                  icon={intial.find(list => list.title === titlebluestreak) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                  info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                  cardss={"cardofbluestreak"}
                  herecallit={Callit}
                  valueo={true}
                  button={'Watchlater'}
              
               
                  />
                  
             
                   <Card
                      key = {4}
                      image={"/images/mrrobot.jpg"}
                      soon={"Coming Soon"}
                      icon={intial.find(list => list.title === titlerobot) ? "icon fa fa-check-circle fa-lg"  : "icon fa fa-plus-square fa-lg"}
                      title={"Mr.robot"}
                      info={"Elliot, a brilliant but highly unstable young cyber-security engineer becomes a key figure in a complex game of global domiHnance Worldwide"}
                      cardss={"cardofMr.robot"}
                      herecallit={Callit}
                      valueo={true}
                      button={'Watchlater'}
                      />
           </Carousel>
          
        
               
          </div>
          <Footer /> 
               </Route>
            
                  <Route  path="/goodfellas">
                   <Navbar />
                   <Certainmovie
                     image={"/images/wallfella.jpg"}
                     title={"Goodfellas"}
                     video={"/images/fellavideo.mp4"}
                     watch={"Watch Goodfelles"}
                     stream={"Stream Goodfellas  now — no subscription required."}
                     poster={"/images/goodfelles.jpg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                      />
                   <Footer />
                   
                  </Route>
                  <Route  path="/soprano">
                   <Navbar />
                   <Certainmovie
                     image={"/images/soprano.jpg"}
                     title={"Goodfellas"}
                     video={"/images/soprano.mp4"}
                     watch={"Watch The Sopranos"}
                     stream={"Stream  The Sopranos  now — no subscription required."}
                     poster={"/images/sopr.jpeg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                      />
                   <Footer />
                   </Route>
                   <Route  path="/onceupontime">
                   <Navbar />
                   <Certainmovie
                     image={"/images/hollywoodwallpaper.jpg"}
                     title={"Once upon time in Hollywood"}
                     video={"/images/hollywood.mp4"}
                     watch={"Watch Once upon time in Hollywood"}
                     stream={"Stream Once upon time in Hollywood  now — no subscription required."}
                     poster={"/images/holywood.jpg"}
                    />
                    <Post 
                        theinputstyle={{marginBottom:'150px',marginLeft:'30px'}} 
                      />
                   <Footer />
                  </Route>
               
                    

                 
                  <Route  path="/post">
                   

                  </Route>
                  <Route  path="/signin">
                       <Signin />
                  </Route>
                  <Route  path="/signup">
                       <Signup />
                  </Route>
                  <Route path ="/watchlater">
                     <Notfound />
                  </Route>
            </Switch>
            </div>   
            </Router>   
      
    );
  }
   
  return (
   
     
        <main>{routes}</main>
     
  
  );
   
};

export default App;


// cd C:/Users/wxfcc/Downloads/movie  


  

                           

  

                           
