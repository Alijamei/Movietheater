import React, {useContext} from 'react'
import Carousel, {slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import Card from '../card.jsx';
import { WatchLaterContext } from '../../context/watchLaterContext.js'
import useSaveMovieInWatchLaterDB from '../../api/useSaveMovie.js';

export default function MainPageCard(){
     const {WatchLaterList,setWatchLaterList} = useContext(WatchLaterContext);
                 
    const titleRobot = "Mr.robot";
    const titleScarface="Scarface";
    const titleDjango = "Django";
    const titleBlueStreak = "bluestreak";

    return(       
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
                    saveWatchLaterInDb={useSaveMovieInWatchLaterDB}
                    status={true}
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
                    saveWatchLaterInDb={useSaveMovieInWatchLaterDB}
                    status={true}
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
                    saveWatchLaterInDb={useSaveMovieInWatchLaterDB}
                    status={true}
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
                        saveWatchLaterInDb={useSaveMovieInWatchLaterDB}
                        status={true}
                        // button={'Watchlater'}
                        />
            </Carousel>


            
        </div>

    )
    }
