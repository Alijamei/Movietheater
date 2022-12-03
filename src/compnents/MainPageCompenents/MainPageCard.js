import React, { createContext,useContext, useEffect, useState } from 'react'
import Carousel, {slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import axios from 'axios';
import Card from '../card';
import { WatchLaterContext } from '../../context/watchLaterContext'


export default function MainPageCard(){
    const {WatchLaterList,setWatchLaterList} = useContext(WatchLaterContext);

           
    const localUser = JSON.parse(localStorage.getItem('initial')) || []
    const [Initial, end] = useState(localUser);

    useEffect(()=>{localStorage.setItem("initial", JSON.stringify(Initial))},[{}])  

    function saveMovieInWatchLaterDB(soon,title,images,quantity,info){ 
                   
        // is there  this item in the cart which equal to title so we dont add it again in else//    
     const isMovieInWatchLaterList = Initial.find(list => list.title ===  title);

     const addMovieToWatchLaterList =  {soon:soon,title:title,image:images,quantity:quantity,info:info}
    
     axios
     .post(
      process.env.REACT_APP_BACKEND_URL +"/cart",addMovieToWatchLaterList)
     .then(res => {           
             console.log(res,'savedinDB');  
     })
     .catch((err) => {
         console.log(err)
         console.log('error here')                  
     });


      if(!(isMovieInWatchLaterList)){                   
               /* adding to the WatchLaterList */
              end(value => {                                 
                              return [
                                    ...value,
                                   {soon:soon,title:title,image:images,quantity:quantity,info:info}
                              ]
                            
                          })

                      }
                    }
                 
    const titleRobot = "Mr.robot";
    const titleScarface="Scarface";
    const titleDjango = "Django";
    const titleBlueStreak = "bluestreak";

    return(
        // <Route exact path="/">     
        //     <Navbar />
        //     <Image />
        //     <Movies />
        //     <Middle />
            
            
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
                    cards={"cardofscarface"}
                    icon={WatchLaterList.find(list => list.array.title === titleScarface) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                    saveWatchLaterInDb={saveMovieInWatchLaterDB}
                    // press={'Watchlater'}
                    valueo={true}
                    change={false}
            
                    />
                
                    <Card
                    key = {2}
                    image={"/images/djanjou.jpg"}
                    soon={"Coming Soon"}
                    title={"Django"}
                    icon={WatchLaterList.find(list => list.array.title === titleDjango) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                    info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                    cards={"cardofdjanjo"}
                    saveWatchLaterInDb={saveMovieInWatchLaterDB}
                    valueo={true}
                    // button={"Watchlater"}

                
                    />
                    <Card

                    key = {3}
                    image={"/images/bluestreak.jpg"}
                    soon={"Coming Soon"}
                    title={"bluestreak"}
                    icon={WatchLaterList.find(list => list.array.title === titleBlueStreak) ? "icon fa fa-check-circle fa-lg" : "icon fa fa-plus-square fa-lg"}
                    info={"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."}
                    cards={"cardofbluestreak"}
                    saveWatchLaterInDb={saveMovieInWatchLaterDB}
                    valueo={true}
                    // button={'Watchlater'}
                
                
                    />
                            
                    <Card
                        key = {4}
                        image={"/images/mrrobot.jpg"}
                        soon={"Coming Soon"}
                        icon={WatchLaterList.find(list => list.array.title === titleRobot) ? "icon fa fa-check-circle fa-lg"  : "icon fa fa-plus-square fa-lg"}
                        title={"Mr.robot"}
                        info={"Elliot, a brilliant but highly unstable young cyber-security engineer becomes a key figure in a complex game of global domiHnance Worldwide"}
                        cards={"cardofMr.robot"}
                        saveWatchLaterInDb={saveMovieInWatchLaterDB}
                        valueo={true}
                        // button={'Watchlater'}
                        />
            </Carousel>


            
        </div>

    )
}
